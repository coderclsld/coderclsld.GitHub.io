# helm

没有使用Helm之前，在Kubernetes部署应用，我们要依次部署deployment、service等，步骤比较繁琐。况且随着很多项目微服务化，复杂的应用在容器中部署以及管理显得较为复杂。

helm通过打包的方式，支持发布的版本管理和控制，很大程度上简化了Kubernetes应用的部署和管理。

Helm本质就是让k8s的应用管理（Deployment、Service等）可配置，能动态生成。通过动态生成K8S资源清单文件（deployment.yaml、service.yaml）。然后kubectl自动调用K8S资源部署。



