<<<<<<< HEAD
[css] span与span之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

```html
间隔是由于代码中的回车换行（空白节点）引起的。

<style>
    .wrap>span {
      background: red;
    }
</style>
<div class="wrap">
  <span>hello</span>
  <span>world</span>
</div>
上面代码中的span可以明显地看到有间隔，解这几种决办法：

去掉换行，将 span 写成一行 <span>hello</span><span>world</span>
父元素使用 flex 布局：.wrap {display: flex; flex-direction: row;}
父元素设置 font-size: 0;，span 子元素再设置字体大小 font-size: 16px;
span 子元素设置 float: left
=======
[css] span与span之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

```html
间隔是由于代码中的回车换行（空白节点）引起的。

<style>
    .wrap>span {
      background: red;
    }
</style>
<div class="wrap">
  <span>hello</span>
  <span>world</span>
</div>
上面代码中的span可以明显地看到有间隔，解这几种决办法：

去掉换行，将 span 写成一行 <span>hello</span><span>world</span>
父元素使用 flex 布局：.wrap {display: flex; flex-direction: row;}
父元素设置 font-size: 0;，span 子元素再设置字体大小 font-size: 16px;
span 子元素设置 float: left
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
```