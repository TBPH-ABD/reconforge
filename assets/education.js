/* ReconForge — Methodology and About content. Text only: no icons, no emoji, no decorative glyphs. */

window.RECON_EDU = [
'<h1>Reconnaissance Methodology</h1>',
'<p class="lead">Reconnaissance is the discipline of learning everything you are permitted to learn about a target before you test it. Good recon is what separates a thorough assessment from a shallow one. This guide explains why each phase exists, how the phases connect, and how to run them responsibly.</p>',

'<div class="toc"><h4>Contents</h4><ol>',
'<li><a href="#s-auth">Authorization comes first</a></li>',
'<li><a href="#s-what">What reconnaissance is</a></li>',
'<li><a href="#s-passive">Passive versus active</a></li>',
'<li><a href="#s-lifecycle">The reconnaissance lifecycle</a></li>',
'<li><a href="#s-dns">Basic information and DNS</a></li>',
'<li><a href="#s-subs">Subdomain enumeration</a></li>',
'<li><a href="#s-ports">Port scanning and services</a></li>',
'<li><a href="#s-http">HTTP probing and fingerprinting</a></li>',
'<li><a href="#s-crawl">Crawling and URL collection</a></li>',
'<li><a href="#s-content">Content discovery and fuzzing</a></li>',
'<li><a href="#s-params">Parameter and JavaScript analysis</a></li>',
'<li><a href="#s-vuln">Vulnerability scanning</a></li>',
'<li><a href="#s-testing">The active testing phases</a></li>',
'<li><a href="#s-workflow">Building a repeatable workflow</a></li>',
'<li><a href="#s-wordlists">Wordlists and resolvers</a></li>',
'<li><a href="#s-opsec">Rate, noise and being a good guest</a></li>',
'<li><a href="#s-report">From findings to a report</a></li>',
'</ol></div>',

'<h2 id="s-auth">Authorization comes first</h2>',
'<p>Every command in this reference can be run only against systems you are explicitly authorized to test. Authorization is not a formality; it is the line between security research and a criminal offence. Before a single packet leaves your machine, confirm three things.</p>',
'<ol>',
'<li>You have written permission, or the target is inside the published scope of a bug bounty program.</li>',
'<li>You understand the boundaries of that scope: which domains, which IP ranges, which kinds of testing are allowed, and which are forbidden.</li>',
'<li>You know what to do if you find something serious, and how to stop safely if you cause an unexpected effect.</li>',
'</ol>',
'<div class="note"><strong>Scope discipline.</strong> A wildcard such as <code>*.example.com</code> almost never includes third-party services the company merely uses. Acquisitions, staging domains and partner portals are frequently out of scope even when they look related. When in doubt, ask the program, and keep a written record of the answer.</div>',

'<h2 id="s-what">What reconnaissance is</h2>',
'<p>Reconnaissance answers one question: what does this target actually consist of? Organizations rarely have a single server. They have domains and subdomains, cloud buckets, APIs, forgotten staging environments, third-party integrations and code published by their own developers. The attack surface is the sum of all of it, and most of it is invisible until you go looking.</p>',
'<p>The goal is not to run every tool. The goal is to build an accurate map. Each tool exists to reveal one kind of information; you choose tools to fill gaps in the map, not to collect output for its own sake.</p>',

'<h2 id="s-passive">Passive versus active</h2>',
'<p>Passive reconnaissance gathers information without sending traffic to the target. It reads public records: certificate transparency logs, DNS databases, search engines, code repositories and archived pages. It is quiet, low risk and often surprisingly complete.</p>',
'<p>Active reconnaissance sends traffic to the target directly: resolving hostnames, scanning ports, probing web servers and fuzzing for hidden content. It reveals more, but it is observable and can affect the systems you touch. As a rule, exhaust passive sources first, then move to active techniques against the surface you have confirmed.</p>',

'<h2 id="s-lifecycle">The reconnaissance lifecycle</h2>',
'<p>The phases build on one another. Output from an early phase becomes the input to the next, which is why order matters.</p>',
'<div class="phase-map">',
'<div class="pm"><div class="n">Phase 1</div><div class="t">Identity and DNS</div><div class="d">Establish ownership, name servers and the records that describe the domain.</div></div>',
'<div class="pm"><div class="n">Phase 2</div><div class="t">Subdomain enumeration</div><div class="d">Expand one domain into the full family of hostnames that belong to it.</div></div>',
'<div class="pm"><div class="n">Phase 3</div><div class="t">Resolution and ports</div><div class="d">Turn hostnames into live hosts, then into open ports and running services.</div></div>',
'<div class="pm"><div class="n">Phase 4</div><div class="t">HTTP probing</div><div class="d">Identify which hosts serve web content and what technology runs there.</div></div>',
'<div class="pm"><div class="n">Phase 5</div><div class="t">Content and parameters</div><div class="d">Discover routes, files and inputs the application does not advertise.</div></div>',
'<div class="pm"><div class="n">Phase 6</div><div class="t">Analysis and validation</div><div class="d">Read JavaScript, hunt for secrets, and scan the confirmed surface for issues.</div></div>',
'</div>',

'<h2 id="s-dns">Basic information and DNS</h2>',
'<p>Start with ownership and structure. WHOIS records, name servers and DNS record types tell you who runs the domain and how it is wired. The <code>A</code> and <code>AAAA</code> records point to hosts. <code>MX</code> records reveal the mail provider. <code>TXT</code> records often leak the third-party services in use through SPF and verification strings. <code>NS</code> records show the DNS provider, which occasionally allows a zone transfer that hands you every record at once.</p>',
'<p>Why it matters: this phase anchors everything else. A single confirmed name server or shared IP range can later tell you that two apparently unrelated hosts belong to the same target.</p>',

'<h2 id="s-subs">Subdomain enumeration</h2>',
'<p>One registered domain typically hides dozens or hundreds of subdomains. Enumeration combines three strategies, and strong results come from using all three, not one.</p>',
'<ol>',
'<li><strong>Passive sources.</strong> Certificate transparency logs, public datasets and search aggregators return known names instantly and quietly.</li>',
'<li><strong>Brute force.</strong> A resolver tests a wordlist of candidate names against the domain to discover hosts that are not published anywhere.</li>',
'<li><strong>Permutation.</strong> Tools mutate names you already found, for example turning <code>api</code> into <code>api-dev</code> and <code>api-staging</code>, to reach adjacent hosts.</li>',
'</ol>',
'<p>Feed the combined list into a fast resolver so you keep only names that actually answer. A large list of dead names wastes every later phase.</p>',

'<h2 id="s-ports">Port scanning and services</h2>',
'<p>A live host is not the same as a live service. Port scanning finds which ports are open, and service and version detection identifies what listens behind each one. Move from fast and broad to slow and deep: a quick scan of common ports first, then a full range only where it is warranted, then version and script scans on the ports that responded.</p>',
'<div class="note"><strong>Be deliberate.</strong> Full port scans and aggressive timing are noisy and can disrupt fragile services. Match your intensity to what the scope and the target can tolerate.</div>',

'<h2 id="s-http">HTTP probing and fingerprinting</h2>',
'<p>Most modern attack surface is web based. Probing takes your list of hosts and ports and asks a simple question of each: is there a web server here, and if so, what is it? You learn status codes, page titles, response sizes, redirects and the technology stack. This is the moment a raw host list becomes a prioritized list of web applications worth examining.</p>',
'<p>Fingerprinting the stack, the framework and the content management system tells you which classes of issue are even plausible, so you spend effort where it can pay off.</p>',

'<h2 id="s-crawl">Crawling and URL collection</h2>',
'<p>Before you probe an application by hand, gather the URLs it has already exposed. Crawlers walk the live site following links. Archive and index sources return historical URLs, including endpoints that were removed from the current site but still function. The combined URL corpus is one of the richest inputs you will build: it reveals parameters, file types, API routes and old functionality in one place.</p>',

'<h2 id="s-content">Content discovery and fuzzing</h2>',
'<p>Applications hide far more than they link to: administrative panels, backup files, configuration, debug endpoints and forgotten APIs. Content discovery fuzzes paths and filenames against the server and reports what responds. The quality of results depends almost entirely on the wordlist and on reading status codes and response sizes carefully rather than trusting a single code.</p>',

'<h2 id="s-params">Parameter and JavaScript analysis</h2>',
'<p>Inputs are where applications get tested. Parameter discovery finds query and body parameters the interface never shows, which are often the least guarded. In parallel, JavaScript analysis is one of the highest value activities in modern recon: front-end bundles routinely contain API endpoints, internal hostnames, feature flags and, too often, credentials or keys committed by mistake. Read the JavaScript; it describes the back end you cannot see.</p>',

'<h2 id="s-vuln">Vulnerability scanning</h2>',
'<p>Once you have a confirmed, deduplicated surface, template-based scanners check it against large libraries of known issues and misconfigurations. Run scanners against the map you built, not against raw guesses, so results are relevant and manageable. Treat every finding as a lead to verify by hand, never as a confirmed vulnerability on its own. Automated output is a starting point for judgement, not a substitute for it.</p>',

'<h2 id="s-testing">The active testing phases</h2>',
'<p>This reference also includes phases that go beyond mapping: injection testing, authentication and session analysis, access-control checks, business-logic testing and more. These are genuinely intrusive. They can change data, lock accounts and disrupt service.</p>',
'<div class="note"><strong>Read this twice.</strong> Only run active testing commands against a target whose scope explicitly permits that class of test, in an environment where the consequences are acceptable, and when you are prepared to stop and report immediately if you cause an unintended effect. When the scope is silent on a technique, treat it as forbidden until you confirm otherwise.</div>',

'<h2 id="s-workflow">Building a repeatable workflow</h2>',
'<p>The value of recon compounds when phases are chained so the output of one becomes the input of the next. A dependable pattern looks like this.</p>',
'<ol>',
'<li>Enumerate subdomains from every source into a single file.</li>',
'<li>Resolve that file and keep only live hosts.</li>',
'<li>Probe the live hosts for web services and record the responders.</li>',
'<li>Crawl and collect URLs from the responders.</li>',
'<li>Discover content and parameters against the confirmed applications.</li>',
'<li>Scan the final surface, then verify each lead manually.</li>',
'</ol>',
'<p>Use the <em>Export .sh</em> button on any phase to save its commands as a script with your target already filled in, then adapt it into your own pipeline. Keep every phase writing to a named output file so results accumulate rather than scroll past.</p>',

'<h2 id="s-wordlists">Wordlists and resolvers</h2>',
'<p>Two inputs quietly determine the quality of your results. The first is your wordlists: content discovery and brute forcing are only as good as the words you try, so choose lists matched to the target technology rather than the largest file available. The second is your resolver list for DNS work: a clean, current set of trusted resolvers is the difference between fast accurate resolution and hours of false results. Refresh both regularly.</p>',

'<h2 id="s-opsec">Rate, noise and being a good guest</h2>',
'<p>You are operating on someone else infrastructure. Aggressive concurrency and unbounded scans can degrade the very service you are assessing, which helps no one and can breach the terms you agreed to. Tune request rates and threads to a level the target can absorb. Slower and complete beats fast and disruptive. If a program publishes rate limits or testing windows, honour them precisely.</p>',

'<h2 id="s-report">From findings to a report</h2>',
'<p>Reconnaissance ends where communication begins. A finding that is not clearly reported does not get fixed. A strong report states the issue in one sentence, explains the impact in business terms, gives exact reproduction steps, and includes only the evidence needed to confirm it. Keep your intermediate output files; they are the proof of your process and the raw material for the write-up.</p>',
'<div class="note"><strong>The habit that matters most.</strong> Record what you did as you do it. The person who keeps organized notes and named output files produces better reports, repeats work less, and is trusted with larger engagements.</div>'
].join("\n");

