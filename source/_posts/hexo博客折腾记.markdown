title: hexo博客折腾记
date: 2014-09-06 23:20:39
tags: [hexo]
---

自从把hexo的博客和travis建立起好后，就开始折腾这个博客的域名和个性化选项。

## 域名
域名可以参照官方文档，建立CNAME文件和对应的域名CNAME注册后，等待一段时间就可以生效了。


##个性化选项
### 首页导航nav
要不了这么多的导航菜单，需要删除掉无关的导航菜单，需要删除掉。这个就是从主题的.config.yml文件入手即可。
``` yaml
menu:
  首页/Home: /
  归档/Archives: /archives
  关于/About: /about
```
从中删除掉无关的内容即可。


<!--more-->

### 主题背景
1. 选择winterland这个主题主要是觉得比较简洁，有棱有角的，比较适合。但是背景是动态的雪花，虽然比较酷，不过不符合简洁的风格，所以就想着修改为单张图片。
一说到图片，既不会自己绘制，就只能上网上找图库了。找了几个网站自己感觉比较合适。
+ [懒人图库](http://www.lanrentuku.com/bg/p2.html)
+ [站长素材-背景图片](http://sc.chinaz.com/tupian/beijingtupian_34.html)
找一张合适的图片即可。

2. 选择图片后，就需要放在主体的背景中了。这个就需要使用css了，还得看你使用那个图库的图片，设置css的地方是layout.styl文件。
+ 如果是懒人图库，因为是部分图片，就可以了设置为repeat
``` css
  background-image url('background.jpg')
  background-repeat repeat
```
+ 如果是站长素材，其图片是完整的，就需要使用css 额外设置了。
``` css
  background-image url('');
  background-repeat no-repeat
  background-size cover
```

其他折腾的地方就后续再加入吧。

## 参考资料
[CSS3实践之路(三):颜色(Color)和背景(Backgroud)](http://www.cnblogs.com/Wenwang/archive/2011/11/06/2235928.html)