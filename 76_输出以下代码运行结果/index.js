// 输出以下代码运行结果

// example 1
var a={}, b='123', c=123;  
a[b]='b';  // number 123 进行字符串转化 -> '123'
a[c]='c';  
console.log(a[b]); // c


// example 2
var a={}, b=Symbol('123'), c=Symbol('123');  
a[b]='b';
a[c]='c';  
console.log(a[b]);  // b


// example 3
var a={}, b={key:'123'}, c={key:'456'};  
a[b]='b';  // 会将b转化为字符串 [object Object] 做为键值
a[c]='c';  
console.log(a[b]); // c