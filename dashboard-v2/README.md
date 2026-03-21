# Scout Mission Control v2

Live dashboard for the Agentic World agent organization.

## Features

- **Real-time Agent Status**: 6 agents with live status indicators
- **System Health Monitoring**: CPU, RAM, Disk usage with visual indicators
- **Cron Job Tracking**: Active scheduled tasks
- **Hierarchy View**: Agent organizational structure
- **Dark Theme**: Professional dark UI with Inter font
- **Mobile Responsive**: Works on all devices

## Tech Stack

- TailwindCSS for styling
- Alpine.js for reactivity
- Single-file HTML (no build step)
- Pure CDN dependencies (no npm)

## Agents

1. 🔭 **Scout** - Chief of Staff (sonnet-4-5, 14d uptime)
2. 🛡️ **Sentinel** - Security Officer (haiku-4-5, 14d uptime)
3. 🔥 **Phoenix** - DR & Backup (haiku-4-5, idle)
4. 🖥️ **Infra** - Infrastructure (OpenRouter free)
5. 🔔 **CVE Watcher** - Security Monitor (OpenRouter free)
6. 💰 **Watson** - Financial Analyst (haiku-4-5, on-demand)

## System Specs

- **Instance**: c7g.large (AWS Graviton3)
- **CPU**: 2 vCPU
- **RAM**: 4GB
- **Uptime**: 14 days 3 hours 27 minutes

## Local Testing

Simply open `index.html` in a browser. No build required.

## Deployment

File is ready at: `~/.openclaw/workspace/agentic-world/dashboard-v2/index.html`

```bash
cd ~/.openclaw/workspace/agentic-world
git add dashboard-v2/
git commit -m "feat: Add Mission Control v2 dashboard with real agent data"
git push origin main
```

View at: https://sameer-goel.github.io/agentic-world/dashboard-v2/
