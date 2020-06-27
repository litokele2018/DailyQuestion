/**
 * 1.fetch 基于promise 可以使用 async 和 await
 * 2.fetch 请求默认不带cookie, 需要设置fetch(URL, {credentials: 'include'}) 
 * 3.服务器 返回400， 500 等状态码不会reject 只有网络出错导致请求失败时 fetch才会reject
 * 4.IE兼容性问题
 * 5.fetch 是window对象的一个方法
 */
/**
 * ajax 是 XMLHTTPRequest的一个实例
 * XMLHTTPRequest 也是window的
 */

const xml = new XMLHttpRequest()
xml.open('GET', 'http://iwenwiki.com/api/blueberrypai/getIndexInteresting.php')
//  跨域预校验
xml.setRequestHeader('Content-Type', 'application/json')
xml.send()
xml.onreadystatechange = () => {
  if (xml.readyState === 4) {
    if (xml.status === 200) {
      console.log(JSON.parse(xml.responseText))
    }
  }
}