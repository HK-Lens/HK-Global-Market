/* ===============================
   AutoMarket Global - Core JS
   =============================== */

const APP = {
  name: "AutoMarket Global",
  year: "2026",

  storageKeys: {
    country: "automarket_selected_country",
    listings: "automarket_demo_listings",
    favorites: "automarket_favorites",
    user: "automarket_user"
  }
};

/* ===============================
   Countries
   =============================== */

const COUNTRIES = [
  { code: "SE", name: "Sweden", localName: "Sverige", currency: "SEK", lang: "sv", dir: "ltr" },
  { code: "DE", name: "Germany", localName: "Deutschland", currency: "EUR", lang: "de", dir: "ltr" },
  { code: "DK", name: "Denmark", localName: "Danmark", currency: "DKK", lang: "en", dir: "ltr" },
  { code: "NO", name: "Norway", localName: "Norge", currency: "NOK", lang: "en", dir: "ltr" },
  { code: "FI", name: "Finland", localName: "Suomi", currency: "EUR", lang: "en", dir: "ltr" },
  { code: "NL", name: "Netherlands", localName: "Nederland", currency: "EUR", lang: "en", dir: "ltr" },
  { code: "FR", name: "France", localName: "France", currency: "EUR", lang: "fr", dir: "ltr" },
  { code: "TR", name: "Turkey", localName: "Türkiye", currency: "TRY", lang: "tr", dir: "ltr" },

  { code: "SA", name: "Saudi Arabia", localName: "السعودية", currency: "SAR", lang: "ar", dir: "rtl" },
  { code: "AE", name: "United Arab Emirates", localName: "الإمارات", currency: "AED", lang: "ar", dir: "rtl" },
  { code: "QA", name: "Qatar", localName: "قطر", currency: "QAR", lang: "ar", dir: "rtl" },
  { code: "KW", name: "Kuwait", localName: "الكويت", currency: "KWD", lang: "ar", dir: "rtl" },
  { code: "BH", name: "Bahrain", localName: "البحرين", currency: "BHD", lang: "ar", dir: "rtl" },
  { code: "OM", name: "Oman", localName: "عُمان", currency: "OMR", lang: "ar", dir: "rtl" },
  { code: "JO", name: "Jordan", localName: "الأردن", currency: "JOD", lang: "ar", dir: "rtl" },
  { code: "LB", name: "Lebanon", localName: "لبنان", currency: "LBP", lang: "ar", dir: "rtl" },
  { code: "SY", name: "Syria", localName: "سوريا", currency: "SYP", lang: "ar", dir: "rtl" },
  { code: "IQ", name: "Iraq", localName: "العراق", currency: "IQD", lang: "ar", dir: "rtl" },
  { code: "PS", name: "Palestine", localName: "فلسطين", currency: "ILS", lang: "ar", dir: "rtl" },
  { code: "YE", name: "Yemen", localName: "اليمن", currency: "YER", lang: "ar", dir: "rtl" },
  { code: "EG", name: "Egypt", localName: "مصر", currency: "EGP", lang: "ar", dir: "rtl" },
  { code: "SD", name: "Sudan", localName: "السودان", currency: "SDG", lang: "ar", dir: "rtl" },
  { code: "LY", name: "Libya", localName: "ليبيا", currency: "LYD", lang: "ar", dir: "rtl" },
  { code: "TN", name: "Tunisia", localName: "تونس", currency: "TND", lang: "ar", dir: "rtl" },
  { code: "DZ", name: "Algeria", localName: "الجزائر", currency: "DZD", lang: "ar", dir: "rtl" },
  { code: "MA", name: "Morocco", localName: "المغرب", currency: "MAD", lang: "ar", dir: "rtl" },
  { code: "MR", name: "Mauritania", localName: "موريتانيا", currency: "MRU", lang: "ar", dir: "rtl" },
  { code: "SO", name: "Somalia", localName: "الصومال", currency: "SOS", lang: "ar", dir: "rtl" },
  { code: "DJ", name: "Djibouti", localName: "جيبوتي", currency: "DJF", lang: "ar", dir: "rtl" },
  { code: "KM", name: "Comoros", localName: "جزر القمر", currency: "KMF", lang: "ar", dir: "rtl" }
];

/* ===============================
   Translations
   =============================== */

