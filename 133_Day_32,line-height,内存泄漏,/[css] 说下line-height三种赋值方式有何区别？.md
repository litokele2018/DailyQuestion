```html
<style>
  * {
    line-height: 15px;
    /* 1 * font-size 表示倍数*/
    line-height: 1; 
    /* 50% * font-size 表示倍数*/
    line-height: 50%;
    /* 以 em 为单位的值可能会产生不确定的结果 */
    line-height: 13em;
  }
</style>
```
> + `normal`:
> 取决于用户端。桌面浏览器（包括Firefox）使用默认值，约为1.2，这取决于元素的 font-family。
> + `number`:
> 该属性的应用值是这个无单位数字<数字>乘以该元素的字体大小
> + `length`: 
> 指定<长度>用于计算 line box 的高度。以 em 为单位的值可能会产生不确定的结果
> + `百分比`:
> 与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。