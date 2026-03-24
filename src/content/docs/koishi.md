---
title: Koishi
description: "/opt/koishi-app 的实际启用插件、禁用插件和已核实命令。"
---

## 当前可用的用户向插件

> 注意
> 本页混合了普通用户命令和管理员专用命令。
> 文中会尽量单独标明管理员专用部分。

<p class="cmd-tip">下方出现的代码块和单行命令示例，默认都按“可直接复制发送”来写。</p>

- `ping`
- `b23`
- `pixluna`
- `@yrchashao/or`
- `broadcast`
- `onebot-tool`
- `downloads`
- `buckshot-roulette2`
- `mctool`
- `cron`
- `alias`
- `mc-tools`
- `music-voice`

## 运行中 help 已确认的命令

你提供的运行中 `help` 输出显示，当前至少可用：

- `163`
- `alias`
- `allow`
- `alpha`
- `b23`
- `broadcast`
- `channel`
- `choice`
- `command`
- `help`
- `mchead`
- `mcmod`
- `mcping`
- `mcskin`
- `mcuser`
- `mcuuid`
- `messagecounter`
- `modrinth`
- `motdje`
- `motdpe`
- `or`
- `ping`
- `pixluna`
- `plugin`
- `qtool`
- `status`
- `timer`
- `unalias`
- `usage`
- `user`
- `恶魔轮盘`

并且运行中的帮助文本也提示：`help 指令名` 可以查看语法与示例。

## 重点命令的真实写法

### help

- 总帮助：`help`
- 单命令帮助：`help 指令名`

### alias / unalias

- 管理员专用：`alias <name> <command>`
- 管理员专用：`unalias <name>`

当前配置里还写了这些别名：

- `mt -> mc`
- `mcs -> motdje mc.summervibe.cc`
- `delete -> nai`
- `msgc -> messagecounter`

### ping

- 命令：`ping <ip或域名>`
- 用途：探测指定地址

### b23

- 命令：`b23 [数量]`
- 用途：获取 B 站热搜

### 163

`music-voice` 插件当前把命令别名配置成了 `163`。

- 基本用法：`163 <歌曲关键词>`
- 也支持指定序号：`163 <歌曲关键词> -n <序号>`
- 交互式流程：
  1. 先发 `163 蔚蓝档案`
  2. Bot 返回歌单
  3. 在等待时间内回复序号
  4. Bot 生成并发送语音

### broadcast

- 管理员专用：`broadcast <消息>`
- 可选项：
  - `-f`：忽略 silent 标签
  - `-o`：仅向当前账号负责的群广播

### messagecounter

当前主入口是 `messageCounter`，help 里显示为 `messagecounter`。

已确认可用子命令：

- `messageCounter`
- `messageCounter.查询 [指定用户]`
- `messageCounter.排行榜 [人数]`
- `messageCounter.群排行榜 [人数]`
- `messageCounter.上传柱状条背景`

管理员专用：

- `messageCounter.初始化`
- `messageCounter.重载资源`
- `messageCounter.清理缓存`

常用选项：

- `-d` 今日
- `--yd` 昨日
- `-w` 本周
- `-m` 本月
- `-y` 本年
- `-t` 总计

### mctool

这是和 Minecraft 服务器绑定联动的工具，当前配置里 `commandPrefix` 是 `mcs`，所以实际主命令前缀是 `mcs`。

已确认子命令：

- `mcs.code <6位验证码>`
- `mcs.info`
- `mcs.deaths`
- `mcs.list`
- `mcs.freeze`
- `mcs.unfreeze`

管理员专用：

- `mcs.unbind <MC用户名>`

典型流程：

1. 玩家先进 Minecraft 服务器触发绑定流程。
2. 游戏里收到验证码。
3. 在 Koishi 里发 `mcs.code 123456` 完成绑定。
4. 之后可以用 `mcs.info` 查看绑定信息。

### mc

`mc-tools` 当前已启用，且别名 `mt -> mc` 也已配置。

子命令：

- `mc.help`
- `mc.status`
- `mc.ver`
- `mc.player <用户名>`
- `mc.player.skin <用户名>`
- `mc.player.head <用户名>`
- `mc.player.raw <用户名>`
- `mc.info [地址[:端口]]`
- `mc.info.be [地址[:端口]]`
- `mc.server.say <消息>`
- `mc.server.run <命令>`
- `mc.server.bind [用户名]`
- `mc.modrinth <关键词>`
- `mc.mod <关键词>`
- `mc.wiki <关键词>`
- `mc.search <关键词>`

### motdje / motdpe / mcping

从插件确认：

- `motdje <ip> [port]`
- `motdpe <ip> [port]`
- `mcping <url>`

### qtool

`qtool` 来自 `koishi-plugin-onebot-tool`，当前插件已启用。

已确认子命令包括：

- `qtool zanwo`
- `qtool zanwo.user <目标>`
- `qtool poke [次数] [目标]`
- `qtool stick [表情ID或关键词]`
- `qtool stick.random [数量]`
- `qtool stick.search [关键词]`
- `qtool stick.list [页码]`
- `qtool gsign`
- `qtool gsign.group <群>`
- `qtool aisay <角色> <文本>`
- `qtool aisay.list`
- `qtool aisay.text <角色> <文本>`
- `qtool aisay.view <角色>`

管理员专用：

- `qtool zanwo.list`
- `qtool zanwo.add <目标>`
- `qtool zanwo.remove <目标>`
- `qtool zanwo.all`
- `qtool zanwo.clear`
- `qtool gsign.list`
- `qtool gsign.all`
- `qtool gsign.add <群>`
- `qtool gsign.remove <群>`
- `qtool gsign.clear`

### 其他已经能确认的映射

- `alpha` 对应 `koishi-plugin-wolfram-alpha`
- `恶魔轮盘` 对应 `koishi-plugin-buckshot-roulette2`
- `pixluna` 对应 `koishi-plugin-pixluna`
- `or` 对应 `@yrchashao/koishi-plugin-or`

## 运行中需要注意的点

- `help 指令名` 可以继续查看某条命令的完整语法和示例。
- 这里只保留了普通用户会直接在聊天里使用到的命令。
