# 函数

## 函数的定义

```python
def func(arg1, arg2...):
  # code
  return
```

### 可变成参数

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
