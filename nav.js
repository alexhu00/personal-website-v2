// Scroll reveal: watches for .reveal elements added dynamically
(function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  function observe() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
  }

  const mo = new MutationObserver(observe);
  document.addEventListener('DOMContentLoaded', () => {
    observe();
    mo.observe(document.body, { childList: true, subtree: true });
  });
})();

// Maps each page to its nav section so we know what to persist
const SECTION_MAP = {
  'index':   'home',
  'photos':  'photos',
  'videos':  'videos',
  'work':    'work',
  'project': 'work',   // project detail pages belong to work
  'about':   'about',
};

// Derive current page slug from pathname
function currentSlug() {
  const path = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  return path.replace(/\.html$/, '') || 'index';
}

// On every page load, record this URL under its section key
(function persistCurrentPage() {
  const slug = currentSlug();
  const section = SECTION_MAP[slug];
  if (section) {
    sessionStorage.setItem('lastVisited_' + section, window.location.href);
  }
})();

