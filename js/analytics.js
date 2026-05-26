const AnalyticsPage = {
  init() {
    if (!window.DEMO || !window.Charts) return;
    Charts.lineChart('clicks-chart', DEMO.dailyClicks);
    Charts.lineChart('traffic-chart', DEMO.monthlyClicks, { height: 240 });
    Charts.donutChart('device-donut', DEMO.devices.map(d => d.clicks), DEMO.devices.map(d => d.type));
    Charts.donutChart('browser-donut', DEMO.browsers.map(b => b.clicks), DEMO.browsers.map(b => b.name));
    Charts.barChart('monthly-bars', ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], DEMO.monthlyClicks);
    Charts.renderHeatmap('click-heatmap');
    Charts.renderWorldMap('world-map');
    this.renderCountries();
    this.renderReferrers();
    this.renderMetrics();
    Charts.circularProgress('ctr-progress', 74, 'Click-through rate');
  },

  renderMetrics() {
    const el = document.getElementById('analytics-metrics');
    if (!el) return;
    el.innerHTML = `
      <div class="metric-mini reveal"><div class="value">${App.formatNumber(DEMO.stats.totalClicks)}</div><div class="label">Total Clicks</div></div>
      <div class="metric-mini reveal"><div class="value">${App.formatNumber(DEMO.stats.uniqueVisitors)}</div><div class="label">Unique Visitors</div></div>
      <div class="metric-mini reveal"><div class="value">${DEMO.stats.avgCtr}%</div><div class="label">Avg CTR</div></div>
      <div class="metric-mini reveal"><div class="value">2.4s</div><div class="label">Avg Load Time</div></div>
      <div class="metric-mini reveal"><div class="value">68%</div><div class="label">Bounce Rate</div></div>
      <div class="metric-mini reveal"><div class="value">3.2</div><div class="label">Pages/Session</div></div>
    `;
  },

  renderCountries() {
    const el = document.getElementById('countries-list');
    if (!el) return;
    el.innerHTML = DEMO.countries.map(c => `
      <div class="country-card reveal">
        <span class="country-flag">${c.flag}</span>
        <div style="flex:1">
          <div style="font-weight:600">${c.name}</div>
          <div class="progress-bar mt-1"><div class="progress-fill" style="width:${c.percent}%"></div></div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:700">${App.formatNumber(c.clicks)}</div>
          <div class="text-muted" style="font-size:0.8rem">${c.percent}%</div>
        </div>
      </div>
    `).join('');
  },

  renderReferrers() {
    const el = document.getElementById('referrers-list');
    if (!el) return;
    el.innerHTML = `<ul class="referrer-list">${DEMO.referrers.map(r => `
      <li class="referrer-item">
        <span style="min-width:120px">${r.source}</span>
        <div class="referrer-bar"><div class="referrer-fill" style="width:${r.percent}%"></div></div>
        <span style="min-width:80px;text-align:right;font-weight:600">${App.formatNumber(r.clicks)}</span>
      </li>
    `).join('')}</ul>`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('clicks-chart') || document.getElementById('countries-list')) {
    AnalyticsPage.init();
  }
});
