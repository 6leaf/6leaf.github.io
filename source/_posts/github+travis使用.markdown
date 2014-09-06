title: github+travis使用
date: 2014-09-06 12:20:39
tags: [github,travis]

---

就是想使用travis跑github代码持续集成，从而可以自动化做一下额外的事情，比如这次就是说使用travis来发布hexo生成文件。

# github提交
## 手工提交
使用常用的git命令
```
    git clone
    git add --all
    git commit -a -m "update"
    git push
```
按照提示输入用户命名和密码就可以了。


<!--more-->


## travis自动化提交
使用github的账号登陆travis即可以同步所有的代码库目录，然后就可以开启持续集成CI。关键一步是配置文件.travis.yml。

### GitHub设置
在travis中CI过程中有一步骤是非常重要的，就是设置travis的环境变量。
和github相关的几个常量如下：
+ GIT_NAME
+ GIT_EMAIL
+ GH_TOKEN
这些信息都是travis在持续集成中必须要使用的信息，但是这些信息可能都是敏感的，为了防止这些敏感的数据能够安全，travis提供了加密数据的方式来保证。

### 从github获取token
需要从github中获取仓储的认证token，这样可以使用travis的自动化脚本来获取对应的github仓储库代码。

``` bash
curl -u 6leaf -d '{"scopes":["public_repo"],"note":"CI:6leaf.github.io"}' https://api.github.com/authorizations
```
执行以上命令后，会有如下的提示，输入github的密码后就可以获取到token了
```
Enter host password for user '6leaf':
{
  "id": 10938026,
  "url": "https://api.github.com/authorizations/10938026",
  "app": {
    "name": "CI:6leaf.github.io (API)",
    "url": "https://developer.github.com/v3/oauth_authorizations/",
    "client_id": "00000000000000000000"
  },
  "token": "abcabcabcabcabcabc",
  "note": "CI:6leaf.github.io",
  "note_url": null,
  "created_at": "2014-09-05T09:10:30Z",
  "updated_at": "2014-09-05T09:10:30Z",
  "scopes": [
    "public_repo"
  ]
}
```
将token保持下来就可以以备后面用。

### 使用travis生成加密的数据
由于travis是用ruby的语言脚本使用的，因此Windows系统要先使用[RubyInstaller](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p481-x64.exe?direct)安装ruby生成工具包，直至安装完毕。

使用ruby安装travis
```
$ gem install travis
```
安装完毕后，再执行下面命令
```
$ travis encrypt -r 6leaf/6leaf.github.io 'GIT_NAME="test" GIT_EMAIL=test@gmail.com GH_TOKEN=abcabcabcabcabcabc'
```
如果没有什么错误的话就可以生成如下的提示字符串
```
Please add the following to your .travis.yml file:
secure: "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"
Pro Tip: You can add it automatically by running with --add.
```
经过上面的几个步骤之后，就可以把涉及的几个环境变量加密在一串的字符串中。这些安全字符串只能被travis解析出来并处理。

粘贴上面得出来的安全字符串到.travis.yml文件中即可，类似如下的：
```
env:
  global:
  - secure: "<encrypted string>"
```

然后再脚本中类似加入手工的命令就可以自动化执行了。
``` bash
$ git add .
$ git commit -m "travis CI update"
$ git push origin <branch>
```

#参考资料
1. [Automated deployment to GitHub Pages](http://awestruct.org/auto-deploy-to-github-pages/)
2. [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)
3. [把Travis-ci的结果上传回Github](http://larrycaiyu.com/2012/11/06/publish-the-artifacts-inside-travis-ci-to-github.html)
4. [Travis Environment Variables](http://docs.travis-ci.com/user/environment-variables/)
5. [Travis Configuring your build](http://docs.travis-ci.com/user/build-configuration/#Secure-environment-variables)