const I18N = {
  en: {
    home: "Home",
    searchCars: "Search cars",
    sellCar: "Sell a car",
    account: "My account",
    favorites: "Favorites",
    messages: "Messages",
    dashboard: "Dashboard",
    terms: "Terms",
    login: "Login",
    register: "Create account",
    logout: "Logout",

    marketplace: "Global car marketplace",
    heroTitle1: "Buy and sell cars",
    heroTitle2: "by country",
    heroText: "Choose your country, search available cars, save your favorites, contact sellers, or publish your own car listing.",
    selectedCountry: "Selected country",
    selectedCountryText: "Listings, prices, and results will be filtered based on the country selected from the top menu.",

    quickSearchTitle: "Search cars",
    quickSearchText: "Find cars available in your selected country.",
    quickSellTitle: "Sell a car",
    quickSellText: "Create a listing and publish your car online.",
    quickMessagesTitle: "Messages",
    quickMessagesText: "Contact sellers and manage conversations.",

    findNextCar: "Find your next car",
    searchSubtitle: "Choose a country and filter cars by brand, price, year, fuel type, and mileage.",
    filters: "Filters",
    country: "Country",
    brand: "Brand",
    allBrands: "All brands",
    fuel: "Fuel",
    allFuel: "All fuel types",
    minPrice: "Min price",
    maxPrice: "Max price",
    minYear: "Min year",
    maxMileage: "Max mileage",
    applyFilters: "Apply filters",
    reset: "Reset",
    noCars: "No cars found",
    noCarsText: "Try changing the country or removing some filters.",
    details: "Details",
    contact: "Contact",

    petrol: "Petrol",
    diesel: "Diesel",
    hybrid: "Hybrid",
    electric: "Electric",

    sellTitle: "Publish your car listing",
    sellSubtitle: "Fill in the car information. This demo saves the listing in your browser.",
    model: "Model",
    year: "Year",
    price: "Price",
    mileage: "Mileage",
    city: "City",
    imageUrl: "Image URL",
    description: "Description",
    publish: "Publish listing",
    saved: "Saved successfully.",

    loginTitle: "Login",
    registerTitle: "Create account",
    email: "Email",
    password: "Password",
    name: "Name",
    save: "Save",

    accountTitle: "My account",
    dashboardTitle: "Dashboard",
    termsTitle: "Terms",
    favoritesTitle: "Favorites",
    messagesTitle: "Messages",

    demoNotice: "Demo version: data is saved only in this browser until Firebase is connected."
  },

  sv: {
    home: "Hem",
    searchCars: "Sök bilar",
    sellCar: "Sälj bil",
    account: "Mitt konto",
    favorites: "Favoriter",
    messages: "Meddelanden",
    dashboard: "Panel",
    terms: "Villkor",
    login: "Logga in",
    register: "Skapa konto",
    logout: "Logga ut",

    marketplace: "Global bilmarknad",
    heroTitle1: "Köp och sälj bilar",
    heroTitle2: "efter land",
    heroText: "Välj ditt land, sök tillgängliga bilar, spara favoriter, kontakta säljare eller publicera din egen bilannons.",
    selectedCountry: "Valt land",
    selectedCountryText: "Annonser, priser och resultat filtreras efter landet du väljer i toppmenyn.",

    quickSearchTitle: "Sök bilar",
    quickSearchText: "Hitta bilar i ditt valda land.",
    quickSellTitle: "Sälj bil",
    quickSellText: "Skapa en annons och publicera bilen online.",
    quickMessagesTitle: "Meddelanden",
    quickMessagesText: "Kontakta säljare och hantera samtal.",

    findNextCar: "Hitta din nästa bil",
    searchSubtitle: "Välj land och filtrera efter märke, pris, år, bränsle och körsträcka.",
    filters: "Filter",
    country: "Land",
    brand: "Märke",
    allBrands: "Alla märken",
    fuel: "Bränsle",
    allFuel: "Alla bränsletyper",
    minPrice: "Minpris",
    maxPrice: "Maxpris",
    minYear: "Min år",
    maxMileage: "Max körsträcka",
    applyFilters: "Använd filter",
    reset: "Återställ",
    noCars: "Inga bilar hittades",
    noCarsText: "Testa att byta land eller ta bort filter.",
    details: "Detaljer",
    contact: "Kontakt",

    petrol: "Bensin",
    diesel: "Diesel",
    hybrid: "Hybrid",
    electric: "El",

    sellTitle: "Publicera din bilannons",
    sellSubtitle: "Fyll i bilinformationen. Denna demo sparar annonsen i webbläsaren.",
    model: "Modell",
    year: "År",
    price: "Pris",
    mileage: "Körsträcka",
    city: "Stad",
    imageUrl: "Bildlänk",
    description: "Beskrivning",
    publish: "Publicera annons",
    saved: "Sparat.",

    loginTitle: "Logga in",
    registerTitle: "Skapa konto",
    email: "E-post",
    password: "Lösenord",
    name: "Namn",
    save: "Spara",

    accountTitle: "Mitt konto",
    dashboardTitle: "Panel",
    termsTitle: "Villkor",
    favoritesTitle: "Favoriter",
    messagesTitle: "Meddelanden",

    demoNotice: "Demoversion: data sparas bara i denna webbläsare tills Firebase kopplas."
  },

  de: {
    home: "Startseite",
    searchCars: "Autos suchen",
    sellCar: "Auto verkaufen",
    account: "Mein Konto",
    favorites: "Favoriten",
    messages: "Nachrichten",
    dashboard: "Dashboard",
    terms: "Bedingungen",
    login: "Einloggen",
    register: "Konto erstellen",
    logout: "Abmelden",

    marketplace: "Globaler Automarkt",
    heroTitle1: "Autos kaufen und verkaufen",
    heroTitle2: "nach Land",
    heroText: "Wählen Sie Ihr Land, suchen Sie verfügbare Autos, speichern Sie Favoriten, kontaktieren Sie Verkäufer oder veröffentlichen Sie Ihre eigene Anzeige.",
    selectedCountry: "Ausgewähltes Land",
    selectedCountryText: "Anzeigen, Preise und Ergebnisse werden nach dem Land gefiltert, das Sie im oberen Menü auswählen.",

    quickSearchTitle: "Autos suchen",
    quickSearchText: "Finden Sie Autos im ausgewählten Land.",
    quickSellTitle: "Auto verkaufen",
    quickSellText: "Erstellen Sie eine Anzeige und veröffentlichen Sie Ihr Auto online.",
    quickMessagesTitle: "Nachrichten",
    quickMessagesText: "Kontaktieren Sie Verkäufer und verwalten Sie Gespräche.",

    findNextCar: "Finden Sie Ihr nächstes Auto",
    searchSubtitle: "Wählen Sie ein Land und filtern Sie nach Marke, Preis, Jahr, Kraftstoff und Kilometerstand.",
    filters: "Filter",
    country: "Land",
    brand: "Marke",
    allBrands: "Alle Marken",
    fuel: "Kraftstoff",
    allFuel: "Alle Kraftstoffarten",
    minPrice: "Mindestpreis",
    maxPrice: "Höchstpreis",
    minYear: "Mindestjahr",
    maxMileage: "Max. Kilometerstand",
    applyFilters: "Filter anwenden",
    reset: "Zurücksetzen",
    noCars: "Keine Autos gefunden",
    noCarsText: "Ändern Sie das Land oder entfernen Sie Filter.",
    details: "Details",
    contact: "Kontakt",

    petrol: "Benzin",
    diesel: "Diesel",
    hybrid: "Hybrid",
    electric: "Elektro",

    sellTitle: "Autoanzeige veröffentlichen",
    sellSubtitle: "Füllen Sie die Fahrzeugdaten aus. Diese Demo speichert die Anzeige im Browser.",
    model: "Modell",
    year: "Jahr",
    price: "Preis",
    mileage: "Kilometerstand",
    city: "Stadt",
    imageUrl: "Bild-URL",
    description: "Beschreibung",
    publish: "Anzeige veröffentlichen",
    saved: "Erfolgreich gespeichert.",

    loginTitle: "Einloggen",
    registerTitle: "Konto erstellen",
    email: "E-Mail",
    password: "Passwort",
    name: "Name",
    save: "Speichern",

    accountTitle: "Mein Konto",
    dashboardTitle: "Dashboard",
    termsTitle: "Bedingungen",
    favoritesTitle: "Favoriten",
    messagesTitle: "Nachrichten",

    demoNotice: "Demoversion: Daten werden nur in diesem Browser gespeichert, bis Firebase verbunden ist."
  },

  fr: {
    home: "Accueil",
    searchCars: "Rechercher",
    sellCar: "Vendre une voiture",
    account: "Mon compte",
    favorites: "Favoris",
    messages: "Messages",
    dashboard: "Tableau de bord",
    terms: "Conditions",
    login: "Connexion",
    register: "Créer un compte",
    logout: "Déconnexion",

    marketplace: "Marché automobile mondial",
    heroTitle1: "Achetez et vendez des voitures",
    heroTitle2: "par pays",
    heroText: "Choisissez votre pays, recherchez des voitures, enregistrez vos favoris, contactez les vendeurs ou publiez votre annonce.",
    selectedCountry: "Pays sélectionné",
    selectedCountryText: "Les annonces, prix et résultats sont filtrés selon le pays choisi.",

    quickSearchTitle: "Rechercher",
    quickSearchText: "Trouvez des voitures dans le pays choisi.",
    quickSellTitle: "Vendre une voiture",
    quickSellText: "Créez une annonce et publiez votre voiture en ligne.",
    quickMessagesTitle: "Messages",
    quickMessagesText: "Contactez les vendeurs et gérez les conversations.",

    findNextCar: "Trouvez votre prochaine voiture",
    searchSubtitle: "Choisissez un pays et filtrez par marque, prix, année, carburant et kilométrage.",
    filters: "Filtres",
    country: "Pays",
    brand: "Marque",
    allBrands: "Toutes les marques",
    fuel: "Carburant",
    allFuel: "Tous les carburants",
    minPrice: "Prix min",
    maxPrice: "Prix max",
    minYear: "Année min",
    maxMileage: "Kilométrage max",
    applyFilters: "Appliquer",
    reset: "Réinitialiser",
    noCars: "Aucune voiture trouvée",
    noCarsText: "Changez le pays ou retirez des filtres.",
    details: "Détails",
    contact: "Contact",

    petrol: "Essence",
    diesel: "Diesel",
    hybrid: "Hybride",
    electric: "Électrique",

    sellTitle: "Publier votre annonce",
    sellSubtitle: "Remplissez les informations. Cette démo enregistre l’annonce dans le navigateur.",
    model: "Modèle",
    year: "Année",
    price: "Prix",
    mileage: "Kilométrage",
    city: "Ville",
    imageUrl: "URL de l’image",
    description: "Description",
    publish: "Publier",
    saved: "Enregistré.",

    loginTitle: "Connexion",
    registerTitle: "Créer un compte",
    email: "E-mail",
    password: "Mot de passe",
    name: "Nom",
    save: "Enregistrer",

    accountTitle: "Mon compte",
    dashboardTitle: "Tableau de bord",
    termsTitle: "Conditions",
    favoritesTitle: "Favoris",
    messagesTitle: "Messages",

    demoNotice: "Version démo : les données sont enregistrées seulement dans ce navigateur jusqu’à la connexion Firebase."
  },

  tr: {
    home: "Ana sayfa",
    searchCars: "Araç ara",
    sellCar: "Araç sat",
    account: "Hesabım",
    favorites: "Favoriler",
    messages: "Mesajlar",
    dashboard: "Panel",
    terms: "Şartlar",
    login: "Giriş yap",
    register: "Hesap oluştur",
    logout: "Çıkış yap",

    marketplace: "Küresel araç pazarı",
    heroTitle1: "Araç al ve sat",
    heroTitle2: "ülkeye göre",
    heroText: "Ülkenizi seçin, mevcut araçları arayın, favorilerinizi kaydedin, satıcılarla iletişim kurun veya kendi ilanınızı yayınlayın.",
    selectedCountry: "Seçilen ülke",
    selectedCountryText: "İlanlar, fiyatlar ve sonuçlar üst menüden seçilen ülkeye göre filtrelenir.",

    quickSearchTitle: "Araç ara",
    quickSearchText: "Seçilen ülkedeki araçları bulun.",
    quickSellTitle: "Araç sat",
    quickSellText: "İlan oluşturun ve aracınızı yayınlayın.",
    quickMessagesTitle: "Mesajlar",
    quickMessagesText: "Satıcılarla iletişime geçin ve konuşmaları yönetin.",

    findNextCar: "Sonraki aracını bul",
    searchSubtitle: "Ülke seçin; marka, fiyat, yıl, yakıt ve kilometreye göre filtreleyin.",
    filters: "Filtreler",
    country: "Ülke",
    brand: "Marka",
    allBrands: "Tüm markalar",
    fuel: "Yakıt",
    allFuel: "Tüm yakıt türleri",
    minPrice: "Min fiyat",
    maxPrice: "Max fiyat",
    minYear: "Min yıl",
    maxMileage: "Max kilometre",
    applyFilters: "Filtrele",
    reset: "Sıfırla",
    noCars: "Araç bulunamadı",
    noCarsText: "Ülkeyi değiştirin veya bazı filtreleri kaldırın.",
    details: "Detaylar",
    contact: "İletişim",

    petrol: "Benzin",
    diesel: "Dizel",
    hybrid: "Hibrit",
    electric: "Elektrikli",

    sellTitle: "Araç ilanını yayınla",
    sellSubtitle: "Araç bilgilerini doldurun. Bu demo ilanı tarayıcıda kaydeder.",
    model: "Model",
    year: "Yıl",
    price: "Fiyat",
    mileage: "Kilometre",
    city: "Şehir",
    imageUrl: "Resim URL",
    description: "Açıklama",
    publish: "İlanı yayınla",
    saved: "Kaydedildi.",

    loginTitle: "Giriş yap",
    registerTitle: "Hesap oluştur",
    email: "E-posta",
    password: "Şifre",
    name: "Ad",
    save: "Kaydet",

    accountTitle: "Hesabım",
    dashboardTitle: "Panel",
    termsTitle: "Şartlar",
    favoritesTitle: "Favoriler",
    messagesTitle: "Mesajlar",

    demoNotice: "Demo sürüm: Firebase bağlanana kadar veriler sadece bu tarayıcıda saklanır."
  },

  ar: {
    home: "الرئيسية",
    searchCars: "بحث السيارات",
    sellCar: "بيع سيارة",
    account: "حسابي",
    favorites: "المفضلة",
    messages: "الرسائل",
    dashboard: "لوحة التحكم",
    terms: "الشروط",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    logout: "تسجيل الخروج",

    marketplace: "سوق سيارات عالمي",
    heroTitle1: "اشترِ وبِع السيارات",
    heroTitle2: "حسب الدولة",
    heroText: "اختر دولتك، ابحث عن السيارات المتاحة، احفظ المفضلة، تواصل مع البائعين، أو انشر إعلان سيارتك.",
    selectedCountry: "الدولة المختارة",
    selectedCountryText: "سيتم عرض الإعلانات والأسعار والنتائج حسب الدولة المختارة من القائمة العلوية.",

    quickSearchTitle: "بحث السيارات",
    quickSearchText: "اعثر على سيارات متاحة في الدولة المختارة.",
    quickSellTitle: "بيع سيارة",
    quickSellText: "أنشئ إعلانًا وانشر سيارتك على الموقع.",
    quickMessagesTitle: "الرسائل",
    quickMessagesText: "تواصل مع البائعين وأدر المحادثات.",

    findNextCar: "اعثر على سيارتك القادمة",
    searchSubtitle: "اختر دولة وفلتر السيارات حسب الماركة والسعر والسنة ونوع الوقود والمسافة.",
    filters: "الفلاتر",
    country: "الدولة",
    brand: "الماركة",
    allBrands: "كل الماركات",
    fuel: "الوقود",
    allFuel: "كل أنواع الوقود",
    minPrice: "أقل سعر",
    maxPrice: "أعلى سعر",
    minYear: "أقل سنة",
    maxMileage: "أعلى مسافة",
    applyFilters: "تطبيق الفلاتر",
    reset: "إعادة ضبط",
    noCars: "لا توجد سيارات",
    noCarsText: "جرّب تغيير الدولة أو إزالة بعض الفلاتر.",
    details: "التفاصيل",
    contact: "تواصل",

    petrol: "بنزين",
    diesel: "ديزل",
    hybrid: "هايبرد",
    electric: "كهرباء",

    sellTitle: "انشر إعلان سيارتك",
    sellSubtitle: "املأ معلومات السيارة. هذه النسخة التجريبية تحفظ الإعلان في المتصفح فقط.",
    model: "الموديل",
    year: "السنة",
    price: "السعر",
    mileage: "المسافة",
    city: "المدينة",
    imageUrl: "رابط الصورة",
    description: "الوصف",
    publish: "نشر الإعلان",
    saved: "تم الحفظ بنجاح.",

    loginTitle: "تسجيل الدخول",
    registerTitle: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    name: "الاسم",
    save: "حفظ",

    accountTitle: "حسابي",
    dashboardTitle: "لوحة التحكم",
    termsTitle: "الشروط",
    favoritesTitle: "المفضلة",
    messagesTitle: "الرسائل",

    demoNotice: "نسخة تجريبية: البيانات تُحفظ فقط في هذا المتصفح إلى أن يتم ربط Firebase."
  }
};

