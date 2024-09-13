# k8s 存储





搞明白

​	storgeclass 是啥？

​	应用程序怎么持久化，有哪几种方式

​	MySQL、Prometheus 建议怎么存储

​	

## emptydir

### emptydir定义

当 pod 的存储方案为 emptydir 时，pod 启动会在 pod 所在的节点的磁盘空间开辟出一块空卷，最开始里面什么都没有，pod启动后产生的数据都会存放在这个空卷中。一旦pod 容器消失，摧毁，这个临时卷也会被销毁，一般来说 emptydir 的用途是用来充当临时存储空间，例如一些不需要持久化的 1 微服务，我们都可以用 emptydir 来做微服务 pod 的存储方案。

```yaml
# emptydir.yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: dev
---
apiVersion: v1
kind: Pod
metadata:
  name: test-emptydir
  namespace: dev
spec:
  containers:
  - image: nginx:1.20.0
    name: test-emptydir
    volumeMounts:
    - mountPath: /usr/share/nginx/html    #挂载到容器中的路径
      name: cache-volume
  volumes:
  - name: cache-volume
    emptyDir: {}   #指定存储方式为emptydir
```



## hostpath

### hostpath定义

hostpath 类型是映射宿主机文件系统中文件或者目录到 pod 里面，当 pod 漂移到其他node 节点时 pod 之前存储的数据不会跟着飘逸，不能跨节点去读取目录。

```yaml
#  hostpath.yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-hostpath
  namespace: dev
spec:
  containers:
  - name: test-hostpath
    image: nginx:1.20.0
    volumeMounts:
    - name: test-hostpath  # 取个名字
      mountPath: /usr/share/nginx/html   # 挂载到容器中的路径
  volumes:
  - name: test-hostpath    # 取个名字必须与上面volumeMounts中name的一致
    hostPath:
    # directory location on host
      path: /data            # node节点上宿主机的路径
    # this field is optional
      type: DirectoryOrCreate   # path的属性
```



## pv

### pv定义

persistent volume持久化存储数据卷，这个 aip 对主要定义一个可以持久化存储让宿主机能够访问到的目录，例如一个 nfs 类型的 pv

```yaml
apiVersion: v1
kind: PersistentVolume  # pv可以全局共享，不用指定命名空间
metadata:
  name: nfs
spec:
  storageClassName: manual 
  capacity:   # 容量
    storage: 1Gi   # pv可用的大小   
  accessModes:   # 访问模式
    - ReadWriteMany  #读写权限
  nfs:
    server: 10.244.1.4 # NFS服务器地址
    path: "/" # NFS的路径  
```

### PV的生命周期

总共四个阶段 :

Available（可用）—— 可用状态，尚未被 PVC 绑定。

Bound（已绑定）—— 绑定状态，已经与某个 PVC 绑定。

Released（已释放）—— 与之绑定的 PVC 已经被删除，但资源尚未被集群回收。

Failed（失败）—— 当删除 PVC 清理资源，自动回收卷时失败，所以处于故障状态

### PV的回收策略

通过PV定义中的persistentVolumeReclaimPolicy字段进行设置，可选

- Recycle：会清除数据，自动回收。
- Retain(默认)：需要手动清理回收。
- Delete：云存储专用的回收空间使用命令。

## pvc

### pvc定义

persisten volume claim持久化卷的申请，描述了需要 volume 的大小，可读写权限等等信息。

```yaml
apiVersion: v1
kind: PersistentVolumeClaim #需与使用pvc的pod在同一个namespace下
metadata:
  name: nfs
spec:
  accessModes: # 访问模式
    - ReadWriteMany   #读写权限
  storageClassName: manual
  resources:
    requests:
      storage: 1Gi # PVC允许申请的大小
```



而用户创建的 PVC 要真正被容器使用起来，就必须先和某个符合条件的 PV 进行绑定。

这里要检查的条件，包括两部分：

第一个条件，是 PV 和 PVC 的 spec 字段。比如，PV 的存储（storage）大小，就必须满足 PVC 的要求。

第二个条件，是 PV 和 PVC 的 storageClassName 字段需要相同。
PS: 也可以不使用storageClassName字段，通过PVC定义的 `accessModes` 读写权限，和`storage`定义的1G内存，PVC会自动找到符合这些配置的PV进行绑定。**一个PV被PVC绑定后，不能被别的PVC绑定。**



在成功地将 PVC 和 PV 进行绑定之后，Pod 就能够像使用 hostPath 等常规类型的 Volume 一样，在自己的 YAML 文件里声明使用这个 PVC 

```yaml
apiVersion: v1
kind: Pod   # 如果前面的PVC指定了命名空间这里必须指定与PVC一致的命名空间，否则PVC不可用
metadata:
  labels:
    role: web-frontend
spec:
  containers:
  - name: web
    image: nginx
    ports:
      - name: web
        containerPort: 80
    volumeMounts:
        - name: nfs  # 取个名字，与下面的volumes name 要一致
          mountPath: "/usr/share/nginx/html" # 容器中的路径
  volumes:
  - name: nfs #
    persistentVolumeClaim: 
      claimName: nfs   # 引用前面声明的PVC
```



## storgeclass

### strogeclass定义

storgeclass其实就是创建 pvd的模板，storgeclass 会定义pv的属性，比如存储类型，volume 大小等待；对定义 创建pv需要用到的存储插件比如 ceph 等等。

有了这两个信息后，k8s 就能够工具用户提交的 PVC 找到一个对于的 strogeclass，然后调用 strogeclass 声明的信息创建出 pv

StorageClass 对象的命名很重要，用户使用这个命名来请求生成一个特定的类。 当创建 StorageClass 对象时，管理员设置 StorageClass 对象的命名和其他参数，一旦创建了对象就不能再对其更新。

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass 
metadata:
  name: managed-nfs-storage #一旦创建，StorageClass名字不可更改
provisioner: nfs-storage   # 存储插件的名字,这里的名称要和provisioner配置文件中的环境变量PROVISIONER_NAME保持一致 
                           # 若为公有云，此处填写公有云存储插件的名，例：provisioner: kubernetes.io/aws-ebs
parameters:   #具体存储插件相关信息
  server: "10.16.216.221 " 
  path: "/nfs/data/k8s"
  readOnly: "false"
```

### 为什么要strogeclass

在一个大规模的 kubernetes 集群中，可能存在成千上万的 PVC，这就意味着运维人员必须实现创建出成千上万的 pv.否则新的 pod 就会因为 PVC 绑定不到pv而创建失败。

动态资源供应模式

通过 strogeclass 和 PVC 完成资源动态绑定（系统自动生成 pv），并供 pod 使用。

静态资源供应模式

即原本 pv 和 pvc的模式，需要自己手动创建一一对应的对象。

### strogeclass运行原理

要是用 strogeclass，就得安装对应的自动配置程序，比如我们存储后端使用的是nfs，那我们就需要使用到一个 nfs-client 的自动配置程序即（provisioner 配置器），这个程序是用我们配置好的 nfs 服务器来自动创建持久卷，也就是自动帮我们创建 pv。





## 



