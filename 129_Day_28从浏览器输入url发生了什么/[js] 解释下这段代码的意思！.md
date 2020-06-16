## 作用
**在你的Chrome浏览器的控制台中输入这段代码，你会发现不同HTML层都被使用不同的颜色添加了一个高亮的边框。是不是非常酷？但是，简单来说，这段代码只是首先获取了所有的页面元素，然后使用一个不同的颜色为它们添加了一个1px的轮廓**

``` js
// [js] 解释下这段代码的意思！.
[].forEach.call($$("*"), function(a) {
    a.style.outline = "1px solid #" +
        (~~(Math.random() * (1 << 24))).toString(16)
})

// 解释如下
(1) [].forEach.call() => 调用引用数组的forEach方法
(2) $$('*') => document.querySelectorAll('*')
(3) ~~a => parseInt(a)
(4) 1 << 24 => 对二进数1小数点右移24位
(parseInt(Math.random()*(1<<24)).toString(16)) => 
获得了一个位于0-16777216之间的随机整数，也就是随机颜色，再使用toString(16)将它转化为十六进制数。
```
### outline (轮廓)
  outline属性是用来设置一个或多个单独的轮廓属性的简写属性 
  `outline-style, outline-color, outline-width`
```html
<style>
  div {
    /* 宽度 | 样式 | 颜色 */
    outline: '1px solid black'
  }
</style>
```
#### outline 和 border 的区别
+ outline **不占据空间**, 它们被描绘于内容之上
+ outline可以是非矩形的, 在Gecko/Firefox中, 轮廓是矩形的, 但是在Opera中, 则会围绕元素结构绘制非矩形形状