/* ===============================
   Demo cars
   =============================== */

const SAMPLE_CARS = [
  {
    id: "se-volvo-xc60",
    countryCode: "SE",
    brand: "Volvo",
    model: "XC60",
    year: 2021,
    price: 349000,
    mileage: 68000,
    fuel: "Hybrid",
    city: "Stockholm",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80",
    description: "Clean family SUV with hybrid engine."
  },
  {
    id: "se-tesla-model3",
    countryCode: "SE",
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 399000,
    mileage: 42000,
    fuel: "Electric",
    city: "Göteborg",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    description: "Electric sedan with great range."
  },
  {
    id: "de-bmw-320",
    countryCode: "DE",
    brand: "BMW",
    model: "320i",
    year: 2020,
    price: 24500,
    mileage: 83000,
    fuel: "Petrol",
    city: "Berlin",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    description: "Comfortable and sporty car."
  },
  {
    id: "de-mercedes-c",
    countryCode: "DE",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2019,
    price: 27500,
    mileage: 96000,
    fuel: "Diesel",
    city: "Munich",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    description: "Elegant sedan in good condition."
  },
  {
    id: "sa-toyota-camry",
    countryCode: "SA",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 92000,
    mileage: 38000,
    fuel: "Petrol",
    city: "Riyadh",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
    description: "Reliable car for city and travel."
  },
  {
    id: "ae-hyundai-tucson",
    countryCode: "AE",
    brand: "Hyundai",
    model: "Tucson",
    year: 2021,
    price: 78000,
    mileage: 52000,
    fuel: "Petrol",
    city: "Dubai",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    description: "SUV with modern features."
  },
  {
    id: "eg-kia-sportage",
    countryCode: "EG",
    brand: "Kia",
    model: "Sportage",
    year: 2020,
    price: 1450000,
    mileage: 74000,
    fuel: "Petrol",
    city: "Cairo",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
    description: "Practical SUV for family use."
  },
  {
    id: "tr-toyota-corolla",
    countryCode: "TR",
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 1120000,
    mileage: 61000,
    fuel: "Hybrid",
    city: "Istanbul",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    description: "Hybrid sedan with low consumption."
  }
];

