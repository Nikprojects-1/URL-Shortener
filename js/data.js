/* Demo Data - LinkPulse URL Shortener Platform */
const DEMO = {
  stats: {
    totalLinks: 2847,
    totalClicks: 1847293,
    activeCampaigns: 47,
    qrGenerated: 1203,
    clickGrowth: 23.4,
    linksGrowth: 12.8,
    avgCtr: 4.7,
    uniqueVisitors: 892456
  },

  domains: ['lnk.io', 'go.link', 'shrt.co', 'pulse.link'],

  campaigns: [
    { id: 1, name: 'Summer Product Launch 2025', status: 'active', links: 34, clicks: 89420, budget: '$12,000', start: '2025-03-01', end: '2025-08-31', performance: 87 },
    { id: 2, name: 'Q2 Newsletter Campaign', status: 'active', links: 18, clicks: 45230, budget: '$4,500', start: '2025-04-01', end: '2025-06-30', performance: 72 },
    { id: 3, name: 'Black Friday Early Access', status: 'scheduled', links: 56, clicks: 0, budget: '$25,000', start: '2025-11-15', end: '2025-11-30', performance: 0 },
    { id: 4, name: 'Developer Conference 2025', status: 'active', links: 22, clicks: 67890, budget: '$8,200', start: '2025-05-10', end: '2025-05-20', performance: 94 },
    { id: 5, name: 'Mobile App Install Drive', status: 'active', links: 41, clicks: 156780, budget: '$18,000', start: '2025-01-15', end: '2025-12-31', performance: 91 },
    { id: 6, name: 'Partner Referral Program', status: 'active', links: 29, clicks: 34560, budget: '$6,000', start: '2025-02-01', end: '2025-12-31', performance: 68 },
    { id: 7, name: 'Holiday Gift Guide', status: 'paused', links: 15, clicks: 23450, budget: '$3,200', start: '2024-12-01', end: '2025-01-15', performance: 55 },
    { id: 8, name: 'Webinar Series Q1', status: 'completed', links: 12, clicks: 18900, budget: '$2,800', start: '2025-01-01', end: '2025-03-31', performance: 78 },
    { id: 9, name: 'Social Media Blitz', status: 'active', links: 67, clicks: 234100, budget: '$15,000', start: '2025-04-15', end: '2025-07-15', performance: 89 },
    { id: 10, name: 'Enterprise Trial Signup', status: 'active', links: 8, clicks: 12340, budget: '$20,000', start: '2025-01-01', end: '2025-12-31', performance: 82 }
  ],

  countries: [
    { code: 'US', name: 'United States', flag: '🇺🇸', clicks: 423890, percent: 22.9 },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', clicks: 198450, percent: 10.7 },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', clicks: 156230, percent: 8.5 },
    { code: 'IN', name: 'India', flag: '🇮🇳', clicks: 142670, percent: 7.7 },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷', clicks: 128340, percent: 6.9 },
    { code: 'CA', name: 'Canada', flag: '🇨🇦', clicks: 98760, percent: 5.3 },
    { code: 'FR', name: 'France', flag: '🇫🇷', clicks: 87650, percent: 4.7 },
    { code: 'AU', name: 'Australia', flag: '🇦🇺', clicks: 76540, percent: 4.1 },
    { code: 'JP', name: 'Japan', flag: '🇯🇵', clicks: 67890, percent: 3.7 },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽', clicks: 54320, percent: 2.9 },
    { code: 'ES', name: 'Spain', flag: '🇪🇸', clicks: 48900, percent: 2.6 },
    { code: 'IT', name: 'Italy', flag: '🇮🇹', clicks: 45670, percent: 2.5 },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱', clicks: 38900, percent: 2.1 },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷', clicks: 34560, percent: 1.9 },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬', clicks: 29870, percent: 1.6 },
    { code: 'SE', name: 'Sweden', flag: '🇸🇪', clicks: 23450, percent: 1.3 },
    { code: 'PL', name: 'Poland', flag: '🇵🇱', clicks: 21230, percent: 1.1 },
    { code: 'AE', name: 'UAE', flag: '🇦🇪', clicks: 18900, percent: 1.0 },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦', clicks: 16780, percent: 0.9 },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬', clicks: 14560, percent: 0.8 }
  ],

  cities: [
    { name: 'New York', country: 'US', clicks: 89420 },
    { name: 'London', country: 'GB', clicks: 67890 },
    { name: 'Berlin', country: 'DE', clicks: 45670 },
    { name: 'Mumbai', country: 'IN', clicks: 42340 },
    { name: 'São Paulo', country: 'BR', clicks: 38900 },
    { name: 'Toronto', country: 'CA', clicks: 34560 },
    { name: 'Paris', country: 'FR', clicks: 32100 },
    { name: 'Sydney', country: 'AU', clicks: 29870 },
    { name: 'Tokyo', country: 'JP', clicks: 27650 },
    { name: 'Los Angeles', country: 'US', clicks: 25430 }
  ],

  devices: [
    { type: 'Mobile', icon: '📱', percent: 58.3, clicks: 1076870 },
    { type: 'Desktop', icon: '🖥️', percent: 35.2, clicks: 650247 },
    { type: 'Tablet', icon: '📟', percent: 6.5, clicks: 120176 }
  ],

  browsers: [
    { name: 'Chrome', percent: 62.4, clicks: 1152709 },
    { name: 'Safari', percent: 18.7, clicks: 345444 },
    { name: 'Firefox', percent: 8.2, clicks: 151478 },
    { name: 'Edge', percent: 6.1, clicks: 112685 },
    { name: 'Samsung Internet', percent: 2.8, clicks: 51724 },
    { name: 'Opera', percent: 1.9, clicks: 35099 }
  ],

  os: [
    { name: 'Android', percent: 42.1 },
    { name: 'iOS', percent: 28.6 },
    { name: 'Windows', percent: 18.4 },
    { name: 'macOS', percent: 8.2 },
    { name: 'Linux', percent: 2.7 }
  ],

  referrers: [
    { source: 'Direct', clicks: 523890, percent: 28.4 },
    { source: 'Twitter / X', clicks: 312450, percent: 16.9 },
    { source: 'LinkedIn', clicks: 267890, percent: 14.5 },
    { source: 'Facebook', clicks: 234560, percent: 12.7 },
    { source: 'Instagram', clicks: 198340, percent: 10.7 },
    { source: 'Google Search', clicks: 156780, percent: 8.5 },
    { source: 'Email Newsletter', clicks: 123450, percent: 6.7 },
    { source: 'Reddit', clicks: 89230, percent: 4.8 },
    { source: 'YouTube', clicks: 67890, percent: 3.7 },
    { source: 'Other', clicks: 48813, percent: 2.6 }
  ],

  dailyClicks: [12450, 13200, 11890, 14560, 15230, 16780, 14120, 13890, 15670, 16230, 17120, 15890, 16450, 17230, 18120, 17890, 19230, 18670, 20120, 19890, 21230, 20890, 22450, 21980, 23120, 22890, 24230, 23890, 25120, 24780],

  monthlyClicks: [423890, 456780, 489230, 512340, 534560, 567890, 589230, 612450, 634560, 656780, 678900, 701230],

  team: [
    { name: 'Alex Morgan', role: 'Admin', email: 'alex@workspace.io', avatar: 'AM', links: 342, status: 'online' },
    { name: 'Jordan Lee', role: 'Editor', email: 'jordan@workspace.io', avatar: 'JL', links: 189, status: 'online' },
    { name: 'Sam Taylor', role: 'Analyst', email: 'sam@workspace.io', avatar: 'ST', links: 56, status: 'away' },
    { name: 'Casey Kim', role: 'Editor', email: 'casey@workspace.io', avatar: 'CK', links: 234, status: 'offline' },
    { name: 'Riley Chen', role: 'Viewer', email: 'riley@workspace.io', avatar: 'RC', links: 12, status: 'online' },
    { name: 'Morgan Davis', role: 'Admin', email: 'morgan@workspace.io', avatar: 'MD', links: 478, status: 'online' },
    { name: 'Quinn Wilson', role: 'Editor', email: 'quinn@workspace.io', avatar: 'QW', links: 167, status: 'away' },
    { name: 'Avery Brown', role: 'Viewer', email: 'avery@workspace.io', avatar: 'AB', links: 8, status: 'offline' }
  ],

  notifications: [
    { type: 'click', title: 'Link spike detected', message: 'lnk.io/summer-sale received 2,340 clicks in the last hour', time: '2 min ago', read: false },
    { type: 'qr', title: 'QR code downloaded', message: 'Team member downloaded QR for lnk.io/dev-conf', time: '15 min ago', read: false },
    { type: 'campaign', title: 'Campaign milestone', message: 'Mobile App Install Drive reached 150K clicks', time: '1 hour ago', read: false },
    { type: 'warning', title: 'Link expiring soon', message: 'lnk.io/promo-2024 expires in 3 days', time: '2 hours ago', read: true },
    { type: 'team', title: 'New team member', message: 'Riley Chen joined Marketing Workspace', time: '3 hours ago', read: true },
    { type: 'click', title: 'New click record', message: 'lnk.io/launch-day broke daily click record', time: '5 hours ago', read: true },
    { type: 'security', title: 'Suspicious activity', message: 'Unusual traffic from unknown region on lnk.io/secure-doc', time: '6 hours ago', read: false },
    { type: 'qr', title: 'QR scan surge', message: 'QR code for lnk.io/menu scanned 890 times today', time: '8 hours ago', read: true },
    { type: 'campaign', title: 'Campaign started', message: 'Developer Conference 2025 campaign is now live', time: '12 hours ago', read: true },
    { type: 'click', title: 'Geographic alert', message: '45% traffic increase from Germany on product links', time: '1 day ago', read: true }
  ],

  activities: [
    { action: 'Created short link', detail: 'lnk.io/q2-report → quarterly-report.pdf', user: 'Alex Morgan', time: '5 min ago' },
    { action: 'Updated campaign', detail: 'Summer Product Launch 2025 - added 3 links', user: 'Jordan Lee', time: '12 min ago' },
    { action: 'Generated QR code', detail: 'lnk.io/event-tickets with custom branding', user: 'Sam Taylor', time: '28 min ago' },
    { action: 'Exported analytics', detail: 'March 2025 traffic report (CSV)', user: 'Casey Kim', time: '45 min ago' },
    { action: 'Archived link', detail: 'lnk.io/old-promo moved to archive', user: 'Alex Morgan', time: '1 hour ago' },
    { action: 'Password protected', detail: 'lnk.io/confidential-docs secured', user: 'Morgan Davis', time: '2 hours ago' },
    { action: 'Scheduled link', detail: 'lnk.io/black-friday set for Nov 15', user: 'Jordan Lee', time: '3 hours ago' },
    { action: 'Team invite sent', detail: 'Invited new editor to workspace', user: 'Alex Morgan', time: '4 hours ago' },
    { action: 'Custom domain added', detail: 'go.brand.io connected successfully', user: 'Morgan Davis', time: '5 hours ago' },
    { action: 'API key regenerated', detail: 'Production API key rotated', user: 'Alex Morgan', time: '6 hours ago' },
    { action: 'Bulk link import', detail: 'Imported 47 links from CSV', user: 'Casey Kim', time: '8 hours ago' },
    { action: 'Analytics shared', detail: 'Shared dashboard with stakeholders', user: 'Sam Taylor', time: '10 hours ago' },
    { action: 'Link favorited', detail: 'lnk.io/hero-cta added to favorites', user: 'Quinn Wilson', time: '12 hours ago' },
    { action: 'Campaign paused', detail: 'Holiday Gift Guide campaign paused', user: 'Jordan Lee', time: '1 day ago' },
    { action: 'Theme changed', detail: 'Workspace switched to light theme', user: 'Riley Chen', time: '1 day ago' }
  ],

  securityLogs: [
    { event: 'Login successful', ip: '192.168.1.45', location: 'New York, US', device: 'Chrome on macOS', time: '2025-05-26 09:15:22', status: 'success' },
    { event: 'API key used', ip: '10.0.0.12', location: 'Server - US-East', device: 'API Client v2.1', time: '2025-05-26 09:12:08', status: 'success' },
    { event: 'Failed login attempt', ip: '203.45.67.89', location: 'Unknown', device: 'Firefox on Linux', time: '2025-05-26 08:45:33', status: 'blocked' },
    { event: 'Password changed', ip: '192.168.1.45', location: 'New York, US', device: 'Chrome on macOS', time: '2025-05-25 16:30:00', status: 'success' },
    { event: '2FA enabled', ip: '192.168.1.45', location: 'New York, US', device: 'Chrome on macOS', time: '2025-05-25 16:28:15', status: 'success' },
    { event: 'Suspicious click pattern', ip: 'Multiple', location: 'Various', device: 'Bot traffic detected', time: '2025-05-25 14:22:00', status: 'alert' },
    { event: 'Link access denied', ip: '45.67.89.12', location: 'Unknown Region', device: 'Unknown', time: '2025-05-25 11:05:44', status: 'blocked' },
    { event: 'Session expired', ip: '192.168.1.45', location: 'New York, US', device: 'Chrome on macOS', time: '2025-05-24 23:00:00', status: 'info' }
  ],

  testimonials: [
    { text: 'LinkPulse transformed how we track campaign performance. The analytics dashboard is incredibly detailed.', author: 'Marketing Director', company: 'Tech Startup', avatar: 'MD' },
    { text: 'Custom aliases and QR codes made our event marketing seamless. Highly recommend for enterprise teams.', author: 'Events Manager', company: 'Global Corp', avatar: 'EM' },
    { text: 'The geographic analytics helped us optimize ad spend across 20+ countries. Game changer.', author: 'Growth Lead', company: 'E-commerce Brand', avatar: 'GL' },
    { text: 'API integration was straightforward. We shortened 10,000+ links programmatically in days.', author: 'Engineering Lead', company: 'SaaS Platform', avatar: 'EL' }
  ],

  pricing: [
    { name: 'Starter', price: 0, period: 'month', features: ['500 links/month', 'Basic analytics', 'Standard QR codes', '1 user'], cta: 'Get Started' },
    { name: 'Pro', price: 29, period: 'month', features: ['10,000 links/month', 'Advanced analytics', 'Custom QR branding', '5 team members', 'Custom domains'], cta: 'Start Free Trial', featured: true },
    { name: 'Enterprise', price: 99, period: 'month', features: ['Unlimited links', 'Real-time analytics', 'SSO & API access', 'Unlimited team', 'Dedicated support'], cta: 'Contact Sales' }
  ],

  aiSuggestions: [
    'Use "summer-deals" as alias for higher click-through on seasonal campaigns',
    'Schedule link activation for Tuesday 10 AM for 23% better engagement',
    'Add UTM parameters to track social media conversion accurately',
    'Enable password protection for links shared in email newsletters',
    'Create QR codes with brand colors for 18% more scan rates'
  ]
};

