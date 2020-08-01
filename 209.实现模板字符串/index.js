function template(string) {
  let reg = /\${([^{}]*)}/g;
  // replace中指定的函数每次匹配到都会执行
  return string.replace(reg, function(match, p1) {
    console.log(match, p1)
    let variable = p1.trim();
    if (variable === "") {
      //空白字符
      return "";
    } else if (!/^[a-zA-Z_$]+[\w$]*$/.test(variable)) {
      //对非法标识符做判断。由于精力有限,不判断关键字和保留字
      throw ("Unexpected token " + variable)
    } else {
      //使用强大的eval函数直接将字符串按变量执行
      return eval(variable)
    }
  })
}

//做个测试
var me = "hezebing";
var lover = "wangyanyan";
let area = 'beijing'
let res = template("我叫${ me } ${ area }，爱人是${ lover }"); //"我叫hezebing，爱人是wangyanyan"
//测试异常
console.log(res)
// template("我叫${ _me }，爱人是${ lover }"); //_me is not defined
// template("我叫${ +me }，爱人是${ lover }"); //Unexpected token +me