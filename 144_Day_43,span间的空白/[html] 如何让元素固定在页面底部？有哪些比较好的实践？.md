### [html] 如何让元素固定在页面底部？有哪些比较好的实践？
```html
<!-- 1. 绝对定位 -->
<style>
  html, body {
    height: 100%;
  }
  .wrapper {
      position: relative;
      min-height: 100%;
      padding-bottom: 50px;
      box-sizing: border-box;
  }
  .footer {
      position: absolute;
      bottom: 0;
      height: 50px;
  }
</style>
<!-- 2. calc 始终让content的高度可以抵住footer-->
<style>
  .content {
    min-height: calc(100vh - 50px);
  }
  .footer {
    height: 50px;
  }
</style>
<!-- 3.flex -->
<!-- 4.table -->
```
移动端使用position:fixed的时候，有时候会出现点击输入拉起键盘时，按钮位置被顶上去，输入完成收起键盘后，位置依旧存在问题的情况