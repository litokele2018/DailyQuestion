<<<<<<< HEAD
[js] 说说你对IIFE的理解

```js
(function( window, undefined ) {//……})(window);
jQuery 整個就是一個立即执行函数。
(function(){})(); 是立即执行函数常用的表现形式之一。

另一种也很常用：

(function(){}());

什么时候使用
1.当我们需要写一个 js 插件，并且复用率很高的时候，建议使用
2.如果命名的函数只需要使用一次，建议使用
3.独立模块，这个跟第一点差不多。单独出来，想强调一下立即执行函数的好处，开发的时候，能做到各组合模块的低耦合，减少对全局作用域的污染
=======
[js] 说说你对IIFE的理解

```js
(function( window, undefined ) {//……})(window);
jQuery 整個就是一個立即执行函数。
(function(){})(); 是立即执行函数常用的表现形式之一。

另一种也很常用：

(function(){}());

什么时候使用
1.当我们需要写一个 js 插件，并且复用率很高的时候，建议使用
2.如果命名的函数只需要使用一次，建议使用
3.独立模块，这个跟第一点差不多。单独出来，想强调一下立即执行函数的好处，开发的时候，能做到各组合模块的低耦合，减少对全局作用域的污染
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
```