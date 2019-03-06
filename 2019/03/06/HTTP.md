## HTTP
> HyperText Transfer Protocol 超文本传输协议

#### 请求中的内容

HTTP 请求由三部分构成:
- 请求行
- 首部
- 实体


#### 常见状态码

**2xx 成功**

- 200: OK, 表示从客户端发送来的请求在服务端被正确处理
- 204: No content, 表示请求成功, 但响应报文不含实体的主体部分
- 205: Reset Content, 请求成功, 但响应报文不含尸体的的主体不到(与 204 不同的是要求请求方重置)
- 206: Partial Content: 请求成功, 进行范围请求

**3xx 重定向**

- 301: moved permanently, 永久性重定向, 表示资源被分配了新的 URL
- 302: found, 临时性重定向, 资源被分配了新的 URL
- 303: see other, 表示资源存在另一个 URL, 应使用 GET 方法获取
- 304: not modified, 发生发送请求未满足条件的情况
- 307: temporary redirect: 临时重定向, 和 302 类似, 但是期望客户端保持请求方法不变向新的地址发送请求

**4xx 客户端错误**

- 400 bad request, 请求报文存在错误
- 401 unauthorized, 发送的请求需要有通过 HTTP 认证的认证信息
- 403 forbidden, 对请求资源的访问被服务器拒绝
- 404 not found, 在服务器上没有找到请求的资源

**5xx 服务器错误**

- 500: internal server error, 服务器在执行请求时发生了错误
- 501: not implemented, 服务器不支持当前请求所需要的某个功能
- 502: bad geteway, 上游服务器接收到无效的响应
- 503: service unavailable, 服务器暂时处于超负载或者正在停机维护, 无法处理请求
- 504: gateway timeout, 服务器响应超时