/* ===============================
   Small helpers
   =============================== */

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function getCountry(code) {
  return COUNTRIES.find((country) => country.code === code) || COUNTRIES[0];
}

function getSelectedCountryCode() {
  const savedCode = localStorage.getItem(APP.storageKeys.country) || "SE";
  const exists = COUNTRIES.some((country) => country.code === savedCode);
  return exists ? savedCode : "SE";
}

function getSelectedCountry() {
  return getCountry(getSelectedCountryCode());
}

function setSelectedCountryCode(code) {
  const exists = COUNTRIES.some((country) => country.code === code);
  localStorage.setItem(APP.storageKeys.country, exists ? code : "SE");
}

function getTranslation(key) {
  const country = getSelectedCountry();
  const dictionary = I18N[country.lang] || I18N.en;
  return dictionary[key] || I18N.en[key] || key;
}

function fillCountrySelect(selectElement) {
  if (!selectElement) return;

  const selectedCode = getSelectedCountryCode();
  selectElement.innerHTML = "";

  COUNTRIES.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = `${country.name} - ${country.localName}`;

    if (country.code === selectedCode) {
      option.selected = true;
    }

    selectElement.appendChild(option);
  });
}

function applyLanguage() {
  const country = getSelectedCountry();

  document.documentElement.lang = country.lang;
  document.documentElement.dir = country.dir;

  qsa("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = getTranslation(key);
  });

  const selectedCountryName = qs("#selectedCountryName");
  if (selectedCountryName) {
    selectedCountryName.textContent = `${country.name} - ${country.localName}`;
  }

  renderCurrentPage();
}

