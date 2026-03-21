# Frontend Expert Brief: Agentic World Dashboard

**Project:** Scout Mission Control - AI Agent Monitoring Dashboard  
**Target URL:** https://sameer-goel.github.io/agentic-world/  
**Tech Stack:** Static HTML/CSS/JS (GitHub Pages compatible)  
**Timeline:** ASAP  
**Budget:** Premium quality expected

---

## 🎯 Project Overview

Build a **production-grade monitoring dashboard** for an AI agent organization running on OpenClaw. Think Vercel/Linear/Arc Browser quality - beautiful, fast, intuitive.

**The System:**
- Main agent "Scout" 🔭 (Chief of Staff / R&D Advisor)
- 5 sub-agents (Sentinel, Phoenix, Infra, CVE Watcher, Watson)
- 15+ automated cron jobs
- Multi-tool ecosystem (browser, exec, web_search, messaging, etc.)
- Running 24/7 on AWS EC2

**The Goal:**
Create a dashboard that makes this complex system **human-readable and beautiful**.

---

## 📊 Data Sources & Structure

### 1. Agent Hierarchy

```json
{
  "agents": [
    {
      "id": "main",
      "name": "Scout 🔭",
      "emoji": "🔭",
      "role": "Chief of Staff, Head of Agents, R&D Advisor",
      "model": "amazon-bedrock/us.anthropic.claude-sonnet-4-5",
      "channels": ["whatsapp"],
      "tools": ["read", "write", "exec", "browser", "web_search", "sessions_spawn", "cron", "memory_search"],
      "skills": ["bedrock-imagegen", "searxng", "agent-browser-clawdbot", "frontend-design-pro"],
      "sub_agents": ["sentinel", "phoenix", "infra", "cve-watcher", "watson"],
      "cron_jobs": [
        {"name": "Daily Self-Improvement Review", "schedule": "0 22 * * *"},
        {"name": "Email Alert Monitor", "schedule": "0 */2 * * *"},
        {"name": "Sentinel — Security Audit", "schedule": "0 */6 * * *"}
      ],
      "parent": null
    },
    {
      "id": "sentinel",
      "name": "Sentinel 🛡️",
      "emoji": "🛡️",
      "role": "Security & Safety Officer",
      "model": "amazon-bedrock/us.anthropic.claude-haiku-4-5",
      "tools": ["read", "exec", "web_search", "memory_search"],
      "parent": "main"
    }
    // ... more agents
  ]
}
```

### 2. Cron Jobs

```json
{
  "cron_jobs": [
    {
      "id": "67ebf6b2-234e-48bf-8af8-8ccb21373b0e",
      "name": "Daily Self-Improvement Review",
      "schedule": "0 22 * * * Europe/Amsterdam",
      "agent": "main",
      "model": "sonnet-4-5",
      "next_run": "2026-03-21T22:00:00Z",
      "last_run": "2026-03-20T22:00:00Z",
      "status": "active",
      "success_rate": 0.98
    }
    // ... 14 more jobs
  ]
}
```

### 3. System Metrics (Live Data)

```json
{
  "system": {
    "cpu": {
      "usage": 23.4,
      "cores": 2
    },
    "memory": {
      "used": 2.8,
      "total": 4.0,
      "percent": 70
    },
    "disk": {
      "used": 12.3,
      "total": 20,
      "percent": 61.5
    },
    "uptime": "14d 3h 27m",
    "instance": "c7g.large (2 vCPU, 4GB RAM, Graviton3)"
  }
}
```

### 4. Active Sessions

```json
{
  "sessions": [
    {
      "id": "agent:main",
      "agent": "Scout",
      "status": "active",
      "model": "sonnet-4-5",
      "tokens_used": 142000,
      "started": "2026-03-21T09:00:00Z"
    },
    {
      "id": "agent:main:subagent:xyz",
      "agent": "Infra",
      "status": "running",
      "task": "System Health Check",
      "started": "2026-03-21T17:45:00Z"
    }
  ]
}
```

### 5. Cost Tracking

```json
{
  "costs": {
    "today": {
      "total": 4.23,
      "bedrock": 3.87,
      "ec2": 0.36
    },
    "month": {
      "total": 127.50,
      "trend": "↘️ -15%"
    },
    "by_model": {
      "opus-4-6": {"tokens": 2400000, "cost": 42.50},
      "sonnet-4-5": {"tokens": 8900000, "cost": 71.20},
      "haiku-4-5": {"tokens": 14200000, "cost": 13.80}
    }
  }
}
```

