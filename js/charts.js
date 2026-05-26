/* Chart rendering utilities - Canvas based */
const Charts = {
  colors: ['#7C3AED', '#06B6D4', '#22C55E', '#F59E0B', '#EF4444', '#A78BFA', '#22D3EE', '#84CC16'],

  lineChart(canvasId, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = (options.height || 280) * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = (options.height || 280) + 'px';
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = options.height || 280;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const max = Math.max(...data) * 1.1;
    const min = Math.min(...data) * 0.9;
    const range = max - min || 1;

    ctx.clearRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();
    }

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.3)');
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

    const points = data.map((v, i) => ({
      x: padding.left + (chartW / (data.length - 1)) * i,
      y: padding.top + chartH - ((v - min) / range) * chartH
    }));

    ctx.beginPath();
    ctx.moveTo(points[0].x, h - padding.bottom);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, h - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = '#7C3AED';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Points
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#7C3AED';
      ctx.fill();
      ctx.strokeStyle = '#F8FAFC';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  },

  barChart(containerId, labels, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const max = Math.max(...data);
    container.innerHTML = data.map((v, i) => `
      <div class="bar" style="height: ${(v / max) * 100}%" title="${labels[i]}: ${v.toLocaleString()}">
        <span class="bar-label">${labels[i]}</span>
      </div>
    `).join('');
  },

  donutChart(canvasId, data, labels) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 200;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const total = data.reduce((a, b) => a + b, 0);
    const center = size / 2;
    const radius = 70;
    const innerRadius = 45;
    let startAngle = -Math.PI / 2;

    data.forEach((value, i) => {
      const sliceAngle = (value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(center, center, radius, startAngle, startAngle + sliceAngle);
      ctx.arc(center, center, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = this.colors[i % this.colors.length];
      ctx.fill();
      startAngle += sliceAngle;
    });

    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#F8FAFC';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(total > 1000 ? (total / 1000).toFixed(1) + 'K' : total, center, center - 8);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('Total', center, center + 14);

    const legend = canvas.parentElement.querySelector('.chart-legend');
    if (legend) {
      legend.innerHTML = labels.map((l, i) => `
        <div class="legend-item">
          <span class="legend-dot" style="background:${this.colors[i]}"></span>
          ${l} (${((data[i] / total) * 100).toFixed(1)}%)
        </div>
      `).join('');
    }
  },

  circularProgress(elementId, percent, label) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (percent / 100) * circumference;
    el.innerHTML = `
      <div class="circular-progress">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--bg-tertiary)" stroke-width="10"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="url(#grad)" stroke-width="10"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
            stroke-linecap="round" style="transition: stroke-dashoffset 1s ease"/>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#7C3AED"/>
              <stop offset="100%" style="stop-color:#06B6D4"/>
            </linearGradient>
          </defs>
        </svg>
        <div class="value">${percent}%</div>
      </div>
      ${label ? `<p class="text-center text-muted mt-2">${label}</p>` : ''}
    `;
  },

  renderHeatmap(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = '';
    for (let i = 0; i < 168; i++) {
      const level = Math.floor(Math.random() * 5) + 1;
      html += `<div class="heatmap-cell level-${level}" title="Hour ${i % 24}: ${level * 200} clicks"></div>`;
    }
    container.innerHTML = html;
  },

  renderWorldMap(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !window.DEMO) return;
    const positions = [
      { x: 22, y: 35 }, { x: 48, y: 28 }, { x: 52, y: 32 }, { x: 75, y: 38 },
      { x: 28, y: 55 }, { x: 18, y: 42 }, { x: 55, y: 30 }, { x: 85, y: 65 },
      { x: 78, y: 35 }, { x: 35, y: 48 }, { x: 62, y: 42 }, { x: 45, y: 52 },
      { x: 70, y: 45 }, { x: 58, y: 58 }, { x: 40, y: 38 }
    ];
    DEMO.countries.slice(0, 15).forEach((c, i) => {
      const pos = positions[i] || { x: 50, y: 50 };
      const size = 8 + (c.percent / 3);
      container.innerHTML += `<div class="map-dot" style="left:${pos.x}%;top:${pos.y}%;width:${size}px;height:${size}px" title="${c.name}: ${c.clicks.toLocaleString()} clicks"></div>`;
    });
  }
};

if (typeof window !== 'undefined') window.Charts = Charts;
