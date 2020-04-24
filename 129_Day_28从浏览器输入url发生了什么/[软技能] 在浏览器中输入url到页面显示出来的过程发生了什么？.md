> * 参考文章
https://blog.yyge.top/blog/2019/03/18/HTTP%E9%9B%86%E9%94%A6%E7%B3%BB%E5%88%97%E4%B9%8B%E2%80%94%E2%80%94%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88/

## 1. 过程
+ 输入关键词 --- <input style="width:500px" placeholder="关键词" value="https://www.github.com/virtualFile/index.html?name=litokele&age=18#r_70732412">
+ 浏览器联想
+ Enter 
+ 分析url
    + url的组成
    协议：Https
    域名：www.github.com
    端口：443(https 默认) 80(http 默认)
    虚拟目录： 域名后第一个 / 到最后一个 /: `virtualFile`
    文件名：最后一个 / 到 ？ 之间: `index.html`
    锚部分：从 # 开始到最后都是锚部分: `r_70732412`
    参数部分：从 ？ 到 # 之间的部分: `name=litokele&age=18`
    ```js
      const url = "https://www.github.com/virtualFile/index.html?name=litokele&age=18#r_70732412"
      const u = new URL(url)
      u = URL{
        hash: "#r_70732412",
        host: "www.github.com",
        hostname: "www.github.com",
        href: "https://www.github.com/virtualFile/index.html?name=litokele&age=18#r_70732412",
        origin: "https://www.github.com",
        password: "",
        pathname: "/virtualFile/index.html",
        port: "",
        protocol: "https:",
        search: "?name=litokele&age=18",
        searchParams: URLSearchParams = {},
        username: "",
        __proto__: URL
      }
    ```
+ 提取url中的域名：www.github.com
+ 检查浏览器的缓存
  + Service Worker
    + 运行在浏览器背后的独立线程
    + 必须采用HTTPS协议，因为Service Worker中涉及请求拦截，必须使用HTTPS协议保障安全
  + Memory Cache
    + 内存中的缓存，主要包含已经抓取到的资源，如页面样式，脚本，图片
    + 一旦关闭Tab内存中缓存就被释放
    + 内存中preloader相关指令`<link rel="prefetch">`可以一边解析js/css文件，一边网络请求下一个资源。
  + Disk Cache
    + 相比于 Memory Cache 胜在容量和存储时效性上
    + 大文件，使用率高优先储存在硬盘中
  + Push Cache
    + 推送缓存是Http2中的内容， 当上诉三种缓存都没有命中时，才会被使用
    + Push Cache 中缓存只能被使用一次
    + 所有资源都能被推送，并且能被缓存
    + 可以推送 no-cache 和 no-store 的资源
    + 可以给其他域名推送资源
    + 浏览器可以拒绝接受已经存在的资源推送
    如果以上四种都没有命中，只能通过请求获取资源（强缓存和协商缓存）
+ DNS解析域名
  + 提取url中域名信息
  + 检查浏览器缓存
  + 检查操作系统缓存的 Hosts 文件
  + 检查路由器缓存
  + 检查运营商的本地DNS服务器（localDNS）缓存，不具备权威性
  + 检查是否在本地区域配置文件中， 返回解析结果，具有权威性
  + 本地DNS服务器
    + 转发模式
    依次寻找上一级DNS服务器解析
    + 非转发模式
    本地DNS发送请求到根DNS，
    根DNS返回顶级域名服务器地址（.com | .top | .net）
    本地DNS联系该顶级域名服务器来具体查找子级域名（www.github.com）
  + 本地服务区接收到IP地址
    + 将IP地址写入缓存
  + 将IP地址送给客户端
+ CDN
  + 提取url中的域名
  + 本地DNS服务器解析
  + 将域名解析权交给CNAME指向的CDN的DNS负载均衡系统
  + DNS负载均衡返回离用户最近的IP地址给本地DNS服务器
  + 本地DNS返回离用户最近IP地址给用户
+ TLS/SSL四次握手
  + Client Hello(随机数 X, 支持的加密方法)
  + Server Hello(rsa公钥，随机选取客户端支持的加密方法，随机数Y，ca证书)
  + Client生成随机数secret，然后通过服务器提供的公钥加密secret
  + Server通过私钥解密secret， 利用X，Y，secret 生成session-key（唯一的对话密钥）（第一次采用非对称加密获取对话密钥， 以后采用对称加密进行对话）
+ TCP 三次握手
  + 客户端发送`SYN(seq = x)`到服务器，进入`SYN-SEND`状态
  + 服务器发送`SYN + （ACK = x + 1) + (seq = y)`到客户端进入`SYN-RECEIVED`状态
  + 客户端发送`ACK = y + 1`给服务器确认接受连接， 双方进入`ESTABLISHED`状态
  + 超时重传机制
    + 停止等待ARQ(自动重发请求)
      + 正常传输
      一方发送数据报文, 在规定的时间内对方接收到应答, 就取消定时器
      + 报文丢失
      发送备份的数据
      + ACK超时
      重传报文
    + 连续ARQ
      + 滑动窗口机制
      控制流量
+ IP、ICMP
  + IP
  寻址,路由功能
  分段,数据包的分片和重组, 以适应数据链路层的传输限制
  + ICMP
  ping命令
  报告无法传送的数据包的错误
+ ARP
  + 地址解析协议
  + IP地址 -> MAC地址(路由器、网卡的身份证号)
+ 以太网
+ 回溯
+ 服务端返回各种资源
+ 浏览器渲染机制
  + 解析构建DOM树
  + 解析构建CSSOM树
  + 构建Render Tree
  + 计算节点(flow)
  + 绘制(paint)
+ TCP四次挥手
  + 客户端发送`FIN + (seq = x)`至服务器, 进入`FIN-WAIT-1`状态。
  + 服务端发送`(ACK = x + 1) + (seq = y)`到客户端, 进入`CLOSE-WAIT`状态, 此时仍然可以发送数据到client。
  + 等待资源发送完成, 再次发送`FIN + (seq = z)`到客户端, 进入`LAST-ACK`状态, 此时客户端进入`FIN-WAIT-2`状态。
  + 客户端发送`(ACK = z + 1)`确认应答, 通过延时确认机制, 等待2MSL, 确保服务端接收到消息。
  + 服务器收到消息关闭。