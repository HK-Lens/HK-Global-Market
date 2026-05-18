
/* ===============================
   AutoMarket Global - Layout
   Header + Sidebar + Footer
   =============================== */

function getCurrentPageName() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function isCurrentRoute(routePath) {
  const currentPage = getCurrentPageName();
  const routePage = String(routePath || "").replace("./", "");
  return currentPage === routePage;
}

function createSidebarLink(routeKey, iconClass, label) {
  const route = APP_CONFIG.routes[routeKey];
  const activeClass = isCurrentRoute(route) ? "active" : "";

  return `
    <a class="sidebar-link ${activeClass}" href="${route}">
      <i class="${iconClass}"></i>
      <span>${label}</span>
    </a>
  `;
}

function renderHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  header.innerHTML = `
    <header class="site-topbar">
      <div class="site-topbar-inner">
        <div class="topbar-left">
          <button
            class="menu-toggle"
            id="menuToggle"
            type="button"
            aria-label="Open menu"
            aria-controls="sidebar"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <a class="logo" href="${APP_CONFIG.routes.home}" aria-label="${APP_CONFIG.site.name} home">
            AutoMarket<span>Global</span>
          </a>
        </div>

        <div class="topbar-right">
          <select
            class="country-select"
            id="countrySelect"
            aria-label="Choose country"
          ></select>
        </div>
      </div>
    </header>

    <div class="sidebar-backdrop" id="sidebarBackdrop"></div>

    <aside class="sidebar" id="sidebar" aria-label="Main menu">
      <div class="sidebar-header">
        <div class="sidebar-title">
          AutoMarket<span>Global</span>
        </div>

        <button
          class="sidebar-close"
          id="sidebarClose"
          type="button"
          aria-label="Close menu"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="sidebar-nav" aria-label="Main navigation">
        ${createSidebarLink("home", "fa-solid fa-house", "Home")}
        ${createSidebarLink("search", "fa-solid fa-magnifying-glass", "Search cars")}
        ${createSidebarLink("sell", "fa-solid fa-circle-plus", "Sell a car")}

        <div class="sidebar-divider"></div>

        ${createSidebarLink("account", "fa-solid fa-user", "My account")}
        ${createSidebarLink("favorites", "fa-solid fa-heart", "Favorites")}
        ${createSidebarLink("messages", "fa-solid fa-envelope", "Messages")}
        ${createSidebarLink("dashboard", "fa-solid fa-chart-line", "Dashboard")}

        <div class="sidebar-divider"></div>

        ${createSidebarLink("terms", "fa-solid fa-shield-halved", "Terms")}
        ${createSidebarLink("login", "fa-solid fa-right-to-bracket", "Login")}
        ${createSidebarLink("register", "fa-solid fa-user-plus", "Create account")}
      </nav>

      <div class="sidebar-footer">
        ${APP_CONFIG.site.name} · ${APP_CONFIG.site.year}
      </div>
    </aside>
  `;
}

function renderFooter() {
  const footer = document.getElementById("siteFooter");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="site-footer-inner">
        <div>
          © ${APP_CONFIG.site.year} ${APP_CONFIG.site.name}. All rights reserved.
        </div>

        <div class="footer-links">
          <a href="${APP_CONFIG.routes.terms}">Terms</a>
          <a href="${APP_CONFIG.routes.search}">Search cars</a>
          <a href="${APP_CONFIG.routes.sell}">Sell a car</a>
        </div>
      </div>
    </footer>
  `;
}

function setupSidebarEvents() {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarClose = document.getElementById("sidebarClose");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");

  if (!menuToggle || !sidebar || !sidebarClose || !sidebarBackdrop) return;

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarBackdrop.classList.add("open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarBackdrop.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", openSidebar);
  sidebarClose.addEventListener("click", closeSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
}

function setupCountrySelect() {
  const countrySelect = document.getElementById("countrySelect");
  if (!countrySelect || !window.CountryService) return;

  CountryService.fillCountrySelect(countrySelect);
  CountryService.updateSelectedCountryText();

  countrySelect.addEventListener("change", () => {
    CountryService.setSelectedCountryCode(countrySelect.value);
    CountryService.updateSelectedCountryText();

    window.dispatchEvent(
      new CustomEvent("countryChanged", {
        detail: {
          country: CountryService.getSelectedCountry()
        }
      })
    );
  });
}

function initLayout() {
  renderHeader();
  renderFooter();
  setupSidebarEvents();
  setupCountrySelect();
}

document.addEventListener("DOMContentLoaded", initLayout);
