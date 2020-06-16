/* 
tcp和udp的区别是什么？分别有哪些协议是基于他们的？

TCP 基于连接的可靠数据流传输
UDP 不基于连接的不可靠数据流传输

TCP传输单位称为TCP报文段，
UDP传输单位称为用户数据报。

TCP注重数据安全性，
UDP数据传输快，因为不需要连接等待，少了许多操作，但是其安全性却一般。

基于TCP的协议
  FTP 文件传输协议（File Transfer Protocol）
  Telnet 用于远程联接服务的标准协议或者实现此协议的软件
  SMTP 简单邮件传输协议（Simple Message Transfer Protocol）
  POP3 邮局通讯协定第三版（Post Office Protocol 3）
  HTTP
基于UDP的协议
  DNS
  SNMP 简单网络管理协议（Simple Network Management Protocol）
  TFTP 普通文件传送协议（Trivial File Transfer Protocol）
*/