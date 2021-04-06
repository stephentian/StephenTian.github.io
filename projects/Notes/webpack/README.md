# Webpack

## 如何利用 webpack 优化前端性能

指优化 webpack 的输出结果，即使项目在浏览器运行快速高效

- 压缩代码。`UglifyJsPlugin`、`cssnano`
- 删除死代码(Tree Shaking)。`--optimize-minimize`
- 利用 CDN 加速。
- 提取公共代码

## 什么是 Tree-shaking？

tree-shaking 指打包中去除在代码中没有被用到的那些死代码。
js: UglifyJsPlugin
css: purify-CSS

## Loder 和 Plugins 的不同

### 作用不同

- Loader 加载器，让加载和解析非 JavaScript 文件的能力
- Plugins 插件，在 webpack 运行的适当的时期，改变输出结果，扩展 webapck 的功能。

### 用法不同

- Loader 在 modlue.rules 中配置，
- Plugins 在 plugins 中单独配置。每一项是 plugin 的实例

## 如何提高 webpack 的构建速度

1. 多入口情况下，使用 `CommonsChunkPlugin` 来提取公共代码
2. 使用 `Happypack` 实现多线程加速编译
3. Tree-shaking
4. 通过 externals 配置来提取常用库

## 说说 webpack 的热更新

webpack的热更新又称热替换（Hot Module Replacement），缩写为HMR。
这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
