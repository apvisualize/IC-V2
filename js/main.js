document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Mobile menu
  const mobileBtn = document.querySelector('.nav-mobile-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = mobileBtn.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-btn');
      btn.textContent = 'Mengirim...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Pesan Terkirim!';
        btn.style.background = 'linear-gradient(135deg, #00c853, #00e676)';
        setTimeout(() => {
          btn.textContent = 'Kirim Pesan';
          btn.style.background = '';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }, 1500);
    });
  }
});