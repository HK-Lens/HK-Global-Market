/* =========================================================
   HK Global Market & Services
   Shared app logic: publish ads, search, filters, cards
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEYS = {
    listings: "hk_global_market_listings",
    countryCode: "amg_country_code",
    countryLabel: "amg_country_label",
    countryLang: "amg_country_lang",
    categoryId: "amg_selected_category",
    categoryLabel: "amg_category_label",
    categoryGroup: "amg_category_group",
    categoryGroupLabel: "amg_category_group_label"
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeText(value) {
    return String(value ?? "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function getLang() {
    return (
      document.documentElement.lang ||
      localStorage.getItem(STORAGE_KEYS.countryLang) ||
      "en"
    ).slice(0, 2);
  }

  function getCountries() {
    return (
      window.AMG_COUNTRIES ||
      window.COUNTRIES ||
      window.countries ||
      []
    );
  }

  function getCategories() {
    return (
      window.AMG_CATEGORIES ||
      window.CATEGORIES ||
      window.categories ||
      []
    );
  }

  function getCategoryGroups() {
    return (
      window.AMG_CATEGORY_GROUPS ||
      window.CATEGORY_GROUPS ||
      {}
    );
  }

  function readLabel(item, fallback = "") {
    const lang = getLang();

    if (!item) return fallback;

    if (item.labels) {
      return item.labels[lang] || item.labels.en || item.labels.ar || fallback;
    }

    if (item.names) {
      return item.names[lang] || item.names.en || item.names.ar || fallback;
    }

    return item.label || item.name || item.title || fallback;
  }

  function getCountryCode(country) {
    if (!country) return "";
    return country.code || country.id || country.iso2 || country.value || "";
  }

  function getCountryLang(country) {
    if (!country) return "en";
    return country.lang || country.language || country.defaultLang || "en";
  }

  function getCountryCurrency(country) {
    if (!country) return "";
    return country.currency || country.currencyCode || "";
  }

  function getCountryByCode(code) {
    const countries = getCountries();
    const cleanCode = String(code || "").toUpperCase();

    return (
      countries.find((country) => String(getCountryCode(country)).toUpperCase() === cleanCode) ||
      countries[0] ||
      null
    );
  }

  function getSelectedCountry() {
    const selectValue =
      $("#countrySelect")?.value ||
      $("[data-country-select]")?.value ||
      localStorage.getItem(STORAGE_KEYS.countryCode);

    return getCountryByCode(selectValue);
  }

  function saveSelectedCountry(country) {
    if (!country) return;

    const code = getCountryCode(country);
    const label = readLabel(country, code);
    const lang = getCountryLang(country);

    localStorage.setItem(STORAGE_KEYS.countryCode, code);
    localStorage.setItem(STORAGE_KEYS.countryLabel, label);
    localStorage.setItem(STORAGE_KEYS.countryLang, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dataset.country = code;
  }

  function applySelectedCountry(country) {
    if (!country) return;

    saveSelectedCountry(country);

    const code = getCountryCode(country);
    const label = readLabel(country, code);

    $$("[data-selected-country], #selectedCountryName, #countryName").forEach((el) => {
      el.textContent = label;
    });

    $$("[data-country-code]").forEach((el) => {
      el.textContent = code;
    });

    $$("select[name='countryCode'], select[name='country'], #countrySelect, [data-country-select]").forEach((select) => {
      if (select.value !== code) select.value = code;
    });

    const currencyInput = $("input[name='currency'], select[name='currency']");
    if (currencyInput && !currencyInput.value) {
      currencyInput.value = getCountryCurrency(country);
    }

    window.dispatchEvent(
      new CustomEvent("amg:countrychange", {
        detail: { country }
      })
    );
  }

  function getCategoryById(id) {
    const categories = getCategories();
    const cleanId = String(id || "");

    return (
      categories.find((category) => category.id === cleanId) ||
      categories.find((category) => category.id === "cars") ||
      categories[0] ||
      null
    );
  }

  function getGroupLabel(groupId) {
    const groups = getCategoryGroups();
    const group = groups[groupId];

    return readLabel(group, groupId || "");
  }

  function getSelectedCategory() {
    const value =
      $("#categorySelect")?.value ||
      $("[data-category-select]")?.value ||
      localStorage.getItem(STORAGE_KEYS.categoryId);

    return getCategoryById(value);
  }

  function saveSelectedCategory(category) {
    if (!category) return;

    const label = readLabel(category, category.id);
    const groupLabel = getGroupLabel(category.group);

    localStorage.setItem(STORAGE_KEYS.categoryId, category.id);
    localStorage.setItem(STORAGE_KEYS.categoryLabel, label);
    localStorage.setItem(STORAGE_KEYS.categoryGroup, category.group || "");
    localStorage.setItem(STORAGE_KEYS.categoryGroupLabel, groupLabel);
  }

  function applySelectedCategory(category) {
    if (!category) return;

    saveSelectedCategory(category);

    document.body.dataset.category = category.id;
    document.body.dataset.categoryGroup = category.group || "";

    $$("[data-selected-category], #selectedCategory, #categoryName").forEach((el) => {
      el.textContent = readLabel(category, category.id);
    });

    $$("[data-selected-category-group], #selectedCategoryGroup").forEach((el) => {
      el.textContent = getGroupLabel(category.group);
    });

    $$("[data-category-icon]").forEach((icon) => {
      icon.className = `fa-solid ${category.icon || "fa-layer-group"}`;
    });

    $$("select[name='categoryId'], select[name='category'], #categorySelect, [data-category-select]").forEach((select) => {
      if (select.value !== category.id) select.value = category.id;
    });

    window.dispatchEvent(
      new CustomEvent("amg:categorychange", {
        detail: { category }
      })
    );
  }

  function fillCountrySelect(select) {
    if (!select) return;

    const countries = getCountries();
    if (!countries.length) return;

    const current =
      localStorage.getItem(STORAGE_KEYS.countryCode) ||
      getCountryCode(countries[0]);

    select.innerHTML = "";

    countries.forEach((country) => {
      const option = document.createElement("option");
      const code = getCountryCode(country);

      option.value = code;
      option.textContent = readLabel(country, code);

      select.appendChild(option);
    });

    select.value = current;

    select.addEventListener("change", () => {
      applySelectedCountry(getCountryByCode(select.value));
      renderCurrentSearch();
    });
  }

  function fillCategorySelect(select) {
    if (!select) return;

    const categories = getCategories();
    if (!categories.length) return;

    const groups = getCategoryGroups();
    const current =
      localStorage.getItem(STORAGE_KEYS.categoryId) ||
      categories[0].id;

    select.innerHTML = "";

    const groupKeys = Object.keys(groups).sort((a, b) => {
      return (groups[a].order || 999) - (groups[b].order || 999);
    });

    if (groupKeys.length) {
      groupKeys.forEach((groupKey) => {
        const groupCategories = categories.filter((category) => category.group === groupKey);
        if (!groupCategories.length) return;

        const optgroup = document.createElement("optgroup");
        optgroup.label = getGroupLabel(groupKey);

        groupCategories.forEach((category) => {
          const option = document.createElement("option");
          option.value = category.id;
          option.textContent = readLabel(category, category.id);
          optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
      });
    } else {
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = readLabel(category, category.id);
        select.appendChild(option);
      });
    }

    select.value = current;

    select.addEventListener("change", () => {
      applySelectedCategory(getCategoryById(select.value));
      renderCurrentSearch();
    });
  }

  function initSelects() {
    $$("select[name='countryCode'], select[name='country'], #countrySelect, [data-country-select]").forEach((select) => {
      if (!select.dataset.amgFilledByApp) {
        fillCountrySelect(select);
        select.dataset.amgFilledByApp = "true";
      }
    });

    $$("select[name='categoryId'], select[name='category'], #categorySelect, [data-category-select]").forEach((select) => {
      if (!select.dataset.amgFilledByApp) {
        fillCategorySelect(select);
        select.dataset.amgFilledByApp = "true";
      }
    });

    applySelectedCountry(getSelectedCountry());
    applySelectedCategory(getSelectedCategory());
  }

  function getListings() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.listings) || "[]");
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  function setListings(listings) {
    localStorage.setItem(STORAGE_KEYS.listings, JSON.stringify(listings));
  }

  function createListingId() {
    return `ad_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  }

  function getImageFilesAsBase64(input) {
    return new Promise((resolve) => {
      if (!input || !input.files || !input.files.length) {
        resolve([]);
        return;
      }

      const files = Array.from(input.files).slice(0, 5);
      const results = [];
      let completed = 0;

      files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          results.push(reader.result);
          completed += 1;

          if (completed === files.length) {
            resolve(results);
          }
        };

        reader.onerror = () => {
          completed += 1;

          if (completed === files.length) {
            resolve(results);
          }
        };

        reader.readAsDataURL(file);
      });
    });
  }

  function formatPrice(price, currency) {
    const value = Number(price);

    if (!value || Number.isNaN(value)) {
      return "";
    }

    return `${value.toLocaleString()} ${currency || ""}`.trim();
  }

  function buildListingFromForm(form, images) {
    const data = new FormData(form);

    const country =
      getCountryByCode(data.get("countryCode") || data.get("country")) ||
      getSelectedCountry();

    const category =
      getCategoryById(data.get("categoryId") || data.get("category")) ||
      getSelectedCategory();

    const countryCode = getCountryCode(country);
    const countryLabel = readLabel(country, countryCode);

    const categoryLabel = readLabel(category, category?.id || "");
    const categoryGroup = category?.group || "";
    const categoryGroupLabel = getGroupLabel(categoryGroup);

    return {
      id: createListingId(),
      status: "active",
      title: String(data.get("title") || "").trim(),
      listingType: String(data.get("listingType") || "sell").trim(),
      condition: String(data.get("condition") || "").trim(),
      price: String(data.get("price") || "").trim(),
      currency: String(data.get("currency") || getCountryCurrency(country) || "").trim(),
      countryCode,
      countryLabel,
      city: String(data.get("city") || "").trim(),
      address: String(data.get("address") || "").trim(),
      categoryId: category?.id || "",
      categoryLabel,
      categoryGroup,
      categoryGroupLabel,
      description: String(data.get("description") || "").trim(),
      sellerName: String(data.get("sellerName") || data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      whatsapp: String(data.get("whatsapp") || "").trim(),
      email: String(data.get("email") || "").trim(),
      images: images || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  function validateListing(listing) {
    const errors = [];

    if (!listing.title || listing.title.length < 3) {
      errors.push("title");
    }

    if (!listing.categoryId) {
      errors.push("category");
    }

    if (!listing.countryCode) {
      errors.push("country");
    }

    if (!listing.city || listing.city.length < 2) {
      errors.push("city");
    }

    if (!listing.description || listing.description.length < 10) {
      errors.push("description");
    }

    if (!listing.phone && !listing.email && !listing.whatsapp) {
      errors.push("contact");
    }

    return errors;
  }

  function saveListing(listing) {
    const listings = getListings();
    listings.unshift(listing);
    setListings(listings);
    return listing;
  }

  function showFormMessage(form, type, text) {
    let box = $("[data-form-message]", form.parentElement) || $("#formMessage");

    if (!box) {
      box = document.createElement("div");
      box.id = "formMessage";
      box.setAttribute("data-form-message", "");
      form.prepend(box);
    }

    box.className = `form-message ${type}`;
    box.textContent = text;
  }

  async function handleSellSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const imageInput = $("input[type='file'][name='images']", form);

    const submitButton = $("button[type='submit']", form);
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.oldText = submitButton.textContent;
      submitButton.textContent = "Saving...";
    }

    const images = await getImageFilesAsBase64(imageInput);
    const listing = buildListingFromForm(form, images);
    const errors = validateListing(listing);

    if (errors.length) {
      showFormMessage(
        form,
        "error",
        "Please complete title, country, category, city, description, and at least one contact method."
      );

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.oldText || "Publish";
      }

      return;
    }

    saveListing(listing);

    showFormMessage(form, "success", "Ad published successfully. It will now appear in search results.");

    form.reset();

    applySelectedCountry(getCountryByCode(listing.countryCode));
    applySelectedCategory(getCategoryById(listing.categoryId));

    setTimeout(() => {
      window.location.href =
        `search.html?country=${encodeURIComponent(listing.countryCode)}&category=${encodeURIComponent(listing.categoryId)}&new=${encodeURIComponent(listing.id)}`;
    }, 700);
  }

  function initSellPage() {
    const forms = $$("form[data-sell-form], #sellForm");

    forms.forEach((form) => {
      if (form.dataset.amgSellReady) return;

      form.dataset.amgSellReady = "true";
      form.addEventListener("submit", handleSellSubmit);
    });
  }

  function listingMatchesFilters(listing, filters) {
    const query = normalizeText(filters.query);
    const selectedCountry = filters.country;
    const selectedCategory = filters.category;
    const selectedGroup = filters.group;
    const minPrice = Number(filters.minPrice || 0);
    const maxPrice = Number(filters.maxPrice || 0);

    if (selectedCountry && selectedCountry !== "all" && listing.countryCode !== selectedCountry) {
      return false;
    }

    if (selectedCategory && selectedCategory !== "all" && listing.categoryId !== selectedCategory) {
      return false;
    }

    if (selectedGroup && selectedGroup !== "all" && listing.categoryGroup !== selectedGroup) {
      return false;
    }

    const price = Number(listing.price || 0);

    if (minPrice && price < minPrice) {
      return false;
    }

    if (maxPrice && price > maxPrice) {
      return false;
    }

    if (query) {
      const searchable = normalizeText([
        listing.title,
        listing.description,
        listing.countryLabel,
        listing.city,
        listing.categoryLabel,
        listing.categoryGroupLabel,
        listing.sellerName
      ].join(" "));

      if (!searchable.includes(query)) {
        return false;
      }
    }

    return true;
  }

  function getSearchFilters() {
    const params = new URLSearchParams(window.location.search);

    return {
      query:
        $("#searchInput")?.value ||
        $("[name='q']")?.value ||
        params.get("q") ||
        "",
      country:
        $("#searchCountry")?.value ||
        $("[name='countryCode']")?.value ||
        params.get("country") ||
        localStorage.getItem(STORAGE_KEYS.countryCode) ||
        "all",
      category:
        $("#searchCategory")?.value ||
        $("[name='categoryId']")?.value ||
        params.get("category") ||
        localStorage.getItem(STORAGE_KEYS.categoryId) ||
        "all",
      group:
        $("#searchGroup")?.value ||
        $("[name='group']")?.value ||
        params.get("group") ||
        "all",
      minPrice:
        $("#minPrice")?.value ||
        $("[name='minPrice']")?.value ||
        "",
      maxPrice:
        $("#maxPrice")?.value ||
        $("[name='maxPrice']")?.value ||
        ""
    };
  }

  function getFilteredListings() {
    const filters = getSearchFilters();

    return getListings().filter((listing) => listingMatchesFilters(listing, filters));
  }

  function listingCardTemplate(listing) {
    const image = listing.images && listing.images.length
      ? `<img src="${listing.images[0]}" alt="${escapeHTML(listing.title)}" loading="lazy">`
      : `<div class="listing-image-placeholder"><i class="fa-solid fa-image"></i></div>`;

    const price = formatPrice(listing.price, listing.currency);
    const date = listing.createdAt
      ? new Date(listing.createdAt).toLocaleDateString()
      : "";

    const phoneButton = listing.phone
      ? `<a class="mini-btn" href="tel:${escapeHTML(listing.phone)}"><i class="fa-solid fa-phone"></i> Call</a>`
      : "";

    const emailButton = listing.email
      ? `<a class="mini-btn" href="mailto:${escapeHTML(listing.email)}"><i class="fa-solid fa-envelope"></i> Email</a>`
      : "";

    const whatsappNumber = listing.whatsapp || listing.phone;
    const whatsappButton = whatsappNumber
      ? `<a class="mini-btn" href="https://wa.me/${escapeHTML(whatsappNumber.replace(/\D/g, ""))}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>`
      : "";

    return `
      <article class="listing-card" data-listing-id="${escapeHTML(listing.id)}">
        <a class="listing-image" href="details.html?id=${encodeURIComponent(listing.id)}">
          ${image}
        </a>

        <div class="listing-content">
          <div class="listing-topline">
            <span>${escapeHTML(listing.categoryGroupLabel || "")}</span>
            <span>${escapeHTML(date)}</span>
          </div>

          <h3>
            <a href="details.html?id=${encodeURIComponent(listing.id)}">
              ${escapeHTML(listing.title)}
            </a>
          </h3>

          <div class="listing-price">
            ${price ? escapeHTML(price) : "Price on request"}
          </div>

          <div class="listing-meta">
            <span><i class="fa-solid fa-location-dot"></i> ${escapeHTML(listing.city || "")}</span>
            <span><i class="fa-solid fa-flag"></i> ${escapeHTML(listing.countryLabel || "")}</span>
            <span><i class="fa-solid fa-layer-group"></i> ${escapeHTML(listing.categoryLabel || "")}</span>
          </div>

          <p class="listing-description">
            ${escapeHTML(listing.description || "").slice(0, 180)}
          </p>

          <div class="listing-actions">
            <a class="mini-btn primary" href="details.html?id=${encodeURIComponent(listing.id)}">
              <i class="fa-solid fa-eye"></i> Details
            </a>
            ${phoneButton}
            ${emailButton}
            ${whatsappButton}
          </div>
        </div>
      </article>
    `;
  }

  function renderListings(container, listings) {
    if (!container) return;

    if (!listings.length) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>No listings found</h3>
          <p>Try another country, category, or search word.</p>
          <a class="btn btn-primary" href="sell.html">
            <i class="fa-solid fa-circle-plus"></i>
            Post the first ad
          </a>
        </div>
      `;
      return;
    }

    container.innerHTML = listings.map(listingCardTemplate).join("");
  }

  function renderCurrentSearch() {
    const container =
      $("#resultsList") ||
      $("[data-results-list]") ||
      $(".results-list") ||
      $(".listings-grid");

    if (!container) return;

    const listings = getFilteredListings();

    renderListings(container, listings);

    $$("[data-results-count], #resultsCount").forEach((el) => {
      el.textContent = listings.length;
    });
  }

  function initSearchPage() {
    const params = new URLSearchParams(window.location.search);

    const queryInput = $("#searchInput") || $("[name='q']");
    if (queryInput && params.get("q")) {
      queryInput.value = params.get("q");
    }

    const countryInput = $("#searchCountry") || $("[name='countryCode']");
    if (countryInput && params.get("country")) {
      countryInput.value = params.get("country");
    }

    const categoryInput = $("#searchCategory") || $("[name='categoryId']");
    if (categoryInput && params.get("category")) {
      categoryInput.value = params.get("category");
    }

    const searchForm = $("#searchForm") || $("[data-search-form]");

    if (searchForm && !searchForm.dataset.amgSearchReady) {
      searchForm.dataset.amgSearchReady = "true";

      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        renderCurrentSearch();
      });

      $$("input, select", searchForm).forEach((input) => {
        input.addEventListener("input", renderCurrentSearch);
        input.addEventListener("change", renderCurrentSearch);
      });
    }

    renderCurrentSearch();
  }

  function initListingDetailsPage() {
    const container =
      $("#listingDetails") ||
      $("[data-listing-details]");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const listing = getListings().find((item) => item.id === id);

    if (!listing) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-circle-exclamation"></i>
          <h3>Listing not found</h3>
          <p>The ad may have been removed or the link is incorrect.</p>
          <a class="btn btn-primary" href="search.html">Back to search</a>
        </div>
      `;
      return;
    }

    const images = listing.images && listing.images.length
      ? listing.images.map((src) => `<img src="${src}" alt="${escapeHTML(listing.title)}">`).join("")
      : `<div class="listing-image-placeholder big"><i class="fa-solid fa-image"></i></div>`;

    container.innerHTML = `
      <article class="details-card">
        <div class="details-gallery">
          ${images}
        </div>

        <div class="details-content">
          <span class="details-badge">${escapeHTML(listing.categoryGroupLabel || "")}</span>

          <h1>${escapeHTML(listing.title)}</h1>

          <div class="details-price">
            ${escapeHTML(formatPrice(listing.price, listing.currency) || "Price on request")}
          </div>

          <div class="details-meta">
            <span><i class="fa-solid fa-location-dot"></i> ${escapeHTML(listing.city || "")}</span>
            <span><i class="fa-solid fa-flag"></i> ${escapeHTML(listing.countryLabel || "")}</span>
            <span><i class="fa-solid fa-layer-group"></i> ${escapeHTML(listing.categoryLabel || "")}</span>
          </div>

          <p>${escapeHTML(listing.description || "")}</p>

          <div class="seller-box">
            <h3>Seller / Service provider</h3>
            <p>${escapeHTML(listing.sellerName || "Not provided")}</p>

            <div class="listing-actions">
              ${listing.phone ? `<a class="mini-btn" href="tel:${escapeHTML(listing.phone)}"><i class="fa-solid fa-phone"></i> Call</a>` : ""}
              ${listing.email ? `<a class="mini-btn" href="mailto:${escapeHTML(listing.email)}"><i class="fa-solid fa-envelope"></i> Email</a>` : ""}
              ${(listing.whatsapp || listing.phone) ? `<a class="mini-btn" href="https://wa.me/${escapeHTML((listing.whatsapp || listing.phone).replace(/\D/g, ""))}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>` : ""}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function initSidebar() {
    const menuToggle = $("#menuToggle");
    const sidebar = $("#sidebar");
    const sidebarClose = $("#sidebarClose");
    const backdrop = $("#sidebarBackdrop");

    if (!menuToggle || !sidebar) return;

    function openMenu() {
      sidebar.classList.add("open");
      backdrop?.classList.add("open");
      document.body.classList.add("menu-open");
      menuToggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      sidebar.classList.remove("open");
      backdrop?.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    if (!menuToggle.dataset.amgMenuReady) {
      menuToggle.dataset.amgMenuReady = "true";
      menuToggle.addEventListener("click", openMenu);
      sidebarClose?.addEventListener("click", closeMenu);
      backdrop?.addEventListener("click", closeMenu);

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
      });
    }
  }

  function initQuickCategoryCards() {
    $$("[data-category-card]").forEach((card) => {
      if (card.dataset.amgCategoryCardReady) return;

      card.dataset.amgCategoryCardReady = "true";

      card.addEventListener("click", () => {
        const categoryId = card.dataset.categoryCard;
        const category = getCategoryById(categoryId);

        if (category) {
          applySelectedCategory(category);
        }
      });
    });
  }

  function initApp() {
    initSidebar();
    initSelects();
    initQuickCategoryCards();
    initSellPage();
    initSearchPage();
    initListingDetailsPage();
  }

  window.AMG_APP = {
    getListings,
    setListings,
    saveListing,
    getFilteredListings,
    renderCurrentSearch,
    getSelectedCountry,
    applySelectedCountry,
    getSelectedCategory,
    applySelectedCategory
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }

  window.addEventListener("amg:countrychange", () => {
    renderCurrentSearch();
  });

  window.addEventListener("amg:categorychange", () => {
    renderCurrentSearch();
  });
})();
