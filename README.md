# ReconForge

A professional, text-only reconnaissance command reference for authorized penetration testing and bug bounty work.

Type a target once and get more than 470 ready-to-run commands across 40 phases of the reconnaissance lifecycle — from DNS and subdomain enumeration through content discovery, JavaScript analysis, vulnerability scanning and reporting. Every command is paired with an in-depth methodology guide that explains the reasoning behind each phase, not just the syntax.

## Features

- **470+ curated commands** organized into 40 phases, drawn from the standard open-source recon toolchain (nmap, amass, subfinder, httpx, ffuf, nuclei, gau, and many more).
- **Instant target substitution.** Enter a domain, IP or URL once; every command is filled in live.
- **Full-text search** across every phase, tool and command as you type.
- **Copy anything.** Copy a single command, an entire phase, or export a phase as a ready-to-run shell script with your target already in place.
- **Progress tracking.** Mark commands as done; state is remembered in your browser.
- **Built-in methodology guide.** A professional, phase-by-phase explanation of how and why recon is done, including authorization, scope and reporting.
- **Purely typographic design.** No icons, no emoji, no decorative symbols. Dark and light themes. Responsive from desktop to phone.
- **Zero dependencies.** A single static page with no framework and no build step. Loads instantly and runs anywhere, including offline once cached.

## Usage

Open `index.html` in any browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

1. Enter your target in the field at the top (add a full URL if a tool needs one).
2. Pick a phase from the sidebar, or search for a specific tool.
3. Copy the command you need, or export the whole phase as a script.
4. Read the **Methodology** tab to understand where each phase fits.

## Project structure

```
index.html            The application shell
assets/app.css        Styling and theming
assets/app.js         Application logic (vanilla JS)
assets/data.js        The command dataset (40 phases, 470+ commands)
assets/education.js   The methodology guide and about content
```

## Responsible use

Everything in this project is intended for systems you own or are explicitly authorized to test, within a defined scope. Reconnaissance and testing against systems without authorization is illegal in most jurisdictions. You are responsible for how you use these commands.

ReconForge references widely used open-source security tools; it does not include or redistribute them. Install the tools you need from their official sources.

## License

MIT
