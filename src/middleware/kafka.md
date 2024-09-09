---
 
date: 2024-08-22
category:
  - middleware
tag:
  - kafka
---
# kafka相关问题

### kafka如何保证消息不丢失

[进阶，Kafka 如何保证消息不丢失？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/459610418)

kafka有三次消息传递的过程：

#### producer发送数据给kafka broker

- producer端是直接与broker中的leader partition交互的，所以在producer端初始化中就需要partitioner分区器总kafka集群中获取到相关·topic对应的leader partition的元数据
- 待获取到leader parttition的元数据后直接将消息发送过去
- kafka broker对应的leader parttition收到消息会先写入page Cache，定时刷盘进行持久化（顺序写入磁盘）
- follower parttition拉起leader parttition的消息并保持同leader parttition数据一致，待消息拉取完毕后需要给leader parttition回复ack确认消息
- 待kafka leader与follower parttition同步完数据并收到所有ISR中的replica副本的ack后，leader parttition会给producer回复ack确认消息

> Producer 端为了提升发送效率，减少IO操作，发送数据的时候是将多个请求合并成一个个 **RecordBatch**，并将其封装转换成 **Request** 请求「**异步**」将数据发送出去，**所以 Producer 端消息丢失更多是因为消息根本就没有发送到 Kafka Broker 端**。

##### Producer 端也可以通过配置来确认消息是否生产成功

- `request.required.acks` 为0表示只要发送成功就认为成功，并不进行消息接收是否成功的ack确认。如果发生网络抖动， Producer 端并不会校验 ack，消息就会丢失
- `request.required.acks`为1表示当leader parttition接收成功时进行ack确认即表示成功，只要leader parttition存活就可以保证不丢失，保证了吞吐量。如果 Leader Partition 异常 Crash 掉了， Follower Partition 还未同步完数据且没有 ACK，这时就会丢数据。
- `request.required,acks`为-1表示所有的leader parttition和follower parttition都接收成功时进行ack确认即表示成功，可以最大限度的保证消息不丢失。如果当 ISR 中只剩下 Leader Partition 了, 这样就变成 acks = 1 的情况了，leader挂了自然也就丢失消息了。

在 Kafka Producer 端的 acks 默认配置为1，默认级别是 at least once 语义, 并不能保证 exactly once 语义。



#### kafka broker将消息进行同步并进行持久化数据

> kafka broker为了提高吞吐量和性能，接收到数据采用的是先建数据存储到page cache中，至于什么时候建Cache中的数据刷盘是由操作系统自己的调度策略或主动调用fsync命令进行强制刷盘，如果在未刷盘之前broker Crash掉，且选举了一个offset落后于leader的follower作为新的leader，那么落后的消息数据就会丢失。

​		由于kafka并没有提供同步刷盘的方式，所以单从单个broker来看还是有可能丢失数据的，但是kafka通过多parttition和多replica机制，最大限度的保证数据不丢失。

- `unclean.keader.election.enable`，该参数表示当有follower的数据落后leader，一旦他被选举为新leader时，数据要不要和分区的做对比，选取最新的数据。
- `replication.factor`，该参数表示分区副本的个数，建议配置>= 3，这样如果leader副本挂了，follower副本可以选举新的leader副本句许提供服务
- `min.insync.replicas`,该参数表示消息至少要被写入成功到 ISR 多少个副本才算**"已提交"，**建议设置`min.insync.replicas > 1`这样才可以提升消息持久性，保证数据不丢失。



#### consumer从kafka broker将消息拉取并进行消费

- consumer拉取数据之前跟producer发送数据一样，需要通过订阅关系获取到集群元数据，找到相关topic对应的leader parttition的元数据

- 然后consumer通过pull模式主动的去kafka集群中拉取消息

- 在这个过程中，有个消费组的概念，多个consumer可以组成一个消费组即consumer group，每个消费组都有一个group id，同一个consumer group中的consumer可以消费同一个topic下不同分区的数据，但是不会出现多个consumer去消费同一个分区的数据

- 拉取到消息后进行业务逻辑处理，待处理完毕后，会进行ack确认，即提交offset消费位移进度记录

- 最后offset会被保存到kafka broker集群中的__consumer_offsets这个topic中，且每个consumer保存自己的offset进度

  

### kafka如何保证消息不重复消费

> 1、让生产者发送每条数据的时候，里面加一个全局唯一的 id，类似订单 id 之类的东西，然后你这里消费到了之后，先根据这个 id 去比如 Redis 里查一下，之前消费过吗？如果没有消费过，你就处理，然后这个 id 写 Redis。如果消费过了，那你就别处理了，保证别重复处理相同的消息即可
>
> 2、比如基于数据库的唯一键来保证重复数据不会重复插入多条。因为有唯一键约束了，重复数据插入只会报错，不会导致数据库中出现脏数据



### kafka如何保证消息有序

topic只有一个partition

不同id走不同parttition，消费端固定消费指定parttition

