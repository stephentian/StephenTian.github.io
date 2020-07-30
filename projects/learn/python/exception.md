## python 异常处理

### 捕获异常

```python
# try/except

try:
  # 语句
except ErrorName, arg:
else:
  # 语句

# try/finally

try:
  # 语句
except ErrorName:
  # 发生执行代码
finally:
  # 不管是否发生异常都执行的代码
```

### 触发异常

`raise`

### 用户自定义异常

```python
class MyError(Exception):
  def __init__(self, value):
    self.value = value
  def __str__(self):
    return repr(self.value)

try:
  raise MyError(2)
except MyError as e:
  print(e.value)
```
