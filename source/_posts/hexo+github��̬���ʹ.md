title: hexo+github静态博客搭建
date: 2014-09-05 09:59:29
tags: [hexo,nodejs,blog,github]
---
## 前期准备工作
### github
必须要有github账号，建立类似username.github.io的repository仓储，然后通过github导航的github pages的一步步教程就可以实现初步的网页啦。后面你自己写的所有blog都会存储在这儿。

### nodejshexo
由于hexo框架是一个nodejs写的框架，熟悉nodejs是非常必要，对于执行命令和排查错误都有帮助。

### hexo
[hexo官方网站](http://hexo.io/)， [官方github地址](https://github.com/hexojs/hexo)， 上面有很多主题和插件可以选择，当后面博客自定义化的时候需要用到他们的。如果觉得不过瘾的话，就看看hexo框架实现的代码逻辑。

### travis
[Travis](http://travis-ci.org),是一个针对github免费的持续集成服务，后面需要借此“神器”来自动化发布文章，这样只要你将文章push 到 github上，就一切都不用管了，他会帮你做好后面的一切事情。

<!--more-->

## 写博客
准备工作做好了，就需要不断折腾hexo，这这期间可能需要不断询问google，百度或者[官方的帮助文档](http://hexo.io/docs/permalinks.html)，反正奇怪的事情都很多，碰到的如果自己解决不了，找他们是肯定没有错误的。

### 博客教程
我也自己在网上不断搜寻资料，不断在本地折腾才搞起来的，自己感觉下面几个网站不错。
> [zipperary hexo教程](http://zipperary.com/tags/hexo/)，从头介绍hexo的博客搭建，非常有料。
> [github域名之谈](http://yanping.me/cn/blog/2011/12/04/github-pages-domain/), github绑定自己域名的经验之谈，作者从摸索到最后得出结论出来的思考历程
> [travis脚本配置发布](https://github.com/jkeylu/test-hexo-on-travis-ci/blob/master/.travis.yml), 刚才谈到travis来自动发布文章，这里是如何配置相关脚本的例子


### 发布
按照上面的教程配置好所有一切之后，就可以将文章push到github上，然后就可以静等文章发布了，再在浏览器上访问啦。
> [ibruce hexo博客样例](http://ibruce.info/)