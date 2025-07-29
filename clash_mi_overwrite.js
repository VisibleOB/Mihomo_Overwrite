// 需要排除的节点名称正则
const excludeRegexStr = "^(?!.*(测试)).*";
const excludeRegex = new RegExp(excludeRegexStr, "u");

const ruleProviders = {
    "Nikke": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/Nikke/Nikke.yaml",
    "path": "./ruleset/tnnevol/Nikke.yaml"
  },
  "LocalAreaNetwork": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/LocalAreaNetwork.txt",
    "path": "./ruleset/tnnevol/LocalAreaNetwork.yaml"
  },
  "BanAD": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/BanAD.txt",
    "path": "./ruleset/tnnevol/BanAD.yaml"
  },
  "BanProgramAD": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/BanProgramAD.txt",
    "path": "./ruleset/tnnevol/BanProgramAD.yaml"
  },
  "GoogleFCM": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/GoogleFCM.txt",
    "path": "./ruleset/tnnevol/GoogleFCM.yaml"
  },
  "Microsoft": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Microsoft.txt",
    "path": "./ruleset/tnnevol/Microsoft.yaml"
  },
  "Apple": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Apple.txt",
    "path": "./ruleset/tnnevol/Apple.yaml"
  },
  "Telegram": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Telegram.txt",
    "path": "./ruleset/tnnevol/Telegram.yaml"
  },
  "Ai": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://kelee.one/Tool/Clash/Rule/AI.yaml",
    "path": "./ruleset/tnnevol/Ai.yaml"
  },


  "YouTube": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/YouTube.txt",
    "path": "./ruleset/tnnevol/YouTube.yaml"
  },

  "Bahamut": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Bahamut.txt",
    "path": "./ruleset/tnnevol/Bahamut.yaml"
  },


  "ProxyMedia": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/ProxyMedia.txt",
    "path": "./ruleset/tnnevol/ProxyMedia.yaml"
  },
  "ProxyGFWlist": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/ProxyGFWlist.txt",
    "path": "./ruleset/tnnevol/ProxyGFWlist.yaml"
  }
};

const rules = [
    ...[
  "DOMAIN-SUFFIX,stamp.mp.nexon.com,BA",
  "DOMAIN-SUFFIX,m.nexon.com,BA",
  "DOMAIN-SUFFIX,ba.dn.nexoncdn.co.kr,BA",
  "DOMAIN-SUFFIX,nxm-eu-bagl.nexon.com,BA",
  "DOMAIN-SUFFIX,api.ngsm.nexon.com,BA",
  "DOMAIN-SUFFIX,log.ngsm.nexon.com,BA",
  "DOMAIN-SUFFIX,sdk-push.mp.nexon.com,BA",
  "DOMAIN-SUFFIX,m-api.nexon.com,BA",
  "DOMAIN-SUFFIX,jp.livelog.nexon.com,BA",
  "RULE-SET,Nikke,Nikke",
  "RULE-SET,LocalAreaNetwork,🎯 全球直连",
  "RULE-SET,BanAD,🛑 广告拦截",
  "RULE-SET,BanProgramAD,🍃 应用净化",
  "RULE-SET,GoogleFCM,📢 谷歌FCM",
  "RULE-SET,Microsoft,Ⓜ️ 微软服务",
  "RULE-SET,Apple,🍎 苹果服务",
  "RULE-SET,Telegram,📲 电报消息",
  "RULE-SET,Ai,💬 Ai",
  "RULE-SET,YouTube,📹 油管视频",
  "RULE-SET,Bahamut,📺 巴哈姆特",
  "RULE-SET,ProxyMedia,🌍 国外媒体",
  "RULE-SET,ProxyGFWlist,🚀 节点选择"
],
    // 其他规则
    ...[],
    "GEOIP,LAN,🎯 全球直连,no-resolve",
    "GEOIP,CN,🎯 全球直连,no-resolve",
    "MATCH,🐟 漏网之鱼"
];

// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 获取符合正则表达式的代理组
function getProxiesByRegex(proxies, regex, concatProxies = []) {
  return [
    ...proxies
      .filter((e) => regex.test(e.name) && excludeRegex.test(e.name))
      .map((e) => e.name),
    ...concatProxies,
  ];
}

function main(config) {
    // 狮城地区
    const SingaporeRegex = /新加坡|坡|狮城|SG|Singapore/u;
    const SingaporeProxies = getProxiesByRegex(config.proxies, SingaporeRegex);

    // 日本地区
    const JapanRegex = /日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|Tokyo/u;
    const JapanProxies = getProxiesByRegex(config.proxies, JapanRegex);

    // 美国地区
    const AmericaRegex =
        /美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States/u;
    const AmericaProxies = getProxiesByRegex(config.proxies, AmericaRegex);

    // 台湾地区
    const TaiwanRegex = /台|新北|彰化|TW|Taiwan/u;
    const TaiwanProxies = getProxiesByRegex(config.proxies, TaiwanRegex);

    // 🇭🇰 香港节点
    const HongKongRegex = /港|HK|hk|Hong Kong|HongKong|hongkong|Hongkong|🇭🇰/u;
    const HongKongProxies = getProxiesByRegex(config.proxies, HongKongRegex);

    // 🇺🇲 美国节点
    const US = {
        ...groupBaseOption,
        name: "🇺🇲 美国节点",
        type: "url-test",
        tolerance: 30,
        proxies: AmericaProxies,
    };

    // 🇭🇰 香港节点
    const HongKong = {
        ...groupBaseOption,
        name: "🇭🇰 香港节点",
        type: "url-test",
        tolerance: 30,
        proxies: HongKongProxies,
    };

    // 🇨🇳 台湾节点
    const Taiwan = {
        ...groupBaseOption,
        name: "🇨🇳 台湾节点",
        type: "url-test",
        tolerance: 30,
        proxies: TaiwanProxies,
    };

    // 🇯🇵 日本节点
    const Japan = {
        ...groupBaseOption,
        name: "🇯🇵 日本节点",
        type: "url-test",
        tolerance: 30,
        proxies: JapanProxies,
    };

    // 🇸🇬 狮城节点
    const Singapore = {
        ...groupBaseOption,
        name: "🇸🇬 狮城节点",
        type: "url-test",
        tolerance: 30,
        proxies: SingaporeProxies,
    };

    // 所有区域节点
    const allAreaGroup = [HongKong, Taiwan, US, Japan, Singapore]
        .filter((point) => {
            return point.proxies.length > 0;
        })
    const allAreaProxiesNames = allAreaGroup
        .map((point) => point.name);

    // 通用的节点组
    const commonProxies = [
        "♻️ 自动选择",
        "🚀 手动切换",
        "故障转移",
        "负载均衡(散列)",
        "负载均衡(轮询)",
        ...allAreaProxiesNames,
        "DIRECT",
    ];

    // 覆盖原配置中DNS配置
    config["dns"] = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "respect-rules": true,
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
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
    "geosite:cn"
  ],
  "default-nameserver": [
    "223.5.5.5",        // 阿里DNS (国内最快)
    "119.29.29.29",     // 腾讯DNS (国内稳定)
    "1.12.12.12",       // DNSPod (国内企业级)
    "1.1.1.1",          // Cloudflare (国际最快)
    "8.8.8.8"           // Google (国际备用)
  ],
  "nameserver": [
    // 国内DNS优先
    "https://dns.alidns.com/dns-query",      // 阿里云DNS
    "https://1.12.12.12/dns-query",          // DNSPod (腾讯云)
    "https://doh.pub/dns-query",             // 腾讯云DNS
    "https://doh.360.cn/dns-query",          // 360安全DNS
    // 国际DNS备用
    "https://1.1.1.1/dns-query",             // Cloudflare 主
    "https://1.0.0.1/dns-query",             // Cloudflare 备
    "https://208.67.222.222/dns-query",      // OpenDNS 主
    "https://208.67.220.220/dns-query",      // OpenDNS 备
    "https://194.242.2.2/dns-query",         // AdGuard 主
    "https://194.242.2.3/dns-query",         // AdGuard 备
    "https://dns.google/dns-query",          // Google 主
    "https://8.8.8.8/dns-query"              // Google 备
  ],
  "proxy-server-nameserver": [
    // 代理服务器解析使用相同优先级
    "https://dns.alidns.com/dns-query",
    "https://1.12.12.12/dns-query",
    "https://doh.pub/dns-query",
    "https://doh.360.cn/dns-query",
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query",
    "https://dns.google/dns-query",
    "https://8.8.8.8/dns-query"
  ],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": [
      "https://dns.alidns.com/dns-query",
      "https://1.12.12.12/dns-query",
      "https://doh.pub/dns-query",
      "https://doh.360.cn/dns-query"
    ],
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": [
      "https://1.1.1.1/dns-query",
      "https://1.0.0.1/dns-query",
      "https://208.67.222.222/dns-query",
      "https://208.67.220.220/dns-query",
      "https://194.242.2.2/dns-query",
      "https://194.242.2.3/dns-query",
      "https://dns.google/dns-query",
      "https://8.8.8.8/dns-query"
    ]
  },
  "fallback": [
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query",
    "https://dns.google/dns-query",
    "https://8.8.8.8/dns-query"
  ],
  "fallback-filter": {
    "geoip": true,
    "geoip-code": "CN",
    "geosite": ["gfw"],
    "ipcidr": ["240.0.0.0/4"],
    "domain": [
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
  }
};
    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    
    
    config["proxy-groups"] = [
        {
            ...groupBaseOption,
            name: "🚀 节点选择",
            type: "select",
            proxies: commonProxies,
        },
        {
            ...groupBaseOption,
            name: "🚀 手动切换",
            type: "select",
            filter: excludeRegexStr,
            "include-all": true,
        },
        {
            ...groupBaseOption,
            name: "♻️ 自动选择",
            type: "url-test",
            tolerance: 100,
            filter: excludeRegexStr,
            "include-all": true,
        },
        {
            ...groupBaseOption,
            name: "故障转移",
            type: "fallback",
            filter: excludeRegexStr,
            "include-all": true,
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg",
        },
        {
            ...groupBaseOption,
            name: "负载均衡(散列)",
            type: "load-balance",
            strategy: "consistent-hashing",
            filter: excludeRegexStr,
            "include-all": true,
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg",
        },
        {
            ...groupBaseOption,
            name: "负载均衡(轮询)",
            type: "load-balance",
            strategy: "round-robin",
            filter: excludeRegexStr,
            "include-all": true,
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg",
        },
        {
            ...groupBaseOption,
            url: "https://chatgpt.com",
            "expected-status": "200",
            name: "💬 Ai",
            type: "select",
            "include-all": true,
            filter:
                "^(?!.*(家宽)).*",
        },
        ...[
            "📲 电报消息",
            "📹 油管视频",
            "🌍 国外媒体",
            "📢 谷歌FCM",
            "Ⓜ️ 微软服务",
            "🍎 苹果服务",
            "🐟 漏网之鱼",
            "Nikke",
            "BA",
            ...[]
        ].map((name) => ({
            ...groupBaseOption,
            name,
            type: "select",
            proxies: commonProxies
        })),

        {
            ...groupBaseOption,
            name: "📺 巴哈姆特",
            type: "select",
            proxies: commonProxies,
        },


        {
            ...groupBaseOption,
            name: "🎯 全球直连",
            type: "select",
            proxies: ["DIRECT", "🚀 节点选择", "♻️ 自动选择"],
        },
        {
            ...groupBaseOption,
            name: "🛑 广告拦截",
            type: "select",
            proxies: ["REJECT", "DIRECT"],
        },
        {
            ...groupBaseOption,
            name: "🍃 应用净化",
            type: "select",
            proxies: ["REJECT", "DIRECT"],
        },
        ...allAreaGroup
    ];


    return config;
}
  