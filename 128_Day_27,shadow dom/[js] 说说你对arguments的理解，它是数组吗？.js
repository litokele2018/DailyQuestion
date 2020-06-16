// [js] 说说你对arguments的理解，它是数组吗？ 不是
/* arguments 不是数组，是类数组。
类数组 转 数组的方法有

[...arguments]
Array.from(arguments)
Array.prototype.slice.call(arguments) */