<<<<<<< HEAD
/* [js] 写一个加密字符串的方法 */
function encodeStr(str, key) {
  return str
    .split("")
    .map(item => {
      return item.charCodeAt() * key;
    })
    .join("#");
}

function decodeStr(str, key) {
  return str
    .split("#")
    .map(item => {
      return String.fromCharCode(+item / key);
    })
    .join("");
}
let s = 'litokele'
let m = encodeStr(s, 2333119)
debugger
// 利用 base64, 浏览器环境自带 btoa / atob 方法
function encode (str) {
	return btoa(encodeURIComponent(str));
}

function decode (str) {
	return decodeURIComponent(atob(str));
=======
/* [js] 写一个加密字符串的方法 */
function encodeStr(str, key) {
  return str
    .split("")
    .map(item => {
      return item.charCodeAt() * key;
    })
    .join("#");
}

function decodeStr(str, key) {
  return str
    .split("#")
    .map(item => {
      return String.fromCharCode(+item / key);
    })
    .join("");
}
let s = 'litokele'
let m = encodeStr(s, 2333119)
debugger
// 利用 base64, 浏览器环境自带 btoa / atob 方法
function encode (str) {
	return btoa(encodeURIComponent(str));
}

function decode (str) {
	return decodeURIComponent(atob(str));
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
}