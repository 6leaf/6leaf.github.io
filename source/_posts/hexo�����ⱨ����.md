title: hexo换主题报错解决
date: 2014-09-05 10:20:39
tags: [hexo,theme]
---

### 报错错误

> [error] { name: 'HexoError',
  reason: 'incomplete explicit mapping pair; a key node is missed',
  mark:
   { name: null,
     buffer: 'categories: Categories\nsearch: Search\ntags: Tags\ntagcloud: Tag Cloud\ntweets: Tweets\nprev: Prev\nnext:
 Next\ncomment: Comments\narchive_a: Archives\narchive_b: Archives: %s\npage: Page %d\nrecent_posts: Recent Posts\ndescr
iption: Description\nread_more: Read More\n\u0000',
     position: 163,
     line: 9,
     column: 19 },
  message: 'Process failed: languages/default.yml',
  domain:
   { domain: null,
     _events: { error: [Function] },
     _maxListeners: 10,
     members: [ [Object] ] },
  domainThrown: true,
  stack: undefined }
  
### 解决的办法
> YAML parser was changed in Hexo 2.8. You have to wrap strings like this with quotation marks.
> archive_b: Archives: %s => archive_b: "Archives: %s" 类似这样写的都必须要加引号

特此记录一笔。
