<<<<<<< HEAD
// [js] 写一个判断设备来源的方法
let ua = navigator.userAgent; // 利用userAgent
let obj = {
  // 移动端
  isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
  // 微信
  isWechat: /micromessenger/gi.test(ua),
  // qq
  isQQ: /qq/gi.test(ua),
  // VV音乐
  isvvmusic: /vvmusic/gi.test(ua),
  // 安卓
  isAndroid: /android/gi.test(ua),
  // iOS
  isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS
}
Navigator.platform = 'Win32'
Navigator.appVersion = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
=======
// [js] 写一个判断设备来源的方法
let ua = navigator.userAgent; // 利用userAgent
let obj = {
  // 移动端
  isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
  // 微信
  isWechat: /micromessenger/gi.test(ua),
  // qq
  isQQ: /qq/gi.test(ua),
  // VV音乐
  isvvmusic: /vvmusic/gi.test(ua),
  // 安卓
  isAndroid: /android/gi.test(ua),
  // iOS
  isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS
}
Navigator.platform = 'Win32'
Navigator.appVersion = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
// 其实想说的只有判断移动端，有时候ua并不正确。所以我们会使用一些移动端的 api 来判断是不是移动端。