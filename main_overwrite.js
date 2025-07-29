const CONFIG = {
    // 测试连接URL
    testUrl: "https://cp.cloudflare.com/generate_204",
    
    // 自动测试间隔 (秒)
    testInterval: 300,
    
    // 自动选择容差 (毫秒)
    tolerance: 20,
    
    // 负载均衡策略："round-robin" | "sticky-sessions" | "consistent-hashing"
    balanceStrategy: "sticky-sessions",
    
    // 健康检查配置
    healthCheck: {
        enable: true,
        interval: 600,
        timeout: 5,
        lazy: true,
        expectedStatus: "204",
        method: "HEAD"
    }
};

/**
 * 用户自定义规则（高优先级）
 * 这些规则会被放置在所有其他规则之前，确保不会被其他规则覆盖
 */
const USER_RULES = [
  
    // app rules
    "PROCESS-NAME,Gopeed,Download",
    "PROCESS-NAME,gopeed.exe,Download",
    // end of app rules
  
    // Steam special rules
    "DOMAIN,steamcdn-a.akamaihd.net,DIRECT",
    "DOMAIN-SUFFIX,steamserver.net,DIRECT",
    
    // OpenRouter
    "DOMAIN-SUFFIX,api.openrouter.ai,AI",
    "DOMAIN-SUFFIX,openrouter.ai,AI",
    // end of OpenRouter

    // Cursor
    "DOMAIN-SUFFIX,cursor.com,AI",
    "DOMAIN-SUFFIX,cursor.sh,AI",
    "DOMAIN-SUFFIX,cursor-cdn.com,AI",
    "DOMAIN-SUFFIX,cursorapi.com,AI",
    // Windsurf
    "DOMAIN-SUFFIX,windsurf.com,AI",
    "DOMAIN-SUFFIX,codeium.com,AI",
    // Trae
    "DOMAIN-SUFFIX,trae.ai,AI",
    "DOMAIN-SUFFIX,byteoversea.com,AI",
    "DOMAIN-SUFFIX,trae-api-sg.mchost.guru,AI",
    "DOMAIN-SUFFIX,lf3-static.bytednsdoc.com,AI",
    "DOMAIN-SUFFIX,bytegate-sg.byteintlapi.com,AI",
    "DOMAIN-SUFFIX,abtestvm-sg.bytedance.com,AI",
    "DOMAIN-SUFFIX,tron-sg.bytelemon.com,AI",
    "DOMAIN-SUFFIX,sf16-short-sg.bytedapm.com,AI",
    "DOMAIN-SUFFIX,trae.com.cn,AI",
    "DOMAIN-SUFFIX,tron.jiyunhudong.com,AI",
    "DOMAIN-SUFFIX,starling.zijieapi.com,AI",
    // AugmentCode
    "DOMAIN-SUFFIX,augmentcode.com,AI",
  
  
    "DOMAIN-SUFFIX,kkrb.net,DIRECT",
    "DOMAIN-SUFFIX,v2ex.com,被墙网站",
    "DOMAIN-SUFFIX,nodeseek.com,被墙网站",
    "DOMAIN-SUFFIX,mnapi.com,DIRECT",
    "DOMAIN-SUFFIX,ieee.org,DIRECT",
    "DOMAIN-SUFFIX,anrunnetwork.com,DIRECT",
    "DOMAIN-SUFFIX,apifox.com,DIRECT",
    "DOMAIN-SUFFIX,crond.dev,DIRECT",
    "IP-CIDR,223.113.52.0/22,DIRECT,no-resolve",
    
    // 新增规则 - 来自YAML配置
    // 特定直连域名
    "DOMAIN-SUFFIX,julebu.co,DIRECT",
    
    // 苹果服务直连
    "DOMAIN-SUFFIX,apple.com,DIRECT",
    "DOMAIN-SUFFIX,icloud.com,DIRECT", 
    "DOMAIN-SUFFIX,cdn-apple.com,DIRECT",
    "DOMAIN-SUFFIX,ls.apple.com,DIRECT",
    
    // 学术/AI类服务
    "DOMAIN-SUFFIX,lingq.com,AI",
    "DOMAIN-SUFFIX,youglish.com,AI",
    "DOMAIN-SUFFIX,deepl.com,AI",
    "DOMAIN-SUFFIX,chat.openai.com,AI",
    "DOMAIN-SUFFIX,grammarly.com,AI",
    "DOMAIN-KEYWORD,sci-hub,AI",
    
    // 学习平台
    "DOMAIN-SUFFIX,edclub.com,被墙网站",
    "DOMAIN-SUFFIX,typingclub.com,被墙网站",
    "DOMAIN-SUFFIX,edclub-cdn.typingclub.com,被墙网站",
    "DOMAIN-SUFFIX,typingclub-cdn.typingclub.com,被墙网站",
    "DOMAIN-KEYWORD,typingclub,被墙网站",
    
    // 在此添加更多自定义规则...
];

