/* LinkPulse - Main Application */
const App = {
  navItems: [
    { section: 'Main', items: [
      { href: 'dashboard.html', icon: '📊', label: 'Dashboard' },
      { href: 'links.html', icon: '🔗', label: 'All Links', badge: '150' },
      { href: 'create-link.html', icon: '➕', label: 'Create Link' },
      { href: 'custom-alias.html', icon: '✏️', label: 'Custom Alias' },
      { href: 'favorites.html', icon: '⭐', label: 'Favorites' }
    ]},
    { section: 'Analytics', items: [
      { href: 'analytics.html', icon: '📈', label: 'Analytics' },
      { href: 'click-tracking.html', icon: '👆', label: 'Click Tracking' },
      { href: 'geographic.html', icon: '🌍', label: 'Geographic' },
      { href: 'device-analytics.html', icon: '📱', label: 'Devices' },
      { href: 'reports.html', icon: '📋', label: 'Reports' }
    ]},
    { section: 'Tools', items: [
      { href: 'qr-generator.html', icon: '📷', label: 'QR Generator' },
      { href: 'campaigns.html', icon: '🎯', label: 'Campaigns' },
      { href: 'link-details.html', icon: '🔍', label: 'Link Details' }
    ]},
    { section: 'Team', items: [
      { href: 'team.html', icon: '👥', label: 'Team' },
      { href: 'notifications.html', icon: '🔔', label: 'Notifications', badge: '3' },
      { href: 'activity.html', icon: '📝', label: 'Activity Logs' }
    ]},
    { section: 'Account', items: [
      { href: 'profile.html', icon: '👤', label: 'Profile' },
      { href: 'subscription.html', icon: '💳', label: 'Subscription' },
      { href: 'api.html', icon: '⚡', label: 'API' },
      { href: 'settings.html', icon: '⚙️', label: 'Settings' },
      { href: 'security.html', icon: '🔒', label: 'Security' },
      { href: 'themes.html', icon: '🎨', label: 'Themes' }
    ]}
  ],

  init() {
    this.injectSidebar();
    this.initParticles();
    this.initScrollReveal();
    this.initSidebarToggle();
    this.initCopyButtons();
    this.initKeyboardShortcuts();
    this.initOfflineMode();
    Notifications.renderDropdownList();
  },

  injectSidebar() {
    const layout = document.querySelector('.app-layout');
    if (!layout) return;

    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    const unread = DEMO?.notifications?.filter(n => !n.read).length || 3;

    let navHtml = '';
    this.navItems.forEach(section => {
      navHtml += `<div class="nav-section"><div class="nav-section-title">${section.section}</div>`;
      section.items.forEach(item => {
        const active = currentPage === item.href ? 'active' : '';
        const badge = item.badge ? `<span class="badge-count">${item.label === 'Notifications' ? unread : item.badge}</span>` : '';
        navHtml += `<a href="${item.href}" class="sidebar-link ${active}"><span class="icon">${item.icon}</span>${item.label}${badge}</a>`;
      });
      navHtml += '</div>';
    });

    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
      <div class="sidebar-header">
        <a href="index.html" class="nav-logo">⚡ Link<span>Pulse</span></a>
      </div>
      <nav class="sidebar-nav">${navHtml}</nav>
      <div class="sidebar-footer">
        <a href="profile.html" class="team-member" style="border:none;padding:0">
          <div class="team-avatar">AM</div>
          <div><div style="font-weight:600;font-size:0.9rem">Alex Morgan</div><div class="text-muted" style="font-size:0.75rem">Pro Plan</div></div>
        </a>
      </div>
    `;

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';

    const topbar = document.querySelector('.topbar') || document.createElement('header');
    if (!document.querySelector('.topbar')) {
      topbar.className = 'topbar';
      topbar.innerHTML = `
        <button class="menu-toggle" aria-label="Menu">☰</button>
        <div class="topbar-search">
          <input type="search" placeholder="Search links, campaigns..." id="global-search" />
        </div>
        <div class="topbar-actions">
          <button class="notification-btn" aria-label="Notifications">🔔<span class="notification-badge">${unread}</span></button>
          <button class="btn btn-ghost btn-icon" data-theme-toggle aria-label="Toggle theme">🌙</button>
          <a href="create-link.html" class="btn btn-primary btn-sm">+ New Link</a>
        </div>
        <div class="notification-dropdown glass" style="position:absolute;top:100%;right:1rem;width:360px;max-height:400px;overflow-y:auto;display:none;padding:0;margin-top:0.5rem;z-index:100">
          <div style="padding:1rem;border-bottom:1px solid var(--border);font-weight:700">Notifications</div>
          <div id="notification-list"></div>
          <a href="notifications.html" style="display:block;padding:1rem;text-align:center;border-top:1px solid var(--border)">View all</a>
        </div>
      `;
    }

    layout.insertBefore(sidebar, layout.firstChild);
    layout.insertBefore(overlay, layout.children[1]);

    const dropdown = document.querySelector('.notification-dropdown');
    if (dropdown) {
      dropdown.style.display = 'none';
      const style = document.createElement('style');
      style.textContent = `.notification-dropdown.active{display:block!important}.notification-item{padding:1rem;border-bottom:1px solid var(--border)}.notification-item.unread{background:rgba(124,58,237,0.05)}.notification-item-title{font-weight:600;font-size:0.9rem}.notification-item-msg{font-size:0.8rem;color:var(--text-secondary);margin:0.25rem 0}.notification-item-time{font-size:0.7rem;color:var(--text-muted)}`;
      document.head.appendChild(style);
    }
  },

  initSidebarToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      overlay?.classList.toggle('active');
    });
    overlay?.addEventListener('click', () => {
      sidebar?.classList.remove('open');
      overlay?.classList.remove('active');
    });
  },

  initParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 15 + 's';
      p.style.animationDuration = (10 + Math.random() * 10) + 's';
      container.appendChild(p);
    }
  },

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  initCopyButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-copy]');
      if (!btn) return;
      const text = btn.dataset.copy || btn.previousElementSibling?.value;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          Notifications.success('Copied to clipboard!');
          btn.textContent = '✓ Copied';
          setTimeout(() => { btn.textContent = btn.dataset.original || 'Copy'; }, 2000);
        });
      }
    });
  },

  initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'k') { e.preventDefault(); document.getElementById('global-search')?.focus(); }
        if (e.key === 'n') { e.preventDefault(); window.location.href = 'create-link.html'; }
        if (e.key === 'd') { e.preventDefault(); window.location.href = 'dashboard.html'; }
      }
    });
    const search = document.getElementById('global-search');
    search?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') window.location.href = `search.html?q=${encodeURIComponent(e.target.value)}`;
    });
  },

  initOfflineMode() {
    const banner = document.createElement('div');
    banner.className = 'offline-banner';
    banner.innerHTML = '📡 Offline mode — viewing cached analytics';
    document.body.appendChild(banner);
    window.addEventListener('offline', () => banner.classList.add('visible'));
    window.addEventListener('online', () => banner.classList.remove('visible'));
  },

  formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toLocaleString();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.app-layout')) App.init();
  if (document.querySelector('.landing-page')) Landing.init();
});

/* Landing page */
const Landing = {
  init() {
    App.initParticles();
    App.initScrollReveal();
    const nav = document.querySelector('.landing-nav');
    window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 50));
    document.getElementById('shorten-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const url = document.getElementById('long-url')?.value;
      if (url) {
        const short = 'lnk.io/' + Math.random().toString(36).slice(2, 8);
        document.getElementById('short-result').innerHTML = `
          <div class="glass-card mt-3" style="animation:fadeInUp 0.5s ease">
            <div class="flex-between gap-2">
              <input class="form-input" value="https://${short}" readonly id="generated-short" />
              <button class="btn btn-primary" data-copy="https://${short}" data-original="Copy">Copy</button>
            </div>
            <p class="text-muted mt-2" style="font-size:0.85rem">✨ ${Math.floor(Math.random() * 500 + 100)} people clicked similar links today</p>
          </div>
        `;
        Notifications.success('Link shortened successfully!');
      }
    });
    this.renderDemoStats();
  },

  renderDemoStats() {
    const el = document.getElementById('landing-stats');
    if (!el || !window.DEMO) return;
    el.innerHTML = `
      <div class="grid grid-4 gap-3 reveal">
        <div class="stat-card"><div class="stat-label">Links Created</div><div class="stat-value">${App.formatNumber(DEMO.stats.totalLinks)}</div></div>
        <div class="stat-card"><div class="stat-label">Total Clicks</div><div class="stat-value">${App.formatNumber(DEMO.stats.totalClicks)}</div></div>
        <div class="stat-card"><div class="stat-label">Active Campaigns</div><div class="stat-value">${DEMO.stats.activeCampaigns}</div></div>
        <div class="stat-card"><div class="stat-label">QR Codes</div><div class="stat-value">${App.formatNumber(DEMO.stats.qrGenerated)}</div></div>
      </div>
    `;
  }
};

if (typeof window !== 'undefined') window.App = App;
