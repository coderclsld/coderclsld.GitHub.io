# beego



## beego 入门

### bee 工具

bee 和大部分的框架一样，具有生成代码、文件、项目等等作用

```shell
bee new
命令是新建一个 Web 项目，我们在命令行下执行 bee new <项目名> 就可以创建一个新的项目

bee api
上面的 new 命令是用来新建 Web 项目，不过很多用户使用 beego 来开发 API 应用

bee run
bee run 命令是监控 beego 的项目，通过 fsnotify监控文件系统

bee pack
pack 目录用来发布应用的时候打包，会把项目打包成 zip 包，这样我们部署的时候直接把打包之后的项目上传

bee generate
这个命令是用来自动化的生成代码的，包含了从数据库一键生成 model，还包含了 scaffold 的

bee migrate
这个命令是应用的数据库迁移命令，主要是用来每次应用升级，降级的SQL管理。

bee dockerize
这个命令可以通过生成Dockerfile文件来实现docker化你的应用。

```



### 项目目录

```shell
├── conf
│   └── app.conf
├── controllers
│   ├── admin
│   └── default.go
├── main.go
├── models
│   └── models.go
├── static
│   ├── css
│   ├── ico
│   ├── img
│   └── js
└── views
    ├── admin
    └── index.tpl
```

当我们在使用命令生成 api 项目的时候指定数据库连接 conn 时，bee 就能够根据你的数据库表结构生成模型和 controller

 M（models 目录）、V（views 目录）和 C（controllers 目录）的结构， main.go 是入口文件。



### 快速开始

#### 下载 bee 工具

` go get github.com/beego/bee`安装完之后，bee 可执行文件默认存放在`$GOPATH/bin`里面