const SAVED_RULES = [
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "RULE-SET,direct,DIRECT",
    "GEOSITE,gfw,被墙网站",
    "GEOSITE,geolocation-!cn,被墙网站",
    
    // 国内规则
    "GEOIP,CN,国内网站",
    
    // 最终匹配
    "MATCH,国外网站"
]

/**
 * 高质量节点关键词列表
 * 用于筛选名称中包含这些关键词的节点作为高质量节点
 */
const HIGH_QUALITY_KEYWORDS = [
    // 线路类型关键词
    "家宽", "家庭宽带", "IEPL", "Iepl", "iepl",
    "IPLC", "iplc", "Iplc", "专线", "高速",
    
    // 节点等级关键词
    "高级", "精品", "原生", "SVIP", "svip", 
    "Svip", "VIP", "vip", "Vip", "Premium", 
    "premium",
    
    // 特殊用途关键词
    "特殊", "特殊线路", "游戏", "Game", "game",
    
    // 在此添加更多关键词...

    // 自搭
    "自搭",
];

/**
 * 代理规则配置
 * name: 规则名称
 * gfw: 是否被墙 (true=默认走代理, false=默认直连)
 * urls: 规则集链接，可以是单个URL或URL数组
 * payload: 自定义规则内容，设置后urls将被忽略
 * extraProxies: 额外添加到此规则组的代理，例如REJECT用于广告拦截
 */
