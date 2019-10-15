# ts 在 vue 中的使用

## 相关依赖介绍

1. `ts-loader`：让 webpack 识别 .ts, tsx 文件
2. `typescript`: ts 库。
3. `vue-class-component`: 官方维护，学习成本小，但与 `vuex` 融合性差。  
强化 Vue 组件，使用 TypeScript/装饰器 增强 Vue 组件。
4. `vue-property-decorator`: 非官方维护，有一定学习成本。  
在 vue-class-component 上增强更多的结合 Vue 特性的装饰器。
5. `vuex-class`: 基于vue-class-component对Vuex提供的装饰器。

### vue-class-compnent

```vue
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  // 初始化数据
  msg = 123

  // 生命周期钩子
  mounted() {
    this.greet()
  }

  // computed
  get computedMsg() {
    return 'computed' + this.msg
  }

  // methods
  greet() {
    alert('greeting: ' + msg)
  }
}
</script>
```

## 项目配置 ts

### vue 引入 ts

```js
// npm
npm i ts-loader typescript --save-dev
// yarn
yarn add ts-loader typescript -D
```

```js
// npm
npm i vue-class-component vue-property-decorator --save
// yarn
yarn add vue-class-component vue-property-decorator
```

### 配置 tsconfig.json

```json
{
   "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ],
  // 编译选项
  "compilerOptions": {
    // 输出目录
    "outDir": "./output",
    // 是否包含可以用于 debug 的 sourceMap
    "sourceMap": true,
    // 以严格模式解析
    "strict": true,
    // 采用的模块系统
    "module": "esnext",
    // 如何处理模块
    "moduleResolution": "node",
    // 编译输出目标 ES 版本
    "target": "es5",
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 将每个文件作为单独的模块
    "isolatedModules": false,
    // 启用装饰器
    "experimentalDecorators": true,
    // 启用设计类型元数据（用于反射）
    "emitDecoratorMetadata": true,
    // 在表达式和声明上有隐含的any类型时报错
    "noImplicitAny": false,
    // 不是函数的所有返回路径都有返回值时报错。
    "noImplicitReturns": true,
    // 从 tslib 导入外部帮助库: 比如__extends，__rest等
    "importHelpers": true,
    // 编译过程中打印文件名
    "listFiles": true,
    // 移除注释
    "removeComments": true,
    "suppressImplicitAnyIndexErrors": true,
    // 允许编译javascript文件
    "allowJs": true,
    // 解析非相对模块名的基准目录
    "baseUrl": "./",
    // 指定特殊模块的路径
    "paths": {
      "jquery": [
        "node_modules/jquery/dist/jquery"
      ]
    },
    // 编译过程中需要引入的库文件的列表
    "lib": [
      "dom",
      "es2015",
      "es2015.promise"
    ]
  }
}
```

### 配置 vue-shim.d.ts

在 src 目录下添加文件 `vue-shim.d.ts`。
告诉TypeScript *.vue后缀的文件可以交给vue模块来处理。

```typescript
declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}
```

### 改造 .vue 文件

1. `<script>` 标签添加 `lang="ts"` 声明。
2. 代码中导入 *.vue 文件的时候，需要写上 .vue 后缀（因为 TypeScript 默认只识别 .ts 文件，不识别 .vue 文件）
