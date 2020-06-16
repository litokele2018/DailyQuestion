redux三大原则

单一数据流
整个应用state都被储存在一个store里面 构成一个Object tree
State是只读的
唯一改变state的方法就是触发action, action是一个用于描述已发生事件的普通对象
使用纯函数来执行修改
为了描述action如何改变state tree， 你需要编写reducers
把reducer设计成纯函数，可以实现时间旅行，记录/回放或者热加载


简而言之，使用到纯函数，函数式思维。https://blog.csdn.net/ImagineCode/article/details/87624300