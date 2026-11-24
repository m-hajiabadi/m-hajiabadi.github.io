window.addEventListener('load', function () {
  const loading = document.querySelector('.loading');

  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    }, 400);
  }
});

// Highlight active navigation link on scroll
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
});
