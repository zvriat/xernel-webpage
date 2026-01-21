const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let time = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time += WAVE_SPEED * 16;

  for (let y = 0; y <= canvas.height; y += DOT_SPACING) {
    for (let x = 0; x <= canvas.width; x += DOT_SPACING) {
      const phase = (x + y) * 0.02;
      const wave = Math.sin(time + phase);
      const offset = wave * WAVE_AMPLITUDE;
      const radius = BASE_RADIUS + wave * 0.5;

      ctx.beginPath();
      if (SHAPE_TYPE === 'circle') {
        ctx.arc(x + offset, y + offset, radius, 0, Math.PI * 2);
      } else {
        const size = SQUARE_SIZE + wave * 0.5;
        const r = CORNER_RADIUS;
        const px = x + offset - size / 2;
        const py = y + offset - size / 2;

        ctx.moveTo(px + r, py);
        ctx.lineTo(px + size - r, py);
        ctx.quadraticCurveTo(px + size, py, px + size, py + r);
        ctx.lineTo(px + size, py + size - r);
        ctx.quadraticCurveTo(px + size, py + size, px + size - r, py + size);
        ctx.lineTo(px + r, py + size);
        ctx.quadraticCurveTo(px, py + size, px, py + size - r);
        ctx.lineTo(px, py + r);
        ctx.quadraticCurveTo(px, py, px + r, py);
      }
      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)'; //color
      ctx.fill();
    }
  }

  requestAnimationFrame(draw);
}

draw();
