# k8s 监控

kubeadm join 192.168.64.11:6443 --token 8t5yyu.v21j2vcjitjxhb4u \
--discovery-token-ca-cert-hash sha256:76e6565509b76c16874c27f157864fcd95a53d88fb9f00dd9ea2aeb7c7e31858





## Prometheus

### 是什么？

一个开源的监控和报警工具，其工作原理是定期从各种目标（应用程序、容器、操作系统、数据库）中抓取指标数据储存在本地数据库中，提供查询和报警功能。使得 Prometheus 适用于云原生环境和容器化应用程序的监控。

在早期的版本中 Kubernetes 提供了 heapster、influxDB、grafana 的组合来监控系统，在现在的版本中已经移除掉了 heapster，现在更加流行的监控工具是 [Prometheus](https://prometheus.io/)

Prometheus 由多个组件组成，但是其中有些组件是可选的：

- `Prometheus Server`：用于抓取指标、存储时间序列数据
- `exporter`：暴露指标让任务来抓
- `pushgateway`：push 的方式将指标数据推送到该网关
- `alertmanager`：处理报警的报警组件 `adhoc`：用于数据查询

### promql

Prometheus 通过指标名称（metrics name）以及对应的一组标签（label）唯一定义一条时间序列。指标名称反映了监控样本的基本标识，而 label 则在这个基本特征上为采集到的数据提供了多种特征维度。用户可以基于这些特征维度过滤、聚合、统计从而产生新的计算后的一条时间序列。

`PromQL` 是 Prometheus 内置的数据查询语言，其提供对时间序列数据丰富的查询，聚合以及逻辑运算能力的支持。并且被广泛应用在 Prometheus 的日常应用当中，包括对数据查询、可视化、告警处理。



### Altermanager

Alertmanager 主要用于接收 Prometheus 发送的告警信息，它支持丰富的告警通知渠道，而且很容易做到告警信息进行去重，降噪，分组等，是一款前卫的告警通知系统。

通过在 Prometheus 中定义告警规则，Prometheus会周期性的对告警规则进行计算，如果满足告警触发条件就会向Alertmanager 发送告警信息。



## grafana

### 是什么?

主要作用是帮助用户将监控可视化，从而更容易理解应用程序和系统的性能、健康情况趋势。提供有好的界面可以让用户创建监控仪表盘，用于监控和分析数据。当与 Prometheus 等数据源集成时，grafana可以展示 Prometheus 采集到的数据。Prometheus 的图表功能相对较弱，所以一般情况下我们会一个第三方的工具Grafana来展示这些数据。

Grafana 是一个可视化面板，有着非常漂亮的图表和布局展示，功能齐全的度量仪表盘和图形编辑器，支持 Graphite、zabbix、InfluxDB、Prometheus、OpenTSDB、Elasticsearch 等作为数据源，比 Prometheus 自带的图表展示功能强大太多，更加灵活，有丰富的插件，功能更加强大。