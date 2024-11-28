# openHiTLS教程
openHiTLS是一款构建密码学安全能力的C/C++库，提供符合公开标准的密码学算法、TLS协议栈。
## 安装openHiTLS
#### 下载相关代码
- [openHiTLS下载地址](https://gitcode.com/openhitls)
- [libboundscheck下载地址](https://gitee.com/openeuler/libboundscheck.git)

需要将libboundscheck下载至openHiTLS/platform/Secure_C目录
#### 构建安装，在openHiTLS根路径下执行以下命令：
```sh
mkdir build
cd build
cmake ..
make && make install
```
## 在您的C/C++项目中集成openHiTLS
- 按照openHiTLS的API手册，在您的项目代码中调用openHiTLS提供的接口
- 将openHiTLS的头文件和库路径加入到您的项目依赖中，以gcc编译器为例，如下：
```sh
# 使用-I指定openHiTLS头文件所在路径，使用-L指定openHiTLS动态库所在路径
gcc application.c -lhitls_crypto -lhitls_tls -lhitls_bsl -lboundscheck -I 
<openHiTLS头文件安装路径> -L <openHiTLS动态库安装路径>
```