function formatMoney(amount, currency = getSelectedCountry().currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0
  }).format(Number(amount || 0));
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en");
}

function translateFuel(fuel) {
  const fuelMap = {
    Petrol: "petrol",
    Diesel: "diesel",
    Hybrid: "hybrid",
    Electric: "electric"
  };

  return getTranslation(fuelMap[fuel] || fuel);
}

/* ===============================
   Storage
   =============================== */

function getStoredListings() {
  try {
    return JSON.parse(localStorage.getItem(APP.storageKeys.listings) || "[]");
  } catch {
    return [];
  }
}

function saveStoredListings(listings) {
  localStorage.setItem(APP.storageKeys.listings, JSON.stringify(listings));
}

function getAllCars() {
  return [...SAMPLE_CARS, ...getStoredListings()];
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(APP.storageKeys.favorites) || "[]");
  } catch {
    return [];
  }
}

function setFavorites(favorites) {
  localStorage.setItem(APP.storageKeys.favorites, JSON.stringify(favorites));
}

function toggleFavorite(carId) {
  const favorites = getFavorites();

  if (favorites.includes(carId)) {
    setFavorites(favorites.filter((id) => id !== carId));
  } else {
    setFavorites([...favorites, carId]);
  }

  renderCurrentPage();
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(APP.storageKeys.user) || "null");
  } catch {
    return null;
  }
}

