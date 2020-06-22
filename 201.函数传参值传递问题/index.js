function setName(obj) {
  obj.name = 'aaa';
  var obj = new Object(); // 如果是按引用传递的,此处传参进来obj应该被重新引用新的内存单元
  obj.name = 'ccc';
  return obj;
}

var person = new Object();
person.name = 'bbb';
var newPerson = setName(person);
console.log(person.name + ' | ' + newPerson.name); // aaa | ccc

var a = {
  num: '1'
};

var b = {
  num: '2'
};

function change(obj) {
  obj.num = '3';
  obj = b;
  return obj.num;
}

var result = change(a);
console.log(result + ' | ' + a.num); // 2 | 3 

// 总结一下， 大概就是地址的值传递， 如果是引用传递， 修改该值就会直接改变内存中的储存内容