
/* ===============================
   AutoMarket Global - Countries
   =============================== */

const GLOBAL_COUNTRIES = [
  // Europe
  { code: "SE", name: "Sweden", arabicName: "السويد", currency: "SEK", distanceUnit: "km" },
  { code: "DE", name: "Germany", arabicName: "ألمانيا", currency: "EUR", distanceUnit: "km" },
  { code: "DK", name: "Denmark", arabicName: "الدنمارك", currency: "DKK", distanceUnit: "km" },
  { code: "NO", name: "Norway", arabicName: "النرويج", currency: "NOK", distanceUnit: "km" },
  { code: "FI", name: "Finland", arabicName: "فنلندا", currency: "EUR", distanceUnit: "km" },
  { code: "NL", name: "Netherlands", arabicName: "هولندا", currency: "EUR", distanceUnit: "km" },
  { code: "FR", name: "France", arabicName: "فرنسا", currency: "EUR", distanceUnit: "km" },
  { code: "TR", name: "Turkey", arabicName: "تركيا", currency: "TRY", distanceUnit: "km" },

  // Arab countries
  { code: "SA", name: "Saudi Arabia", arabicName: "السعودية", currency: "SAR", distanceUnit: "km" },
  { code: "AE", name: "United Arab Emirates", arabicName: "الإمارات", currency: "AED", distanceUnit: "km" },
  { code: "QA", name: "Qatar", arabicName: "قطر", currency: "QAR", distanceUnit: "km" },
  { code: "KW", name: "Kuwait", arabicName: "الكويت", currency: "KWD", distanceUnit: "km" },
  { code: "BH", name: "Bahrain", arabicName: "البحرين", currency: "BHD", distanceUnit: "km" },
  { code: "OM", name: "Oman", arabicName: "عُمان", currency: "OMR", distanceUnit: "km" },
  { code: "JO", name: "Jordan", arabicName: "الأردن", currency: "JOD", distanceUnit: "km" },
  { code: "LB", name: "Lebanon", arabicName: "لبنان", currency: "LBP", distanceUnit: "km" },
  { code: "SY", name: "Syria", arabicName: "سوريا", currency: "SYP", distanceUnit: "km" },
  { code: "IQ", name: "Iraq", arabicName: "العراق", currency: "IQD", distanceUnit: "km" },
  { code: "PS", name: "Palestine", arabicName: "فلسطين", currency: "ILS", distanceUnit: "km" },
  { code: "YE", name: "Yemen", arabicName: "اليمن", currency: "YER", distanceUnit: "km" },

  // North Africa
  { code: "EG", name: "Egypt", arabicName: "مصر", currency: "EGP", distanceUnit: "km" },
  { code: "SD", name: "Sudan", arabicName: "السودان", currency: "SDG", distanceUnit: "km" },
  { code: "LY", name: "Libya", arabicName: "ليبيا", currency: "LYD", distanceUnit: "km" },
  { code: "TN", name: "Tunisia", arabicName: "تونس", currency: "TND", distanceUnit: "km" },
  { code: "DZ", name: "Algeria", arabicName: "الجزائر", currency: "DZD", distanceUnit: "km" },
  { code: "MA", name: "Morocco", arabicName: "المغرب", currency: "MAD", distanceUnit: "km" },
  { code: "MR", name: "Mauritania", arabicName: "موريتانيا", currency: "MRU", distanceUnit: "km" },

  // East Africa
  { code: "SO", name: "Somalia", arabicName: "الصومال", currency: "SOS", distanceUnit: "km" },
  { code: "DJ", name: "Djibouti", arabicName: "جيبوتي", currency: "DJF", distanceUnit: "km" },
  { code: "KM", name: "Comoros", arabicName: "جزر القمر", currency: "KMF", distanceUnit: "km" }
];

function getCountryStorageKey() {
  return window.APP_CONFIG?.storageKeys?.selectedCountry || "automarket_selected_country";
}

function getDefaultCountryCode() {
  return window.APP_CONFIG?.defaults?.countryCode || "SE";
}

function normalizeCountryCode(code) {
  return String(code || "").trim().toUpperCase();
}

function countryExists(code) {
  const cleanCode = normalizeCountryCode(code);
  return GLOBAL_COUNTRIES.some((country) => country.code === cleanCode);
}

function getCountryByCode(code) {
  const cleanCode = normalizeCountryCode(code);
  return GLOBAL_COUNTRIES.find((country) => country.code === cleanCode) || null;
}

function getSelectedCountryCode() {
  const savedCode = normalizeCountryCode(localStorage.getItem(getCountryStorageKey()));

  if (countryExists(savedCode)) {
    return savedCode;
  }

  return getDefaultCountryCode();
}

function setSelectedCountryCode(code) {
  const cleanCode = normalizeCountryCode(code);

  if (countryExists(cleanCode)) {
    localStorage.setItem(getCountryStorageKey(), cleanCode);
    return cleanCode;
  }

  localStorage.setItem(getCountryStorageKey(), getDefaultCountryCode());
  return getDefaultCountryCode();
}

function getSelectedCountry() {
  return getCountryByCode(getSelectedCountryCode()) || GLOBAL_COUNTRIES[0];
}

function getSelectedCurrency() {
  return getSelectedCountry().currency;
}

function getSelectedDistanceUnit() {
  return getSelectedCountry().distanceUnit;
}

function fillCountrySelect(selectElement, options = {}) {
  if (!selectElement) return;

  const showArabic = options.showArabic !== false;
  const selectedCode = getSelectedCountryCode();

  selectElement.innerHTML = "";

  GLOBAL_COUNTRIES.forEach((country) => {
    const option = document.createElement("option");

    option.value = country.code;
    option.textContent = showArabic
      ? `${country.name} - ${country.arabicName}`
      : country.name;

    if (country.code === selectedCode) {
      option.selected = true;
    }

    selectElement.appendChild(option);
  });
}

function updateSelectedCountryText() {
  const country = getSelectedCountry();
  const countryNameElement = document.getElementById("selectedCountryName");

  if (countryNameElement) {
    countryNameElement.textContent = `${country.name} - ${country.arabicName}`;
  }
}

function formatMoney(amount, currencyCode = getSelectedCurrency()) {
  const number = Number(amount || 0);

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0
  }).format(number);
}

function formatDistance(value, unit = getSelectedDistanceUnit()) {
  const number = Number(value || 0).toLocaleString("en");
  return `${number} ${unit}`;
}

window.GLOBAL_COUNTRIES = GLOBAL_COUNTRIES;

window.CountryService = {
  all: GLOBAL_COUNTRIES,
  getCountryByCode,
  getSelectedCountryCode,
  setSelectedCountryCode,
  getSelectedCountry,
  getSelectedCurrency,
  getSelectedDistanceUnit,
  fillCountrySelect,
  updateSelectedCountryText,
  formatMoney,
  formatDistance
};