const PROXY_RULES = [
    // 自定义规则示例
    { 
        name: "Download", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Download/Download.yaml" 
    },
    { 
        name: "SpeedTest", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Speedtest/Speedtest.yaml" 
    },
    // 常用网站分组
    {
        name: "AI",
        gfw: true, 
        urls: [
            "https://kelee.one/Tool/Clash/Rule/AI.yaml",
        ]
    },
    { 
        name: "GitHub", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml" 
    },
    { 
        name: "linux.do", 
        gfw: false, 
        payload: "DOMAIN-SUFFIX,linux.do" 
    },
    { 
        name: "YouTube", 
        gfw: true, 
        urls: [
            "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
            "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTubeMusic/YouTubeMusic.yaml"
        ]
    },
    { 
        name: "Google", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google_No_Resolve.yaml" 
    },
    { 
        name: "CnGameDownload", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownloadCN/GameDownloadCN.yaml" 
    },
    { 
        name: "SteamCN", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/SteamCN/SteamCN.yaml" 
    },
    { 
        name: "Steam", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Steam/Steam_No_Resolve.yaml" 
    },
    { 
        name: "Game", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/Game.yaml" 
    },
    { 
        name: "OneDrive", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OneDrive/OneDrive_No_Resolve.yaml" 
    },
    { 
        name: "Microsoft", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft_No_Resolve.yaml" 
    },
    { 
        name: "Discord", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Discord/Discord.yaml" 
    },
    {
        name: "Anime",
        gfw: true,
        urls: [
            "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Bahamut/Bahamut.yaml",
        ] 
    },
    { 
        name: "Twitter", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter_No_Resolve.yaml" 
    },
    
    {
        name: "Telegram",
        gfw: true,
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Telegram/Telegram_No_Resolve.yaml" 
    },
    {
        name: "Reddit",
        gfw: true,
        urls: "https://rule.kelee.one/Clash/Reddit.yaml" 
    },
    { 
        name: "TikTok", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok_No_Resolve.yaml" 
    },
    { 
        name: "Netflix", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix_No_Resolve.yaml" 
    },
    { 
        name: "Facebook", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Facebook/Facebook_No_Resolve.yaml" 
    },
    {
        name: "Disney",
        gfw: true,
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Disney/Disney_No_Resolve.yaml" 
    },
    
    // 在此添加更多规则...
    
    // 新增规则 - 来自YAML配置
    { 
        name: "AWAvenue_Ads_Rule", 
        gfw: false, 
        extraProxies: "REJECT", 
        urls: "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml" 
    },
    { 
        name: "Blackmatrix7_Ads", 
        gfw: false, 
        extraProxies: "REJECT", 
        urls: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising.yaml" 
    },
    { 
        name: "Privacy", 
        gfw: false, 
        extraProxies: "REJECT", 
        urls: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Privacy/Privacy.yaml" 
    },
    { 
        name: "Hijacking", 
        gfw: false, 
        extraProxies: "REJECT", 
        urls: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Hijacking/Hijacking.yaml" 
    },
    { 
        name: "Trackerslist", 
        gfw: false, 
        urls: "https://github.com/DustinWin/ruleset_geodata/raw/refs/heads/mihomo-ruleset/trackerslist.mrs" 
    },


    { 
        name: "Cloudflare", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Cloudflare/Cloudflare_No_Resolve.yaml" 
    },
    {
        name: "Proxy",
        gfw: true,
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Proxy/Proxy_No_Resolve.yaml" 
    },
];

/**
 * DNS 配置
 * 可根据需要修改DNS服务器
 */
