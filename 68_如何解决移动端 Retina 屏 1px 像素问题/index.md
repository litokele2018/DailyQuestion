https://juejin.im/post/5af136b8f265da0b7a20a40e

现在问题比较少了
viewport + rem 实现
box-shadow
background-image
0.5px
transformY:scale(.5)


rem + viewport

操作步骤如下。在根元素html设置font-size. 将元素转换成rem

通过 window.devicePixelRatio 拿到dpr 再写meta 设置 viewport的scale : 1/dpr