---

## 🎨 Design Requirements

### Visual Identity

**Theme:** Dark, professional, high-tech command center  
**Inspiration:** Vercel Dashboard, Linear, Arc Browser, Grafana  
**Color Palette:**
- Background: `#0a0a0a` (true black)
- Surface: `#1a1a1a` (cards)
- Borders: `#333333`
- Primary: `#667eea` (purple-blue gradient)
- Success: `#10b981` (green)
- Warning: `#f59e0b` (amber)
- Error: `#ef4444` (red)
- Text: `#f5f5f5` (primary), `#888888` (secondary)

**Typography:**
- Headings: Inter Bold (or SF Pro Display)
- Body: Inter Regular
- Monospace: JetBrains Mono (for IDs, models)

**Spacing:**
- 8px grid system (8, 16, 24, 32, 40, 48, 64)
- Container max-width: 1400px
- Card padding: 24px
- Gap between cards: 24px

---

## 🧩 UI Components Needed

### 1. Navigation

**Top Bar:**
```
┌────────────────────────────────────────────────────┐
│ 🔭 Scout Mission Control    [Dashboard] [Agents]  │
│                              [Cron] [System]       │
│                              [⚙️ Settings]         │
└────────────────────────────────────────────────────┘
```

- Fixed top navigation
- Active state highlighting
- Logo on left, nav items on right
- Mobile: Hamburger menu

### 2. Status Cards

**Agent Status Card:**
```
┌─────────────────────────────────┐
│ 🔭 Scout                    🟢 │
│ Chief of Staff              ACTIVE│
│                                 │
│ Model: sonnet-4-5               │
│ Uptime: 14d 3h                  │
│ Tasks: 142 completed today      │
│                                 │
│ [View Details] [Chat]           │
└─────────────────────────────────┘
```

**Elements:**
- Emoji + Name (large, bold)
- Status indicator (🟢🟡🔴 + text)
- Role description (secondary text)
- Key metrics (compact)
- Action buttons (ghost style)
- Hover: subtle lift + shadow

### 3. Metrics Dashboard

**System Health:**
```
┌──────────────────────────────────────┐
│ System Health               🟢 Healthy│
│                                      │
│ CPU:  ████████░░░░░░░░  23% (2 cores)│
│ RAM:  ██████████████░░  70% (2.8/4GB)│
│ Disk: █████████░░░░░░░  61% (12/20GB)│
│                                      │
│ Uptime: 14d 3h 27m                   │
│ Instance: c7g.large (Graviton3)      │
└──────────────────────────────────────┘
```

**Progress Bars:**
- Color-coded (green < 60%, yellow 60-80%, red > 80%)
- Smooth gradients
- Animated on load

### 4. Cron Monitor

**Job List:**
```
┌──────────────────────────────────────────────────┐
│ ⏰ Scheduled Jobs                        15 active│
│                                                  │
│ ┌──────────────────────────────────────────────┐│
│ │ 🛡️ Sentinel — Security Audit        ✅ Active││
│ │ Every 6 hours • Next: in 2h 15m              ││
│ │ Success rate: 98% (147/150)                  ││
│ │ [Run Now] [View Logs]                        ││
│ └──────────────────────────────────────────────┘│
│                                                  │
│ ┌──────────────────────────────────────────────┐│
│ │ 📧 Email Alert Monitor               ✅ Active││
│ │ Every 2 hours • Next: in 45m                 ││
│ │ Success rate: 100% (1250/1250)               ││
│ │ [Run Now] [View Logs]                        ││
│ └──────────────────────────────────────────────┘│
└──────────────────────────────────────────────────┘
```

**Features:**
- Collapsible job cards
- Visual schedule timeline
- One-click actions
- Success rate badges
- Next run countdown (live)

### 5. Agent Hierarchy Visualization

**Tree/Graph View:**
```
                    🔭 Scout
                       │
        ┌──────┬───────┼───────┬──────┐
        │      │       │       │      │
      🛡️    🔥     🖥️    🔔    💰
    Sentinel Phoenix Infra  CVE  Watson
```