const DNS_CONFIG = {
    // 国际可信DNS (加密) - 按优先级排序
    trustDnsList: [
        "https://1.1.1.1/dns-query",         // Cloudflare 主
        "https://1.0.0.1/dns-query",         // Cloudflare 备
        "https://208.67.222.222/dns-query",  // OpenDNS 主
        "https://208.67.220.220/dns-query",  // OpenDNS 备
        "https://194.242.2.2/dns-query",     // AdGuard 主
        "https://194.242.2.3/dns-query",     // AdGuard 备
        "https://dns.google/dns-query",      // Google 主
        "https://8.8.8.8/dns-query"          // Google 备
    ],
    
    // 默认DNS (用于解析域名服务器) - 国内优先，国际备用
    defaultDNS: [
        "223.5.5.5",        // 阿里DNS (国内最快)
        "119.29.29.29",     // 腾讯DNS (国内稳定)
        "1.12.12.12",       // DNSPod (国内企业级)
        "1.1.1.1",          // Cloudflare (国际最快)
        "8.8.8.8"           // Google (国际备用)
    ],
    
    // 中国大陆DNS服务器 - 按企业级程度和稳定性排序
    cnDnsList: [
        "https://dns.alidns.com/dns-query",      // 阿里云DNS (最快)
        "https://1.12.12.12/dns-query",          // DNSPod (腾讯云，企业级)
        "https://doh.pub/dns-query",             // 腾讯云DNS (备用)
        "https://doh.360.cn/dns-query"           // 360安全DNS
    ],
    
    // DNS隐私保护过滤器 - 合并完整版，涵盖所有重要的过滤规则
    fakeIpFilter: [
        // 基础本地域名
        "*.lan",
        "*.localdomain", 
        "*.example",
        "*.invalid",
        "*.localhost",
        "*.test",
        "*.local",
        "*.home.arpa",
        "+.lan",
        "+.local",
        
        // Microsoft连接测试
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        
        // 腾讯本地服务
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com", 
        "localhost.work.weixin.qq.com",
        "+.qq.com",
        "+.tencent.com",
        
        // 时间同步服务
        "time.*.com",
        "time.*.gov",
        "time.*.edu.cn",
        "time.*.apple.com",
        "time-ios.apple.com",
        "time1.*.com",
        "time2.*.com",
        "time3.*.com",
        "time4.*.com",
        "time5.*.com",
        "time6.*.com",
        "time7.*.com",
        "time1.cloud.tencent.com",
        
        // NTP服务
        "ntp.*.com",
        "ntp1.*.com",
        "ntp2.*.com",
        "ntp3.*.com",
        "ntp4.*.com",
        "ntp5.*.com",
        "ntp6.*.com",
        "ntp7.*.com",
        "*.time.edu.cn",
        "*.ntp.org.cn",
        "+.pool.ntp.org",
        
        // 音乐服务
        "music.163.com",
        "*.music.163.com",
        "*.126.net",
        "musicapi.taihe.com",
        "music.taihe.com",
        "songsearch.kugou.com",
        "trackercdn.kugou.com",
        "*.kuwo.cn",
        "api-jooxtt.sanook.com",
        "api.joox.com",
        "joox.com",
        "y.qq.com",
        "*.y.qq.com",
        "streamoc.music.tc.qq.com",
        "mobileoc.music.tc.qq.com",
        "isure.stream.qqmusic.qq.com",
        "dl.stream.qqmusic.qq.com",
        "aqqmusic.tc.qq.com",
        "amobile.music.tc.qq.com",
        "*.xiami.com",
        "*.music.migu.cn",
        "music.migu.cn",
        
        // 游戏平台
        "+.srv.nintendo.net",
        "*.n.n.srv.nintendo.net",
        "+.cdn.nintendo.net",
        "+.stun.playstation.net",
        "xbox.*.*.microsoft.com",
        "*.*.xboxlive.com",
        "xbox.*.microsoft.com",
        "xnotify.xboxlive.com",
        "+.battlenet.com.cn",
        "+.wotgame.cn",
        "+.wggames.cn",
        "+.wowsgame.cn",
        "+.wargaming.net",
        "*.square-enix.com",
        "*.finalfantasyxiv.com",
        "*.ffxiv.com",
        "*.ff14.sdo.com",
        "ff.dorado.sdo.com",
        "+.ea.com",
        "+.respawn.com",
        "+.mihoyo.com",
        
        // STUN服务
        "stun.*.*",
        "stun.*.*.*",
        "+.stun.*.*",
        "+.stun.*.*.*",
        "+.stun.*.*.*.*",
        "+.stun.*.*.*.*.*",
        "lens.l.google.com",
        "stun.l.google.com",
        "na.b.g-tun.com",
        
        // 苹果服务
        "mesu.apple.com",
        "swscan.apple.com",
        "swquery.apple.com",
        "swdownload.apple.com",
        "swcdn.apple.com",
        "swdist.apple.com",
        
        // 路由器和网络设备
        "heartbeat.belkin.com",
        "*.linksys.com",
        "*.linksyssmartwifi.com",
        "*.router.asus.com",
        
        // 其他服务
        "proxy.golang.org",
        "+.nflxvideo.net",
        "*.mcdn.bilivideo.cn",
        "+.media.dssott.com",
        "shark007.net",
        "MijiaCloud",
        "+.cmbchina.com",
        "+.cmbimg.com",
        "local.adguard.org",
        "+.sandai.net",
        "+.n0808.com",
        "+.uu.163.com",
        "ps.res.netease.com",
        "+.pub.3gppnetwork.org",
        "+.services.googleapis.cn",
        "+.xn--ngstr-lra8j.com",
        "+.googleapis.cn",
        
        // 现代网络服务
        "*.docker.internal",
        "host.docker.internal",
        "gateway.docker.internal",
        "+.internal",
        "*.corp",
        "*.home",
        
        // 开发和测试
        "*.dev",
        "*.test",
        "*.localhost",
        "*.local",
        // Geosite规则
        "geosite:category-games",
        "api.joox.com",
        "joox.com",
        "y.qq.com",
        "*.y.qq.com",
        "streamoc.music.tc.qq.com",
        "mobileoc.music.tc.qq.com",
        "isure.stream.qqmusic.qq.com",
        "dl.stream.qqmusic.qq.com",
        "aqqmusic.tc.qq.com",
        "amobile.music.tc.qq.com",
        "*.xiami.com",
        "*.music.migu.cn",
        "music.migu.cn",
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        "localhost.work.weixin.qq.com",
        "+.qq.com",
        "+.tencent.com",
        "+.srv.nintendo.net",
        "*.n.n.srv.nintendo.net",
        "+.cdn.nintendo.net",
        "+.stun.playstation.net",
        "xbox.*.*.microsoft.com",
        "*.*.xboxlive.com",
        "xbox.*.microsoft.com",
        "xnotify.xboxlive.com",
        "+.battlenet.com.cn",
        "+.wotgame.cn",
        "+.wggames.cn",
        "+.wowsgame.cn",
        "+.wargaming.net",
        "proxy.golang.org",
        "stun.*.*",
        "stun.*.*.*",
        "+.stun.*.*",
        "+.stun.*.*.*",
        "+.stun.*.*.*.*",
        "+.stun.*.*.*.*.*",
        "heartbeat.belkin.com",
        "*.linksys.com",
        "*.linksyssmartwifi.com",
        "*.router.asus.com",
        "mesu.apple.com",
        "swscan.apple.com",
        "swquery.apple.com",
        "swdownload.apple.com",
        "swcdn.apple.com",
        "swdist.apple.com",
        "lens.l.google.com",
        "stun.l.google.com",
        "na.b.g-tun.com",
        "+.nflxvideo.net",
        "*.square-enix.com",
        "*.finalfantasyxiv.com",
        "*.ffxiv.com",
        "*.ff14.sdo.com",
        "ff.dorado.sdo.com",
        "*.mcdn.bilivideo.cn",
        "+.media.dssott.com",
        "shark007.net",
        "MijiaCloud",
        "+.cmbchina.com",
        "+.cmbimg.com",
        "local.adguard.org",
        "+.sandai.net",
        "+.n0808.com",
        "+.uu.163.com",
        "ps.res.netease.com",
        "+.pub.3gppnetwork.org",
        "geosite:category-games",
        "+.services.googleapis.cn",
        "+.xn--ngstr-lra8j.com",
        "+.mihoyo.com",
        "+.ea.com",
        "+.respawn.com",
        "+.googleapis.cn",
        "geosite:cn",
    ],
    
    // 指定域名使用的DNS服务器
    // 格式: "域名或geosite": DNS服务器
    nameserverPolicy: {
        "geosite:private": "system",
        "geosite:cn,steam@cn,category-games@cn,microsoft@cn,apple@cn": "cnDnsList"
    },
    
    // 需要指定使用国外DNS的域名
    fallbackDomains: [
        "+.azure.com", "+.bing.com", "+.bingapis.com",
        "+.cloudflare.net", "+.docker.com", "+.docker.io",
        "+.facebook.com", "+.github.com", "+.githubusercontent.com",
        "+.google.com", "+.gstatic.com", "+.google.dev",
        "+.googleapis.cn", "+.googleapis.com", "+.googlevideo.com",
        "+.instagram.com", "+.meta.ai", "+.microsoft.com",
        "+.microsoftapp.net", "+.msn.com", "+.openai.com",
        "+.poe.com", "+.t.me", "+.twitter.com",
        "+.x.com", "+.youtube.com"
    ]
};