// Generate 150+ demo links
(function generateLinks() {
  const titles = ['Product Launch', 'Blog Post', 'Newsletter', 'Landing Page', 'App Download', 'Event Registration', 'Documentation', 'Support Article', 'Pricing Page', 'Case Study', 'Webinar Signup', 'Free Trial', 'Demo Request', 'Contact Form', 'Careers Page', 'Press Release', 'Social Post', 'Video Tutorial', 'Podcast Episode', 'Survey Link'];
  const domains = ['example.com', 'platform.io', 'shop.store', 'blog.site', 'docs.dev', 'app.mobile', 'events.live', 'media.stream'];
  const tags = ['marketing', 'product', 'sales', 'support', 'events', 'social', 'email', 'paid'];
  const statuses = ['active', 'active', 'active', 'paused', 'archived'];
  const links = [];

  for (let i = 1; i <= 150; i++) {
    const title = titles[i % titles.length] + ' ' + (Math.floor(i / titles.length) + 1);
    const alias = ['launch', 'blog', 'news', 'page', 'app', 'event', 'docs', 'help', 'price', 'case', 'webinar', 'trial', 'demo', 'contact', 'careers', 'press', 'social', 'video', 'podcast', 'survey'][i % 20] + '-' + i;
    links.push({
      id: i,
      title,
      shortUrl: `lnk.io/${alias}`,
      longUrl: `https://www.${domains[i % domains.length]}/${alias.replace(/-/g, '/')}`,
      clicks: Math.floor(Math.random() * 50000) + 100,
      uniqueClicks: Math.floor(Math.random() * 30000) + 50,
      created: `2025-${String(Math.floor(Math.random() * 5) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      status: statuses[i % statuses.length],
      campaign: DEMO.campaigns[i % DEMO.campaigns.length].name,
      tags: [tags[i % tags.length], tags[(i + 3) % tags.length]],
      favorite: i % 7 === 0,
      password: i % 15 === 0,
      expires: i % 12 === 0 ? '2025-06-30' : null,
      qrScans: Math.floor(Math.random() * 5000),
      country: DEMO.countries[i % DEMO.countries.length].name,
      device: DEMO.devices[i % 3].type
    });
  }
  links.sort((a, b) => b.clicks - a.clicks);
  DEMO.links = links;
})();

// Export for modules
if (typeof window !== 'undefined') window.DEMO = DEMO;
