/**
 * 1.CDN加速
 * 2.使用雪碧图 减少资源请求次数
 * 3.服务端渲染静态资源时， 开启gzip压缩
 * 4.动态加载资源
 * 5.在js，css， image等请求的http header中添加expire，last-modified 利用缓存
 * 6.减少不必要的重定向跳转
 * 7.异步加载js<script defer></script>
 * 8.http 2.0 :  二进制分帧， header头部压缩， 多路复用
 */