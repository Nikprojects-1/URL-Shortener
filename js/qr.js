const QRGenerator = {
  colors: { fg: '#0F172A', bg: '#FFFFFF' },

  init() {
    this.generate();
    this.bindControls();
  },

  generate() {
    const canvas = document.getElementById('qr-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 200;
    canvas.width = size;
    canvas.height = size;

    const url = document.getElementById('qr-url')?.value || 'https://lnk.io/demo';
    ctx.fillStyle = this.colors.bg;
    ctx.fillRect(0, 0, size, size);

    const modules = 25;
    const cellSize = size / modules;
    const hash = this.hashCode(url);

    ctx.fillStyle = this.colors.fg;
    for (let row = 0; row < modules; row++) {
      for (let col = 0; col < modules; col++) {
        const isFinder = (row < 7 && col < 7) || (row < 7 && col >= modules - 7) || (row >= modules - 7 && col < 7);
        const inFinder = isFinder && ((row < 7 && col < 7 && (row === 0 || row === 6 || col === 0 || col === 6 || (row >= 2 && row <= 4 && col >= 2 && col <= 4))) ||
          (row < 7 && col >= modules - 7 && (row === 0 || row === 6 || col === modules - 1 || col === modules - 7 || (row >= 2 && row <= 4 && col >= modules - 5 && col <= modules - 3))) ||
          (row >= modules - 7 && col < 7 && (row === modules - 1 || row === modules - 7 || col === 0 || col === 6 || (row >= modules - 5 && row <= modules - 3 && col >= 2 && col <= 4))));
        const random = ((hash + row * 31 + col * 17) % 3) !== 0;
        if (inFinder || (!isFinder && random)) {
          ctx.fillRect(col * cellSize + 1, row * cellSize + 1, cellSize - 2, cellSize - 2);
        }
      }
    }
  },

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);
    return Math.abs(hash);
  },

  bindControls() {
    document.getElementById('qr-url')?.addEventListener('input', () => this.generate());
    document.getElementById('qr-fg-color')?.addEventListener('input', (e) => { this.colors.fg = e.target.value; this.generate(); });
    document.getElementById('qr-bg-color')?.addEventListener('input', (e) => { this.colors.bg = e.target.value; this.generate(); });
    document.querySelectorAll('.qr-style').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.qr-style').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.generate();
        Notifications.info(`Applied ${btn.dataset.style} QR style`);
      });
    });
    document.getElementById('download-qr')?.addEventListener('click', () => {
      const canvas = document.getElementById('qr-canvas');
      const link = document.createElement('a');
      link.download = 'linkpulse-qr.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      Notifications.success('QR code downloaded!');
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('qr-canvas')) QRGenerator.init();
});
