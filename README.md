# LinkPulse — URL Shortener & Link Analytics Platform

A premium, production-ready URL shortener and link analytics platform built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Features a futuristic SaaS design with glassmorphism, animated charts, comprehensive demo data, and full responsive support.

![Tech Stack](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Features

- **URL Shortening** — Paste long URLs, generate short links, copy & share
- **Custom Aliases** — Branded memorable short links
- **QR Code Generator** — Live preview, color customization, download
- **Analytics Dashboard** — Clicks, traffic, referrers, heatmaps
- **Geographic Analytics** — World map, countries, cities
- **Device Analytics** — Mobile, desktop, tablet, browsers, OS
- **Campaign Management** — Group links, track performance
- **Link Management** — Search, filter, favorites, archive (150+ demo links)
- **Team Collaboration** — Members, roles, permissions (UI)
- **Security Center** — Password protection, access logs, alerts
- **Notifications** — Toast system, notification center, activity logs
- **Dark / Light Themes** — Persisted via localStorage
- **API Playground** — Demo API integration UI
- **Reports & Export** — CSV, PDF, JSON, Excel options
- **And more** — Bio link builder, voice commands UI, AI suggestions, keyboard shortcuts

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure, multi-page app |
| CSS3 | Variables, Grid, Flexbox, animations, glassmorphism |
| Vanilla JavaScript | Charts, themes, notifications, data rendering |
| Canvas API | Line charts, donut charts, QR preview |
| localStorage | Theme persistence |
| Intersection Observer | Scroll reveal animations |

---

## How to Run in VS Code

### Step 1: Install Visual Studio Code

Download and install [Visual Studio Code](https://code.visualstudio.com/) if you don't have it.

### Step 2: Open the Project Folder

1. Launch VS Code
2. Go to **File → Open Folder**
3. Select the `URL Shortener` project folder

### Step 3: Install Live Server Extension

1. Click the **Extensions** icon in the sidebar (or press `Ctrl+Shift+X`)
2. Search for **Live Server**
3. Install the extension by **Ritwick Dey**

### Step 4: Launch the Application

1. In the Explorer panel, right-click `index.html`
2. Select **Open with Live Server**
3. Your browser will open at `http://127.0.0.1:5500` (or similar port)

### Alternative: Open Directly in Browser

Double-click `index.html` to open in your browser. Some features work best with Live Server due to local file handling.

---

## Folder Structure

```
URL Shortener/
├── index.html              # Landing page
├── dashboard.html          # Main dashboard
├── create-link.html        # Create short link
├── custom-alias.html       # Custom alias page
├── analytics.html          # Analytics dashboard
├── link-details.html       # Single link analytics
├── qr-generator.html       # QR code generator
├── click-tracking.html     # Click tracking
├── geographic.html         # Geographic analytics
├── device-analytics.html   # Device analytics
├── campaigns.html          # Campaign management
├── links.html              # Link management
├── favorites.html          # Favorite links
├── team.html               # Team collaboration
├── notifications.html      # Notifications center
├── activity.html           # Activity logs
├── profile.html            # User profile
├── subscription.html       # Subscription plans
├── api.html                # API integration
├── settings.html           # Settings
├── security.html           # Security center
├── reports.html            # Reports & export
├── search.html             # Search results
├── themes.html             # Theme customization
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   ├── themes.css          # CSS variables, dark/light
│   ├── style.css           # Base styles, components
│   ├── dashboard.css       # Dashboard layout
│   ├── analytics.css       # Charts, analytics UI
│   └── responsive.css      # Media queries
├── js/
│   ├── data.js             # Demo datasets (150+ links)
│   ├── app.js              # Core app, sidebar, landing
│   ├── charts.js           # Canvas chart rendering
│   ├── themes.js           # Theme toggle
│   ├── notifications.js    # Toast notifications
│   ├── analytics.js        # Analytics page logic
│   ├── links.js            # Link management
│   ├── qr.js               # QR code generator
│   └── campaigns.js        # Campaign management
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## Usage Guide

### Shortening a URL

1. Open `index.html` or `create-link.html`
2. Paste your long URL
3. Click **Shorten URL** or **Generate Short Link**
4. Copy the generated short link

### Viewing Analytics

1. Navigate to **Dashboard** or **Analytics**
2. Explore charts for clicks, devices, referrers
3. Visit **Geographic** or **Device Analytics** for detailed breakdowns

### Generating QR Codes

1. Open **QR Generator**
2. Enter your short link URL
3. Customize colors and style
4. Click **Download PNG**

### Theme Toggle

Click the moon/sun icon in the top bar, or visit **Themes** page. Preference is saved automatically.

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Focus search |
| `Ctrl+N` | Create new link |
| `Ctrl+D` | Go to dashboard |

---

## Demo Data

The platform includes extensive demo data in `js/data.js`:

- **150+ sample links** with clicks, tags, campaigns
- **20 countries** with traffic statistics
- **10 marketing campaigns** with performance scores
- **30 days** of daily click data
- **12 months** of monthly analytics
- **Team members**, notifications, activity logs, security logs

All data is client-side mock content for demonstration purposes.

---

## Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |

---

## Troubleshooting

### Live Server not opening

- Ensure the Live Server extension is installed and enabled
- Try clicking "Go Live" in the VS Code status bar (bottom right)
- Check if another application is using port 5500

### Charts not displaying

- Open browser DevTools (F12) and check for JavaScript errors
- Ensure all script files load (use Live Server, not `file://` if issues persist)
- Refresh the page after scripts load

### Theme not persisting

- Enable cookies/localStorage in your browser
- Clear site data and toggle theme again

### Sidebar not showing on mobile

- Tap the ☰ menu button in the top bar
- Tap outside the sidebar to close

---

## Performance

- Canvas charts render on demand
- CSS animations use GPU-accelerated transforms
- Lazy scroll reveal via Intersection Observer
- Minimal dependencies — no external libraries
- Reduced motion respected via `prefers-reduced-motion`

---

## License

Demo project for educational and portfolio purposes.

---

**Built with ❤️ using HTML, CSS & JavaScript**
