---
title: AstrBot
description: "Docker 中 AstrBot 的本地插件目录、配置文件和实际命令入口。"
---

## 可用插件

这里只保留用户聊天时会接触到的插件。

> 注意
> AstrBot 这边不少命令分成“普通功能”和“管理员功能”。
> 文中如果写了管理员专用，说明普通用户通常不能调用。

<p class="cmd-tip">这里的指令通常直接用 <code>@OwO 指令</code> 的形式发送即可。下方出现的单行命令示例，也都按“可直接复制发送”来写。</p>

- `astrbot_plugin_aiocqhttp_file_patch`
- `astrbot_plugin_bazaar_rank_searcher`
- `astrbot_plugin_big_banana`
- `astrbot_plugin_custome_segment_reply`
- `astrbot_plugin_debounce`
- `astrbot_plugin_livingmemory`
- `astrbot_plugin_markdown_killer`
- `astrbot_plugin_pokepro`
- `astrbot_plugin_proactive_chat`
- `astrbot_plugin_qq_group_daily_analysis`
- `astrbot_plugin_qzone`
- `astrbot_plugin_self_learning`
- `astrbot_plugin_stealer`
- `astrbot_plugin_wifepicker`
- `astrbot_proactive_reply`

其中大多数插件在 `/root/astrbot/data/config` 下都找到了对应配置文件，说明本机已实际配置过。

## 无明显聊天命令的插件

这些插件主要做消息增强、兼容补丁或后台行为：

- `astrbot_plugin_aiocqhttp_file_patch`
- `astrbot_plugin_custome_segment_reply`
- `astrbot_plugin_debounce`
- `astrbot_plugin_markdown_killer`
- `astrbot_plugin_proactive_chat`

## 重点插件与用法

### 大巴扎排名查询

已确认命令：

- `/绑定 [游戏名]`
- `/排名 [可选:游戏名]`
- `/群内排名`

### 大香蕉

这是图片生成和提示词管理插件。已确认命令：

- 触发词绘图：直接发送已经配置好的触发词

管理员专用：

- `/lm白名单添加 <用户或群组> <ID>`
- `/lm白名单删除 <用户或群组> <ID>`
- `/lm白名单列表`
- `/lm添加 <触发词>`
- `/lm列表`
- `/lm提示词 <触发词>`
- `/lm详情 <触发词>`
- `/lm删除 <触发词>`

此外，它还会根据已配置的“触发词”直接响应绘图请求，所以并不只有固定命令。

### 长期记忆

命令组是 `/lmem`，已确认子命令：

- `/lmem status`
- `/lmem search <关键词>`
- `/lmem forget`
- `/lmem rebuild-index`
- `/lmem webui`
- `/lmem summarize`
- `/lmem reset`
- `/lmem cleanup`
- `/lmem help`

这组命令更像管理工具，通常更适合管理员使用。

### 专业戳一戳

已确认入口：

- `/戳`
- `/戳我`
- `/戳全体成员`

这个插件本身也支持被动触发：

- Bot 被戳
- 命中关键词
- 跟戳
- 定时戳

### 群分析总结

已确认命令：

- `/群分析 [天数]`
- `/设置格式`
- `/设置模板 [模板名或序号]`
- `/查看模板`
- `/安装PDF`
- `/分析设置 enable`
- `/分析设置 disable`
- `/分析设置 status`
- `/分析设置 reload`
- `/分析设置 test`
- `/分析设置 incremental_debug`
- `/增量状态`

补充说明：

- `/群分析 3` 会分析最近 3 天
- `/安装PDF` 用于安装 PDF 依赖
- 增量分析模式开启后，`/增量状态` 才有意义
- `/分析设置 ...` 和 `/安装PDF` 更偏管理员使用

### QQ 空间

已确认命令：

- `/查看访客`
- `/看说说`
- `/查看说说`
- `/评说说`
- `/评论说说`
- `/读说说`
- `/赞说说`
- `/发说说`
- `/写说说 <主题> <图片>`
- `/写稿`
- `/删说说`
- `/回评`
- `/回复评论`
- `/投稿`
- `/匿名投稿`
- `/撤稿`
- `/看稿`
- `/查看稿件`

管理员审核命令：

- `/过稿`
- `/通过稿件`
- `/通过投稿`
- `/拒稿`
- `/拒绝稿件`
- `/拒绝投稿`

### 自学习

已确认命令：

- `/learning_status`
- `/start_learning`
- `/stop_learning`
- `/force_learning`
- `/affection_status`
- `/set_mood`

插件 README 同时说明：

- 自带 Web 管理界面
- 这些命令默认需要管理员权限

### 表情包小偷

所有命令都在 `/meme` 组下。

基础命令：

- `/meme on`
- `/meme off`
- `/meme auto_on`
- `/meme auto_off`
- `/meme status`
- `/meme list [分类] [每页数量] [页码]`
- `/meme emotion_stats`
- `/meme clean [force]`

管理员专用：

- `/meme 偷`
- `/meme group show`
- `/meme group <send|steal> <wl|bl> <add|del|clear> [group:群号|user:QQ号]`
- `/meme delete <序号或文件名>`
- `/meme blacklist <序号或文件名>`
- `/meme scope <序号或文件名> <public|local>`
- `/meme capacity`
- `/meme rebuild_index`
- `/meme natural_analysis <on|off>`
- `/meme clear_emotion_cache`

额外能力：

- 可开 WebUI，默认文档示例端口是 `9191`
- 依赖视觉模型做分类

### 今日老婆

已确认命令：

- `/今日老婆`
- `/抽老婆`
- `/jrlp`
- `/我的老婆`
- `/抽取历史`
- `/wdlp`
- `/强娶 @用户`
- `/qiangqu`
- `/关系图`
- `/gxt`
- `/rbq排行`
- `/rbqph`
- `/重置记录`
- `/czjl`
- `/重置强娶时间`
- `/czqqsj`
- `/抽老婆帮助`
- `/clpbz`

其中 `重置记录` 和 `重置强娶时间` 属于管理员专用。

如果配置里打开 `keyword_trigger_enabled`，则这些关键词可以不带 `/` 直接触发。

### 心念

命令组是 `/proactive`，已确认子命令：

- `/proactive status`
- `/proactive add_session`
- `/proactive remove_session`
- `/proactive test [type]`
- `/proactive show [type]`
- `/proactive config`
- `/proactive manage [action]`
- `/proactive help`
- `/proactive restart`

这组命令偏管理用途，通常更适合管理员使用。
