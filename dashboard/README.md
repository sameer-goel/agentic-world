# 🔭 Scout Mission Control

A beautiful, real-time operational intelligence dashboard for the Agentic World.

## 🎯 What Is This?

Scout Mission Control provides complete visibility into:
- **Agent Organization** - Full hierarchy, roles, and capabilities
- **Cron Jobs** - Scheduled tasks and execution monitoring
- **System Health** - Resource utilization and infrastructure metrics
- **Tools & Skills** - Complete inventory of available capabilities

## ✨ Features

- 🌙 **Dark-first design** - Easy on the eyes
- ⚡ **Zero-build** - Pure HTML/CSS/JS, no dependencies
- 🔄 **Auto-refresh** - Live updates every 30 seconds
- 🔍 **Search & filter** - Find what you need instantly
- 📱 **Fully responsive** - Desktop, tablet, mobile
- 🎨 **Modern UI** - Inspired by Vercel, Linear, Arc Browser
- 🔒 **Privacy-first** - No tracking, no analytics, no cookies

## 🚀 Quick Start

### Local Development

```bash
# Navigate to dashboard folder
cd dashboard/

# Open in browser
open index.html
# or
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### GitHub Pages Deployment

1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Set source to `main` branch, `/dashboard` folder
4. Visit `https://yourusername.github.io/agentic-world/`

## 📂 File Structure

```
dashboard/
├── index.html           # Main overview dashboard
├── agents.html          # Agent hierarchy view
├── cron.html           # Cron job monitor
├── system.html         # System health metrics
├── about.html          # About & documentation
├── styles.css          # Global styles
├── data.js             # Agent & system data
├── app.js              # Main app logic
├── agents-page.js      # Agents page logic
├── cron-page.js        # Cron page logic
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Background:** `#0a0a0a` (primary), `#141414` (secondary), `#1a1a1a` (cards)
- **Text:** `#fff` (primary), `#a0a0a0` (secondary), `#666` (tertiary)
- **Accents:** Blue `#3b82f6`, Green `#10b981`, Yellow `#f59e0b`, Red `#ef4444`

### Typography
- **Font:** Inter (Google Fonts)
- **Sizes:** 12px (small), 14px (body), 18px (heading), 32px (page title)

### Components
- Card-based layout with hover effects
- Color-coded status badges (🟢 🟡 🔴)
- Progress bars for metrics
- Timeline for activity
- Search boxes with focus states

## 🔧 Customization

### Update Agent Data

Edit `data.js`:

```javascript
const agentData = {
  departments: [
    {
      id: "new-dept",
      name: "New Department",
      emoji: "🚀",
      mission: "Department mission",
      agents: [...]
    }
  ]
};
```

### Add New Page

1. Create `page-name.html` with sidebar nav
2. Create `page-name.js` for logic
3. Add nav link to all pages
4. Update `data.js` if needed

### Customize Styling

Edit `styles.css` CSS variables:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent-blue: #3b82f6;
  /* etc */
}
```

## 📊 Data Sources

Currently uses static JSON data in `data.js`. Future versions will support:

- Real-time system metrics via API
- Live cron job status from `~/.openclaw/cron/jobs.json`
- Active session data via OpenClaw Gateway API
- Cost tracking and token usage

## 🛠️ Tech Stack

- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript
- **Styling:** CSS Grid, Flexbox, Custom Properties
- **Typography:** Inter (Google Fonts)
- **Data:** Static JSON (API support planned)
- **Deployment:** GitHub Pages compatible
- **Size:** <150KB total (excluding fonts)

## 🎯 Design Principles

1. **Dark-first** - Designed for extended viewing
2. **Performance** - No build step, minimal dependencies
3. **Modern aesthetic** - Vercel/Linear quality UX
4. **Data-dense** - Maximum information, minimal clutter
5. **Privacy-first** - No tracking or analytics

## 🚧 Roadmap

- [ ] Real-time API integration
- [ ] Cost tracking visualization
- [ ] Agent relationship graph
- [ ] Session history timeline
- [ ] Export/download reports
- [ ] Light theme support
- [ ] Mobile app (PWA)

## 📝 License

Part of the Agentic World project.

## 🤝 Contributing

Built by Scout with ❤️ for the Agentic World team.

---

**Version:** 0.1.0  
**Last Updated:** March 21, 2026  
**Built by:** Scout 🔭
