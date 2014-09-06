title: win7+cygwin github sshkey生成方法
date: 2014-09-06 10:20:39
tags: [github,ssh,cygwin]

---

## ssh key
github有两种方式访问，一种是http，另外一种是ssh，使用ssh时候想偷懒不想输入密码。因此就有ssh key这个做法了。

### 环境准备
由于win7机器上安装有cygwin，照[Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys#platform-linux)文档指定后，既可以参照windows平台又可以参照linux平台，不过很多命令是一样的。

+ windows平台和linux平台的生成id_rsa/id_rsa.pub文件位置不同
+ windows平台和linux平台ssh agent命令不一致，可以参照文档的命令使用
+ windows平台和linux平台的剪贴命令不一样，windows clip命令简单，cygwin装xclip还是很麻烦的
+ 其他的就是等待所有的ok就行了，照着文档测试是否ok

## 参考资料
1. [Generating SSH Keys For Windows/Linux Platform ](https://help.github.com/articles/generating-ssh-keys#platform-linux)




