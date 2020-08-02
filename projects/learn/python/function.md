# 函数

## 函数的定义

```python
def func(arg1, arg2...):
  '函数的第一行可以放字符串, 用来存放函数说明'
  # code
  return
  # 不带表达式的 return, 相当于返回 NONE
```

### 默认参数

默认参数必须放最后, 否则报错

```python
SyntaxError: non-default argument follows default arguments
```

### 可变长参数

```python
def func(first, *other):
  print(1 + len(other))

func(1)
func(1, 2)
```

## 函数作用域

```python
var1 = 123

def func():
  # 要使用全局变量, 要添加关键字 global
  global var1
  # 使用非本函数, 非全局作用域, 添加关键字 nolocal
  # nolocal var1
  var1 = 456

func()
print(var1)

```
