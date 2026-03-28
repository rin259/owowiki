---
title: AstrBot
description: "AstrBot 侧当前常见命令的用户向说明与示例。"
---

## 先看这页怎么用

AstrBot 这边很多命令默认用 `@OwO 指令` 的形式触发。

> 注意
> 这页会混合普通功能和管理员功能。
> 文中如果写了管理员专用，普通用户通常就不能直接使用。

<p class="cmd-tip">这里的指令通常直接按 <code>@OwO 指令</code> 的形式发送即可。下方代码块示例也默认按“可直接复制发送”来写。</p>

## 大巴扎排名查询

适合查游戏名绑定和排名。

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /绑定 游戏名
```

```text
@OwO /排名
```

```text
@OwO /排名 某个游戏名
```

```text
@OwO /群内排名
```

说明：

- `/绑定 游戏名`：先把你的游戏名和 QQ 绑定
- `/排名`：看自己的排名或默认排名
- `/排名 游戏名`：查指定玩家
- `/群内排名`：看当前群里的排行

## 大香蕉

这是触发词绘图 / 提示词管理插件。

### 普通用法

它不一定只有固定命令，很多时候是“发送预设触发词”直接出图。

说明：

- 如果群里已经约定好了某些触发词，直接发那个词就可能触发绘图
- 是否能出图，取决于当前预设是否已经被管理员配置

### 管理员命令

<p class="cmd-tip">管理员专用</p>

```text
@OwO /lm列表
```

```text
@OwO /lm添加 触发词
```

```text
@OwO /lm提示词 触发词
```

```text
@OwO /lm详情 触发词
```

```text
@OwO /lm删除 触发词
```

说明：

- `/lm列表`：看目前有哪些触发词
- `/lm添加`：新增一个触发词
- `/lm提示词`：看这个触发词背后的提示词
- `/lm详情`：看更完整信息
- `/lm删除`：删掉某个触发词

## 长期记忆

这组命令主前缀是 `/lmem`，更偏管理和维护。

<p class="cmd-tip">大多数情况下更适合管理员使用。</p>

```text
@OwO /lmem status
```

```text
@OwO /lmem search 关键词
```

```text
@OwO /lmem help
```

说明：

- `/lmem status`：看长期记忆当前状态
- `/lmem search 关键词`：查有没有相关记忆
- `/lmem help`：先看这组命令帮助

更偏维护的子命令：

- `/lmem rebuild-index`
- `/lmem summarize`
- `/lmem cleanup`
- `/lmem reset`
- `/lmem webui`

## 专业戳一戳

如果只是想和 Bot 或群友互动，这组命令最直接。

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /戳
```

```text
@OwO /戳我
```

```text
@OwO /戳全体成员
```

说明：

- `/戳`：普通戳一戳
- `/戳我`：让机器人戳你
- `/戳全体成员`：范围更大，是否真的可用取决于平台权限

这个插件还有被动触发：

- 机器人被戳时
- 命中某些关键词时
- 跟戳和定时戳场景

## 群分析总结

适合做最近群聊总结。

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /群分析
```

```text
@OwO /群分析 3
```

```text
@OwO /查看模板
```

```text
@OwO /设置模板 1
```

说明：

- `/群分析`：按默认时间范围分析
- `/群分析 3`：分析最近 3 天
- `/查看模板`：看现有模板
- `/设置模板 1`：切换到某个模板

更偏管理员的命令：

- `/设置格式`
- `/安装PDF`
- `/分析设置 enable`
- `/分析设置 disable`
- `/分析设置 status`
- `/分析设置 reload`
- `/分析设置 test`
- `/分析设置 incremental_debug`
- `/增量状态`

## QQ 空间

这组命令比较丰富，适合看说说、评论、投稿。

### 看动态

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /查看访客
```

```text
@OwO /看说说
```

```text
@OwO /查看说说
```

```text
@OwO /读说说
```

说明：

- `/查看访客`：看访客相关信息
- `/看说说` / `/查看说说`：看说说列表或内容
- `/读说说`：偏阅读式输出

