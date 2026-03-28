---
title: Koishi
description: "/opt/koishi-app 当前可用的用户向命令与更详细的使用说明。"
---

## 先看这页怎么用

这页主要写 Koishi 里普通用户常用、而且已经确认存在的命令。

> 注意
> 有些命令是管理员专用。
> 如果你发送后提示权限不足，或机器人没有响应，通常就是因为当前命令只开放给管理员。

<p class="cmd-tip">下方出现的代码块和单行命令示例，默认都按“可直接复制发送”来写。</p>

## 先学会 help

如果你记不清某条命令怎么发，最先用这个。

<p class="cmd-tip">可直接复制发送</p>

```text
help
```

```text
help 指令名
```

示例：

<p class="cmd-tip">可直接复制发送</p>

```text
help ping
```

```text
help qtool
```

说明：

- `help`：看当前机器人可用命令总览
- `help 指令名`：看某条命令的语法、参数和示例
- 如果这页没写全，先试 `help 指令名`

## 常用基础命令

### ping

用来探测一个 IP 或域名能不能连通。

<p class="cmd-tip">可直接复制发送</p>

```text
ping 1.1.1.1
```

```text
ping mc.summervibe.cc
```

说明：

- 适合快速看一个地址是否在线
- 返回内容一般会包含延迟或连通结果

### b23

查看 B 站热搜。

<p class="cmd-tip">可直接复制发送</p>

```text
b23
```

```text
b23 10
```

说明：

- 不带参数时，看默认数量的热搜
- 带数字时，通常表示想看前几条

### 163

这是网易云点歌语音命令，当前实际别名就是 `163`。

<p class="cmd-tip">可直接复制发送</p>

```text
163 蔚蓝档案
```

```text
163 夜に駆ける -n 2
```

说明：

- 先发关键词，机器人会返回候选歌曲
- 某些情况下需要你再回复序号
- `-n <序号>` 表示直接指定第几首
- 成功后通常会发送语音或音频结果

## QQ 工具

### qtool zanwo

让机器人给你点赞，或者给指定的人点赞。

<p class="cmd-tip">可直接复制发送</p>

```text
qtool zanwo
```

```text
qtool zanwo.user @某人
```

说明：

- `qtool zanwo`：给自己点赞
- `qtool zanwo.user @某人`：给指定对象点赞
- 这类能力依赖 OneBot / QQ 侧接口，偶尔可能受限

### qtool poke

发送戳一戳。

<p class="cmd-tip">可直接复制发送</p>

```text
qtool poke
```

```text
qtool poke 3 @某人
```

说明：

- 不带参数时，通常是默认次数或默认目标
- `3` 表示连续戳 3 次
- `@某人` 表示戳指定用户

### qtool stick

和表情包 / 表情贴图有关。

<p class="cmd-tip">可直接复制发送</p>

```text
qtool stick
```

```text
qtool stick 猫猫
```

```text
qtool stick.search 可爱
```

```text
qtool stick.random 5
```

说明：

- `qtool stick`：发贴图或按默认方式取图
- `qtool stick 关键词`：按表情 ID 或关键词取图
- `qtool stick.search 关键词`：搜索相关贴图
- `qtool stick.random 5`：随机取若干张

### qtool aisay

角色台词 / AI 说话相关命令。

<p class="cmd-tip">可直接复制发送</p>

```text
qtool aisay.list
```

```text
qtool aisay 芙宁娜 今天吃什么
```

```text
qtool aisay.text 芙宁娜 晚上早点睡
```

说明：

- `qtool aisay.list`：先看有哪些可用角色
- `qtool aisay 角色 文本`：让指定角色“说”这段话
- `qtool aisay.text`：文本版入口，适合不想走语音时使用

### qtool gsign

群签到相关工具。

<p class="cmd-tip">可直接复制发送</p>

```text
qtool gsign
```

```text
qtool gsign.group 123456789
```

说明：

- `qtool gsign`：对默认范围执行群签到
- `qtool gsign.group 群号`：对指定群执行
- 一部分批量管理命令只给管理员

## 统计和查询

### messageCounter

聊天统计命令。当前 help 中显示为 `messagecounter`，但实际主入口常写成 `messageCounter`。

<p class="cmd-tip">可直接复制发送</p>

```text
messageCounter
```

```text
messageCounter.查询
```

```text
messageCounter.查询 @某人 -m
```

```text
messageCounter.排行榜 10 -d
```

```text
messageCounter.群排行榜 10 -w
```

说明：

- `messageCounter`：看帮助或默认统计
- `messageCounter.查询`：查自己
- `messageCounter.查询 @某人 -m`：查某人本月数据
- `messageCounter.排行榜 10 -d`：看今日前 10
- `messageCounter.群排行榜 10 -w`：看本周群排行

常用时间参数：

- `-d`：今日
- `--yd`：昨日
- `-w`：本周
- `-m`：本月
- `-y`：本年
- `-t`：总计

管理员专用：

- `messageCounter.初始化`
- `messageCounter.重载资源`
- `messageCounter.清理缓存`

