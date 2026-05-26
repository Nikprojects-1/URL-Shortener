const CampaignsManager = {
  init() {
    this.renderCards();
    this.renderTable();
  },

  renderCards() {
    const grid = document.getElementById('campaigns-grid');
    if (!grid || !window.DEMO) return;
    grid.innerHTML = DEMO.campaigns.map(c => `
      <div class="glass-card reveal">
        <div class="flex-between mb-2">
          <span class="badge badge-${c.status === 'active' ? 'success' : c.status === 'scheduled' ? 'accent' : c.status === 'paused' ? 'warning' : 'primary'}">${c.status}</span>
          <span class="text-muted" style="font-size:0.8rem">${c.start} → ${c.end}</span>
        </div>
        <h3 style="margin-bottom:1rem">${c.name}</h3>
        <div class="grid grid-3 gap-2 mb-2" style="font-size:0.85rem">
          <div><span class="text-muted">Links</span><br><strong>${c.links}</strong></div>
          <div><span class="text-muted">Clicks</span><br><strong class="text-success">${App.formatNumber(c.clicks)}</strong></div>
          <div><span class="text-muted">Budget</span><br><strong>${c.budget}</strong></div>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${c.performance}%"></div></div>
        <p class="text-muted mt-1" style="font-size:0.8rem">${c.performance}% performance score</p>
        <div class="flex gap-2 mt-3">
          <a href="analytics.html" class="btn btn-secondary btn-sm">Analytics</a>
          <button class="btn btn-ghost btn-sm">Edit</button>
        </div>
      </div>
    `).join('');
  },

  renderTable() {
    const tbody = document.getElementById('campaigns-table');
    if (!tbody || !window.DEMO) return;
    tbody.innerHTML = DEMO.campaigns.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td><span class="badge badge-${c.status === 'active' ? 'success' : 'warning'}">${c.status}</span></td>
        <td>${c.links}</td>
        <td>${App.formatNumber(c.clicks)}</td>
        <td>${c.budget}</td>
        <td>
          <div class="progress-bar" style="width:100px;display:inline-block;vertical-align:middle">
            <div class="progress-fill" style="width:${c.performance}%"></div>
          </div> ${c.performance}%
        </td>
        <td><button class="btn btn-ghost btn-sm">Manage</button></td>
      </tr>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('campaigns-grid')) CampaignsManager.init();
});
