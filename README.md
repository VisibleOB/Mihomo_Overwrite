# Mihomo Overwrite 配置

个人 Mihomo (Clash Meta) 配置覆写脚本，根据个人使用需求优化的代理规则和DNS配置。

## 🔗 快速使用

### 📋 复制链接直接使用

**通用主配置：**
```
https://raw.githubusercontent.com/VisibleOB/Mihomo_Overwrite/refs/heads/master/main_overwrite.js
```

**Clash Mi iOS 客户端专用配置：**
```
https://raw.githubusercontent.com/VisibleOB/Mihomo_Overwrite/refs/heads/master/clash_mi_overwrite.js
```

> 💡 点击代码块右上角的复制按钮，直接粘贴到客户端的覆写脚本URL中即可使用

## 📁 文件说明

### `main_overwrite.js`
通用主配置覆写脚本

### `clash_mi_overwrite.js` 
Clash Mi iOS客户端专用配置覆写脚本，包含：
- **智能代理分组** - 按地区自动分类节点（香港、台湾、日本、美国、新加坡）
- **完善的规则集** - 包含广告拦截、应用净化、流媒体分流等
- **优化的DNS配置** - 国内外DNS分流，提升解析速度
- **游戏支持** - 针对我常玩的Nikke、BA等游戏的专门规则

## 🚀 功能特性

### 🌍 智能节点分组
- 🇭🇰 香港节点
- 🇨🇳 台湾节点  
- 🇺🇲 美国节点
- 🇯🇵 日本节点
- 🇸🇬 新加坡节点
- ♻️ 自动选择 / 🚀 手动切换
- 故障转移 / 负载均衡

### 📋 规则集支持
- 🛑 广告拦截 (BanAD)
- 🍃 应用净化 (BanProgramAD)
- 💬 AI服务 (ChatGPT、Claude等)
- 📹 YouTube / 📺 巴哈姆特
- 📲 Telegram / Ⓜ️ 微软服务
- 🍎 苹果服务 / 📢 谷歌FCM
- 🎮 游戏专用 (Nikke、BA等)

### 🔧 DNS优化
- **Fake-IP模式** - 提升代理性能
- **国内外分流** - 国内用阿里/腾讯DNS，国外用Cloudflare/Google
- **防污染** - 完善的fallback机制
- **游戏优化** - 针对游戏服务的特殊处理

## 💻 个人使用方式

### 📎 Raw地址链接

在Mihomo客户端中直接引用以下GitHub raw链接：

**通用主配置：**
```
https://raw.githubusercontent.com/VisibleOB/Mihomo_Overwrite/refs/heads/master/main_overwrite.js
```

**Clash Mi iOS 客户端专用配置：**
```
https://raw.githubusercontent.com/VisibleOB/Mihomo_Overwrite/refs/heads/master/clash_mi_overwrite.js
```

### 📥 本地使用
也可以下载到本地后在客户端中设置覆写脚本路径

> 注：这是我的个人配置，可能不适合所有用户的需求，建议根据自己的使用场景进行调整。

## ⚙️ 配置说明

### 节点过滤
- 自动排除包含"测试"的节点
- 支持正则表达式过滤

### 代理组配置
- **URL测试间隔**: 300秒
- **超时时间**: 3秒  
- **测试URL**: https://www.google.com/generate_204
- **容错次数**: 3次

### DNS配置特点
- 支持IPv6解析
- 使用ARC缓存算法
- 尊重分流规则
- 完善的fake-ip过滤列表

## 🎮 个人游戏优化

根据我的游戏习惯进行的专门优化：
- **Blue Archive (BA)** - 完整的Nexon服务域名支持，确保游戏连接稳定
- **Nikke** - 专用规则集，优化游戏体验
- 其他手游的网络优化配置

## 📈 性能优化

- 使用CDN加速的规则源
- 智能DNS解析策略
- 负载均衡和故障转移
- 延迟测试和自动选择

## 🔒 安全特性

- 广告和恶意软件拦截
- 应用内广告净化
- 隐私保护DNS
- 防DNS污染机制

## 📝 个人更新记录

### 最新版本
- 优化DNS配置，提升我的网络解析速度
- 增加我常用游戏的支持
- 完善代理分组逻辑
- 增强安全防护规则，移除敏感配置

## ⚠️ 使用说明

- 这是我的个人配置，根据我的使用习惯和网络环境优化
- 如果你要使用，建议根据自己的需求进行适当调整
- 配置中的节点分组和规则可能不完全适合你的订阅服务

## 📝 备注

此配置为个人使用，仅供参考。如有需要可以fork后修改为适合自己的版本。
