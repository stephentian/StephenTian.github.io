# 面向对象

## 类 Class

描述 具有相同属性和方法的对象的集合; 对象是类的实例。

### 类的定义

```python
class ClassName:
  '字符串，用来做类的说明'
  # 如果定义一个类, 但是还没想好属性和方法, 用 pass 占位
  pass
```

### 实例化

```python
class ClassName:
  a = 123
  def __init__(self, arg1):
    '实例化时会被自动调用'
    self.arg1 = 456
  def func(self):
    'self 表示实例'
    return 'hello Class'

# 实例化

c1 = ClassName()

print('Class 的属性 a 为: %s' %(x.i))
print('Class 的方法输出: %s' %(x.func())
```

###
