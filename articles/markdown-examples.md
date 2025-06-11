# 安装前，添加docker stable标准库yum源

#### 官方源

```
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

//如果没有yum-config-manager此命令，安装：yum -y install yum-utils
```


#### 国内源

```
yum-config-manager \
--add-repo \
https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## 安装docker-ce
https://www.jianshu.com/p/b008ba7654d8


## 调整docker配置文件
> /etc/docker/daemon.json(Centos7.5为例)

```json
{
// 更改Docker镜像地址(国内源)
// DaoCloud推出的Docker加速器，超快
"registry-mirrors":  ["https://xx.com"],
// 添加docker日志大小限制
"log-driver":"json-file",
"log-opts":{"max-size":"500m", "max-file":"3"},
// 修改镜像存储位置
"data-root": "/data/docker",
// 设置代理用于 pull
"proxies": {
    "http-proxy": "http://192.168.100.18:7865",
    "https-proxy": "http://192.168.100.18:7865"
  }
}
```
* DockerHub 国内加速镜像列表：
https://github.com/dongyubin/DockerHub?tab=readme-ov-file

## 升级docker
> 升级后需要重启docker

```bash
yum update docker-ce
yum update docker-ce-cli

# 查看版本
docker -v
docker info
```
