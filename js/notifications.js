const Notifications = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
    this.bindDropdown();
  },

  show(message, type = 'info', duration = 4000) {
    this.init();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✅', warning: '⚠️', danger: '❌', info: 'ℹ️' };
    toast.innerHTML = `
      <span>${icons[type] || icons.info}</span>
      <div><strong>${type.charAt(0).toUpperCase() + type.slice(1)}</strong><br>${message}</div>
    `;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideInRight 0.4s ease reverse';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  },

  success(msg) { this.show(msg, 'success'); },
  warning(msg) { this.show(msg, 'warning'); },
  error(msg) { this.show(msg, 'danger'); },
  info(msg) { this.show(msg, 'info'); },

  bindDropdown() {
    const btn = document.querySelector('.notification-btn');
    const dropdown = document.querySelector('.notification-dropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });
    document.addEventListener('click', () => dropdown.classList.remove('active'));
    dropdown?.addEventListener('click', e => e.stopPropagation());
  },

  renderDropdownList() {
    const list = document.getElementById('notification-list');
    if (!list || !window.DEMO) return;
    list.innerHTML = DEMO.notifications.map(n => `
      <div class="notification-item ${n.read ? '' : 'unread'}">
        <div class="notification-item-title">${n.title}</div>
        <div class="notification-item-msg">${n.message}</div>
        <div class="notification-item-time">${n.time}</div>
      </div>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => Notifications.init());
if (typeof window !== 'undefined') window.Notifications = Notifications;
