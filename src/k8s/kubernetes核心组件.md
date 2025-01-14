---
 
date: 2024-08-22
category:
  - planlearn
tag:
  - kubernetes
---
# kubernetes核心组件
kube-apiserver
提供了 Kubernetes 各类资源对象（Pod、RC、Service 等）的增删改查及 watch 等 HTTP REST 接口，是整个系统的管理入口。

kube-controller-manager
作为集群内部的管理控制中心，负责集群内的 Node、Pod 副本、服务端点（Endpoint）、命名空间（Namespace）、服务账号（ServiceAccount）、资源定额（ResourceQuota）等对象管理。

kube-scheduler
集群调度器，提供了策略丰富，弹性拓扑能力。调度实现专注在业务可用性、性能和容量等能力上。

kube-proxy
提供南北向流量负载和服务发现的反向代理。

kubelet
是工作节点的管理 Pod 的控制程序，专门来调度启动 Pod 容器组。

etcd
是集群数据集中存储的分布式键值服务，用来存储 Kubernetes 集群中所有数据和状态的数据库。

cni-plugins
容器网络工作组维护的标准网络驱动如 fannel、ptp、host-local、portmap、tuning、vlan、sample、dhcp、ipvlan、macvlan、loopback、bridge 等网络插件供业务需求使用。这层 Overlay 网络只能包含一层，无法多层网络的互联互通

runc
运行单个容器的容器运行时进程，遵循 OCI（开放容器标准）。

cri-o
容器运行时管理进程，类似 Docker 管理工具 containerd，国内业界普遍使用 containerd。





![image-20221215170436343](/Users/clsld/Library/Application Support/typora-user-images/image-20221215170436343.png)









Kubernetes 集群设计了 2 层网络，第一层是服务层网络，第二层是 Pod 网络。Pod 网络可以简单地理解为东西向容器网络，和常见的 Docker 容器网络是一致的设计。服务层网络是 Kubernetes 对外暴露服务的网络，简单地可以理解为南北向容器网络。
