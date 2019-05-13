# yarn

Yarn 是一个依赖管理工具， 它能够管理你的代码，并与全世界的开发者分享代码。 代码是通过包（有时也被称为模块）进行共享的。 
在每一个包中包含了所有需要共享的代码，另外还定义了一个`package.json`文件，用来描述这个包。
比 npm 快, 但是有些包安装不了。


### 初始化一个新的项目

```
yarn init
```

### 添加一个依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### 更新一个依赖包

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 删除一个依赖包

```
yarn remove [package]
```

### 安装所有依赖包

``
yarn
```
或者
```
yarn install
```
