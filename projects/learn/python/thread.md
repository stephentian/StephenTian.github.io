# 多线程

### 简介

多线程类似于执行一个程序同时使用多个"功能", 比如用使用微信视频通话, 又想和另一个人聊天, 就可以缩小视频界面, 给另一个人发消息。

### 创建线程

```python
import threading
from threading import current_thread

# 1

def myThread(arg1, arg2):
  print('参数: %s 和 %s ' %s(arg1, arg2))
  time.sleep(1)
  print('线程: %s' %(current_thread().getName()))

t1 = threading.Thread(target = myThread, args(1, 2))

# 2

class Mythread(threading.Thread()):
  def run(self):
    print(current_thread().getName(), 'run')

t2 = Mythread()

# 启动线程

t1.start()
t2.start

# 当前线程名称
current_thread().getName()
```

### 生产者和消费者问题

_producer_: 生产者
_comsumer_: 消费者

生产慢,  消耗快  
消费者等待生产  
生产快,  消耗慢  
队列会满,  此时会停止生产