// ==================== 系统实现区（一般不需要修改） ====================

// 预编译高质量节点匹配的正则表达式
const HIGH_QUALITY_REGEX = new RegExp(HIGH_QUALITY_KEYWORDS.join("|"), "i");

// 构建DNS配置对象
const dns = buildDnsConfig(DNS_CONFIG);

// ==================== 辅助函数部分 ====================

/**
 * 构建DNS配置对象
 * @param {Object} config - DNS配置参数
 * @returns {Object} 完整的DNS配置对象
 */
function buildDnsConfig(config) {
    return {
        enable: true,
        listen: "0.0.0.0:1053",
        ipv6: true,
        "prefer-h3": true,
        "respect-rules": true,
        "cache-algorithm": "arc",
        "cache-size": 2048,
        "use-hosts": false,
        "use-system-hosts": false,
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        "fake-ip-filter": [
            "geosite:connectivity-check",
            "geosite:private",
            ...config.fakeIpFilter
        ],
        "default-nameserver": config.defaultDNS,
        nameserver: [
            // 优先使用国内DNS，然后是国际DNS
            ...config.cnDnsList,
            ...config.trustDnsList
        ],
        "proxy-server-nameserver": [
            // 优先使用国内DNS，然后是国际DNS
            ...config.cnDnsList,
            ...config.trustDnsList
        ],
        "nameserver-policy": {
            "geosite:cn,private": config.cnDnsList,
            "geo:cn": config.cnDnsList,
            "geosite:geolocation-cn": config.cnDnsList,
            "geosite:gfw": config.trustDnsList,
            "geosite:geolocation-!cn": config.trustDnsList,
            "full-nameserver": config.trustDnsList
        },
        fallback: config.trustDnsList,
        "fallback-filter": {
            geoip: true,
            "geoip-code": "CN",
            geosite: ["gfw"],
            ipcidr: ["240.0.0.0/4"],
            domain: config.fallbackDomains
        }
    };
}

