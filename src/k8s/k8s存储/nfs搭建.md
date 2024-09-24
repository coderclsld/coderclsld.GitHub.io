# nfs搭建

## nfs环境搭建

### 安装nfs

```shell
#服务器节点和客户端
sudo apt install nfs-kernel-server nfs-common 
#客户端
sudo apt install nfs-common 

```

### 创建共享目录

```shell
sudo mkdir -p /nfs
sudo chmod 777 /nfs
```

### 修改配置文件

```shell
sudo vim /etc/exports
#加入下面内容（*表示允许所有网段访问）
/nfs *(rw,sync,no_root_squash)
```

### 重启 NFS 服务并检查

```shell
sudo systemctl restart nfs-kernel-server
sudo systemctl enable nfs-kernel-server
sudo showmount -e localhost
```

### 客户端挂载

```shell
sudo mount 192.168.64.13:/nfs /nfs
```

### 卸载

```shell
umount /nfs
```



k8s使用nfs