(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{485:function(t,e,r){"use strict";r.r(e);var n=r(2),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("tidb")]),t._v(" "),r("p",[t._v("pingcap开源的分布式数据库，支持OLTP和OLAP，即兼顾传统关系型数据库mysql的频繁增删改查和事务处理，也兼顾类似Hive、clickhouse实时大IO查询的分析操作")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://dev-tang.com/post/2018/03/tidb-install-and-use.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tidb单节点安装操作"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("tidb集群主要分以下三个组件")]),t._v(" "),r("p",[t._v("tidb server：负责接收SQL请求，处理SQL相关逻辑，并通过pd找到存储计算所需要的tikv地址，与tikv交互获取数据，最终返回结果。")]),t._v(" "),r("p",[t._v("pd server：是整个集群的管理模块，其主要工作有三个，一是存储集群的元信息（某个key存储在哪个tikv节点）；二是对tikv集群进行调度和负载均衡（如数据迁移、raft）；三是分配全局唯一且递增的事务ID")]),t._v(" "),r("p",[t._v("tikv server：复制存储数据，从外部看tikv是一个分布式的提供事务的key-value存储引擎，存储数据的基本单位是Region，每个region负责存储一个key range（从stratKey到endKey的左闭右开区间）的数据，每个tikv阶段会负责多个region。tikv使用raft协议作复制，保持数据的一致性和容灾。不同节点上的多个Regina构成一个raft group，数据在多个tikv之间负载均衡由pd调度，是以Regina为单位进行调度")])])}),[],!1,null,null,null);e.default=i.exports}}]);