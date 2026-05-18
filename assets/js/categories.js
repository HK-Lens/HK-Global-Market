/* ===============================
   Global Market - Categories
   =============================== */

(function () {
  "use strict";

  const CATEGORIES = [
    {
      id: "cars",
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
      icon: "fa-house",
      labels: {
        en: "Houses",
        ar: "المنازل",
        sv: "Hus",
        de: "Häuser",
        tr: "Evler"
      }
    },
    {
      id: "electronics",
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
      id: "home-tools",
      icon: "fa-kitchen-set",
      labels: {
        en: "Home tools",
        ar: "أدوات منزلية",
        sv: "Hemutrustning",
        de: "Haushaltsgeräte",
        tr: "Ev eşyaları"
      }
    },
    {
      id: "motorcycles",
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
      icon: "fa-seedling",
      labels: {
        en: "Agricultural lands",
        ar: "الأراضي الزراعية",
        sv: "Jordbruksmark",
        de: "Landwirtschaftliche Flächen",
        tr: "Tarım arazileri"
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
    localStorage.setItem("amg_category_label", getCategoryLabel(category));
  }

  function applyCategory(category) {
    if (!category) return;

    saveCategory(category);

    document.body.dataset.category = category.id;

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

    CATEGORIES.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id;
      option.textContent = getCategoryLabel(category);
      select.appendChild(option);
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCategories);
  } else {
    initCategories();
  }
})();
