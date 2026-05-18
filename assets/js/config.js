
/* ===============================
   AutoMarket Global - App Config
   =============================== */

const APP_CONFIG = {
  site: {
    name: "AutoMarket Global",
    shortName: "AutoMarket",
    tagline: "Buy and sell cars by country",
    year: "2026",
    language: "en"
  },

  routes: {
    home: "./index.html",
    search: "./search.html",
    sell: "./sell.html",
    details: "./details.html",
    login: "./login.html",
    register: "./register.html",
    account: "./account.html",
    messages: "./messages.html",
    favorites: "./favorites.html",
    dashboard: "./dashboard.html",
    terms: "./terms.html"
  },

  storageKeys: {
    selectedCountry: "automarket_selected_country",
    savedCars: "automarket_saved_cars",
    currentUser: "automarket_current_user"
  },

  defaults: {
    countryCode: "SE",
    currency: "SEK",
    distanceUnit: "km",
    carImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
  },

  demoMode: true
};

window.APP_CONFIG = APP_CONFIG;
