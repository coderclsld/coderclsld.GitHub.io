# clickhouse



## 什么是列式存储

在传统行式数据库中，数据在数据库文件中都是按行存储的，在列式数据库中，数据式以列式进行存储的，所以列式数据库更适合olap场景。

oltp是online transaction processing,联机事务处理数据库，典型的数据库就是关系型数据库，oltp需要关注业务的增删改查、事务操作之间的最优解。遇到要对数据分析的场景就不占优势了。

olap是online analytical processing,联机分析处理数据库，一般用于大数据分析处理，这类数据库在事务处理上的能力比较弱但是在数据分析场景下很强大。

### 对比行式存储有什么优缺点

优点：

1. 对于分析数据可以在物理层面上对单行进行分析，而不像行式数据库，需要更多的磁盘IO进行某列数据的提取成临时表进行分析，可以大幅度减少磁盘IO。
2. 列式存储每一列的数据都在同一块存储块中，适合压缩和解压，可以大幅度降低存储容量。

缺点：

1. 自然是进行更新多列状态的时候，这些列都不是存储在一起，那么每更新一列都会比行式存储多出一次查询IO用于找到要更新的该列的存储头部。



## 如何处理大规模的数据查询

尽量少使用`select * from`,查询必要的列，因为*是查询所有的列，而列又存放在不同的地址上，即需要进行多次查询才能提取出所有的列，而如果只查询一列，和只以一列作为查询条件，只需要进行一次列的地址IO，随着列愈来愈的，`select *`会导致性能急剧下降。

ClickHouse是采用并行处理机制，即一个查询也会使用一半cpu去执行，在安装时会自动识别cpu核数，所以在发挥查询快的优势下，也带来了并发能力的不足。如果过多的查询数堆积达到max_concurrent_queries阈值，则会报出too many simultaneous queries异常，这也是ck的一种限流保护机制。所以日常使用过程中注意慢sql的排查，并发请求的控制是保证ck高可用的关键

## 如何处理大规模的数据插入

ClickHouse每次写入都会生成一个data part，如果每次写入一条或者少量的数据，那会造成ClickHouse内部有大量的data part（会给merge和查询造成很大的负担）。为了防止出现大量的data part，ClickHouse内部做了很多限制，这就是too many parts报错的内在原因。出现该错误，请增加写入的批量大小。如果无法调整批量大小，可以修改参数：`merge_tree.parts_to_throw_insert`，将参数的取值设置的大一些。

因ck会将批量数据直接落盘成小文件，高频写入会造成大量小文件生成与合并，影响查询性能。ClickHouse适合使用大batch、少数几个并发进行写入。多数情况下batch可以高达几万甚至几十万（取决于单行RowSize大小，一般按照每行100Byte进行评估）。官方建议每次写入不少于1000行的批量写入，或每秒不超过一个写入请求。

## 表引擎有什么不同

### mergeTree

#### 什么是MergeTree

**MergeTree 在写入一批数据时，数据总会以数据片段的形式写入磁盘，且数据片段不可修改。而为了避免数据片段过多，ClickHouse 会通过后台线程定期的合并这些数据片段，属于相同分区的数据片段会被合并成一个新的数据片段，这种数据片段往复合并的过程，正是 MergeTree 名称的由来。**

在生产环境中绝大部分场景都会使用此引擎，因为只有合并树系列的表引擎才支持主键索引、数据分区、数据副本、数据采集等特性。同时也只有此系列的表引擎支持alter相关操作。其中`MergeTree`作为家族中最为基础的表引擎，提供了主键索引、数据分区、数据副本和数据采集等基本能力，而家族中的其他表引擎则是在`MergeTree`的基础上各有所长。`ReplacingMergeTree`表引擎具有删除重复数据的特性，而`SummingMergeTree`表引擎则会按照排序键自动聚合数据，如果再给合并树系列的表加上`Replicated`前缀，又会得到一组支持数据副本的表引擎，如`ReplicatedMergeTree`,`ReplicatedReplacingMergeTree`,`ReplicatedSummingMergeTree`,`ReplicatedAggregatingMergeTree`等等。

