/* ===============================
   HK Global Market & Services - Categories
   Products + Real Estate + Vehicles + Services
   =============================== */

(function () {
  "use strict";

  const CATEGORIES = [
    {
      id: "cars",
      group: "market",
      icon: "fa-car",
      labels: {
        en: "Cars",
        ar: "السيارات",
        sv: "Bilar",
        de: "Autos",
        tr: "Arabalar"
      }
    },
    {
      id: "houses",
      group: "real-estate",
      icon: "fa-house",
      labels: {
        en: "Houses & apartments",
        ar: "المنازل والشقق",
        sv: "Hus och lägenheter",
        de: "Häuser und Wohnungen",
        tr: "Evler ve daireler"
      }
    },
    {
      id: "electronics",
      group: "market",
      icon: "fa-laptop",
      labels: {
        en: "Electronics",
        ar: "الإلكترونيات",
        sv: "Elektronik",
        de: "Elektronik",
        tr: "Elektronik"
      }
    },
    {
      id: "home-items",
      group: "market",
      icon: "fa-couch",
      labels: {
        en: "Home items",
        ar: "أدوات وأثاث منزلي",
        sv: "Hemartiklar",
        de: "Haushaltsartikel",
        tr: "Ev eşyaları"
      }
    },
    {
      id: "motorcycles",
      group: "vehicles",
      icon: "fa-motorcycle",
      labels: {
        en: "Motorcycles",
        ar: "الدراجات النارية",
        sv: "Motorcyklar",
        de: "Motorräder",
        tr: "Motosikletler"
      }
    },
    {
      id: "bicycles",
      group: "vehicles",
      icon: "fa-bicycle",
      labels: {
        en: "Bicycles",
        ar: "الدراجات الهوائية",
        sv: "Cyklar",
        de: "Fahrräder",
        tr: "Bisikletler"
      }
    },
    {
      id: "shops",
      group: "business",
      icon: "fa-store",
      labels: {
        en: "Commercial shops",
        ar: "المحلات التجارية",
        sv: "Butiker",
        de: "Geschäfte",
        tr: "Dükkanlar"
      }
    },
    {
      id: "agricultural-lands",
      group: "real-estate",
      icon: "fa-seedling",
      labels: {
        en: "Agricultural lands",
        ar: "الأراضي الزراعية",
        sv: "Jordbruksmark",
        de: "Landwirtschaftliche Flächen",
        tr: "Tarım arazileri"
      }
    },

    /* Services */
    {
      id: "maintenance-centers",
      group: "services",
      icon: "fa-screwdriver-wrench",
      labels: {
        en: "Maintenance centers",
        ar: "مراكز الصيانة",
        sv: "Servicecenter",
        de: "Servicezentren",
        tr: "Bakım servisleri"
      }
    },
    {
      id: "home-maintenance",
      group: "services",
      icon: "fa-house-chimney-crack",
      labels: {
        en: "Home maintenance",
        ar: "صيانة المنازل",
        sv: "Hemservice",
        de: "Hauswartung",
        tr: "Ev bakımı"
      }
    },
    {
      id: "company-maintenance",
      group: "services",
      icon: "fa-building-user",
      labels: {
        en: "Company maintenance",
        ar: "صيانة الشركات",
        sv: "Företagsservice",
        de: "Firmenwartung",
        tr: "Şirket bakımı"
      }
    },
    {
      id: "education",
      group: "services",
      icon: "fa-graduation-cap",
      labels: {
        en: "Education",
        ar: "التعليم والدروس",
        sv: "Utbildning",
        de: "Bildung",
        tr: "Eğitim"
      }
    },
    {
      id: "digital-services",
      group: "services",
      icon: "fa-code",
      labels: {
        en: "Digital services",
        ar: "الخدمات الرقمية",
        sv: "Digitala tjänster",
        de: "Digitale Dienstleistungen",
        tr: "Dijital hizmetler"
      }
    },
    {
      id: "personal-services",
      group: "services",
      icon: "fa-user-check",
      labels: {
        en: "Personal services",
        ar: "الخدمات الشخصية",
        sv: "Personliga tjänster",
        de: "Persönliche Dienstleistungen",
        tr: "Kişisel hizmetler"
      }
    },
    {
      id: "cleaning-services",
      group: "services",
      icon: "fa-broom",
      labels: {
        en: "Cleaning services",
        ar: "خدمات التنظيف",
        sv: "Städtjänster",
        de: "Reinigungsdienste",
        tr: "Temizlik hizmetleri"
      }
    },
    {
      id: "transport-delivery",
      group: "services",
      icon: "fa-truck-fast",
      labels: {
        en: "Transport & delivery",
        ar: "النقل والتوصيل",
        sv: "Transport och leverans",
        de: "Transport und Lieferung",
        tr: "Taşıma ve teslimat"
      }
    }
  ];

  window.AMG_CATEGORIES = CATEGORIES;
  window.CATEGORIES = CATEGORIES;

  const CATEGORY_STORAGE_KEY = "amg_selected_category";

  function getCurrentLang() {
    return (
      document.documentElement.lang ||
      localStorage.getItem("amg_country_lang") ||
      "en"
    ).slice(0, 2);
  }

  function getCategoryLabel(category) {
    const lang = getCurrentLang();
    return category.labels[lang] || category.labels.en;
  }

  function getCategoryById(id) {
    return (
      CATEGORIES.find((category) => category.id === id) ||
      CATEGORIES.find((category) => category.id === "cars")
    );
  }

  function getSavedCategoryId() {
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get("category");

    if (urlCategory && getCategoryById(urlCategory)) {
      return urlCategory;
    }

    const savedCategory = localStorage.getItem(CATEGORY_STORAGE_KEY);

    if (savedCategory && getCategoryById(savedCategory)) {
      return savedCategory;
    }

    return "cars";
  }

  function saveCategory(category) {
    localStorage.setItem(CATEGORY_STORAGE_KEY, category.id);
    localStorage.setItem("amg_category_group", category.group);
    localStorage.setItem("amg_category_label", getCategoryLabel(category));
  }

  function applyCategory(category) {
    if (!category) return;

    saveCategory(category);

    document.body.dataset.category = category.id;
    document.body.dataset.categoryGroup = category.group;

    document
      .querySelectorAll("[data-selected-category], #selectedCategory, #categoryName")
      .forEach((element) => {
        element.textContent = getCategoryLabel(category);
      });

    document
      .querySelectorAll("[data-category-icon]")
      .forEach((element) => {
        element.className = `fa-solid ${category.icon}`;
      });

    window.dispatchEvent(
      new CustomEvent("amg:categorychange", {
        detail: { category }
      })
    );
  }

  function fillCategorySelect(select) {
    if (!select) return;

    const savedCategoryId = getSavedCategoryId();
    select.innerHTML = "";

    const groups = {
      market: {
        en: "Marketplace",
        ar: "السوق",
        sv: "Marknad",
        de: "Marktplatz",
        tr: "Pazar"
      },
      vehicles: {
        en: "Vehicles",
        ar: "المركبات",
        sv: "Fordon",
        de: "Fahrzeuge",
        tr: "Araçlar"
      },
      "real-estate": {
        en: "Real estate",
        ar: "العقارات",
        sv: "Fastigheter",
        de: "Immobilien",
        tr: "Emlak"
      },
      business: {
        en: "Business",
        ar: "الأعمال",
        sv: "Företag",
        de: "Gewerbe",
        tr: "İşletme"
      },
      services: {
        en: "Services",
        ar: "الخدمات",
        sv: "Tjänster",
        de: "Dienstleistungen",
        tr: "Hizmetler"
      }
    };

    const lang = getCurrentLang();

    Object.keys(groups).forEach((groupKey) => {
      const groupCategories = CATEGORIES.filter(
        (category) => category.group === groupKey
      );

      if (!groupCategories.length) return;

      const optgroup = document.createElement("optgroup");
      optgroup.label = groups[groupKey][lang] || groups[groupKey].en;

      groupCategories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = getCategoryLabel(category);
        option.dataset.group = category.group;
        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    });

    select.value = savedCategoryId;

    select.addEventListener("change", () => {
      const category = getCategoryById(select.value);
      applyCategory(category);

      document
        .querySelectorAll("#categorySelect, [data-category-select], select[name='category']")
        .forEach((otherSelect) => {
          if (otherSelect !== select) {
            otherSelect.value = category.id;
          }
        });
    });
  }

  function initCategories() {
    const categorySelects = document.querySelectorAll(
      "#categorySelect, [data-category-select], select[name='category']"
    );

    categorySelects.forEach(fillCategorySelect);

    const selectedCategory = getCategoryById(getSavedCategoryId());
    applyCategory(selectedCategory);
  }

  window.addEventListener("amg:countrychange", () => {
    initCategories();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCategories);
  } else {
    initCategories();
  }
})();
