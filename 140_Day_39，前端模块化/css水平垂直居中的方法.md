#### [css] 写出你知道的CSS水平和垂直居中的方法
1. position: absolute
```html
  <style>
    div {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
```
2. flex
```html
  <style>
    html, body{
      height: 100%;
      overflow: hidden;
    }
    .wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
```