/**
 * 创建规则提供器配置 - 使用对象复用优化性能
 * @param {string} url - 规则集URL
 * @returns {Object} 规则提供器配置对象
 */
function createRuleProviderUrl(url) {
    const defaultOptions = {
        type: "http",
        interval: 86400,
        behavior: "classical",
        format: "yaml",
        url: url
    };
    
    // 根据URL自动检测格式
    if (url.includes('.mrs')) {
        defaultOptions.format = "mrs";
        defaultOptions.behavior = url.includes('ip') ? "ipcidr" : "domain";
    }
    
    return defaultOptions;
}

/**
 * 创建payload对应的规则 - 优化数组操作
 * @param {string|string[]} payload - 规则内容
 * @param {string} name - 规则名称
 * @returns {string[]} 处理后的规则列表
 */
function createPayloadRules(payload, name) {
    const payloads = Array.isArray(payload) ? payload : [payload];
    const len = payloads.length;
    const rules = new Array(len);
    // 直接调用 replace 而非 replaceAll（多数环境中效果相似且高效）
    const normalizedName = name.split(",").join("-");
    
    for (let i = 0; i < len; i++) {
        const item = payloads[i];
        const p = item.split(",");
        let insertPos = p.length;
        
        // 比较时避免转换大小写
        const last = p[p.length - 1];
        if (last === "no-resolve" || last === "NO-RESOLVE") {
            insertPos--;
        }
        
        p.splice(insertPos, 0, normalizedName);
        rules[i] = p.join(",");
    }
    
    return rules;
}

/**
 * 创建GFW（被墙）代理组
 * @param {string} name - 代理组名称
 * @param {string|string[]} addProxies - 额外代理
 * @param {string} testUrl - 测试链接
 * @returns {Object} 代理组配置
 */