**Interactive:**
- Clickable nodes
- Hover: show details tooltip
- Lines animate on load
- Responsive: collapse to list on mobile

### 6. Cost Dashboard

**Breakdown Chart:**
```
┌──────────────────────────────────────┐
│ 💰 Cost Tracking                     │
│                                      │
│ Today: $4.23  Month: $127.50 ↘️ -15% │
│                                      │
│ ┌────────────────────────────────┐  │
│ │ [Bar Chart: Model Costs]       │  │
│ │ Opus:   ████████████ $42.50    │  │
│ │ Sonnet: ████████████████ $71.20│  │
│ │ Haiku:  ████ $13.80            │  │
│ └────────────────────────────────┘  │
│                                      │
│ Budget: $150/month (85% used)        │
└──────────────────────────────────────┘
```

### 7. Activity Feed

**Timeline View:**
```
┌────────────────────────────────────┐
│ 📊 Recent Activity                 │
│                                    │
│ ⚪ 2m ago                           │
│ Phoenix completed DR backup        │
│                                    │
│ ⚪ 15m ago                          │
│ Watson detected cost spike         │
│                                    │
│ ⚪ 1h ago                           │
│ Sentinel security audit passed     │
│                                    │
│ [View All Activity →]              │
└────────────────────────────────────┘
```

---

## 🚀 UX Requirements

### User Journeys

**Journey 1: Quick Health Check**
1. Land on dashboard
2. See "System Health" card at top (🟢 = all good)
3. Scroll to see agent status cards
4. Check recent activity feed
5. Done in <10 seconds

**Journey 2: Monitor Cron Job**
1. Click "Cron" in nav
2. See all jobs sorted by next run
3. Filter by status (active/failed/paused)
4. Click job → see execution history
5. Click "Run Now" to trigger manually

**Journey 3: Investigate Agent**
1. Click "Agents" in nav
2. See full hierarchy visualization
3. Click agent node → details panel slides in
4. See: tools, skills, recent tasks, token usage
5. Click "View Sessions" → session history

**Journey 4: Cost Analysis**
1. See cost widget on main dashboard
2. Click widget → expand to full cost page
3. See breakdown by model, by day, by agent
4. Identify which agent is most expensive
5. Set budget alerts

### Interactions

**Required:**
- ✅ Auto-refresh (30s intervals, toggle on/off)
- ✅ Search/filter (agents, jobs, sessions)
- ✅ Collapsible sections
- ✅ Tooltips on hover (explain metrics)
- ✅ Responsive (mobile/tablet/desktop)
- ✅ Keyboard navigation
- ✅ Loading states (skeleton screens)
- ✅ Error handling (graceful failures)

**Nice-to-Have:**
- Dark/light mode toggle
- Customizable dashboard layout (drag cards)
- Export data (JSON/CSV)
- Notification center (alerts inbox)
- Multi-agent comparison view

### Performance

- ⚡ First paint: <1 second
- ⚡ Time to interactive: <2 seconds
- ⚡ Total page size: <500KB (excluding fonts)
- ⚡ Smooth 60fps animations
- ⚡ Lazy load off-screen content

---

## 🔌 Data Integration Points

### Static Mode (GitHub Pages)

**Data files to create:**
```
dashboard/
├── data/
│   ├── agents.json          # Agent hierarchy
│   ├── cron.json             # Cron jobs
│   ├── system.json           # System metrics (snapshot)
│   ├── sessions.json         # Active sessions
│   ├── costs.json            # Cost tracking
│   └── activity.json         # Recent activity feed
```

**Frontend fetches from:**
```javascript
fetch('data/agents.json')
  .then(r => r.json())
  .then(data => renderAgents(data));
```

### Live Mode (Future - OpenClaw Gateway API)

**API Endpoints to call:**
```javascript
// When connected to OpenClaw Gateway
const API_BASE = 'http://localhost:18789/api';

// Agents
fetch(`${API_BASE}/sessions/list`)

// Cron jobs
fetch(`${API_BASE}/cron/list`)

// System metrics
fetch(`${API_BASE}/system/stats`)

// Costs
fetch(`${API_BASE}/usage/costs`)
```

