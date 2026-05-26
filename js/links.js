const LinksManager = {
  currentFilter: 'all',
  searchQuery: '',

  init() {
    this.renderTable();
    this.renderGrid();
    this.bindFilters();
    this.bindSearch();
  },

  getFilteredLinks() {
    if (!window.DEMO) return [];
    let links = [...DEMO.links];
    if (this.currentFilter === 'favorite') links = links.filter(l => l.favorite);
    else if (this.currentFilter === 'active') links = links.filter(l => l.status === 'active');
    else if (this.currentFilter === 'archived') links = links.filter(l => l.status === 'archived');
    else if (this.currentFilter === 'password') links = links.filter(l => l.password);
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      links = links.filter(l => l.title.toLowerCase().includes(q) || l.shortUrl.toLowerCase().includes(q) || l.longUrl.toLowerCase().includes(q));
    }
    return links;
  },

  renderTable() {
    const tbody = document.getElementById('links-table-body');
    if (!tbody) return;
    const links = this.getFilteredLinks().slice(0, 50);
    tbody.innerHTML = links.map(l => `
      <tr>
        <td><input type="checkbox" /></td>
        <td>
          <div class="link-title">${l.title}</div>
          <div class="link-url">${l.shortUrl}</div>
        </td>
        <td class="text-muted" style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.longUrl}</td>
        <td><strong class="text-success">${App.formatNumber(l.clicks)}</strong></td>
        <td><span class="badge badge-${l.status === 'active' ? 'success' : l.status === 'paused' ? 'warning' : 'danger'}">${l.status}</span></td>
        <td>${l.created}</td>
        <td>
          <a href="link-details.html?id=${l.id}" class="btn btn-ghost btn-sm">View</a>
          <button class="btn btn-ghost btn-sm" data-copy="https://${l.shortUrl}">Copy</button>
        </td>
      </tr>
    `).join('');
    const count = document.getElementById('links-count');
    if (count) count.textContent = `${this.getFilteredLinks().length} links`;
  },

  renderGrid() {
    const grid = document.getElementById('links-grid');
    if (!grid) return;
    const links = this.getFilteredLinks().slice(0, 24);
    grid.innerHTML = links.map(l => `
      <div class="link-card reveal">
        <div class="link-card-header">
          <span class="badge badge-primary">${l.tags[0]}</span>
          ${l.favorite ? '<span>⭐</span>' : ''}
        </div>
        <h4 style="margin-bottom:0.5rem">${l.title}</h4>
        <p class="link-url mb-2">${l.shortUrl}</p>
        <div class="flex-between">
          <span class="text-success" style="font-weight:700">${App.formatNumber(l.clicks)} clicks</span>
          <a href="link-details.html?id=${l.id}" class="btn btn-ghost btn-sm">Details →</a>
        </div>
      </div>
    `).join('');
  },

  bindFilters() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentFilter = chip.dataset.filter || 'all';
        this.renderTable();
        this.renderGrid();
      });
    });
  },

  bindSearch() {
    const input = document.getElementById('links-search');
    input?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderTable();
      this.renderGrid();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('links-table-body') || document.getElementById('links-grid')) {
    LinksManager.init();
  }
});
