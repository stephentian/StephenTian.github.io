# global

### process

#### 参数

```
console.log(process)

argv 参数(写脚手架)
execPath
chdir  改变当前工作目录(change directory)
cwd  当前工作目录(current working directory)

memoryUsage 用于检查当前内存使用量
console.log(process.memoryUsage())
{ rss: 21741568, 常驻内存
  heapTotal: 6537216, 堆的总申请量
  heapUsed: 3832800, 堆已经使用的量
  external: 8272 } 外部内存使用量
V8 引擎最大使用内存 1.7 G

```
