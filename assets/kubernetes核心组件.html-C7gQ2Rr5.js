import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as r,a as o}from"./app-DevuHzse.js";const n={},a=o('<h1 id="kubernetes核心组件" tabindex="-1"><a class="header-anchor" href="#kubernetes核心组件"><span>kubernetes核心组件</span></a></h1><p>kube-apiserver 提供了 Kubernetes 各类资源对象（Pod、RC、Service 等）的增删改查及 watch 等 HTTP REST 接口，是整个系统的管理入口。</p><p>kube-controller-manager 作为集群内部的管理控制中心，负责集群内的 Node、Pod 副本、服务端点（Endpoint）、命名空间（Namespace）、服务账号（ServiceAccount）、资源定额（ResourceQuota）等对象管理。</p><p>kube-scheduler 集群调度器，提供了策略丰富，弹性拓扑能力。调度实现专注在业务可用性、性能和容量等能力上。</p><p>kube-proxy 提供南北向流量负载和服务发现的反向代理。</p><p>kubelet 是工作节点的管理 Pod 的控制程序，专门来调度启动 Pod 容器组。</p><p>etcd 是集群数据集中存储的分布式键值服务，用来存储 Kubernetes 集群中所有数据和状态的数据库。</p><p>cni-plugins 容器网络工作组维护的标准网络驱动如 fannel、ptp、host-local、portmap、tuning、vlan、sample、dhcp、ipvlan、macvlan、loopback、bridge 等网络插件供业务需求使用。这层 Overlay 网络只能包含一层，无法多层网络的互联互通</p><p>runc 运行单个容器的容器运行时进程，遵循 OCI（开放容器标准）。</p><p>cri-o 容器运行时管理进程，类似 Docker 管理工具 containerd，国内业界普遍使用 containerd。</p><p>![image-20221215170436343](/Users/clsld/Library/Application Support/typora-user-images/image-20221215170436343.png)</p><p>Kubernetes 集群设计了 2 层网络，第一层是服务层网络，第二层是 Pod 网络。Pod 网络可以简单地理解为东西向容器网络，和常见的 Docker 容器网络是一致的设计。服务层网络是 Kubernetes 对外暴露服务的网络，简单地可以理解为南北向容器网络。</p>',12),p=[a];function s(c,i){return r(),t("div",null,p)}const d=e(n,[["render",s],["__file","kubernetes核心组件.html.vue"]]),m=JSON.parse(`{"path":"/posts/planlearn/kubernetes%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6.html","title":"kubernetes核心组件","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2024-08-22T00:00:00.000Z","category":["planlearn"],"tag":["kubernetes"],"description":"kubernetes核心组件 kube-apiserver 提供了 Kubernetes 各类资源对象（Pod、RC、Service 等）的增删改查及 watch 等 HTTP REST 接口，是整个系统的管理入口。 kube-controller-manager 作为集群内部的管理控制中心，负责集群内的 Node、Pod 副本、服务端点（Endpoi...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/planlearn/kubernetes%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Clsld 's blog"}],["meta",{"property":"og:title","content":"kubernetes核心组件"}],["meta",{"property":"og:description","content":"kubernetes核心组件 kube-apiserver 提供了 Kubernetes 各类资源对象（Pod、RC、Service 等）的增删改查及 watch 等 HTTP REST 接口，是整个系统的管理入口。 kube-controller-manager 作为集群内部的管理控制中心，负责集群内的 Node、Pod 副本、服务端点（Endpoi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/Users/clsld/Library/Application Support/typora-user-images/image-20221215170436343.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-22T16:58:49.000Z"}],["meta",{"property":"article:author","content":"clsld"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:published_time","content":"2024-08-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-22T16:58:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernetes核心组件\\",\\"image\\":[\\"https://mister-hope.github.io/Users/clsld/Library/Application Support/typora-user-images/image-20221215170436343.png\\"],\\"datePublished\\":\\"2024-08-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-22T16:58:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"clsld\\",\\"url\\":\\"https://github.com/coderclsld\\"}]}"]]},"headers":[],"git":{"createdTime":1675147913000,"updatedTime":1724345929000,"contributors":[{"name":"clsld","email":"807686672@qq.com","commits":1}]},"readingTime":{"minutes":1.49,"words":446},"filePathRelative":"posts/planlearn/kubernetes核心组件.md","localizedDate":"August 22, 2024","excerpt":"\\n<p>kube-apiserver\\n提供了 Kubernetes 各类资源对象（Pod、RC、Service 等）的增删改查及 watch 等 HTTP REST 接口，是整个系统的管理入口。</p>\\n<p>kube-controller-manager\\n作为集群内部的管理控制中心，负责集群内的 Node、Pod 副本、服务端点（Endpoint）、命名空间（Namespace）、服务账号（ServiceAccount）、资源定额（ResourceQuota）等对象管理。</p>\\n<p>kube-scheduler\\n集群调度器，提供了策略丰富，弹性拓扑能力。调度实现专注在业务可用性、性能和容量等能力上。</p>","autoDesc":true}`);export{d as comp,m as data};
