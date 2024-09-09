---
 
date: 2024-08-22
category:
  - planlearn
tag:
  - multipass
---
# multipass 安装部署k8s集群

## multipass 初始化虚拟机
```shell
multipass launch --name k8s-master --cpus 2 --mem 4096M --disk 10G
multipass launch --name k8s-node01 --cpus 2 --mem 2048M --disk 10G
```
## 环境初始化
以 k8s-master为例，k8s-node01与k8s-node02操作相同
sudo apt install -y selinux-utils
setenforce 0

systemctl enable ssh.service
sudo service sshd restart


Debian/ubuntu
apt-get update && apt-get install -y apt-transport-https
curl -fsSL https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/deb/Release.key |
    gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/deb/ /" |
    tee /etc/apt/sources.list.d/kubernetes.list
apt-get update
apt-get install -y kubelet kubeadm kubectl

Centos
cat <<EOF | tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/rpm/
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes-new/core/stable/v1.28/rpm/repodata/repomd.xml.key
EOF
setenforce 0
yum install -y kubelet kubeadm kubectl
systemctl enable kubelet && systemctl start kubelet