```sql
CREATE TABLE [IF NOT EXISTS] [db_name.]table_name(
    name1 type [DEFAULT|MATERIALIZED|ALIAS expr],
    name2 type [DEFAULT|MATERIALIZED|ALIAS expr],
    ......
) ENGINE = MergeTree()
[PARTITION BY expr]
ORDER BY expr
[PRIMARY KEY expr]
[SAMPLE BY expr]
[SETTINGS name1=value1, name2=value2, ......]

```

PARTTION BY:分区键（选填），用于指定表数据以何种标准进行分区，分区键可以是单个字段也可以是多个字段组合，同时也支持列表达式即可以对列的数据通过表达式进行转换。如果不指定分区键，clickhouse会生成一个all的分区，合理的时候分区可以有效的减少查询是的数量。例如通过时间分区，按照天来进行分区，只有查找某一天的数据就可以直接从分区中查找即可。

ORDER BY:排序键（必填），用于指定在一个分区内数据以何种标准进行排序，排序键既可以是单个字段也可以是多个字段组合，如果是多个字段会先按照第一个字段排序，如果第一个字段有相同值，再按照第二个字段排序，以此类推。**在每个分区内，数据是按照排序键排好序的，但多个分区之间就没有这种关系了。**

PRIMARY KEY:主键（选题），什么后会按照主键字段生成一级索引，用于加速表查询。如果不指定那么主键默认和排序键相同即使用order by代替主键。**和其它关系型数据库不同，MergeTree 允许主键有重复数据（可以通过 ReplacingMergeTree 实现去重）**

SAMPLE KEY:抽样表达式（选题），用于声明数据以何种标准进行采样，如果声明了此配置项，那么主键（没有声明主键就order by中）的配置中也要声明同样的配置项。

SETTINGS:指定一些额外的配置参数（选题），以key=value的形式出现，key包括以下等参数：

```sql
index_granularity:索引颗粒度，默认值8192，clickhouse根据主键生成的索引实际上是稀疏索引默认情况下是每个8192行数据才生成一条索引。
min_compress_block_size：最小压缩的块大小，默认65536
index_granularity_bytes：每批次写入的数据体量大小，默认是10M
enbale_mixed_granularity_parts:表示是否开启自适应索引功能，默认开启
merge_with_ttl_timeout：提供了数据的ttl功能
storage_policy：多路储存
```

#### MergeTree分区合并

MergeTree的分区目录并不是在数据表被创建之后就存在的，而是在数据写入过程中被创建的。也就是说如果一张数据表没有任何数据，那么也不会有任何分区目录存在。MergeTree的分区目录伴随着每一批数据的写入，MergeTree都会生成一批新的分区目录。即便不同批次写入的数据属于相同分区，也会生成不同的分区目录。在之后的某个时刻（写入后的10～15分钟），ClickHouse会通过后台任务再将属于相同分区的多个目录合并成一个新的目录。





#### MergeTree的存储结构

##### 一级索引（稀疏索引）



##### 二级索引（跳数索引）

#### ttl

##### 在MergeTree中，可以为某个列字段或整张表设置TTL时间。若为列字段的TTL，当时间到期时，则会删除这一列的数据；若为表级别的TTL，当时间到期时，则会删除整张表的数据；若一张表同时设置了列级别和表级别的TTL，则会以先到期的为主。无论是列级别还是表级别的TTL，都需要依托于某个DateTime或Date类型的字段，通过对这个时间字段的INTERVAL操作，来描述TTL的过期时间，设置TTL过期时间的INTERVAL完整操作包括：SECOND、MINUTE、HOUR、DAY、WEEK、MONTH、QUARTER和YEAR。



### log

### Memory

### Kafka



## 搭建分布式要怎么做

### 原来是单体的，切换为多集群要怎么做

### 连接访问要怎么做，是有读写分离吗



## 备份怎么做

### 冷备、热备

### 增量备份

### 存储优化怎么做





## 集群监控





## 查询优化

### 性能分析

### 怎么进行索引利用

### 怎么进行实时分析

#### 流式数据插入

#### 实时聚合



