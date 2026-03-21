// Agent organization data
const agentData = {
  "meta": {
    "name": "Agentic World",
    "version": "0.1.0",
    "updated": "2026-03-18",
    "description": "The organizational database of our agent family — a living map of who does what, how they connect, and how knowledge flows."
  },
  "ceo": {
    "id": "sameer",
    "name": "Sameer Goel",
    "emoji": "👨💼",
    "role": "CEO / Founder",
    "type": "human",
    "status": "active"
  },
  "coo": {
    "id": "scout",
    "name": "Scout",
    "emoji": "🔭",
    "role": "Chief of Staff / COO",
    "type": "agent",
    "status": "active",
    "runtime": "main-session",
    "capabilities": ["coordination", "research", "delegation", "communication", "memory-management"],
    "voice": "en-GB-RyanNeural",
    "reportsTo": "sameer"
  },
  "departments": [
    {
      "id": "rnd",
      "name": "R&D Department",
      "emoji": "🔬",
      "mission": "Detect signals, investigate patterns, produce actionable intelligence",
      "head": "sherlock",
      "status": "active",
      "agents": [
        {
          "id": "sherlock",
          "name": "Sherlock",
          "emoji": "🔍",
          "role": "Lead Investigator / Dept Head",
          "type": "agent",
          "status": "active",
          "runtime": "on-demand-subagent",
          "capabilities": ["deep-research", "pattern-recognition", "money-trail", "competitive-analysis"],
          "reportsTo": "scout"
        },
        {
          "id": "watson",
          "name": "Watson",
          "emoji": "💰",
          "role": "Financial Analyst",
          "type": "agent",
          "status": "planned",
          "runtime": "on-demand-subagent",
          "capabilities": ["financial-analysis", "market-sizing", "vc-tracking"],
          "reportsTo": "sherlock"
        },
        {
          "id": "usecase-scanner",
          "name": "Use Case Scanner",
          "emoji": "🔧",
          "role": "Daily OpenClaw Use Case Tracker",
          "type": "cron-agent",
          "status": "active",
          "runtime": "cron",
          "schedule": "0 8 * * *",
          "capabilities": ["web-search", "data-extraction", "cataloging"],
          "reportsTo": "sherlock"
        }
      ]
    },
    {
      "id": "design",
      "name": "Design & Creative",
      "emoji": "🎨",
      "mission": "Create beautiful, cinematic, Marvel-quality interfaces and visuals",
      "head": "stark-lab",
      "status": "active",
      "agents": [
        {
          "id": "stark-lab",
          "name": "Stark Design Lab",
          "emoji": "🎨",
          "role": "Creative Director / Dept Head",
          "type": "agent",
          "status": "active",
          "runtime": "on-demand-subagent",
          "capabilities": ["ui-design", "css-animation", "data-visualization", "cinematic-style"],
          "reportsTo": "scout"
        }
      ]
    },
    {
      "id": "intelligence",
      "name": "Intelligence & Monitoring",
      "emoji": "📊",
      "mission": "Watch everything, detect anomalies, surface what matters",
      "head": "radar",
      "status": "forming",
      "agents": [
        {
          "id": "email-monitor",
          "name": "Email Monitor",
          "emoji": "📧",
          "role": "Email Inbox Watcher",
          "type": "cron-agent",
          "status": "active",
          "runtime": "cron",
          "schedule": "0 */2 * * *",
          "capabilities": ["imap-read", "otp-extraction", "urgency-classification"],
          "reportsTo": "radar"
        }
      ]
    },
    {
      "id": "operations",
      "name": "Operations",
      "emoji": "⚙️",
      "mission": "Keep the lights on — security, backups, infrastructure, reliability",
      "head": "atlas",
      "status": "forming",
      "agents": [
        {
          "id": "sentinel",
          "name": "Sentinel",
          "emoji": "🛡️",
          "role": "Security Auditor",
          "type": "cron-agent",
          "status": "active",
          "runtime": "cron",
          "schedule": "0 */6 * * *",
          "capabilities": ["config-drift-detection", "process-audit", "vulnerability-scan"],
          "reportsTo": "atlas"
        },
        {
          "id": "phoenix",
          "name": "Phoenix",
          "emoji": "🔥",
          "role": "Disaster Recovery & Backups",
          "type": "cron-agent",
          "status": "active",
          "runtime": "cron",
          "schedule": "0 6,18 * * *",
          "capabilities": ["backup-verification", "drive-sync", "github-push", "restore-testing"],
          "reportsTo": "atlas"
        },
        {
          "id": "infra",
          "name": "Infra",
          "emoji": "🖥️",
          "role": "Infrastructure Monitor",
          "type": "cron-agent",
          "status": "active",
          "runtime": "cron",
          "schedule": "0 */3 * * *",
          "capabilities": ["cpu-monitoring", "memory-tracking", "disk-usage", "cost-estimation"],
          "reportsTo": "atlas"
        }
      ]
    },
    {
      "id": "safety",
      "name": "Safety Organization",
      "emoji": "🛡️",
      "mission": "Proactively protect the Agentic World — security, vulnerability monitoring, permission enforcement, incident response",
      "head": "sentinel",
      "status": "active",
      "agents": [
        {
          "id": "cve-watcher",
          "name": "CVE Watcher",
          "emoji": "🔔",
          "role": "Vulnerability Monitor",
          "type": "cron-agent",
          "status": "active",
          "runtime": "cron",
          "schedule": "0 6 * * *",
          "capabilities": ["cve-tracking", "version-monitoring", "npm-audit", "supply-chain-analysis"],
          "reportsTo": "sentinel"
        }
      ]
    }
  ]
};

