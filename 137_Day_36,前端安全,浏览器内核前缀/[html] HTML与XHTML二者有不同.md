### XHTML 与 HTML的差异
> 1. [[XHTML]] 与 [[HTML 4.01]] 标准没有太多的不同。
> 2. [[XHTML]] 元素必须被正确的嵌套。
> 3. [[XHTML]] 元素必须被关闭。
> 4. [[XHTML]] 元素标签名必须用小写字母。
> 5. [[XHTML]] 文档中必须有根标签

**1.XHTML 元素必须被正确地嵌套**
在 HTML 中，某些元素可以像这样彼此不正确地嵌套：
```html
<b><i>This text is bold and italic</b></i>
```
在 XHTML 中，所有的元素必须像这样彼此正确地嵌套：
```html
<b><i>This text is bold and italic</i></b>
```

**2.XHTML 元素必须被关闭**
错误：
```html
<p>This is a paragraph
<p>This is another paragraph
```
正确：
```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```
空标签也必须被关闭:
```html
<br> --- <br />
<hr> --- <hr />
<img src="xxx" alt="Happy"> --- <img src="xxx" alt="Happy"/>
```

**3.XHTML 元素必须小写**
```html
<html></html> // ok
<HTML></HTML> // err
```

**4.XHTML 文档必须拥有一个根元素**
```html
<html>
  <head> ... </head>
  <body> ... </body>
</html>
```