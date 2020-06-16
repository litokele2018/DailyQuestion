## 1. localStorage

Page1 set
window.localStorage.setItem('name', 'litokele')
Page2 监听
window.onstorage = () => {
console.log(window.localStorage.getItem('name'))
}

## 2 window.open(child),

child.onload = () => {
window.postMessage('hello', location.origin)
}
// child.html

window.onmessage = (e) => {

}

## 3 BroadcastChannel

<!-- 和localStorage方案基本一致，额外需要初始化 -->
```js
// A.html
const channel = new BroadcastChannel('tabs')
channel.onmessage = evt => {
// evt.data
}

// B.html
const channel = new BroadcastChannel('tabs')
channel.postMessage('hello')

```

## 4. SharedWorker

<!-- 相较于其他方案没有优势，此外，API复杂而且调试不方便。 -->

```js
// A.html
var sharedworker = new SharedWorker("worker.js");
sharedworker.port.start();
sharedworker.port.onmessage = (evt) => {
  // evt.data
};

// B.html
var sharedworker = new SharedWorker("worker.js");
sharedworker.port.start();
sharedworker.port.postMessage("hello");

// worker.js
const ports = [];
onconnect = (e) => {
  const port = e.ports[0];
  ports.push(port);
  port.onmessage = (evt) => {
    ports
      .filter((v) => v !== port) // 此处为了贴近其他方案的实现，剔除自己
      .forEach((p) => p.postMessage(evt.data));
  };
};
```

## 5. Cookie

<!-- 服务器配合 -->
## 6. Websocket

## 7. SSE