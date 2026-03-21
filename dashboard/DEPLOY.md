# 🚀 Deployment Guide

## Option 1: GitHub Pages (Recommended)

### Enable GitHub Pages

1. **Push to GitHub**
   ```bash
   cd /workspace/agentic-world
   git add dashboard/
   git commit -m "Add Scout Mission Control dashboard"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/dashboard` (or `/` if dashboard is at root)
   - Click Save

3. **Access Your Dashboard**
   - URL: `https://yourusername.github.io/agentic-world/`
   - Wait 1-2 minutes for initial deployment

### Custom Domain (Optional)

1. Add `CNAME` file to dashboard folder:
   ```bash
   echo "dashboard.yourdomain.com" > /workspace/agentic-world/dashboard/CNAME
   ```

2. Configure DNS:
   - Add CNAME record pointing to `yourusername.github.io`

3. Enable HTTPS in GitHub Pages settings

## Option 2: Static Web Server

### Local Development Server

```bash
cd /workspace/agentic-world/dashboard
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Node.js Server

```bash
npx serve dashboard/
# Visit http://localhost:3000
```

### Nginx

```nginx
server {
    listen 80;
    server_name dashboard.yourdomain.com;
    root /path/to/agentic-world/dashboard;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Option 3: Cloud Hosting

### Vercel

```bash
cd /workspace/agentic-world
vercel --prod
```

### Netlify

1. Drag and drop `dashboard/` folder to Netlify
2. Or connect GitHub repo

### Hostinger (Your Existing Hosting)

```bash
# Upload dashboard/ folder to public_html/dashboard/
rsync -avz dashboard/ u682842808@toptrends.today:~/public_html/dashboard/
```

Access at: `https://toptrends.today/dashboard/`

## 🔧 Post-Deployment

### Update Data Source

Replace static data in `data.js` with API calls:

```javascript
// Before
const agentData = { ... };

// After
async function fetchAgentData() {
    const response = await fetch('/api/agents');
    return await response.json();
}
```

### Enable Auto-Refresh

Already enabled by default (30s interval). Toggle in UI.

### Monitor Performance

- Check browser console for errors
- Test on mobile devices
- Verify all pages load correctly

## 🐛 Troubleshooting

### Dashboard shows blank page
- Check browser console for errors
- Ensure all JS files loaded
- Verify data.js has valid JSON

### Styles not loading
- Check CSS file path
- Clear browser cache
- Verify CORS headers (if hosted separately)

### Auto-refresh not working
- Check console for JS errors
- Verify toggle switch is ON
- Test in incognito mode

## 📊 Analytics (Optional)

Add privacy-respecting analytics:

```html
<!-- Add to <head> of each page -->
<!-- Plausible (privacy-friendly) -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🔒 Security

- No authentication required (read-only dashboard)
- No sensitive data exposed
- Static files only - no server-side code
- HTTPS recommended for production

---

Need help? Check the README.md or create an issue.
