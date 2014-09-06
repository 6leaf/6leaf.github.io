title: github token使用
date: 2014-09-06 18:20:39
tags: [github]

---

不太理解github token的使用方法,因此在travis自动化上传持续集成的结果后碰到了老是认证不通过的问题。


最终瞄准使用access token来使用，看官方的文档说是access token是和密码的功能是一样的，所以就这样写了。

``` bash
git push https://$GIT_NAME:$GH_TOKEN@github.com/$GIT_NAME/6leaf.github.io.git HEAD:master
```
才终于上传上去，看了一些资料真是没有讲清楚，也不知道真相到底是什么呀。

<!--more-->

## 参考资料
1. [Committing via travis ci failing](http://stackoverflow.com/questions/18027115/committing-via-travis-ci-failing)
2. [REQUESTING CREDENTIALS](http://git-scm.com/docs/gitcredentials.html)
3. [Automatically Publish Javadoc to GitHub Pages with Travis CI](http://benlimmer.com/2013/12/26/automatically-publish-javadoc-to-gh-pages-with-travis-ci/)
4. [Enabling https access to your GitHub repositories after enabling Two-Factor Authentication](http://blog.apericore.com/enabling-https-access-to-your-github-repositories-after-enabling-two-factor-authentication/)
5. [Pushing to a remote](https://help.github.com/articles/pushing-to-a-remote#what-can-i-push-to)
6. [Travis Configuring your build](http://docs.travis-ci.com/user/build-configuration/)



