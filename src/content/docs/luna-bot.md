---
title: Luna Bot
description: "/home/ryan/luna 的 NoneBot2 插件清单和已核实用法。"
---

## 可用插件

这里仅保留对普通用户有意义的插件和用法。

> 注意
> 本页有一部分命令是管理员专用。
> 如果你发送后没有权限，或无响应，那么这就是管理员指令。

<p class="cmd-tip">下方出现的代码块和单行命令示例，默认都按“可直接复制发送”来写。</p>

| 插件 | 状态 | 已核实入口 |
| --- | --- | --- |
| `nonebot_plugin_cloudsignx` | 已加载 | 正则命令组 |
| `nonebot_plugin_treehelp` | 已加载 | `/help` |
| `nonebot_plugin_code` | 已加载 | `code` |
| `nonebot_plugin_jm` | 已加载 | `jm <禁漫号>` |
| `nonebot_plugin_system_command` | 已加载 | `/sh`、`/cmd` |
| `nonebot_plugin_runagain` | 已加载 | `stop`、`restart` |
| `nonebot_plugin_parser` | 已加载 | 链接自动解析，另含 `bm`、`ym`、`blogin` |
| `nonebot_plugin_instagram` | 已加载 | `ins <链接>` 或直接贴链接 |
| `nonebot_plugin_authrespond` | 已加载 | `#插件名拉黑/解黑...` |
| `nonebot_plugin_remake` | 已加载 | `@Bot remake` |
| `nonebot_plugin_railwaytools` | 已加载 | `/车号`、`/车次`、`/查询` 等 |
| `nonebot_plugin_memes_api` | 已加载 | `表情包制作`、`表情详情`、`随机表情` 等 |
| `nonebot_plugin_steam_info` | 已加载 | `steamhelp`、`steambind` 等 |

## 重点插件与用法

### 帮助

- 列插件：`/help`
- 树形帮助：`/help -t`
- 看单个插件：`/help 插件名`
- 看单个插件树：`/help --tree 插件名`

### 云签到

- `签到`
- `积分`
- `挖矿`
- `我的背包`
- `钓鱼`
- `我的鱼篓`
- `出售 物品名`
- `功能`
- `功能 子项`
- `领取积分补助`
- `签到状态`
- `排行榜`
- `打劫@某人`
- `抽奖 数量`
- `转账 金额 @某人`
- `猜拳石头|剪刀|布 金额`
- `猜数字 数字`

建议先发 `功能` 看云端返回的完整菜单。

### 在线运行代码

格式是多行：

<p class="cmd-tip">可直接复制发送</p>

```text
code [语言] [stdin]
[代码]
```

示例：

<p class="cmd-tip">可直接复制发送</p>

```text
code py 你好
print(input())
```

支持的语言：`c/cpp/c#/py/php/go/java/js`。

### 禁漫下载

- 命令：`jm <禁漫号>`
- 例子：`jm 123456`
- 行为：先下载，再按配置发转发消息或上传文件

### 系统命令行

管理员专用。

- Shell：`/sh <命令>`
- 例子：`/sh echo Hello World`
- Shell 模式在 Windows 上禁用

- 进程命令：`/cmd <命令>`
- 例子：`/cmd echo Hello World`

### 再润

管理员专用，且需要 `@OwO` 或命令前缀命中。

- 停机：`stop`、`shutdown`、`停机`
- 重启：`restart`、`reboot`、`重启`

### 链接分享解析

- 直接发送支持平台的 `BV号`、链接、小程序或分享卡片即可
- 额外命令：
  - `bm <BV号> [页码]`：下载 B 站音频
  - `ym <YouTube链接>`：下载 YouTube 音频
  - `blogin`：B 站扫码登录
- 管理员命令：
  - `开启解析`
  - `关闭解析`

### Instagram 解析

- 命令：`ins <instagram 链接>`
- 别名：`instagram <链接>`
- 也支持直接发送含 `instagram.com/p|reel|stories/...` 的链接
- 超过 3 个媒体文件时会走合并转发

### 插件响应鉴权

这是管理员专用的黑名单插件。

- 用户维度：`#(全局|插件名称)(拉黑|解黑)(全员|用户id)`
- 群维度：`#(全局|插件名称)(封禁群|解禁群)(群号|留空封禁所在群)`

### 人生重开

- 触发：`@Bot remake`
- 别名：`liferestart`、`人生重开`、`人生重来`
- 快捷：`随机人生`
- 进入后会要求选择天赋；回复如 `0 1 2` 完成选择，也可发 `随机`

### 火车迷铁路工具箱

已确认命令：

- `/车号 <动车组车次>`
- `/车次 <动车组车组号>`
- `/查询 <列车车次>`
- `/大屏 <车站名称>`
- `/线路 <线路名称>`
- `/车站 <车站名称>`
- `/下关站 <机车车号>`
- `/help`

短别名也存在，例如 `ch`、`cc`、`cx`、`dp`、`xl`、`cz`、`xgz`。

### 表情包制作

已确认的入口：

- `表情包制作`
- `表情详情 <表情名或关键词>`
- `表情搜索 <关键词>`
- `随机表情 <图片或文字>`
- `[我的][全局]<时间段>表情调用统计 [表情名]`

管理员专用入口：

- `禁用表情 <表情名>`
- `启用表情 <表情名>`
- `全局禁用表情 <表情名>`
- `全局启用表情 <表情名>`

实际制作时，发送 `关键词 + 图片/文字` 即可。

### Steam Info（这个暂不可用，因为主播还没有找到steamworks的key，号丢了）

命令：

- `steamhelp`
- `steambind <Steam ID 或好友代码>`
- `steamunbind`
- `steaminfo [@某人 | Steam ID | 好友代码]`
- `steamcheck`
- `steamenable`
- `steamdisable`
- `steamupdate [名称] [图片]`
- `steamnickname [昵称]`
