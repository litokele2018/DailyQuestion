<<<<<<< HEAD
/* [软技能] 网页应用从服务器主动推送到客户端有那些方式？ */
/* websocket
SSE，EventSource接口 */
/* 
服务端推送
webSocket
WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，
两者之间就直接可以创建持久性的连接，并进行双向数据传输。

eventsource(SSE)
EventSource 接口是 Web 内容与服务器发送的事件的接口。一个 EventSource 实例打开一个持久连接 HTTP 服务器，它发送事件的 text/event-stream 格式。
连接保持打开状态，直到通过调用关闭 EventSource.close()。

与 WebSockets 不同，服务器发送的事件是单向的。也就是说，数据消息是从服务器到客户端（例如用户的 Web 浏览器）沿一个方向传递的

Web Push
就是用户订阅了一个站点的 Web Push 服务后，即使用户关闭了浏览器，一旦站点主动发送推送消息，用户都能收到，只要你的电脑是开着的。
这是目前谷歌和苹果在 Chrome 和 Safari 上都力推的一种全新推送服务，Firefox 最近也加入了这个阵营。

但是由于需要 GCM 支持，所以这个方法并不常见
=======
/* [软技能] 网页应用从服务器主动推送到客户端有那些方式？ */
/* websocket
SSE，EventSource接口 */
/* 
服务端推送
webSocket
WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，
两者之间就直接可以创建持久性的连接，并进行双向数据传输。

eventsource(SSE)
EventSource 接口是 Web 内容与服务器发送的事件的接口。一个 EventSource 实例打开一个持久连接 HTTP 服务器，它发送事件的 text/event-stream 格式。
连接保持打开状态，直到通过调用关闭 EventSource.close()。

与 WebSockets 不同，服务器发送的事件是单向的。也就是说，数据消息是从服务器到客户端（例如用户的 Web 浏览器）沿一个方向传递的

Web Push
就是用户订阅了一个站点的 Web Push 服务后，即使用户关闭了浏览器，一旦站点主动发送推送消息，用户都能收到，只要你的电脑是开着的。
这是目前谷歌和苹果在 Chrome 和 Safari 上都力推的一种全新推送服务，Firefox 最近也加入了这个阵营。

但是由于需要 GCM 支持，所以这个方法并不常见
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
*/