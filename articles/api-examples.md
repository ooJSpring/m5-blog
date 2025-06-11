---
outline: deep
---

# 名词解释：
1. gitlab-ci/cd 是调度服务。
2. gitlab-runner 是真正构建者，最好独立服务器安装。
3. gitlab-runner executor常用有：docker、shell。


## docker in docker(dind)的方式

1. docker in docker(dind) 和宿主机完全独立的docker进程，配置比较麻烦。
2. docker outside of docker(dood) 和宿主机共用docker进程。

## ci

在ci容器里构建docker image时，会用到宿主机上的docker命令，而dood有很大的安全问题(可以直接操控host的docker 删除修改等)，所以runner最好在一个vm隔离环境安装，构建好docker image后通过docker push推送到私有仓库或导出tar ssh发送到部署服务器。

1. ci buid阶段clone maven编译打包代码，生成build docker image。
2. ci deploy阶段：推送image到私有仓库或导出image tar ssh发送到部署服务器，触发ssh服务器部署。
3. 可通过Vagrant创建vm：centos安装Virtualbox、Vagrant。
4. 可通过Ansible部署工具部署应用。

 
## .gitlab-ci.yml说明

#### 常用预置变量
```bash
# 当前构建的job ID变量
$CI_JOB_ID= 1
# 当前构建的job名称
$CI_JOB_NAME= "build_dev"

# 构建项目的ID
$CI_PROJECT_ID= 1
# 构建项目的名称
$CI_PROJECT_NAME= "cashier"

# 构建项目的分支名
$CI_COMMIT_REF_NAME= "release/v1.1.0"
# 构建项目的分支名(把特殊符替换为“-”，比如 “.”，“/”)
$CI_COMMIT_REF_SLUG= "release-v1-1-0"

# 构建项目所在的组名
$CI_PROJECT_NAMESPACE= "web-frontend"
# 构建项目的全名称（含项目组名/项目名）
$CI_PROJECT_PATH= "web-frontend/cashier"
# 构建项目的全名称（含项目组名-项目名，把特殊符替换为“-”，比如 “.”，“/”）
$CI_PROJECT_PATH_SLUG= "web-frontend-cashier"
```

查看所有预置变量：
```yml
job_name
    script:
        - export
```