// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// Counter
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let start = null;
        const duration = 2000;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

// Typing effect
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const texts = ['Inovasi', 'Kolaborasi', 'Kreativitas', 'Teknologi', 'Komunitas'];
  let i = 0, j = 0, del = false;
  function type() {
    const curr = texts[i];
    if (!del && j <= curr.length) { el.textContent = curr.slice(0, j++); }
    else if (del && j >= 0) { el.textContent = curr.slice(0, j--); }
    if (j === curr.length + 1) { del = true; setTimeout(type, 1500); return; }
    if (j < 0) { del = false; i = (i + 1) % texts.length; }
    setTimeout(type, del ? 60 : 100);
  }
  type();
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCounters();
  initTyping();
});