// Mock system data (in production, this would come from actual system calls)
const systemData = {
  cpu: 45,
  memory: 78,
  disk: 93,
  uptime: "12d 5h 23m",
  processes: [
    { name: "openclaw-gateway", cpu: 12, memory: 256 },
    { name: "node", cpu: 8, memory: 512 }
  ]
};

// Mock cron jobs (in production, this would come from ~/.openclaw/cron/jobs.json)
const cronJobs = [
  {
    id: "email-check",
    name: "Email Monitor",
    schedule: "0 */2 * * *",
    status: "active",
    lastRun: "2 hours ago",
    nextRun: "In 15 minutes"
  },
  {
    id: "security-audit",
    name: "Sentinel Security Audit",
    schedule: "0 */6 * * *",
    status: "active",
    lastRun: "4 hours ago",
    nextRun: "In 2 hours"
  },
  {
    id: "backup",
    name: "Phoenix Backup",
    schedule: "0 6,18 * * *",
    status: "active",
    lastRun: "8 hours ago",
    nextRun: "In 4 hours"
  },
  {
    id: "infra-monitor",
    name: "Infra Health Check",
    schedule: "0 */3 * * *",
    status: "active",
    lastRun: "1 hour ago",
    nextRun: "In 2 hours"
  }
];

// Skills list
const skills = [
  { name: "agent-browser", category: "automation" },
  { name: "clawdtalk-client", category: "communication" },
  { name: "contact-us-benchmarker", category: "research" },
  { name: "find-skills", category: "system" },
  { name: "frontend-design-pro", category: "design" },
  { name: "obsidian-cli", category: "productivity" },
  { name: "openclaw-mission-control", category: "monitoring" },
  { name: "tommy-monitoring-dashboard", category: "monitoring" },
  { name: "webpage-screenshot", category: "automation" }
];

// Tools list  
const tools = [
  { name: "OpenClaw", category: "core-runtime", status: "active" },
  { name: "GitHub", category: "code", status: "active" },
  { name: "Gmail", category: "communication", status: "active" },
  { name: "Google Drive", category: "storage", status: "active" },
  { name: "Tailscale", category: "networking", status: "active" },
  { name: "Hostinger", category: "hosting", status: "active" },
  { name: "Edge-TTS", category: "voice", status: "active" },
  { name: "Neon PostgreSQL", category: "database", status: "active" }
];
