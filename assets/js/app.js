/* HK Global Market & Services - Shared App Core */

(function () {
  "use strict";

  const APP = {
    name: "HK Global Market & Services",
    version: "1.0.0"
  };

  const STORAGE = {
    country: "amg_country_code",
    countryLabel: "amg_country_label",
    lang: "amg_country_lang",
    currency: "amg_country_currency",
    region: "amg_country_region",
    ads: "hk_global_ads",
    favorites: "hk_global_favorites",
    messages: "hk_global_messages",
    accounts: "hk_global_accounts",
    currentUser: "hk_global_current_user",
    session: "hk_global_auth_session",
    theme: "hk_global_theme"
  };

  const RTL_LANGS = ["ar", "fa", "ur", "he"];

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const DICT = {
    en: {
      home: "Home",
      search: "Search",
      postAd: "Post ad",
      account: "My account",
      favorites: "Favorites",
      messages: "Messages",
      dashboard: "Dashboard",
      terms: "Terms",
      login: "Login",
      register: "Create account",
      logout: "Logout",
      menu: "Menu",
      close: "Close",
      country: "Country",
      language: "Language",
      allCategories: "All categories",
      vehicles: "Vehicles",
      cars: "Cars",
      carRental: "Car rental",
      motorcycles: "Motorcycles",
      bicycles: "Bicycles",
      trucks: "Trucks",
      realEstate: "Real estate",
      apartmentsSale: "Apartments for sale",
      apartmentsRent: "Apartments for rent",
      housesSale: "Houses for sale",
      housesRent: "Houses for rent",
      shops: "Commercial shops",
      agriculturalLand: "Agricultural land",
      electronics: "Electronics",
      phones: "Phones",
      computers: "Computers",
      appliances: "Home appliances",
      homeItems: "Home items",
      furniture: "Furniture",
      tools: "Tools",
      services: "Services",
      maintenance: "Maintenance",
      homeMaintenance: "Home maintenance",
      companyMaintenance: "Company maintenance",
      serviceCenters: "Service centers",
      education: "Education",
      digitalServices: "Digital services",
      personalServices: "Personal services",
      beauty: "Beauty",
      legal: "Legal services",
      medical: "Medical services",
      jobs: "Jobs",
      saved: "Saved",
      published: "Published",
      draft: "Draft",
      active: "Active",
      inactive: "Inactive",
      loading: "Loading...",
      noData: "No data found.",
      copied: "Copied.",
      savedSuccess: "Saved successfully.",
      deletedSuccess: "Deleted successfully.",
      loginRequired: "Please login first.",
      confirmDelete: "Are you sure you want to delete this item?",
      selectedCountryChanged: "Country changed successfully.",
      appReady: "Application ready."
    },

    ar: {
      home: "الرئيسية",
      search: "البحث",
      postAd: "نشر إعلان",
      account: "حسابي",
      favorites: "المفضلة",
      messages: "الرسائل",
      dashboard: "لوحة التحكم",
      terms: "الشروط",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      logout: "تسجيل الخروج",
      menu: "القائمة",
      close: "إغلاق",
      country: "الدولة",
      language: "اللغة",
      allCategories: "كل الفئات",
      vehicles: "المركبات",
      cars: "سيارات",
      carRental: "سيارات للإيجار",
      motorcycles: "دراجات نارية",
      bicycles: "دراجات هوائية",
      trucks: "شاحنات",
      realEstate: "العقارات",
      apartmentsSale: "شقق للبيع",
      apartmentsRent: "شقق للإيجار",
      housesSale: "منازل للبيع",
      housesRent: "منازل للإيجار",
      shops: "محلات تجارية",
      agriculturalLand: "أراضٍ زراعية",
      electronics: "الإلكترونيات",
      phones: "هواتف",
      computers: "كمبيوترات",
      appliances: "أجهزة منزلية",
      homeItems: "أدوات منزلية",
      furniture: "أثاث",
      tools: "معدات وأدوات",
      services: "الخدمات",
      maintenance: "الصيانة",
      homeMaintenance: "صيانة المنازل",
      companyMaintenance: "صيانة الشركات",
      serviceCenters: "مراكز خدمية",
      education: "التعليم",
      digitalServices: "الخدمات الرقمية",
      personalServices: "الخدمات الشخصية",
      beauty: "التجميل",
      legal: "خدمات قانونية",
      medical: "خدمات طبية",
      jobs: "وظائف",
      saved: "تم الحفظ",
      published: "منشور",
      draft: "مسودة",
      active: "نشط",
      inactive: "غير نشط",
      loading: "جار التحميل...",
      noData: "لا توجد بيانات.",
      copied: "تم النسخ.",
      savedSuccess: "تم الحفظ بنجاح.",
      deletedSuccess: "تم الحذف بنجاح.",
      loginRequired: "يرجى تسجيل الدخول أولاً.",
      confirmDelete: "هل أنت متأكد أنك تريد حذف هذا العنصر؟",
      selectedCountryChanged: "تم تغيير الدولة بنجاح.",
      appReady: "التطبيق جاهز."
    },

    sv: {
      home: "Hem",
      search: "Sök",
      postAd: "Lägg upp annons",
      account: "Mitt konto",
      favorites: "Favoriter",
      messages: "Meddelanden",
      dashboard: "Panel",
      terms: "Villkor",
      login: "Logga in",
      register: "Skapa konto",
      logout: "Logga ut",
      menu: "Meny",
      close: "Stäng",
      country: "Land",
      language: "Språk",
      allCategories: "Alla kategorier",
      vehicles: "Fordon",
      cars: "Bilar",
      carRental: "Biluthyrning",
      motorcycles: "Motorcyklar",
      bicycles: "Cyklar",
      trucks: "Lastbilar",
      realEstate: "Fastigheter",
      apartmentsSale: "Lägenheter till salu",
      apartmentsRent: "Lägenheter att hyra",
      housesSale: "Hus till salu",
      housesRent: "Hus att hyra",
      shops: "Butiker",
      agriculturalLand: "Jordbruksmark",
      electronics: "Elektronik",
      phones: "Telefoner",
      computers: "Datorer",
      appliances: "Vitvaror",
      homeItems: "Hemartiklar",
      furniture: "Möbler",
      tools: "Verktyg",
      services: "Tjänster",
      maintenance: "Underhåll",
      homeMaintenance: "Hemunderhåll",
      companyMaintenance: "Företagsunderhåll",
      serviceCenters: "Servicecenter",
      education: "Utbildning",
      digitalServices: "Digitala tjänster",
      personalServices: "Personliga tjänster",
      beauty: "Skönhet",
      legal: "Juridiska tjänster",
      medical: "Medicinska tjänster",
      jobs: "Jobb",
      saved: "Sparad",
      published: "Publicerad",
      draft: "Utkast",
      active: "Aktiv",
      inactive: "Inaktiv",
      loading: "Laddar...",
      noData: "Ingen data hittades.",
      copied: "Kopierat.",
      savedSuccess: "Sparat.",
      deletedSuccess: "Raderat.",
      loginRequired: "Logga in först.",
      confirmDelete: "Är du säker på att du vill radera detta?",
      selectedCountryChanged: "Land ändrades.",
      appReady: "Appen är redo."
    },

    de: {
      home: "Start",
      search: "Suche",
      postAd: "Anzeige erstellen",
      account: "Mein Konto",
      favorites: "Favoriten",
      messages: "Nachrichten",
      dashboard: "Dashboard",
      terms: "Bedingungen",
      login: "Anmelden",
      register: "Konto erstellen",
      logout: "Abmelden",
      menu: "Menü",
      close: "Schließen",
      country: "Land",
      language: "Sprache",
      allCategories: "Alle Kategorien",
      vehicles: "Fahrzeuge",
      cars: "Autos",
      carRental: "Autovermietung",
      motorcycles: "Motorräder",
      bicycles: "Fahrräder",
      trucks: "LKW",
      realEstate: "Immobilien",
      apartmentsSale: "Wohnungen zum Verkauf",
      apartmentsRent: "Wohnungen zur Miete",
      housesSale: "Häuser zum Verkauf",
      housesRent: "Häuser zur Miete",
      shops: "Gewerbeflächen",
      agriculturalLand: "Agrarland",
      electronics: "Elektronik",
      phones: "Telefone",
      computers: "Computer",
      appliances: "Haushaltsgeräte",
      homeItems: "Haushaltswaren",
      furniture: "Möbel",
      tools: "Werkzeuge",
      services: "Dienstleistungen",
      maintenance: "Wartung",
      homeMaintenance: "Hauswartung",
      companyMaintenance: "Firmenwartung",
      serviceCenters: "Servicezentren",
      education: "Bildung",
      digitalServices: "Digitale Dienste",
      personalServices: "Persönliche Dienste",
      beauty: "Beauty",
      legal: "Rechtsdienste",
      medical: "Medizinische Dienste",
      jobs: "Jobs",
      saved: "Gespeichert",
      published: "Veröffentlicht",
      draft: "Entwurf",
      active: "Aktiv",
      inactive: "Inaktiv",
      loading: "Lädt...",
      noData: "Keine Daten gefunden.",
      copied: "Kopiert.",
      savedSuccess: "Erfolgreich gespeichert.",
      deletedSuccess: "Erfolgreich gelöscht.",
      loginRequired: "Bitte zuerst anmelden.",
      confirmDelete: "Möchtest du dieses Element wirklich löschen?",
      selectedCountryChanged: "Land erfolgreich geändert.",
      appReady: "App bereit."
    },

    tr: {
      home: "Ana sayfa",
      search: "Ara",
      postAd: "İlan ver",
      account: "Hesabım",
      favorites: "Favoriler",
      messages: "Mesajlar",
      dashboard: "Panel",
      terms: "Şartlar",
      login: "Giriş",
      register: "Hesap oluştur",
      logout: "Çıkış yap",
      menu: "Menü",
      close: "Kapat",
      country: "Ülke",
      language: "Dil",
      allCategories: "Tüm kategoriler",
      vehicles: "Araçlar",
      cars: "Arabalar",
      carRental: "Kiralık araba",
      motorcycles: "Motosikletler",
      bicycles: "Bisikletler",
      trucks: "Kamyonlar",
      realEstate: "Emlak",
      apartmentsSale: "Satılık daire",
      apartmentsRent: "Kiralık daire",
      housesSale: "Satılık ev",
      housesRent: "Kiralık ev",
      shops: "Ticari dükkânlar",
      agriculturalLand: "Tarım arazisi",
      electronics: "Elektronik",
      phones: "Telefonlar",
      computers: "Bilgisayarlar",
      appliances: "Ev aletleri",
      homeItems: "Ev eşyaları",
      furniture: "Mobilya",
      tools: "Araç gereç",
      services: "Hizmetler",
      maintenance: "Bakım",
      homeMaintenance: "Ev bakımı",
      companyMaintenance: "Şirket bakımı",
      serviceCenters: "Servis merkezleri",
      education: "Eğitim",
      digitalServices: "Dijital hizmetler",
      personalServices: "Kişisel hizmetler",
      beauty: "Güzellik",
      legal: "Hukuki hizmetler",
      medical: "Tıbbi hizmetler",
      jobs: "İşler",
      saved: "Kaydedildi",
      published: "Yayınlandı",
      draft: "Taslak",
      active: "Aktif",
      inactive: "Pasif",
      loading: "Yükleniyor...",
      noData: "Veri bulunamadı.",
      copied: "Kopyalandı.",
      savedSuccess: "Başarıyla kaydedildi.",
      deletedSuccess: "Başarıyla silindi.",
      loginRequired: "Lütfen önce giriş yap.",
      confirmDelete: "Bu öğeyi silmek istediğine emin misin?",
      selectedCountryChanged: "Ülke değiştirildi.",
      appReady: "Uygulama hazır."
    }
  };

  const CATEGORY_TREE = [
    {
      id: "vehicles",
      icon: "fa-car",
      children: [
        { id: "cars", icon: "fa-car-side" },
        { id: "carRental", icon: "fa-key" },
        { id: "motorcycles", icon: "fa-motorcycle" },
        { id: "bicycles", icon: "fa-bicycle" },
        { id: "trucks", icon: "fa-truck" }
      ]
    },
    {
      id: "realEstate",
      icon: "fa-building",
      children: [
        { id: "apartmentsSale", icon: "fa-house-circle-check" },
        { id: "apartmentsRent", icon: "fa-house-user" },
        { id: "housesSale", icon: "fa-house" },
        { id: "housesRent", icon: "fa-key" },
        { id: "shops", icon: "fa-store" },
        { id: "agriculturalLand", icon: "fa-seedling" }
      ]
    },
    {
      id: "electronics",
      icon: "fa-laptop",
      children: [
        { id: "phones", icon: "fa-mobile-screen" },
        { id: "computers", icon: "fa-computer" },
        { id: "appliances", icon: "fa-blender" }
      ]
    },
    {
      id: "homeItems",
      icon: "fa-couch",
      children: [
        { id: "furniture", icon: "fa-couch" },
        { id: "tools", icon: "fa-screwdriver-wrench" }
      ]
    },
    {
      id: "services",
      icon: "fa-briefcase",
      children: [
        { id: "maintenance", icon: "fa-screwdriver-wrench" },
        { id: "homeMaintenance", icon: "fa-house-chimney-crack" },
        { id: "companyMaintenance", icon: "fa-building-circle-check" },
        { id: "serviceCenters", icon: "fa-headset" },
        { id: "education", icon: "fa-graduation-cap" },
        { id: "digitalServices", icon: "fa-code" },
        { id: "personalServices", icon: "fa-user-gear" },
        { id: "beauty", icon: "fa-spa" },
        { id: "legal", icon: "fa-scale-balanced" },
        { id: "medical", icon: "fa-kit-medical" }
      ]
    },
    {
      id: "jobs",
      icon: "fa-user-tie",
      children: []
    }
  ];

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed ?? fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function cleanLang(lang) {
    return String(lang || "en").slice(0, 2).toLowerCase();
  }

  function currentLang() {
    return cleanLang(localStorage.getItem(STORAGE.lang) || document.documentElement.lang || "en");
  }

  function isRtl(lang = currentLang()) {
    return RTL_LANGS.includes(cleanLang(lang));
  }

  function t(key) {
    const lang = currentLang();
    return (DICT[lang] && DICT[lang][key]) || DICT.en[key] || key;
  }

  function getCountriesApi() {
    return window.HK_GLOBAL_COUNTRIES || window.HK_GLOBAL?.countries || null;
  }

  function getCountries() {
    const api = getCountriesApi();

    if (api && Array.isArray(api.countries)) return api.countries;

    const external = window.AMG_COUNTRIES || window.COUNTRIES || window.countries || [];
    return Array.isArray(external) ? external : [];
  }

  function getCountryCode(country) {
    return country?.code || country?.id || country?.iso2 || country?.value || "";
  }

  function getCountryLang(country) {
    return cleanLang(country?.lang || country?.language || country?.defaultLang || "en");
  }

  function getCountryLabel(country, lang = currentLang()) {
    const api = getCountriesApi();

    if (api && typeof api.getCountryLabel === "function") {
      return api.getCountryLabel(country, lang);
    }

    if (!country) return "";

    if (country.labels) {
      return country.labels[lang] || country.labels.en || country.labels.ar || getCountryCode(country);
    }

    if (country.names) {
      return country.names[lang] || country.names.en || country.names.ar || getCountryCode(country);
    }

    return country.name || getCountryCode(country);
  }

  function getCountryByCode(code) {
    const wanted = String(code || "").trim().toUpperCase();
    const api = getCountriesApi();

    if (api && typeof api.getCountry === "function") {
      return api.getCountry(wanted);
    }

    return getCountries().find((country) => String(getCountryCode(country)).toUpperCase() === wanted) || null;
  }

  function getSavedCountry() {
    const saved = localStorage.getItem(STORAGE.country);
    return getCountryByCode(saved) || getCountryByCode("SE") || getCountries()[0] || null;
  }

  function saveCountry(code) {
    const api = getCountriesApi();

    if (api && typeof api.saveCountry === "function") {
      return api.saveCountry(code);
    }

    const country = getCountryByCode(code) || getCountries()[0];
    if (!country) return null;

    const lang = getCountryLang(country);
    const label = getCountryLabel(country, lang);
    const dir = isRtl(lang) ? "rtl" : "ltr";

    localStorage.setItem(STORAGE.country, getCountryCode(country));
    localStorage.setItem(STORAGE.countryLabel, label);
    localStorage.setItem(STORAGE.lang, lang);
    localStorage.setItem(STORAGE.currency, country.currency || "");
    localStorage.setItem(STORAGE.region, country.region || "");

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    if (document.body) {
      document.body.setAttribute("dir", dir);
    }

    return country;
  }

  function applyDocumentLanguage() {
    const lang = currentLang();
    const dir = isRtl(lang) ? "rtl" : "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    if (document.body) {
      document.body.setAttribute("dir", dir);
    }
  }

  function translatePage() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (key) el.textContent = t(key);
    });

    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (key) el.setAttribute("placeholder", t(key));
    });

    $$("[data-i18n-title]").forEach((el) => {
      const key = el.dataset.i18nTitle;
      if (key) el.setAttribute("title", t(key));
    });

    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (key) el.setAttribute("aria-label", t(key));
    });
  }

  function fillCountrySelects() {
    const countries = getCountries();
    const saved = getSavedCountry();
    const lang = currentLang();

    $$("select[data-country-select], #countrySelect").forEach((select) => {
      const currentValue = select.value || (saved && getCountryCode(saved));

      select.innerHTML = "";

      countries.forEach((country) => {
        const option = document.createElement("option");

        option.value = getCountryCode(country);
        option.textContent = `${getCountryLabel(country, lang)}${country.currency ? " · " + country.currency : ""}`;
        option.dataset.lang = getCountryLang(country);
        option.dataset.currency = country.currency || "";
        option.dataset.region = country.region || "";

        select.appendChild(option);
      });

      select.value = currentValue || (saved && getCountryCode(saved)) || "";
    });
  }

  function applyCountry(code, options = {}) {
    const country = saveCountry(code);
    if (!country) return null;

    applyDocumentLanguage();
    fillCountrySelects();
    translatePage();

    if (options.toast) {
      toast(t("selectedCountryChanged"));
    }

    window.dispatchEvent(new CustomEvent("hk-app-country-applied", {
      detail: {
        country,
        code: getCountryCode(country),
        lang: currentLang(),
        currency: country.currency || "",
        region: country.region || ""
      }
    }));

    return country;
  }

  function initCountrySelectors() {
    fillCountrySelects();

    $$("select[data-country-select], #countrySelect").forEach((select) => {
      if (select.dataset.hkBound === "1") return;

      select.dataset.hkBound = "1";

      select.addEventListener("change", () => {
        applyCountry(select.value, { toast: true });
      });
    });
  }

  function initMenu() {
    const sidebar = $("#sidebar");
    const backdrop = $("#sidebarBackdrop");
    const openButtons = $$("#menuToggle, [data-menu-open]");
    const closeButtons = $$("#sidebarClose, [data-menu-close]");

    if (!sidebar) return;

    function openMenu() {
      sidebar.classList.add("open");
      if (backdrop) backdrop.classList.add("open");
      document.body.classList.add("menu-open");
    }

    function closeMenu() {
      sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("open");
      document.body.classList.remove("menu-open");
    }

    openButtons.forEach((btn) => {
      if (btn.dataset.hkBound === "1") return;
      btn.dataset.hkBound = "1";
      btn.addEventListener("click", openMenu);
    });

    closeButtons.forEach((btn) => {
      if (btn.dataset.hkBound === "1") return;
      btn.dataset.hkBound = "1";
      btn.addEventListener("click", closeMenu);
    });

    if (backdrop && backdrop.dataset.hkBound !== "1") {
      backdrop.dataset.hkBound = "1";
      backdrop.addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    $$(".sidebar-link, [data-close-menu-on-click]").forEach((link) => {
      if (link.dataset.hkLinkBound === "1") return;
      link.dataset.hkLinkBound = "1";
      link.addEventListener("click", () => {
        if (window.innerWidth <= 980) closeMenu();
      });
    });
  }

  function setActiveNavigation() {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";

    $$("a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const linkFile = href.split("?")[0].split("#")[0].split("/").pop();

      if (!linkFile) return;

      if (linkFile === currentFile) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function toast(message, duration = 2400) {
    let el = $("#hkToast");

    if (!el) {
      el = document.createElement("div");
      el.id = "hkToast";
      el.style.position = "fixed";
      el.style.left = "50%";
      el.style.bottom = "26px";
      el.style.transform = "translateX(-50%) translateY(20px)";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      el.style.zIndex = "9999";
      el.style.background = "#101828";
      el.style.color = "#fff";
      el.style.borderRadius = "999px";
      el.style.padding = "13px 18px";
      el.style.fontWeight = "900";
      el.style.fontFamily = "Arial, Helvetica, sans-serif";
      el.style.boxShadow = "0 18px 55px rgba(16, 24, 40, 0.22)";
      el.style.transition = "0.25s ease";
      document.body.appendChild(el);
    }

    el.textContent = message;
    el.style.opacity = "1";
    el.style.transform = "translateX(-50%) translateY(0)";

    window.clearTimeout(el._timer);

    el._timer = window.setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateX(-50%) translateY(20px)";
    }, duration);
  }

  function uid(prefix = "id") {
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function normalizeText(value) {
    return String(value || "").trim();
  }

  function getSession() {
    return readJson(STORAGE.session, null);
  }

  function getCurrentUser() {
    return readJson(STORAGE.currentUser, null);
  }

  function isLoggedIn() {
    const session = getSession();
    const user = getCurrentUser();
    return Boolean(session?.loggedIn && user?.email);
  }

  function requireLogin(redirect = true) {
    if (isLoggedIn()) return true;

    toast(t("loginRequired"));

    if (redirect) {
      const next = encodeURIComponent(window.location.pathname.split("/").pop() || "index.html");
      window.setTimeout(() => {
        window.location.href = `login.html?next=${next}`;
      }, 500);
    }

    return false;
  }

  function logout() {
    localStorage.removeItem(STORAGE.session);
    localStorage.removeItem(STORAGE.currentUser);
    localStorage.removeItem("amg_user");
    localStorage.removeItem("hk_global_user");

    toast(t("logout"));

    window.setTimeout(() => {
      window.location.href = "login.html";
    }, 500);
  }

  function initLogoutButtons() {
    $$("[data-logout], #logoutBtn").forEach((btn) => {
      if (btn.dataset.hkLogoutBound === "1") return;
      btn.dataset.hkLogoutBound = "1";
      btn.addEventListener("click", logout);
    });
  }

  function getAds() {
    return readJson(STORAGE.ads, []);
  }

  function saveAds(ads) {
    writeJson(STORAGE.ads, Array.isArray(ads) ? ads : []);
  }

  function addAd(ad) {
    const ads = getAds();

    const country = getSavedCountry();
    const user = getCurrentUser();

    const item = {
      id: ad.id || uid("ad"),
      title: normalizeText(ad.title),
      category: normalizeText(ad.category),
      subcategory: normalizeText(ad.subcategory),
      type: normalizeText(ad.type),
      price: ad.price || "",
      currency: ad.currency || localStorage.getItem(STORAGE.currency) || "",
      countryCode: ad.countryCode || localStorage.getItem(STORAGE.country) || "",
      countryLabel: ad.countryLabel || localStorage.getItem(STORAGE.countryLabel) || "",
      city: normalizeText(ad.city),
      description: normalizeText(ad.description),
      images: Array.isArray(ad.images) ? ad.images : [],
      details: ad.details || {},
      status: ad.status || "active",
      userId: ad.userId || user?.id || "",
      userEmail: ad.userEmail || user?.email || "",
      createdAt: ad.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      region: country?.region || localStorage.getItem(STORAGE.region) || ""
    };

    ads.unshift(item);
    saveAds(ads);

    return item;
  }

  function updateAd(id, updates) {
    const ads = getAds();
    const index = ads.findIndex((ad) => ad.id === id);

    if (index === -1) return null;

    ads[index] = {
      ...ads[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    saveAds(ads);
    return ads[index];
  }

  function deleteAd(id) {
    const ads = getAds().filter((ad) => ad.id !== id);
    saveAds(ads);
  }

  function getFavorites() {
    return readJson(STORAGE.favorites, []);
  }

  function saveFavorites(favorites) {
    writeJson(STORAGE.favorites, Array.isArray(favorites) ? favorites : []);
  }

  function isFavorite(adId) {
    return getFavorites().includes(adId);
  }

  function toggleFavorite(adId) {
    const favorites = getFavorites();
    const exists = favorites.includes(adId);

    const updated = exists
      ? favorites.filter((id) => id !== adId)
      : favorites.concat(adId);

    saveFavorites(updated);

    return !exists;
  }

  function getMessages() {
    return readJson(STORAGE.messages, []);
  }

  function saveMessages(messages) {
    writeJson(STORAGE.messages, Array.isArray(messages) ? messages : []);
  }

  function addMessage(message) {
    const messages = getMessages();

    const item = {
      id: message.id || uid("msg"),
      adId: message.adId || "",
      fromName: normalizeText(message.fromName),
      fromEmail: normalizeText(message.fromEmail),
      toEmail: normalizeText(message.toEmail),
      subject: normalizeText(message.subject),
      body: normalizeText(message.body),
      read: false,
      createdAt: new Date().toISOString()
    };

    messages.unshift(item);
    saveMessages(messages);

    return item;
  }

  function getCategoryTree() {
    return CATEGORY_TREE.map((category) => ({
      ...category,
      label: t(category.id),
      children: category.children.map((child) => ({
        ...child,
        label: t(child.id)
      }))
    }));
  }

  function fillCategorySelect(select, options = {}) {
    if (!select) return;

    const includeAll = options.includeAll !== false;
    const selected = options.selected || select.value || "";

    select.innerHTML = "";

    if (includeAll) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = t("allCategories");
      select.appendChild(option);
    }

    CATEGORY_TREE.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id;
      option.textContent = t(category.id);
      select.appendChild(option);
    });

    select.value = selected;
  }

  function fillSubcategorySelect(select, categoryId, options = {}) {
    if (!select) return;

    const category = CATEGORY_TREE.find((item) => item.id === categoryId);
    const selected = options.selected || select.value || "";

    select.innerHTML = "";

    const first = document.createElement("option");
    first.value = "";
    first.textContent = t("allCategories");
    select.appendChild(first);

    if (category) {
      category.children.forEach((child) => {
        const option = document.createElement("option");
        option.value = child.id;
        option.textContent = t(child.id);
        select.appendChild(option);
      });
    }

    select.value = selected;
  }

  function initCategorySelects() {
    $$("select[data-category-select]").forEach((select) => {
      fillCategorySelect(select);

      if (select.dataset.hkCategoryBound === "1") return;
      select.dataset.hkCategoryBound = "1";

      select.addEventListener("change", () => {
        const targetSelector = select.dataset.subcategoryTarget;
        if (!targetSelector) return;

        const subSelect = $(targetSelector);
        fillSubcategorySelect(subSelect, select.value);
      });
    });

    $$("select[data-subcategory-select]").forEach((select) => {
      const categorySelector = select.dataset.categorySource;
      const categorySelect = categorySelector ? $(categorySelector) : null;
      fillSubcategorySelect(select, categorySelect?.value || "");
    });
  }

  function bindCopyButtons() {
    $$("[data-copy]").forEach((btn) => {
      if (btn.dataset.hkCopyBound === "1") return;
      btn.dataset.hkCopyBound = "1";

      btn.addEventListener("click", async () => {
        const text = btn.dataset.copy || "";

        try {
          await navigator.clipboard.writeText(text);
          toast(t("copied"));
        } catch {
          const temp = document.createElement("textarea");
          temp.value = text;
          document.body.appendChild(temp);
          temp.select();
          document.execCommand("copy");
          temp.remove();
          toast(t("copied"));
        }
      });
    });
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE.theme);

    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
    }

    $$("[data-theme-toggle]").forEach((btn) => {
      if (btn.dataset.hkThemeBound === "1") return;
      btn.dataset.hkThemeBound = "1";

      btn.addEventListener("click", () => {
        const current = document.documentElement.dataset.theme || "light";
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = next;
        localStorage.setItem(STORAGE.theme, next);
      });
    });
  }

  function initFormsPreventDoubleSubmit() {
    $$("form[data-safe-submit]").forEach((form) => {
      if (form.dataset.hkSafeBound === "1") return;
      form.dataset.hkSafeBound = "1";

      form.addEventListener("submit", () => {
        const btn = form.querySelector("button[type='submit']");
        if (!btn) return;

        btn.disabled = true;

        window.setTimeout(() => {
          btn.disabled = false;
        }, 1600);
      });
    });
  }

  function initGlobalEvents() {
    window.addEventListener("hk-country-change", () => {
      applyDocumentLanguage();
      fillCountrySelects();
      translatePage();
      initCategorySelects();
    });

    window.addEventListener("storage", (event) => {
      if ([STORAGE.country, STORAGE.lang, STORAGE.currency].includes(event.key)) {
        applyDocumentLanguage();
        fillCountrySelects();
        translatePage();
        initCategorySelects();
      }
    });
  }

  function init() {
    const savedCountry = getSavedCountry();

    if (savedCountry) {
      applyCountry(getCountryCode(savedCountry));
    } else {
      applyDocumentLanguage();
      translatePage();
    }

    initCountrySelectors();
    initMenu();
    setActiveNavigation();
    initLogoutButtons();
    initCategorySelects();
    bindCopyButtons();
    initTheme();
    initFormsPreventDoubleSubmit();
    initGlobalEvents();

    document.documentElement.dataset.hkReady = "true";
  }

  window.HK_GLOBAL_APP = {
    app: APP,
    storage: STORAGE,
    dict: DICT,
    categoryTree: CATEGORY_TREE,

    $,
    $$,
    t,
    toast,
    uid,

    readJson,
    writeJson,

    currentLang,
    isRtl,
    translatePage,
    applyCountry,
    fillCountrySelects,

    getCountries,
    getSavedCountry,
    getCountryByCode,
    getCountryLabel,

    getSession,
    getCurrentUser,
    isLoggedIn,
    requireLogin,
    logout,

    getAds,
    saveAds,
    addAd,
    updateAd,
    deleteAd,

    getFavorites,
    saveFavorites,
    isFavorite,
    toggleFavorite,

    getMessages,
    saveMessages,
    addMessage,

    getCategoryTree,
    fillCategorySelect,
    fillSubcategorySelect,
    initCategorySelects,

    init
  };

  window.HK_GLOBAL = window.HK_GLOBAL || {};
  window.HK_GLOBAL.app = window.HK_GLOBAL_APP;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
