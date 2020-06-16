<<<<<<< HEAD
### [html] 说说你对cookie和session的理解

http 是一种无状态请求， 默认情况下第一次请求和下一次没有关系，无状态请求的好处是快速。
#### cookie
> `cookie` 是一种基于客户端（浏览器）的会话技术。
> + cookie存储数据在客户端浏览器。
> + 浏览器对于单个 cookie 的大小有限制（**4kb**）， 且统一域名下的总cookie数量也有限制（**20个**）

`cookie`的作用
> + cookie一般用于存储少量且不太敏感的数据。
> + 在不登陆的情况下， 完成服务器对客服端的身份验证。

#### session
> `session` 是一种服务器端的会话技术。在一次会话的多次请求间共享数据， `session` 是保存在服务器端的， 有一个唯一的标识， 在服务器端保存`session` 的方法很多， 可以通过内存，数据库，文件等， 集群的时候也要考虑`session`的转移， 在大型的网站， 一般会有专门的session服务器集群。
> + session 用于存储一次会话的多次请求数据， 存在服务器端。
> + session 可以存储任意类型， 任意大小的数据。

**session 与 cookie 的区别**
> + session存储数据在服务器端，Cookie在客户端。
> + session没有数据大小限制，Cookie有。
> + session数据安全，Cookie相对于不安全

=======
### [html] 说说你对cookie和session的理解

http 是一种无状态请求， 默认情况下第一次请求和下一次没有关系，无状态请求的好处是快速。
#### cookie
> `cookie` 是一种基于客户端（浏览器）的会话技术。
> + cookie存储数据在客户端浏览器。
> + 浏览器对于单个 cookie 的大小有限制（**4kb**）， 且统一域名下的总cookie数量也有限制（**20个**）

`cookie`的作用
> + cookie一般用于存储少量且不太敏感的数据。
> + 在不登陆的情况下， 完成服务器对客服端的身份验证。

#### session
> `session` 是一种服务器端的会话技术。在一次会话的多次请求间共享数据， `session` 是保存在服务器端的， 有一个唯一的标识， 在服务器端保存`session` 的方法很多， 可以通过内存，数据库，文件等， 集群的时候也要考虑`session`的转移， 在大型的网站， 一般会有专门的session服务器集群。
> + session 用于存储一次会话的多次请求数据， 存在服务器端。
> + session 可以存储任意类型， 任意大小的数据。

**session 与 cookie 的区别**
> + session存储数据在服务器端，Cookie在客户端。
> + session没有数据大小限制，Cookie有。
> + session数据安全，Cookie相对于不安全

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
[[session]]：也是保存状态，在服务端产生，一些敏感信息放在服务端session，然后产生一个 sessionId,通过 cookie 传到客户端，然后每次客户端请求会带cookie，服务端从cookie中获取sessionID，从而获取敏感信息。不过浏览器一关就没了，不关过一会儿也会失效