**Fallback:** If API unavailable, use static JSON files.

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  - Single column layout
  - Stack navigation vertically
  - Collapse agent hierarchy to list
  - Simplified charts
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  - 2-column grid
  - Side navigation
  - Compact cards
}

/* Desktop */
@media (min-width: 1025px) {
  - 3-4 column grid
  - Full visualization
  - Detailed tooltips
}
```

---

## 🎭 Animations & Polish

**Micro-interactions:**
- Card hover: `transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3);`
- Button hover: subtle glow
- Progress bars: animate on load (0% → current value)
- Status indicators: gentle pulse animation
- Navigation: underline slide-in on hover
- Loading: skeleton screens (not spinners)

**Page transitions:**
- Fade in content: `opacity: 0 → 1` over 300ms
- Stagger card entrance: 50ms delay between each
- Smooth scroll to anchors

**Easing:**
- Use `cubic-bezier(0.16, 1, 0.3, 1)` (fast-in, slow-out)
- NO bounce effects (feels cheap)

---

## 🛠️ Technical Constraints

**Must:**
- Pure HTML/CSS/JavaScript (no frameworks)
- Work offline (static files)
- GitHub Pages compatible (no build step)
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Accessible (WCAG AA minimum)
- SEO friendly (semantic HTML)

**May Use:**
- Google Fonts (Inter, JetBrains Mono)
- Chart.js or similar (CDN) for visualizations
- No jQuery, no Bootstrap
- Modern CSS (Grid, Flexbox, Custom Properties)
- Modern JS (ES6+, async/await, fetch)

**File Structure:**
```
dashboard/
├── index.html              # Main dashboard
├── agents.html             # Agent hierarchy page
├── cron.html               # Cron monitor page
├── system.html             # System health page
├── costs.html              # Cost tracking page
├── styles.css              # Main styles
├── app.js                  # Main JavaScript
├── data/                   # JSON data files
│   └── *.json
└── README.md
```

---

## ✅ Deliverables Checklist

### Required:
- [ ] 5 HTML pages (dashboard, agents, cron, system, costs)
- [ ] 1 CSS file (complete design system)
- [ ] 1 JS file (all interactions)
- [ ] 5 JSON data files (sample data)
- [ ] README with setup instructions
- [ ] Mobile responsive (tested on real devices)
- [ ] Accessibility audit passed
- [ ] Performance: <500KB total, <2s load

### Bonus:
- [ ] Dark/light mode toggle
- [ ] Export functionality
- [ ] Drag-and-drop layout customization
- [ ] Notification center
- [ ] Multi-language support (EN, NL)

---

## 📐 Design Reference

**Look & Feel:**
- Vercel Dashboard: https://vercel.com/dashboard
- Linear: https://linear.app
- Arc Browser New Tab: https://arc.net
- Grafana: https://grafana.com

**Visual Style:**
- Clean, minimal, spacious
- High contrast (white text on dark bg)
- Subtle gradients (not loud)
- Professional, trustworthy
- Fast, responsive, polished

---

## 💬 Questions to Ask Us

Before starting, confirm:
1. **Data refresh rate**: 30s auto-refresh OK? Toggle to disable?
2. **Real-time priority**: Static first, or build for live API?
3. **Mobile priority**: Mobile-first, or desktop-first?
4. **Chart library preference**: Chart.js, D3, or pure CSS?
5. **Additional pages needed**: Settings, logs, notifications?
6. **Authentication**: Public dashboard, or login required?
7. **Branding**: Logo, color tweaks, custom fonts?

---

## 📞 Contact & Handoff

**Current Implementation:**
- Location: `~/.openclaw/workspace/agentic-world/dashboard/`
- GitHub: https://github.com/sameer-goel/agentic-world
- Live: https://sameer-goel.github.io/agentic-world/dashboard/

**Handoff Process:**
1. Frontend expert builds in separate branch/fork
2. We review design mockups first (Figma/screenshots)
3. Iterate on design before full implementation
4. We provide real JSON data samples
5. Final integration: replace static data with live API calls

**Point of Contact:**
- Technical: Scout (AI Agent) via OpenClaw
- Product: Sameer Goel

---

**Budget:** Premium quality expected  
**Timeline:** ASAP (days, not weeks)  
**Success Metric:** Dashboard that makes complex AI system beautiful & intuitive

---

*This brief was generated by Scout 🔭 on 2026-03-21*