function createGfwProxyGroup(name, addProxies, testUrl) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
        "name": name,
        "type": "select",
        "proxies": [...addProxies, "DIRECT", "自动选择(最低延迟)", "国外网站", "被墙网站", "HighQuality", "负载均衡"],
        "include-all": true,
        "url": testUrl
    }
}

/**
 * 创建普通（非GFW）代理组
 * @param {string} name - 代理组名称
 * @param {string|string[]} addProxies - 额外代理
 * @param {string} testUrl - 测试链接
 * @returns {Object} 代理组配置
 */
function createProxyGroup(name, addProxies, testUrl) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
        "name": name,
        "type": "select",
        "proxies": [...addProxies, "DIRECT", "自动选择(最低延迟)", "国外网站", "被墙网站", "HighQuality", "负载均衡"],
        "include-all": true,
        "url": testUrl
    }
}

/**
 * 筛选高质量节点 - 使用正则表达式优化性能
 * @param {Array} proxies - 所有代理节点
 * @returns {Array} 符合条件的高质量节点名称列表
 */
function filterHighQualityProxies(proxies) {
    if (!proxies || !Array.isArray(proxies)) {
        return [];
    }
    
    const result = [];
    const len = proxies.length;
    const regex = HIGH_QUALITY_REGEX; // 缓存引用
    
    for (let i = 0; i < len; i++) {
        const proxy = proxies[i];
        const proxyName = proxy.name || "";
        if (regex.test(proxyName)) {
            result.push(proxyName);
        }
    }
    
    return result;
}

/**
 * 主函数：生成完整的Clash配置
 * @param {Object} config - 输入配置
 * @returns {Object} 完整的Clash配置
 */
function main(config) {
    const { proxies } = config;
    const testUrl = CONFIG.testUrl;

    // 筛选高质量节点
    const highQualityProxies = filterHighQualityProxies(proxies);

    // 初始化规则和代理组
    const rules = USER_RULES.slice();
    const proxyGroups = [];
    const gfwProxyGroups = [];

    // 规则集通用配置
    const ruleProviderCommon = {
        type: "http",
        format: "yaml",
        interval: 86400
    };

    // 初始化规则提供器
    const ruleProviders = {
        reject: {
            ...ruleProviderCommon,
            behavior: "domain",
            url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
            path: "./ruleset/loyalsoldier/reject.yaml"
        },
        cncidr: {
            ...ruleProviderCommon,
            behavior: "ipcidr",
            url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
            path: "./ruleset/loyalsoldier/cncidr.yaml"
        },
        direct: {
            ...ruleProviderCommon,
            behavior: "domain",
            url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
            path: "./ruleset/loyalsoldier/direct.yaml"
        }
    };

    const configLen = PROXY_RULES.length;
    for (let i = 0; i < configLen; i++) {
        const { name, gfw, urls, payload, extraProxies } = PROXY_RULES[i];

        // 创建代理组
        if (gfw) {
            gfwProxyGroups.push(createGfwProxyGroup(name, extraProxies, testUrl));
        } else {
            proxyGroups.push(createProxyGroup(name, extraProxies, testUrl));
        }

        // 处理规则
        if (payload) {
            rules.push(...createPayloadRules(payload, name));
        } else if (urls) {
            const urlList = Array.isArray(urls) ? urls : [urls];
            const urlLen = urlList.length;
            for (let j = 0; j < urlLen; j++) {
                const theUrl = urlList[j];
                const iName = `${name}-rule${j !== 0 ? `-${j}` : ''}`;
                ruleProviders[iName] = createRuleProviderUrl(theUrl);
                rules.push(`RULE-SET,${iName},${name}`);
            }
        }
    }

    // 构建基本代理组
    const baseProxyGroups = buildBaseProxyGroups(testUrl, highQualityProxies);

    // 构建最终配置
    return {
        "mode": "rule",
        "allow-lan": true,
        "bind-address": "*",
        "ipv6": true,
        "log-level": "warning",
        "find-process-mode": "strict",
        "global-client-fingerprint": "chrome",
        "unified-delay": true,
        "tcp-concurrent": true,
        "keep-alive-idle": 600,
        "keep-alive-interval": 15,
        "disable-keep-alive": false,

        "geodata-mode": true,
        "geodata-loader": "memconservative",

        // 是否自动更新 GEO 数据库，默认每48小时更新一次
        "geo-auto-update": true,
        // GEO 数据库更新间隔时间，单位为小时
        "geo-update-interval": 48,

        "geox-url": {
            geoip: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip.dat",
            geosite: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
            mmdb: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip.metadb",
            asn: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb",
        },
        
        // 流量嗅探配置
        "sniffer": {
            "enable": true,
            "sniff": {
                "HTTP": {
                    "ports": [80, "8080-8880"],
                    "override-destination": true
                },
                "TLS": {
                    "ports": [443, 8443]
                },
                "QUIC": {
                    "ports": [443, 8443]
                }
            },
            "force-domain": ["+.v2ex.com"],
            "skip-domain": ["+.baidu.com", "+.bilibili.com"]
        },
        
        // TUN 配置
        "tun": {
            "enable": false,
            "stack": "mixed",
            "auto-route": true,
            "auto-redirect": true,
            "auto-detect-interface": true,
            "strict-route": true,
            "dns-hijack": ["any:53", "tcp://any:53"],
            "mtu": 1500,
            "gso": true,
            "gso-max-size": 65536,
            "udp-timeout": 300
        },

        // Profile设置
        "profile": {
            "store-selected": true,
            "store-fake-ip": true
        },
        
        dns,
        proxies,
        "proxy-groups": [
            ...baseProxyGroups,
            ...gfwProxyGroups,
            ...proxyGroups,
        ],
        "rule-providers": ruleProviders,
        rules: [
            ...rules,
            ...SAVED_RULES
        ]
    };
}