## Minecraft 相关

### mcs 绑定工具

这是和服务器联动的工具，当前主前缀是 `mcs`。

<p class="cmd-tip">可直接复制发送</p>

```text
mcs.code 123456
```

```text
mcs.info
```

```text
mcs.deaths
```

```text
mcs.list
```

说明：

- `mcs.code 123456`：用游戏内验证码完成绑定
- `mcs.info`：看绑定信息
- `mcs.deaths`：看死亡记录
- `mcs.list`：看绑定列表或在线相关信息

典型流程：

1. 先在 Minecraft 服务器里触发绑定。
2. 服务器给你一个验证码。
3. 在群里发送 `mcs.code 验证码`。
4. 绑定完成后再用 `mcs.info` 之类的命令。

管理员专用：

- `mcs.unbind <MC用户名>`

### mc 综合工具

`mc-tools` 当前已启用，且配置了 `mt -> mc` 的别名。

<p class="cmd-tip">可直接复制发送</p>

```text
mc.help
```

```text
mc.status
```

```text
mc.player Notch
```

```text
mc.player.skin Notch
```

```text
mc.info mc.summervibe.cc
```

```text
mc.info.be bedrock.example.com:19132
```

```text
mt player Steve
```

说明：

- `mc.help`：看这组命令帮助
- `mc.player 用户名`：查玩家资料
- `mc.player.skin 用户名`：看皮肤
- `mc.info 地址`：查 Java 服
- `mc.info.be 地址:端口`：查基岩版
- `mt ...` 是 `mc ...` 的短别名

管理员专用：

- `mc.server.say <消息>`
- `mc.server.run <命令>`

### 单独的 Minecraft 查询命令

这组命令适合不想记 `mc.*` 层级时直接使用。

<p class="cmd-tip">可直接复制发送</p>

```text
motdje mc.summervibe.cc
```

```text
motdpe bedrock.example.com 19132
```

```text
mcping mc.summervibe.cc
```

```text
mcuuid Notch
```

```text
mcuser Notch
```

```text
mchead Notch
```

```text
mcskin Notch
```

```text
mcmod Sodium
```

```text
modrinth fabric-api
```

说明：

- `motdje`：查 Java 服 MOTD
- `motdpe`：查基岩版 MOTD
- `mcping`：查服务器连通性和信息
- `mcuuid` / `mcuser`：查正版账号基础资料
- `mchead` / `mcskin`：看头像或皮肤渲染
- `mcmod` / `modrinth`：查模组或资源信息

## 其他已确认命令

### alpha

接 WolframAlpha 查询。

<p class="cmd-tip">可直接复制发送</p>

```text
alpha sin(x)^2 + cos(x)^2
```

```text
alpha weather shanghai
```

说明：

- 适合算式、单位换算、简单知识查询
- 如果返回慢，通常是远端接口响应较慢

### or

做随机选择。

<p class="cmd-tip">可直接复制发送</p>

```text
or 吃面 or 吃饭
```

```text
or 打游戏 or 看番 or 睡觉
```

说明：

- 把多个选项放进一条消息里，让机器人帮你随机选一个
- 适合“今天吃什么”“现在干什么”这种轻决策

### 恶魔轮盘

这是一个互动小游戏命令。

<p class="cmd-tip">可直接复制发送</p>

```text
恶魔轮盘
```

说明：

- 先发主命令开始
- 更细的子玩法建议直接发 `help 恶魔轮盘`

### pixluna

这是 `pixluna` 插件入口。

<p class="cmd-tip">可直接复制发送</p>

```text
pixluna
```

说明：

- 这类图片命令往往会受平台风控、群设置或插件配置影响
- 如果没有回图，不一定是命令不存在，也可能是权限或上游问题

## 管理员更常用的命令

这些命令普通用户通常用不上，但看到时知道它们是干什么的会更不迷糊。

### alias / unalias

管理员可以给复杂命令做短别名。

<p class="cmd-tip">管理员专用</p>

```text
alias mcsinfo mcs.info
```

```text
unalias mcsinfo
```

当前已知已有别名：

- `mt -> mc`
- `mcs -> motdje mc.summervibe.cc`
- `delete -> nai`
- `msgc -> messagecounter`

### broadcast

全服广播命令。

<p class="cmd-tip">管理员专用</p>

```text
broadcast 机房维护结束，机器人已恢复
```

```text
broadcast -o 只发当前账号负责的群
```

说明：

- `broadcast <消息>`：向多个群广播
- `-o`：只向当前账号负责的范围广播
- `-f`：忽略 silent 标签

### status / usage / timer / plugin / user / command / channel

这类命令主要用于机器人管理，不是普通聊天命令。

如果你只是普通用户：

- 不需要特别记
- 看到时知道它们是管理类命令就够了

## 最后补一句

Koishi 这边命令比较多，最省事的用法仍然是：

<p class="cmd-tip">可直接复制发送</p>

```text
help
```

```text
help 指令名
```

例如：

```text
help qtool
```

```text
help messagecounter
```
