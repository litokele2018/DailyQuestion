https://juejin.im/post/5af136b8f265da0b7a20a40e

现在问题比较少了
viewport + rem 实现
box-shadow
background-image
0.5px
transformY:scale(.5)

rem + viewport

操作步骤如下。在根元素 html 设置 font-size. 将元素转换成 rem

通过 window.devicePixelRatio 拿到 dpr 再写 meta 设置 viewport 的 scale : 1/dpr

### 1.用小数写边框 + 媒体查询

```css
.border {
  border: 1px solid #999;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .border {
    border: 0.5px solid #999;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .border {
    border: 0.333333px solid #999;
  }
}
```

### 2.伪元素+scale

```css
<style>
  .box{
      width: 100%;
      height: 1px;
      margin: 20px 0;
      position: relative;
  }
  .box::after{
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      transform-origin: 0 0;
      background: red;
  }
</style>
```

### 3.border-image

```css
div {
  /* border-image: image-source image-height image-width image-repeat */
  border-width: 1px 0px;
  -webkit-border-image: url(border.png) 2 0 stretch;
  border-image: url(border.png) 2 0 stretch;
}
```