/**
 * 构建基本代理组
 * @param {string} testUrl - 测试URL
 * @param {Array} highQualityProxies - 高质量节点列表
 * @returns {Array} 基本代理组配置
 */
function buildBaseProxyGroups(testUrl, highQualityProxies) {
    return [
        // 基本代理组
        {
            "name": "国内网站",
            "type": "select",
            "proxies": ["DIRECT", "自动选择(最低延迟)", "负载均衡", "HighQuality"],
            "include-all": true,
            "url": "https://www.baidu.com/favicon.ico"
        },
        {
            "name": "国外网站",
            "type": "select",
            "proxies": ["DIRECT", "自动选择(最低延迟)", "负载均衡", "HighQuality"],
            "include-all": true,
            "url": "https://www.bing.com/favicon.ico"
        },
        {
            "name": "被墙网站",
            "type": "select",
            "proxies": ["自动选择(最低延迟)", "负载均衡", "DIRECT", "HighQuality"],
            "include-all": true,
            "url": testUrl
        },
        // 高质量节点组
        {
            "name": "HighQuality",
            "type": "select",
            "proxies": [
                "自动选择(最低延迟)",
                "负载均衡",
                "DIRECT",
                ...(highQualityProxies.length > 0 ? highQualityProxies : [])
            ]
        },
        // 自动选择和负载均衡
        {
            "name": "自动选择(最低延迟)",
            "type": "url-test",
            "tolerance": CONFIG.tolerance,
            "include-all": true,
            "url": testUrl,
            "interval": CONFIG.testInterval
        },
        {
            "name": "负载均衡",
            "type": "load-balance",
            "include-all": true,
            "strategy": CONFIG.balanceStrategy,
            "url": testUrl,
            "interval": CONFIG.testInterval
        }
    ];
}