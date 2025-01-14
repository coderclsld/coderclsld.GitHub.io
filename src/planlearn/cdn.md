---
 
date: 2024-08-22
category:
  - planlearn
tag:
  - cdn
---
# cdn
### what is cdn?
内容分发网络,网络中还存在许多的路由器、网关，数据每经过一个节点，都要停顿一下，在二层、 三层解析转发，这也会消耗一定的时间，带来延迟。最终结果就是，如果仅用现有的 HTTP 传输方式，大多数网站都会访问速度缓慢、用户体 验糟糕。放到全球来看，物理距离非常大，你在北京，访问旧金山的网站，要跨越半个地球，地理位置距离远、运营商网络、路由转发的影响就会成倍增加。
CDN构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。
CDN 的关键技术主要有内容存储和分发技术,CDN就是根据用户位置分配最近的资源,用户在上网的时候不用直接访问源站，而是访问离他“最近的”一个CDN节点,其实就是缓存了源站内容的代理服务器。
在 CDN 领域里，“内容”其实就是 HTTP 协议里的“静态资源”，比如超文本、图片、视频、应用程序安装包等等。

### CDN工作流程
在没有CDN的情况下，用户向浏览器输入www.web.com这个域名，客户端访问本地DNS服务器的时候，如果本地DNS服务器有缓存，则返回网站的地址；如果没有，递归查询到网站的权威DNS服务器，这个权威DNS服务器是负责web.com的，它会返回网站的IP地址。
本地DNS服务器缓存下IP 地址，将IP地址返回，然后客户端直接访问这个IP地址，就访问到了这个网站。然而有了 CDN之后，情况发生了变化。
在web.com这个权威DNS服务器上，会设置一个CNAME别名，指向另外一个域名www.web.cdn.com，返回给本地DNS服务器。
当本地DNS服务器拿到这个新的域名时，需要继续解析这个新的域名。这个时候，再访问的就不是 web.com 的权威DNS服务器了，而是web.cdn.com的权威DNS服务器，这是CDN自己的权威 DNS 服务器。在这个服务器上，还是会设置一个CNAME，指向另外一个域名，也即CDN网络的全局负载均衡器。
接下来，本地DNS服务器去请求CDN的全局负载均衡器解析域名，全局负载均衡器会为用户选择一台合适的缓存服务器提供服务，选择的依据包括：
根据用户IP地址，判断哪一台服务器距用户最近；
用户所处的运营商；
根据用户所请求的URL中携带的内容名称，判断哪一台服务器上有用户所需的内容；
查询各个服务器当前的负载情况，判断哪一台服务器尚有服务能力。
基于以上这些条件，进行综合分析之后，全局负载均衡器会返回一台缓存服务器的IP地址。
本地DNS服务器缓存这个IP地址，然后将IP返回给客户端，客户端去访问这个边缘节点，下载资源。 缓存服务器响应用户请求，将用户所需内容传送到用户终端。如果这台缓存服务器上并没有用户想要的内容，那么这台服务器就要向它的上一级缓存服务器请求内容，直至追溯到网站的源服务器将内容拉到本地。

### 回源率和命中率
缓存系统是 CDN的另一个关键组成部分，缓存系统会有选择地缓存那些最常用的那些资源

其中有两个衡量CDN服务质量的指标：

回源率：缓存里没有，必须用代理的方式回源站取，回源次数与所有访问次数之比
缓存系统也可以划分出层次，分成一级缓存节点和二级缓存节点。一级缓存配置高一些，直连源站，二级缓存配置低一些，直连用户
回源的时候二级缓存只找一级缓存，一级缓存没有才回源站，可以有效地减少真正的回源

命中率：用户访问的资源恰好在缓存系统里，可以直接返回给用户，命中次数与所有访问次数之比
现在的商业 CDN命中率都在 90% 以上，相当于把源站的服务能力放大了 10 倍以上