### 评论和点赞

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /赞说说
```

```text
@OwO /评说说
```

```text
@OwO /评论说说
```

```text
@OwO /回评
```

```text
@OwO /回复评论
```

说明：

- 这几条命令都和说说互动有关
- 某些命令会在执行时继续追问你内容或目标

### 发动态和投稿

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /发说说
```

```text
@OwO /写说说 今天心情不错
```

```text
@OwO /写稿
```

```text
@OwO /投稿
```

```text
@OwO /匿名投稿
```

说明：

- `/发说说`：直接发
- `/写说说 主题`：让机器人辅助生成说说内容
- `/投稿` / `/匿名投稿`：把内容投到投稿箱
- `/写稿`：更偏生成草稿

### 查看和撤回稿件

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /看稿
```

```text
@OwO /查看稿件
```

```text
@OwO /撤稿
```

管理员审核命令：

- `/过稿`
- `/通过稿件`
- `/通过投稿`
- `/拒稿`
- `/拒绝稿件`
- `/拒绝投稿`

## 自学习

这组命令更像管理员开关。

<p class="cmd-tip">更适合管理员使用。</p>

```text
@OwO /learning_status
```

```text
@OwO /start_learning
```

```text
@OwO /stop_learning
```

```text
@OwO /affection_status
```

说明：

- `/learning_status`：看当前学习状态
- `/start_learning` / `/stop_learning`：开启或关闭学习
- `/affection_status`：看好感相关状态

## 表情包小偷

这组命令都在 `/meme` 下，是 AstrBot 里比较实用的一组。

### 基础开关和查看

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /meme status
```

```text
@OwO /meme on
```

```text
@OwO /meme off
```

```text
@OwO /meme list
```

```text
@OwO /meme list happy 20 1
```

说明：

- `/meme status`：看当前状态
- `/meme on` / `/meme off`：开关功能
- `/meme list`：看表情列表
- `/meme list 分类 每页数量 页码`：更细地翻页查看

### 统计和清理

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /meme emotion_stats
```

```text
@OwO /meme clean
```

说明：

- `/meme emotion_stats`：看情绪分类统计
- `/meme clean`：清理部分内容

管理员专用：

- `/meme 偷`
- `/meme delete <序号或文件名>`
- `/meme blacklist <序号或文件名>`
- `/meme scope <序号或文件名> <public|local>`
- `/meme capacity`
- `/meme rebuild_index`
- `/meme natural_analysis <on|off>`
- `/meme clear_emotion_cache`

## 今日老婆

这是互动娱乐插件，普通用户经常会用到。

<p class="cmd-tip">可直接复制发送</p>

```text
@OwO /今日老婆
```

```text
@OwO /我的老婆
```

```text
@OwO /抽老婆
```

```text
@OwO /强娶 @某人
```

```text
@OwO /关系图
```

```text
@OwO /抽取历史
```

说明：

- `/今日老婆` / `/抽老婆`：抽今天的老婆
- `/我的老婆`：看当前结果
- `/强娶 @某人`：互动玩法
- `/关系图`：看关系图
- `/抽取历史`：看历史记录

如果配置里开了关键词触发，有时不带 `/` 也能用。

管理员专用：

- `/重置记录`
- `/重置强娶时间`

## 心念

这组命令前缀是 `/proactive`，主要管理主动对话。

<p class="cmd-tip">更偏管理员和维护用途。</p>

```text
@OwO /proactive help
```

```text
@OwO /proactive status
```

```text
@OwO /proactive add_session
```

```text
@OwO /proactive test basic
```

```text
@OwO /proactive config
```

说明：

- `/proactive help`：先看帮助
- `/proactive status`：看当前主动对话状态
- `/proactive add_session`：把当前会话加入主动对话目标
- `/proactive test basic`：做测试
- `/proactive config`：看配置

其他已确认子命令：

- `/proactive remove_session`
- `/proactive show [type]`
- `/proactive manage [action]`
- `/proactive restart`

## 最后补一句

AstrBot 这边命令比较多，而且很多带交互过程。最省心的使用习惯是：

1. 先按这页里的固定命令试一次。
2. 如果机器人继续追问，就按它的下一步提示回复。
3. 如果提示权限不足，那通常就是管理员命令。
