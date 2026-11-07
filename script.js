const sharedHeader = `
  <a class="brand" href="index.html">
    <span class="brand-mark">FRIX</span>
    <span class="brand-name">Trainingen</span>
  </a>

  <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">Menu</button>

  <nav class="site-nav" id="main-nav">
    <a href="index.html#aanbod">Aanbod</a>
    <a href="index.html#doelgroepen">Doelgroepen</a>
    <a href="index.html#werkwijze">Werkwijze</a>
    <a href="index.html#contact">Contact</a>
  </nav>
`;

const sharedFooter = `
  <p>FRIX Trainingen</p>
  <p>Naam: FRIX Trainingen | KvK: 92414222</p>
  <p>Cloud Development | Cloud Fundamentals | IT | Data | ML/AI</p>
  <p><a href="https://frix.tech">frix.tech</a> | <a href="mailto:info@frix.tech">info@frix.tech</a></p>
`;

function injectSharedLayout() {
  document.querySelectorAll('[data-shared-header]').forEach((el) => {
    el.innerHTML = sharedHeader;
  });

  document.querySelectorAll('[data-shared-footer]').forEach((el) => {
    el.innerHTML = sharedFooter;
  });
}

function initializeMenu() {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (!menuButton || !nav) {
    return;
  }

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

function initializeReveal() {
  const revealItems = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

injectSharedLayout();
initializeMenu();
initializeReveal();