window.RECON_ABOUT = [
'<h1>About ReconForge</h1>',
'<p class="lead">ReconForge is a fast, text-only reference of reconnaissance commands for authorized penetration testing and bug bounty work. It turns a target you type once into ready-to-run commands across the full recon lifecycle, and pairs them with a methodology guide that explains the reasoning behind each phase.</p>',

'<h2>What it does</h2>',
'<ul>',
'<li>Over 470 curated commands organized into 40 phases, from DNS and subdomain enumeration through content discovery, analysis and reporting.</li>',
'<li>Type your target domain, IP or URL once and every command is filled in instantly.</li>',
'<li>Search across every phase, tool and command as you type.</li>',
'<li>Copy any single command, copy an entire phase, or export a phase as a ready-to-run shell script with your target already in place.</li>',
'<li>Mark commands as done; progress is remembered in your browser between visits.</li>',
'<li>A built-in methodology guide that teaches the why, not just the how.</li>',
'</ul>',

'<h2>How to use it</h2>',
'<ol>',
'<li>Enter your target in the field at the top. Add a full URL if a tool needs one.</li>',
'<li>Pick a phase from the list on the left, or search for a specific tool.</li>',
'<li>Copy the command you need, or export the whole phase as a script to fold into your own pipeline.</li>',
'<li>Read the Methodology tab to understand where each phase fits in the larger process.</li>',
'</ol>',

'<h2>Design</h2>',
'<p>The interface is deliberately quiet and entirely typographic: no icons, no emoji, no decorative symbols. It is built as a single static page with no framework and no build step, so it loads instantly and runs anywhere, including offline once cached. It supports a dark and a light theme and adapts from desktop to phone.</p>',

'<h2>Responsible use</h2>',
'<div class="note"><strong>Authorized testing only.</strong> Everything here is intended for systems you own or are explicitly permitted to test, within a defined scope. Reconnaissance and testing against systems without authorization is illegal in most jurisdictions. You are responsible for how you use these commands.</div>',

'<h2>Credits</h2>',
'<p>ReconForge references widely used open-source security tools, each maintained by its own authors and community. This project provides organization, filling and methodology around those tools; it does not include or redistribute them. Install the tools you need from their official sources.</p>'
].join("\n");
