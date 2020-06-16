<<<<<<< HEAD
####[css] rgba()和opacity这两个的透明效果有什么区别呢？
```html
<style>
  #div1 {
    opacity: 0
  }
  #div2 {
    background-color: rgba(255, 255, 255, 0)
  }
</style>
```
######浏览器的渲染机制:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24
> * <b>重绘</b>:
由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如outline, visibility, color、background-color等，重绘的代价是高昂的，因为浏览器必须验证DOM树上其他节点元素的可见性。
> * <b>回流</b>:
回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

> * rgba: 只对颜色有影响。一般是用在背景上。不会影响元素中的其他内容以及子元素上的内容
> * opacity: 设置元素的透明度 取值为 0 - 1, 元素隐藏后可以点击且界面结构不会发生变化, 子元素也会继承该属性
> * display: none 通过定义自身的隐藏, 并没有在页面存在dom结点, 所以重新显示时会造成页面的回流 reflow
=======
####[css] rgba()和opacity这两个的透明效果有什么区别呢？
```html
<style>
  #div1 {
    opacity: 0
  }
  #div2 {
    background-color: rgba(255, 255, 255, 0)
  }
</style>
```
######浏览器的渲染机制:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24
> * <b>重绘</b>:
由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如outline, visibility, color、background-color等，重绘的代价是高昂的，因为浏览器必须验证DOM树上其他节点元素的可见性。
> * <b>回流</b>:
回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

> * rgba: 只对颜色有影响。一般是用在背景上。不会影响元素中的其他内容以及子元素上的内容
> * opacity: 设置元素的透明度 取值为 0 - 1, 元素隐藏后可以点击且界面结构不会发生变化, 子元素也会继承该属性
> * display: none 通过定义自身的隐藏, 并没有在页面存在dom结点, 所以重新显示时会造成页面的回流 reflow
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
> * visibility: hidden, 在隐藏的同时保留DOM结点重新渲染时只会造成重绘