function setUser(user) {
  localStorage.setItem(APP.storageKeys.user, JSON.stringify(user));
}

function logout() {
  localStorage.removeItem(APP.storageKeys.user);
  window.location.href = "index.html";
}

/* ===============================
   Layout
   =============================== */

function setupLayout() {
  const menuToggle = qs("#menuToggle");
  const sidebar = qs("#sidebar");
  const sidebarClose = qs("#sidebarClose");
  const sidebarBackdrop = qs("#sidebarBackdrop");
  const countrySelect = qs("#countrySelect");

  function openSidebar() {
    if (!sidebar || !sidebarBackdrop || !menuToggle) return;

    sidebar.classList.add("open");
    sidebarBackdrop.classList.add("open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    if (!sidebar || !sidebarBackdrop || !menuToggle) return;

    sidebar.classList.remove("open");
    sidebarBackdrop.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", openSidebar);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });

  fillCountrySelect(countrySelect);

  if (countrySelect) {
    countrySelect.addEventListener("change", () => {
      setSelectedCountryCode(countrySelect.value);

      qsa("select[data-country-select]").forEach((select) => {
        select.value = countrySelect.value;
      });

      applyLanguage();
    });
  }

  qsa("select[data-country-select]").forEach((select) => {
    fillCountrySelect(select);

    select.addEventListener("change", () => {
      setSelectedCountryCode(select.value);

      if (countrySelect) {
        countrySelect.value = select.value;
      }

      applyLanguage();
    });
  });
}

/* ===============================
   Car card
   =============================== */

function buildCarCard(car) {
  const country = getCountry(car.countryCode);
  const favorites = getFavorites();
  const isFavorite = favorites.includes(car.id);

  return `
    <article class="car-card">
      <img
        class="car-image"
        src="${car.image}"
        alt="${car.brand} ${car.model}"
        onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80'"
      />

      <div class="car-body">
        <h3 class="car-title">${car.brand} ${car.model}</h3>

        <div class="car-location">
          <i class="fa-solid fa-location-dot"></i>
          ${car.city}, ${country.name}
        </div>

        <div class="car-meta">
          <span class="meta-pill">${car.year}</span>
          <span class="meta-pill">${formatNumber(car.mileage)} km</span>
          <span class="meta-pill">${translateFuel(car.fuel)}</span>
        </div>

        <div class="car-price">
          ${formatMoney(car.price, country.currency)}
        </div>

        <div class="car-actions">
          <a class="btn btn-secondary" href="details.html?id=${encodeURIComponent(car.id)}">
            ${getTranslation("details")}
          </a>

          <button class="btn btn-secondary" type="button" onclick="toggleFavorite('${car.id}')">
            <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>

          <a class="btn btn-primary" href="messages.html?car=${encodeURIComponent(car.id)}">
            ${getTranslation("contact")}
          </a>
        </div>
      </div>
    </article>
  `;
}

/* ===============================
   Search page
   =============================== */

function renderSearchPage() {
  const carGrid = qs("#carGrid");
  if (!carGrid) return;

  const brand = qs("#filterBrand")?.value || "";
  const fuel = qs("#filterFuel")?.value || "";
  const minPrice = Number(qs("#minPrice")?.value || 0);
  const maxPrice = Number(qs("#maxPrice")?.value || 0);
  const minYear = Number(qs("#minYear")?.value || 0);
  const maxMileage = Number(qs("#maxMileage")?.value || 0);
  const selectedCountryCode = getSelectedCountryCode();

  const filteredCars = getAllCars().filter((car) => {
    return (
      car.countryCode === selectedCountryCode &&
      (!brand || car.brand === brand) &&
      (!fuel || car.fuel === fuel) &&
      (!minPrice || Number(car.price) >= minPrice) &&
      (!maxPrice || Number(car.price) <= maxPrice) &&
      (!minYear || Number(car.year) >= minYear) &&
      (!maxMileage || Number(car.mileage) <= maxMileage)
    );
  });

  const resultsCount = qs("#resultsCount");
  const resultsCountry = qs("#resultsCountry");
  const emptyState = qs("#emptyState");

  if (resultsCount) {
    resultsCount.textContent =
      filteredCars.length === 1 ? "1 car" : `${filteredCars.length} cars`;
  }

  if (resultsCountry) {
    const country = getSelectedCountry();
    resultsCountry.textContent = `${country.name} - ${country.localName}`;
  }

  carGrid.innerHTML = filteredCars.map(buildCarCard).join("");

  if (emptyState) {
    emptyState.style.display = filteredCars.length ? "none" : "block";
  }
}

/* ===============================
   Details page
   =============================== */

function renderDetailsPage() {
  const detailsBox = qs("#detailsBox");
  if (!detailsBox) return;

  const params = new URLSearchParams(window.location.search);
  const carId = params.get("id");

  const car = getAllCars().find((item) => item.id === carId) || getAllCars()[0];
  const country = getCountry(car.countryCode);

  detailsBox.innerHTML = `
    <div class="car-card">
      <img class="car-image" style="height: 360px;" src="${car.image}" alt="${car.brand} ${car.model}" />

      <div class="car-body">
        <span class="badge">
          ${country.name} - ${country.localName}
        </span>

        <h1 style="margin-top: 14px;">
          ${car.brand} ${car.model}
        </h1>

        <p class="car-location">
          <i class="fa-solid fa-location-dot"></i>
          ${car.city}, ${country.name}
        </p>

        <div class="car-meta">
          <span class="meta-pill">${car.year}</span>
          <span class="meta-pill">${formatNumber(car.mileage)} km</span>
          <span class="meta-pill">${translateFuel(car.fuel)}</span>
        </div>

        <div class="car-price">
          ${formatMoney(car.price, country.currency)}
        </div>

        <p>${car.description || ""}</p>

        <div class="car-actions">
          <a class="btn btn-primary" href="messages.html?car=${encodeURIComponent(car.id)}">
            ${getTranslation("contact")}
          </a>

          <button class="btn btn-secondary" type="button" onclick="toggleFavorite('${car.id}')">
            <i class="fa-regular fa-heart"></i>
            ${getTranslation("favorites")}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ===============================
   Favorites page
   =============================== */

function renderFavoritesPage() {
  const favoritesGrid = qs("#favoritesGrid");
  if (!favoritesGrid) return;

  const favoriteIds = getFavorites();
  const favoriteCars = getAllCars().filter((car) => favoriteIds.includes(car.id));

  favoritesGrid.innerHTML = favoriteCars.map(buildCarCard).join("");

  const emptyState = qs("#emptyState");
  if (emptyState) {
    emptyState.style.display = favoriteCars.length ? "none" : "block";
  }
}

/* ===============================
   Dashboard page
   =============================== */

function renderDashboardPage() {
  const totalElement = qs("#statTotal");
  const countryElement = qs("#statCountry");
  const favoritesElement = qs("#statFavorites");

  if (!totalElement && !countryElement && !favoritesElement) return;

  const allCars = getAllCars();
  const selectedCountryCars = allCars.filter(
    (car) => car.countryCode === getSelectedCountryCode()
  );

  if (totalElement) totalElement.textContent = allCars.length;
  if (countryElement) countryElement.textContent = selectedCountryCars.length;
  if (favoritesElement) favoritesElement.textContent = getFavorites().length;
}

/* ===============================
   Account page
   =============================== */

function renderAccountPage() {
  const accountBox = qs("#accountBox");
  if (!accountBox) return;

  const user = getUser();

  if (!user) {
    accountBox.innerHTML = `
      <div class="alert">
        ${getTranslation("demoNotice")}
      </div>

      <a class="btn btn-primary" href="login.html">
        ${getTranslation("login")}
      </a>
    `;
    return;
  }

  accountBox.innerHTML = `
    <div class="list-item">
      <div>
        <strong>${user.name || "Demo User"}</strong><br />
        <span>${user.email}</span>
      </div>

      <button class="btn btn-danger" onclick="logout()">
        ${getTranslation("logout")}
      </button>
    </div>
  `;
}

/* ===============================
   Messages page
   =============================== */

function renderMessagesPage() {
  const messageSubject = qs("#messageSubject");
  if (!messageSubject) return;

  const params = new URLSearchParams(window.location.search);
  const carId = params.get("car");
  const car = getAllCars().find((item) => item.id === carId);

  if (car) {
    messageSubject.textContent = `${getTranslation("messages")}: ${car.brand} ${car.model}`;
  }
}

/* ===============================
   Render current page
   =============================== */

function renderCurrentPage() {
  renderSearchPage();
  renderDetailsPage();
  renderFavoritesPage();
  renderDashboardPage();
  renderAccountPage();
  renderMessagesPage();
}

/* ===============================
   Events
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  setupLayout();
  applyLanguage();

  qsa("[data-filter]").forEach((element) => {
    element.addEventListener("input", renderSearchPage);
    element.addEventListener("change", renderSearchPage);
  });

  const resetFilters = qs("#resetFilters");
  if (resetFilters) {
    resetFilters.addEventListener("click", () => {
      ["filterBrand", "filterFuel", "minPrice", "maxPrice", "minYear", "maxMileage"].forEach((id) => {
        const element = qs(`#${id}`);
        if (element) element.value = "";
      });

      renderSearchPage();
    });
  }

  const sellForm = qs("#sellForm");
  if (sellForm) {
    sellForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(sellForm);
      const data = Object.fromEntries(formData.entries());

      const listing = {
        id: `listing-${Date.now()}`,
        countryCode: getSelectedCountryCode(),
        brand: data.brand || "Unknown",
        model: data.model || "Car",
        year: Number(data.year || new Date().getFullYear()),
        price: Number(data.price || 0),
        mileage: Number(data.mileage || 0),
        fuel: data.fuel || "Petrol",
        city: data.city || "",
        image: data.image || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        description: data.description || ""
      };

      saveStoredListings([...getStoredListings(), listing]);

      const formMessage = qs("#formMessage");
      if (formMessage) {
        formMessage.textContent = getTranslation("saved");
        formMessage.className = "alert alert-success";
      }

      sellForm.reset();
      renderCurrentPage();
    });
  }

  const loginForm = qs("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(loginForm);
      const data = Object.fromEntries(formData.entries());

      setUser({
        name: data.name || "Demo User",
        email: data.email || "demo@example.com"
      });

      window.location.href = "account.html";
    });
  }

  const messageForm = qs("#messageForm");
  if (messageForm) {
    messageForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const messageResult = qs("#messageResult");

      if (messageResult) {
        messageResult.textContent = getTranslation("saved");
        messageResult.className = "alert alert-success";
      }

      messageForm.reset();
    });
  }
});
