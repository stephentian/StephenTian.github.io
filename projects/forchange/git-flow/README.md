# git flow 工作流

git-flow 其实是根据一套项目分支管理原则而开发的git 扩展命令

## 初始化

```git
git flow init
```

然后回答回答几个关于分支的命名约定的问题。
建议使用默认值。

## feature

```git
// 增加新特性
git flow feature start feature-name

// 完成新特性
git flow feature finish feature-name

// 发布新分支
git flow feature publish feature-name

// 取得其他用户的新特性分支
git flow feature pull origin feature-name

// 跟踪 origin 上新特性
git flow feature track feature-name
```

## release

```git
// 创建 release 分支
git flow release start release-name[BASE]
```

提供一个 `[BASE]` 参数，即提交记录的 `sha-1 hash` 值，来启动 `release` 分支。

```git
// 发布 release 分支
git flow release publish release-name
```

```git
// 完成 release 版本
git flow release finish release-name
```

## hotfix

创建紧急修复分支

```git
git flow hotfix start VERSION [BASENAME]
```

VERSION 参数标记着修正版本。你可以从 `BASENAME` 开始，
`BASENAME`为finish release时填写的版本号。

```git
// 完成紧急修复
git flow hotfix finish VERSION
```
