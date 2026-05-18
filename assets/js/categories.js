/* =========================================================
   HK Global Market & Services
   Main Categories + Subcategories
   ========================================================= */

(function () {
  "use strict";

  const CATEGORY_STORAGE_KEY = "amg_selected_category";

  const CATEGORY_GROUPS = {
    vehicles: {
      order: 1,
      labels: {
        en: "Vehicles",
        ar: "المركبات",
        sv: "Fordon",
        de: "Fahrzeuge",
        tr: "Araçlar"
      }
    },

    realEstate: {
      order: 2,
      labels: {
        en: "Real estate",
        ar: "العقارات",
        sv: "Fastigheter",
        de: "Immobilien",
        tr: "Emlak"
      }
    },

    electronics: {
      order: 3,
      labels: {
        en: "Electronics",
        ar: "الإلكترونيات",
        sv: "Elektronik",
        de: "Elektronik",
        tr: "Elektronik"
      }
    },

    home: {
      order: 4,
      labels: {
        en: "Home & furniture",
        ar: "المنزل والأثاث",
        sv: "Hem och möbler",
        de: "Haus und Möbel",
        tr: "Ev ve mobilya"
      }
    },

    services: {
      order: 5,
      labels: {
        en: "Services",
        ar: "الخدمات",
        sv: "Tjänster",
        de: "Dienstleistungen",
        tr: "Hizmetler"
      }
    },

    business: {
      order: 6,
      labels: {
        en: "Business",
        ar: "الأعمال والتجارة",
        sv: "Företag",
        de: "Gewerbe",
        tr: "İşletme"
      }
    },

    personal: {
      order: 7,
      labels: {
        en: "Personal services",
        ar: "الخدمات الشخصية",
        sv: "Personliga tjänster",
        de: "Persönliche Dienstleistungen",
        tr: "Kişisel hizmetler"
      }
    },

    digital: {
      order: 8,
      labels: {
        en: "Digital services",
        ar: "الخدمات الرقمية",
        sv: "Digitala tjänster",
        de: "Digitale Dienstleistungen",
        tr: "Dijital hizmetler"
      }
    }
  };

  const CATEGORIES = [
    /* ================= Vehicles ================= */

    {
      id: "cars",
      group: "vehicles",
      icon: "fa-car",
      labels: {
        en: "Private cars",
        ar: "سيارات خاصة",
        sv: "Privatbilar",
        de: "Privatautos",
        tr: "Özel arabalar"
      }
    },

    {
      id: "rental-cars",
      group: "vehicles",
      icon: "fa-car-side",
      labels: {
        en: "Rental cars",
        ar: "سيارات إيجار",
        sv: "Hyrbilar",
        de: "Mietwagen",
        tr: "Kiralık arabalar"
      }
    },

    {
      id: "motorcycles",
      group: "vehicles",
      icon: "fa-motorcycle",
      labels: {
        en: "Motorcycles",
        ar: "دراجات نارية",
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
        ar: "دراجات هوائية",
        sv: "Cyklar",
        de: "Fahrräder",
        tr: "Bisikletler"
      }
    },

    {
      id: "small-trucks",
      group: "vehicles",
      icon: "fa-truck-pickup",
      labels: {
        en: "Small trucks",
        ar: "شاحنات صغيرة",
        sv: "Små lastbilar",
        de: "Kleine Lastwagen",
        tr: "Küçük kamyonlar"
      }
    },

    {
      id: "large-trucks",
      group: "vehicles",
      icon: "fa-truck-moving",
      labels: {
        en: "Large trucks",
        ar: "شاحنات كبيرة",
        sv: "Stora lastbilar",
        de: "Große Lastwagen",
        tr: "Büyük kamyonlar"
      }
    },

    {
      id: "vehicle-parts",
      group: "vehicles",
      icon: "fa-gears",
      labels: {
        en: "Vehicle parts",
        ar: "قطع غيار المركبات",
        sv: "Fordonsdelar",
        de: "Fahrzeugteile",
        tr: "Araç parçaları"
      }
    },

    {
      id: "boats",
      group: "vehicles",
      icon: "fa-ship",
      labels: {
        en: "Boats",
        ar: "قوارب",
        sv: "Båtar",
        de: "Boote",
        tr: "Tekneler"
      }
    },

    /* ================= Real Estate ================= */

    {
      id: "houses",
      group: "realEstate",
      icon: "fa-house",
      labels: {
        en: "Houses",
        ar: "منازل",
        sv: "Hus",
        de: "Häuser",
        tr: "Evler"
      }
    },

    {
      id: "apartments",
      group: "realEstate",
      icon: "fa-building",
      labels: {
        en: "Apartments",
        ar: "شقق",
        sv: "Lägenheter",
        de: "Wohnungen",
        tr: "Daireler"
      }
    },

    {
      id: "rooms",
      group: "realEstate",
      icon: "fa-door-open",
      labels: {
        en: "Rooms",
        ar: "غرف",
        sv: "Rum",
        de: "Zimmer",
        tr: "Odalar"
      }
    },

    {
      id: "commercial-real-estate",
      group: "realEstate",
      icon: "fa-store",
      labels: {
        en: "Commercial properties",
        ar: "عقارات تجارية",
        sv: "Kommersiella fastigheter",
        de: "Gewerbeimmobilien",
        tr: "Ticari gayrimenkuller"
      }
    },

    {
      id: "agricultural-lands",
      group: "realEstate",
      icon: "fa-seedling",
      labels: {
        en: "Agricultural lands",
        ar: "أراضٍ زراعية",
        sv: "Jordbruksmark",
        de: "Landwirtschaftliche Flächen",
        tr: "Tarım arazileri"
      }
    },

    {
      id: "lands",
      group: "realEstate",
      icon: "fa-map",
      labels: {
        en: "Lands",
        ar: "أراضٍ",
        sv: "Mark",
        de: "Grundstücke",
        tr: "Arsalar"
      }
    },

    {
      id: "warehouses",
      group: "realEstate",
      icon: "fa-warehouse",
      labels: {
        en: "Warehouses",
        ar: "مستودعات",
        sv: "Lager",
        de: "Lagerhallen",
        tr: "Depolar"
      }
    },

    /* ================= Electronics ================= */

    {
      id: "phones",
      group: "electronics",
      icon: "fa-mobile-screen",
      labels: {
        en: "Phones",
        ar: "هواتف",
        sv: "Telefoner",
        de: "Handys",
        tr: "Telefonlar"
      }
    },

    {
      id: "computers",
      group: "electronics",
      icon: "fa-laptop",
      labels: {
        en: "Computers",
        ar: "حواسيب",
        sv: "Datorer",
        de: "Computer",
        tr: "Bilgisayarlar"
      }
    },

    {
      id: "tablets",
      group: "electronics",
      icon: "fa-tablet-screen-button",
      labels: {
        en: "Tablets",
        ar: "أجهزة لوحية",
        sv: "Surfplattor",
        de: "Tablets",
        tr: "Tabletler"
      }
    },

    {
      id: "tv-audio",
      group: "electronics",
      icon: "fa-tv",
      labels: {
        en: "TV & audio",
        ar: "تلفاز وصوتيات",
        sv: "TV och ljud",
        de: "TV und Audio",
        tr: "TV ve ses"
      }
    },

    {
      id: "gaming",
      group: "electronics",
      icon: "fa-gamepad",
      labels: {
        en: "Gaming",
        ar: "ألعاب إلكترونية",
        sv: "Gaming",
        de: "Gaming",
        tr: "Oyun"
      }
    },

    {
      id: "cameras",
      group: "electronics",
      icon: "fa-camera",
      labels: {
        en: "Cameras",
        ar: "كاميرات",
        sv: "Kameror",
        de: "Kameras",
        tr: "Kameralar"
      }
    },

    /* ================= Home ================= */

    {
      id: "furniture",
      group: "home",
      icon: "fa-couch",
      labels: {
        en: "Furniture",
        ar: "أثاث",
        sv: "Möbler",
        de: "Möbel",
        tr: "Mobilya"
      }
    },

    {
      id: "home-appliances",
      group: "home",
      icon: "fa-blender",
      labels: {
        en: "Home appliances",
        ar: "أجهزة منزلية",
        sv: "Hushållsapparater",
        de: "Haushaltsgeräte",
        tr: "Ev aletleri"
      }
    },

    {
      id: "home-tools",
      group: "home",
      icon: "fa-screwdriver-wrench",
      labels: {
        en: "Home tools",
        ar: "أدوات منزلية",
        sv: "Hemverktyg",
        de: "Haushaltswerkzeuge",
        tr: "Ev aletleri ve araçları"
      }
    },

    {
      id: "garden",
      group: "home",
      icon: "fa-leaf",
      labels: {
        en: "Garden",
        ar: "حديقة",
        sv: "Trädgård",
        de: "Garten",
        tr: "Bahçe"
      }
    },

    {
      id: "decor",
      group: "home",
      icon: "fa-lightbulb",
      labels: {
        en: "Decoration",
        ar: "ديكور",
        sv: "Dekoration",
        de: "Dekoration",
        tr: "Dekorasyon"
      }
    },

    /* ================= Services ================= */

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
      id: "car-service",
      group: "services",
      icon: "fa-car-burst",
      labels: {
        en: "Car service",
        ar: "صيانة سيارات",
        sv: "Bilservice",
        de: "Autoservice",
        tr: "Araç servisi"
      }
    },

    {
      id: "device-repair",
      group: "services",
      icon: "fa-mobile-screen-button",
      labels: {
        en: "Device repair",
        ar: "إصلاح الأجهزة",
        sv: "Enhetsreparation",
        de: "Gerätereparatur",
        tr: "Cihaz tamiri"
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
      id: "plumbing",
      group: "services",
      icon: "fa-faucet-drip",
      labels: {
        en: "Plumbing",
        ar: "سباكة",
        sv: "VVS",
        de: "Sanitär",
        tr: "Sıhhi tesisat"
      }
    },

    {
      id: "electricity",
      group: "services",
      icon: "fa-bolt",
      labels: {
        en: "Electricity",
        ar: "كهرباء",
        sv: "El",
        de: "Elektrik",
        tr: "Elektrik"
      }
    },

    {
      id: "painting",
      group: "services",
      icon: "fa-paint-roller",
      labels: {
        en: "Painting",
        ar: "دهان",
        sv: "Målning",
        de: "Malerarbeiten",
        tr: "Boya"
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
    },

    /* ================= Education ================= */

    {
      id: "education",
      group: "services",
      icon: "fa-graduation-cap",
      labels: {
        en: "Education",
        ar: "التعليم",
        sv: "Utbildning",
        de: "Bildung",
        tr: "Eğitim"
      }
    },

    {
      id: "private-lessons",
      group: "services",
      icon: "fa-chalkboard-user",
      labels: {
        en: "Private lessons",
        ar: "دروس خصوصية",
        sv: "Privatlektioner",
        de: "Privatunterricht",
        tr: "Özel dersler"
      }
    },

    {
      id: "language-courses",
      group: "services",
      icon: "fa-language",
      labels: {
        en: "Language courses",
        ar: "دورات لغات",
        sv: "Språkkurser",
        de: "Sprachkurse",
        tr: "Dil kursları"
      }
    },

    {
      id: "online-courses",
      group: "services",
      icon: "fa-laptop-file",
      labels: {
        en: "Online courses",
        ar: "دورات أونلاين",
        sv: "Onlinekurser",
        de: "Online-Kurse",
        tr: "Online kurslar"
      }
    },

    /* ================= Business ================= */

    {
      id: "shops",
      group: "business",
      icon: "fa-store",
      labels: {
        en: "Commercial shops",
        ar: "محلات تجارية",
        sv: "Butiker",
        de: "Geschäfte",
        tr: "Dükkanlar"
      }
    },

    {
      id: "business-for-sale",
      group: "business",
      icon: "fa-briefcase",
      labels: {
        en: "Businesses for sale",
        ar: "مشاريع للبيع",
        sv: "Företag till salu",
        de: "Unternehmen zum Verkauf",
        tr: "Satılık işletmeler"
      }
    },

    {
      id: "restaurant-cafe",
      group: "business",
      icon: "fa-utensils",
      labels: {
        en: "Restaurants & cafés",
        ar: "مطاعم ومقاهي",
        sv: "Restauranger och kaféer",
        de: "Restaurants und Cafés",
        tr: "Restoranlar ve kafeler"
      }
    },

    {
      id: "business-equipment",
      group: "business",
      icon: "fa-industry",
      labels: {
        en: "Business equipment",
        ar: "معدات تجارية",
        sv: "Företagsutrustning",
        de: "Geschäftsausstattung",
        tr: "İş ekipmanları"
      }
    },

    /* ================= Personal Services ================= */

    {
      id: "personal-services",
      group: "personal",
      icon: "fa-user-check",
      labels: {
        en: "Personal services",
        ar: "خدمات شخصية",
        sv: "Personliga tjänster",
        de: "Persönliche Dienstleistungen",
        tr: "Kişisel hizmetler"
      }
    },

    {
      id: "beauty-care",
      group: "personal",
      icon: "fa-spa",
      labels: {
        en: "Beauty care",
        ar: "العناية والجمال",
        sv: "Skönhetsvård",
        de: "Schönheitspflege",
        tr: "Güzellik bakımı"
      }
    },

    {
      id: "event-services",
      group: "personal",
      icon: "fa-calendar-check",
      labels: {
        en: "Event services",
        ar: "خدمات المناسبات",
        sv: "Eventtjänster",
        de: "Eventservices",
        tr: "Etkinlik hizmetleri"
      }
    },

    {
      id: "child-care",
      group: "personal",
      icon: "fa-child-reaching",
      labels: {
        en: "Child care",
        ar: "رعاية الأطفال",
        sv: "Barnomsorg",
        de: "Kinderbetreuung",
        tr: "Çocuk bakımı"
      }
    },

    /* ================= Digital Services ================= */

    {
      id: "digital-services",
      group: "digital",
      icon: "fa-code",
      labels: {
        en: "Digital services",
        ar: "خدمات رقمية",
        sv: "Digitala tjänster",
        de: "Digitale Dienstleistungen",
        tr: "Dijital hizmetler"
      }
    },

    {
      id: "web-design",
      group: "digital",
      icon: "fa-globe",
      labels: {
        en: "Website design",
        ar: "تصميم مواقع",
        sv: "Webbdesign",
        de: "Webdesign",
        tr: "Web tasarımı"
      }
    },

    {
      id: "programming",
      group: "digital",
      icon: "fa-code",
      labels: {
        en: "Programming",
        ar: "برمجة",
        sv: "Programmering",
        de: "Programmierung",
        tr: "Programlama"
      }
    },

    {
      id: "graphic-design",
      group: "digital",
      icon: "fa-pen-nib",
      labels: {
        en: "Graphic design",
        ar: "تصميم جرافيك",
        sv: "Grafisk design",
        de: "Grafikdesign",
        tr: "Grafik tasarım"
      }
    },

    {
      id: "digital-marketing",
      group: "digital",
      icon: "fa-bullhorn",
      labels: {
        en: "Digital marketing",
        ar: "تسويق رقمي",
        sv: "Digital marknadsföring",
        de: "Digitales Marketing",
        tr: "Dijital pazarlama"
      }
    },

    {
      id: "translation-writing",
      group: "digital",
      icon: "fa-keyboard",
      labels: {
        en: "Translation & writing",
        ar: "ترجمة وكتابة",
        sv: "Översättning och skrivande",
        de: "Übersetzung und Schreiben",
        tr: "Çeviri ve yazarlık"
      }
    }
  ];

  window.AMG_CATEGORY_GROUPS = CATEGORY_GROUPS;
  window.AMG_CATEGORIES = CATEGORIES;
  window.CATEGORIES = CATEGORIES;

  function getCurrentLang() {
    return (
      document.documentElement.lang ||
      localStorage.getItem("amg_country_lang") ||
      "en"
    ).slice(0, 2);
  }

  function getGroupLabel(groupKey) {
    const lang = getCurrentLang();
    const group = CATEGORY_GROUPS[groupKey];

    if (!group) return groupKey;

    return group.labels[lang] || group.labels.en;
  }

  function getCategoryLabel(category) {
    const lang = getCurrentLang();

    if (!category) return "";

    return category.labels[lang] || category.labels.en;
  }

  function categoryExists(id) {
    return CATEGORIES.some((category) => category.id === id);
  }

  function getCategoryById(id) {
    return (
      CATEGORIES.find((category) => category.id === id) ||
      CATEGORIES.find((category) => category.id === "cars") ||
      CATEGORIES[0]
    );
  }

  function getSavedCategoryId() {
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get("category");

    if (urlCategory && categoryExists(urlCategory)) {
      return urlCategory;
    }

    const savedCategory = localStorage.getItem(CATEGORY_STORAGE_KEY);

    if (savedCategory && categoryExists(savedCategory)) {
      return savedCategory;
    }

    return "cars";
  }

  function saveCategory(category) {
    if (!category) return;

    localStorage.setItem(CATEGORY_STORAGE_KEY, category.id);
    localStorage.setItem("amg_category_group", category.group);
    localStorage.setItem("amg_category_group_label", getGroupLabel(category.group));
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
      .querySelectorAll("[data-selected-category-group], #selectedCategoryGroup")
      .forEach((element) => {
        element.textContent = getGroupLabel(category.group);
      });

    document
      .querySelectorAll("[data-category-icon]")
      .forEach((element) => {
        element.className = `fa-solid ${category.icon}`;
      });

    window.dispatchEvent(
      new CustomEvent("amg:categorychange", {
        detail: {
          category,
          group: CATEGORY_GROUPS[category.group]
        }
      })
    );
  }

  function fillCategorySelect(select) {
    if (!select) return;

    const selectedId = getSavedCategoryId();
    const groupKeys = Object.keys(CATEGORY_GROUPS).sort((a, b) => {
      return CATEGORY_GROUPS[a].order - CATEGORY_GROUPS[b].order;
    });

    select.innerHTML = "";

    groupKeys.forEach((groupKey) => {
      const groupCategories = CATEGORIES.filter(
        (category) => category.group === groupKey
      );

      if (!groupCategories.length) return;

      const optgroup = document.createElement("optgroup");
      optgroup.label = getGroupLabel(groupKey);

      groupCategories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = getCategoryLabel(category);
        option.dataset.group = category.group;
        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    });

    select.value = selectedId;

    select.onchange = function () {
      const category = getCategoryById(select.value);
      applyCategory(category);

      document
        .querySelectorAll("#categorySelect, [data-category-select], select[name='category']")
        .forEach((otherSelect) => {
          if (otherSelect !== select) {
            otherSelect.value = category.id;
          }
        });
    };
  }

  function initCategories() {
    const categorySelects = document.querySelectorAll(
      "#categorySelect, [data-category-select], select[name='category']"
    );

    categorySelects.forEach(fillCategorySelect);

    const selectedCategory = getCategoryById(getSavedCategoryId());
    applyCategory(selectedCategory);
  }

  window.addEventListener("amg:countrychange", initCategories);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCategories);
  } else {
    initCategories();
  }
})();
