/* HK Global Market & Services - Countries Database */

(function () {
  "use strict";

  const STORAGE_KEYS = {
    country: "amg_country_code",
    countryLabel: "amg_country_label",
    lang: "amg_country_lang",
    currency: "amg_country_currency",
    region: "amg_country_region"
  };

  const RTL_LANGS = ["ar", "fa", "ur", "he"];

  const COUNTRIES = [
    { code: "AF", labels: { en: "Afghanistan", ar: "أفغانستان" }, lang: "fa", currency: "AFN", region: "Asia" },
    { code: "AL", labels: { en: "Albania", ar: "ألبانيا" }, lang: "sq", currency: "ALL", region: "Europe" },
    { code: "DZ", labels: { en: "Algeria", ar: "الجزائر" }, lang: "ar", currency: "DZD", region: "Africa" },
    { code: "AD", labels: { en: "Andorra", ar: "أندورا" }, lang: "ca", currency: "EUR", region: "Europe" },
    { code: "AO", labels: { en: "Angola", ar: "أنغولا" }, lang: "pt", currency: "AOA", region: "Africa" },
    { code: "AG", labels: { en: "Antigua and Barbuda", ar: "أنتيغوا وبربودا" }, lang: "en", currency: "XCD", region: "Americas" },
    { code: "AR", labels: { en: "Argentina", ar: "الأرجنتين" }, lang: "es", currency: "ARS", region: "Americas" },
    { code: "AM", labels: { en: "Armenia", ar: "أرمينيا" }, lang: "hy", currency: "AMD", region: "Asia" },
    { code: "AU", labels: { en: "Australia", ar: "أستراليا" }, lang: "en", currency: "AUD", region: "Oceania" },
    { code: "AT", labels: { en: "Austria", ar: "النمسا" }, lang: "de", currency: "EUR", region: "Europe" },
    { code: "AZ", labels: { en: "Azerbaijan", ar: "أذربيجان" }, lang: "az", currency: "AZN", region: "Asia" },
    { code: "BS", labels: { en: "Bahamas", ar: "الباهاما" }, lang: "en", currency: "BSD", region: "Americas" },
    { code: "BH", labels: { en: "Bahrain", ar: "البحرين" }, lang: "ar", currency: "BHD", region: "Asia" },
    { code: "BD", labels: { en: "Bangladesh", ar: "بنغلاديش" }, lang: "bn", currency: "BDT", region: "Asia" },
    { code: "BB", labels: { en: "Barbados", ar: "باربادوس" }, lang: "en", currency: "BBD", region: "Americas" },
    { code: "BY", labels: { en: "Belarus", ar: "بيلاروس" }, lang: "be", currency: "BYN", region: "Europe" },
    { code: "BE", labels: { en: "Belgium", ar: "بلجيكا" }, lang: "nl", currency: "EUR", region: "Europe" },
    { code: "BZ", labels: { en: "Belize", ar: "بليز" }, lang: "en", currency: "BZD", region: "Americas" },
    { code: "BJ", labels: { en: "Benin", ar: "بنين" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "BT", labels: { en: "Bhutan", ar: "بوتان" }, lang: "dz", currency: "BTN", region: "Asia" },
    { code: "BO", labels: { en: "Bolivia", ar: "بوليفيا" }, lang: "es", currency: "BOB", region: "Americas" },
    { code: "BA", labels: { en: "Bosnia and Herzegovina", ar: "البوسنة والهرسك" }, lang: "bs", currency: "BAM", region: "Europe" },
    { code: "BW", labels: { en: "Botswana", ar: "بوتسوانا" }, lang: "en", currency: "BWP", region: "Africa" },
    { code: "BR", labels: { en: "Brazil", ar: "البرازيل" }, lang: "pt", currency: "BRL", region: "Americas" },
    { code: "BN", labels: { en: "Brunei", ar: "بروناي" }, lang: "ms", currency: "BND", region: "Asia" },
    { code: "BG", labels: { en: "Bulgaria", ar: "بلغاريا" }, lang: "bg", currency: "BGN", region: "Europe" },
    { code: "BF", labels: { en: "Burkina Faso", ar: "بوركينا فاسو" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "BI", labels: { en: "Burundi", ar: "بوروندي" }, lang: "rn", currency: "BIF", region: "Africa" },
    { code: "CV", labels: { en: "Cabo Verde", ar: "الرأس الأخضر" }, lang: "pt", currency: "CVE", region: "Africa" },
    { code: "KH", labels: { en: "Cambodia", ar: "كمبوديا" }, lang: "km", currency: "KHR", region: "Asia" },
    { code: "CM", labels: { en: "Cameroon", ar: "الكاميرون" }, lang: "fr", currency: "XAF", region: "Africa" },
    { code: "CA", labels: { en: "Canada", ar: "كندا" }, lang: "en", currency: "CAD", region: "Americas" },
    { code: "CF", labels: { en: "Central African Republic", ar: "جمهورية أفريقيا الوسطى" }, lang: "fr", currency: "XAF", region: "Africa" },
    { code: "TD", labels: { en: "Chad", ar: "تشاد" }, lang: "fr", currency: "XAF", region: "Africa" },
    { code: "CL", labels: { en: "Chile", ar: "تشيلي" }, lang: "es", currency: "CLP", region: "Americas" },
    { code: "CN", labels: { en: "China", ar: "الصين" }, lang: "zh", currency: "CNY", region: "Asia" },
    { code: "CO", labels: { en: "Colombia", ar: "كولومبيا" }, lang: "es", currency: "COP", region: "Americas" },
    { code: "KM", labels: { en: "Comoros", ar: "جزر القمر" }, lang: "ar", currency: "KMF", region: "Africa" },
    { code: "CG", labels: { en: "Congo", ar: "الكونغو" }, lang: "fr", currency: "XAF", region: "Africa" },
    { code: "CD", labels: { en: "Democratic Republic of the Congo", ar: "جمهورية الكونغو الديمقراطية" }, lang: "fr", currency: "CDF", region: "Africa" },
    { code: "CR", labels: { en: "Costa Rica", ar: "كوستاريكا" }, lang: "es", currency: "CRC", region: "Americas" },
    { code: "CI", labels: { en: "Côte d’Ivoire", ar: "ساحل العاج" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "HR", labels: { en: "Croatia", ar: "كرواتيا" }, lang: "hr", currency: "EUR", region: "Europe" },
    { code: "CU", labels: { en: "Cuba", ar: "كوبا" }, lang: "es", currency: "CUP", region: "Americas" },
    { code: "CY", labels: { en: "Cyprus", ar: "قبرص" }, lang: "el", currency: "EUR", region: "Asia" },
    { code: "CZ", labels: { en: "Czechia", ar: "التشيك" }, lang: "cs", currency: "CZK", region: "Europe" },
    { code: "DK", labels: { en: "Denmark", ar: "الدنمارك" }, lang: "da", currency: "DKK", region: "Europe" },
    { code: "DJ", labels: { en: "Djibouti", ar: "جيبوتي" }, lang: "ar", currency: "DJF", region: "Africa" },
    { code: "DM", labels: { en: "Dominica", ar: "دومينيكا" }, lang: "en", currency: "XCD", region: "Americas" },
    { code: "DO", labels: { en: "Dominican Republic", ar: "جمهورية الدومينيكان" }, lang: "es", currency: "DOP", region: "Americas" },
    { code: "EC", labels: { en: "Ecuador", ar: "الإكوادور" }, lang: "es", currency: "USD", region: "Americas" },
    { code: "EG", labels: { en: "Egypt", ar: "مصر" }, lang: "ar", currency: "EGP", region: "Africa" },
    { code: "SV", labels: { en: "El Salvador", ar: "السلفادور" }, lang: "es", currency: "USD", region: "Americas" },
    { code: "GQ", labels: { en: "Equatorial Guinea", ar: "غينيا الاستوائية" }, lang: "es", currency: "XAF", region: "Africa" },
    { code: "ER", labels: { en: "Eritrea", ar: "إريتريا" }, lang: "ti", currency: "ERN", region: "Africa" },
    { code: "EE", labels: { en: "Estonia", ar: "إستونيا" }, lang: "et", currency: "EUR", region: "Europe" },
    { code: "SZ", labels: { en: "Eswatini", ar: "إسواتيني" }, lang: "en", currency: "SZL", region: "Africa" },
    { code: "ET", labels: { en: "Ethiopia", ar: "إثيوبيا" }, lang: "am", currency: "ETB", region: "Africa" },
    { code: "FJ", labels: { en: "Fiji", ar: "فيجي" }, lang: "en", currency: "FJD", region: "Oceania" },
    { code: "FI", labels: { en: "Finland", ar: "فنلندا" }, lang: "fi", currency: "EUR", region: "Europe" },
    { code: "FR", labels: { en: "France", ar: "فرنسا" }, lang: "fr", currency: "EUR", region: "Europe" },
    { code: "GA", labels: { en: "Gabon", ar: "الغابون" }, lang: "fr", currency: "XAF", region: "Africa" },
    { code: "GM", labels: { en: "Gambia", ar: "غامبيا" }, lang: "en", currency: "GMD", region: "Africa" },
    { code: "GE", labels: { en: "Georgia", ar: "جورجيا" }, lang: "ka", currency: "GEL", region: "Asia" },
    { code: "DE", labels: { en: "Germany", ar: "ألمانيا" }, lang: "de", currency: "EUR", region: "Europe" },
    { code: "GH", labels: { en: "Ghana", ar: "غانا" }, lang: "en", currency: "GHS", region: "Africa" },
    { code: "GR", labels: { en: "Greece", ar: "اليونان" }, lang: "el", currency: "EUR", region: "Europe" },
    { code: "GD", labels: { en: "Grenada", ar: "غرينادا" }, lang: "en", currency: "XCD", region: "Americas" },
    { code: "GT", labels: { en: "Guatemala", ar: "غواتيمالا" }, lang: "es", currency: "GTQ", region: "Americas" },
    { code: "GN", labels: { en: "Guinea", ar: "غينيا" }, lang: "fr", currency: "GNF", region: "Africa" },
    { code: "GW", labels: { en: "Guinea-Bissau", ar: "غينيا بيساو" }, lang: "pt", currency: "XOF", region: "Africa" },
    { code: "GY", labels: { en: "Guyana", ar: "غيانا" }, lang: "en", currency: "GYD", region: "Americas" },
    { code: "HT", labels: { en: "Haiti", ar: "هايتي" }, lang: "ht", currency: "HTG", region: "Americas" },
    { code: "HN", labels: { en: "Honduras", ar: "هندوراس" }, lang: "es", currency: "HNL", region: "Americas" },
    { code: "HU", labels: { en: "Hungary", ar: "المجر" }, lang: "hu", currency: "HUF", region: "Europe" },
    { code: "IS", labels: { en: "Iceland", ar: "آيسلندا" }, lang: "is", currency: "ISK", region: "Europe" },
    { code: "IN", labels: { en: "India", ar: "الهند" }, lang: "hi", currency: "INR", region: "Asia" },
    { code: "ID", labels: { en: "Indonesia", ar: "إندونيسيا" }, lang: "id", currency: "IDR", region: "Asia" },
    { code: "IR", labels: { en: "Iran", ar: "إيران" }, lang: "fa", currency: "IRR", region: "Asia" },
    { code: "IQ", labels: { en: "Iraq", ar: "العراق" }, lang: "ar", currency: "IQD", region: "Asia" },
    { code: "IE", labels: { en: "Ireland", ar: "أيرلندا" }, lang: "en", currency: "EUR", region: "Europe" },
    { code: "IL", labels: { en: "Israel", ar: "إسرائيل" }, lang: "he", currency: "ILS", region: "Asia" },
    { code: "IT", labels: { en: "Italy", ar: "إيطاليا" }, lang: "it", currency: "EUR", region: "Europe" },
    { code: "JM", labels: { en: "Jamaica", ar: "جامايكا" }, lang: "en", currency: "JMD", region: "Americas" },
    { code: "JP", labels: { en: "Japan", ar: "اليابان" }, lang: "ja", currency: "JPY", region: "Asia" },
    { code: "JO", labels: { en: "Jordan", ar: "الأردن" }, lang: "ar", currency: "JOD", region: "Asia" },
    { code: "KZ", labels: { en: "Kazakhstan", ar: "كازاخستان" }, lang: "kk", currency: "KZT", region: "Asia" },
    { code: "KE", labels: { en: "Kenya", ar: "كينيا" }, lang: "en", currency: "KES", region: "Africa" },
    { code: "KI", labels: { en: "Kiribati", ar: "كيريباتي" }, lang: "en", currency: "AUD", region: "Oceania" },
    { code: "KW", labels: { en: "Kuwait", ar: "الكويت" }, lang: "ar", currency: "KWD", region: "Asia" },
    { code: "KG", labels: { en: "Kyrgyzstan", ar: "قيرغيزستان" }, lang: "ky", currency: "KGS", region: "Asia" },
    { code: "LA", labels: { en: "Laos", ar: "لاوس" }, lang: "lo", currency: "LAK", region: "Asia" },
    { code: "LV", labels: { en: "Latvia", ar: "لاتفيا" }, lang: "lv", currency: "EUR", region: "Europe" },
    { code: "LB", labels: { en: "Lebanon", ar: "لبنان" }, lang: "ar", currency: "LBP", region: "Asia" },
    { code: "LS", labels: { en: "Lesotho", ar: "ليسوتو" }, lang: "en", currency: "LSL", region: "Africa" },
    { code: "LR", labels: { en: "Liberia", ar: "ليبيريا" }, lang: "en", currency: "LRD", region: "Africa" },
    { code: "LY", labels: { en: "Libya", ar: "ليبيا" }, lang: "ar", currency: "LYD", region: "Africa" },
    { code: "LI", labels: { en: "Liechtenstein", ar: "ليختنشتاين" }, lang: "de", currency: "CHF", region: "Europe" },
    { code: "LT", labels: { en: "Lithuania", ar: "ليتوانيا" }, lang: "lt", currency: "EUR", region: "Europe" },
    { code: "LU", labels: { en: "Luxembourg", ar: "لوكسمبورغ" }, lang: "lb", currency: "EUR", region: "Europe" },
    { code: "MG", labels: { en: "Madagascar", ar: "مدغشقر" }, lang: "mg", currency: "MGA", region: "Africa" },
    { code: "MW", labels: { en: "Malawi", ar: "مالاوي" }, lang: "en", currency: "MWK", region: "Africa" },
    { code: "MY", labels: { en: "Malaysia", ar: "ماليزيا" }, lang: "ms", currency: "MYR", region: "Asia" },
    { code: "MV", labels: { en: "Maldives", ar: "المالديف" }, lang: "dv", currency: "MVR", region: "Asia" },
    { code: "ML", labels: { en: "Mali", ar: "مالي" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "MT", labels: { en: "Malta", ar: "مالطا" }, lang: "mt", currency: "EUR", region: "Europe" },
    { code: "MH", labels: { en: "Marshall Islands", ar: "جزر مارشال" }, lang: "en", currency: "USD", region: "Oceania" },
    { code: "MR", labels: { en: "Mauritania", ar: "موريتانيا" }, lang: "ar", currency: "MRU", region: "Africa" },
    { code: "MU", labels: { en: "Mauritius", ar: "موريشيوس" }, lang: "en", currency: "MUR", region: "Africa" },
    { code: "MX", labels: { en: "Mexico", ar: "المكسيك" }, lang: "es", currency: "MXN", region: "Americas" },
    { code: "FM", labels: { en: "Micronesia", ar: "ميكرونيزيا" }, lang: "en", currency: "USD", region: "Oceania" },
    { code: "MD", labels: { en: "Moldova", ar: "مولدوفا" }, lang: "ro", currency: "MDL", region: "Europe" },
    { code: "MC", labels: { en: "Monaco", ar: "موناكو" }, lang: "fr", currency: "EUR", region: "Europe" },
    { code: "MN", labels: { en: "Mongolia", ar: "منغوليا" }, lang: "mn", currency: "MNT", region: "Asia" },
    { code: "ME", labels: { en: "Montenegro", ar: "الجبل الأسود" }, lang: "sr", currency: "EUR", region: "Europe" },
    { code: "MA", labels: { en: "Morocco", ar: "المغرب" }, lang: "ar", currency: "MAD", region: "Africa" },
    { code: "MZ", labels: { en: "Mozambique", ar: "موزمبيق" }, lang: "pt", currency: "MZN", region: "Africa" },
    { code: "MM", labels: { en: "Myanmar", ar: "ميانمار" }, lang: "my", currency: "MMK", region: "Asia" },
    { code: "NA", labels: { en: "Namibia", ar: "ناميبيا" }, lang: "en", currency: "NAD", region: "Africa" },
    { code: "NR", labels: { en: "Nauru", ar: "ناورو" }, lang: "en", currency: "AUD", region: "Oceania" },
    { code: "NP", labels: { en: "Nepal", ar: "نيبال" }, lang: "ne", currency: "NPR", region: "Asia" },
    { code: "NL", labels: { en: "Netherlands", ar: "هولندا" }, lang: "nl", currency: "EUR", region: "Europe" },
    { code: "NZ", labels: { en: "New Zealand", ar: "نيوزيلندا" }, lang: "en", currency: "NZD", region: "Oceania" },
    { code: "NI", labels: { en: "Nicaragua", ar: "نيكاراغوا" }, lang: "es", currency: "NIO", region: "Americas" },
    { code: "NE", labels: { en: "Niger", ar: "النيجر" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "NG", labels: { en: "Nigeria", ar: "نيجيريا" }, lang: "en", currency: "NGN", region: "Africa" },
    { code: "KP", labels: { en: "North Korea", ar: "كوريا الشمالية" }, lang: "ko", currency: "KPW", region: "Asia" },
    { code: "MK", labels: { en: "North Macedonia", ar: "مقدونيا الشمالية" }, lang: "mk", currency: "MKD", region: "Europe" },
    { code: "NO", labels: { en: "Norway", ar: "النرويج" }, lang: "no", currency: "NOK", region: "Europe" },
    { code: "OM", labels: { en: "Oman", ar: "عُمان" }, lang: "ar", currency: "OMR", region: "Asia" },
    { code: "PK", labels: { en: "Pakistan", ar: "باكستان" }, lang: "ur", currency: "PKR", region: "Asia" },
    { code: "PW", labels: { en: "Palau", ar: "بالاو" }, lang: "en", currency: "USD", region: "Oceania" },
    { code: "PA", labels: { en: "Panama", ar: "بنما" }, lang: "es", currency: "PAB", region: "Americas" },
    { code: "PG", labels: { en: "Papua New Guinea", ar: "بابوا غينيا الجديدة" }, lang: "en", currency: "PGK", region: "Oceania" },
    { code: "PY", labels: { en: "Paraguay", ar: "باراغواي" }, lang: "es", currency: "PYG", region: "Americas" },
    { code: "PE", labels: { en: "Peru", ar: "بيرو" }, lang: "es", currency: "PEN", region: "Americas" },
    { code: "PH", labels: { en: "Philippines", ar: "الفلبين" }, lang: "en", currency: "PHP", region: "Asia" },
    { code: "PL", labels: { en: "Poland", ar: "بولندا" }, lang: "pl", currency: "PLN", region: "Europe" },
    { code: "PT", labels: { en: "Portugal", ar: "البرتغال" }, lang: "pt", currency: "EUR", region: "Europe" },
    { code: "QA", labels: { en: "Qatar", ar: "قطر" }, lang: "ar", currency: "QAR", region: "Asia" },
    { code: "RO", labels: { en: "Romania", ar: "رومانيا" }, lang: "ro", currency: "RON", region: "Europe" },
    { code: "RU", labels: { en: "Russia", ar: "روسيا" }, lang: "ru", currency: "RUB", region: "Europe" },
    { code: "RW", labels: { en: "Rwanda", ar: "رواندا" }, lang: "rw", currency: "RWF", region: "Africa" },
    { code: "KN", labels: { en: "Saint Kitts and Nevis", ar: "سانت كيتس ونيفيس" }, lang: "en", currency: "XCD", region: "Americas" },
    { code: "LC", labels: { en: "Saint Lucia", ar: "سانت لوسيا" }, lang: "en", currency: "XCD", region: "Americas" },
    { code: "VC", labels: { en: "Saint Vincent and the Grenadines", ar: "سانت فنسنت والغرينادين" }, lang: "en", currency: "XCD", region: "Americas" },
    { code: "WS", labels: { en: "Samoa", ar: "ساموا" }, lang: "sm", currency: "WST", region: "Oceania" },
    { code: "SM", labels: { en: "San Marino", ar: "سان مارينو" }, lang: "it", currency: "EUR", region: "Europe" },
    { code: "ST", labels: { en: "São Tomé and Príncipe", ar: "ساو تومي وبرينسيب" }, lang: "pt", currency: "STN", region: "Africa" },
    { code: "SA", labels: { en: "Saudi Arabia", ar: "السعودية" }, lang: "ar", currency: "SAR", region: "Asia" },
    { code: "SN", labels: { en: "Senegal", ar: "السنغال" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "RS", labels: { en: "Serbia", ar: "صربيا" }, lang: "sr", currency: "RSD", region: "Europe" },
    { code: "SC", labels: { en: "Seychelles", ar: "سيشل" }, lang: "en", currency: "SCR", region: "Africa" },
    { code: "SL", labels: { en: "Sierra Leone", ar: "سيراليون" }, lang: "en", currency: "SLE", region: "Africa" },
    { code: "SG", labels: { en: "Singapore", ar: "سنغافورة" }, lang: "en", currency: "SGD", region: "Asia" },
    { code: "SK", labels: { en: "Slovakia", ar: "سلوفاكيا" }, lang: "sk", currency: "EUR", region: "Europe" },
    { code: "SI", labels: { en: "Slovenia", ar: "سلوفينيا" }, lang: "sl", currency: "EUR", region: "Europe" },
    { code: "SB", labels: { en: "Solomon Islands", ar: "جزر سليمان" }, lang: "en", currency: "SBD", region: "Oceania" },
    { code: "SO", labels: { en: "Somalia", ar: "الصومال" }, lang: "so", currency: "SOS", region: "Africa" },
    { code: "ZA", labels: { en: "South Africa", ar: "جنوب أفريقيا" }, lang: "en", currency: "ZAR", region: "Africa" },
    { code: "KR", labels: { en: "South Korea", ar: "كوريا الجنوبية" }, lang: "ko", currency: "KRW", region: "Asia" },
    { code: "SS", labels: { en: "South Sudan", ar: "جنوب السودان" }, lang: "en", currency: "SSP", region: "Africa" },
    { code: "ES", labels: { en: "Spain", ar: "إسبانيا" }, lang: "es", currency: "EUR", region: "Europe" },
    { code: "LK", labels: { en: "Sri Lanka", ar: "سريلانكا" }, lang: "si", currency: "LKR", region: "Asia" },
    { code: "SD", labels: { en: "Sudan", ar: "السودان" }, lang: "ar", currency: "SDG", region: "Africa" },
    { code: "SR", labels: { en: "Suriname", ar: "سورينام" }, lang: "nl", currency: "SRD", region: "Americas" },
    { code: "SE", labels: { en: "Sweden", ar: "السويد" }, lang: "sv", currency: "SEK", region: "Europe" },
    { code: "CH", labels: { en: "Switzerland", ar: "سويسرا" }, lang: "de", currency: "CHF", region: "Europe" },
    { code: "SY", labels: { en: "Syria", ar: "سوريا" }, lang: "ar", currency: "SYP", region: "Asia" },
    { code: "TJ", labels: { en: "Tajikistan", ar: "طاجيكستان" }, lang: "tg", currency: "TJS", region: "Asia" },
    { code: "TZ", labels: { en: "Tanzania", ar: "تنزانيا" }, lang: "sw", currency: "TZS", region: "Africa" },
    { code: "TH", labels: { en: "Thailand", ar: "تايلاند" }, lang: "th", currency: "THB", region: "Asia" },
    { code: "TL", labels: { en: "Timor-Leste", ar: "تيمور الشرقية" }, lang: "pt", currency: "USD", region: "Asia" },
    { code: "TG", labels: { en: "Togo", ar: "توغو" }, lang: "fr", currency: "XOF", region: "Africa" },
    { code: "TO", labels: { en: "Tonga", ar: "تونغا" }, lang: "to", currency: "TOP", region: "Oceania" },
    { code: "TT", labels: { en: "Trinidad and Tobago", ar: "ترينيداد وتوباغو" }, lang: "en", currency: "TTD", region: "Americas" },
    { code: "TN", labels: { en: "Tunisia", ar: "تونس" }, lang: "ar", currency: "TND", region: "Africa" },
    { code: "TR", labels: { en: "Türkiye", ar: "تركيا" }, lang: "tr", currency: "TRY", region: "Asia" },
    { code: "TM", labels: { en: "Turkmenistan", ar: "تركمانستان" }, lang: "tk", currency: "TMT", region: "Asia" },
    { code: "TV", labels: { en: "Tuvalu", ar: "توفالو" }, lang: "en", currency: "AUD", region: "Oceania" },
    { code: "UG", labels: { en: "Uganda", ar: "أوغندا" }, lang: "en", currency: "UGX", region: "Africa" },
    { code: "UA", labels: { en: "Ukraine", ar: "أوكرانيا" }, lang: "uk", currency: "UAH", region: "Europe" },
    { code: "AE", labels: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" }, lang: "ar", currency: "AED", region: "Asia" },
    { code: "GB", labels: { en: "United Kingdom", ar: "المملكة المتحدة" }, lang: "en", currency: "GBP", region: "Europe" },
    { code: "US", labels: { en: "United States", ar: "الولايات المتحدة" }, lang: "en", currency: "USD", region: "Americas" },
    { code: "UY", labels: { en: "Uruguay", ar: "أوروغواي" }, lang: "es", currency: "UYU", region: "Americas" },
    { code: "UZ", labels: { en: "Uzbekistan", ar: "أوزبكستان" }, lang: "uz", currency: "UZS", region: "Asia" },
    { code: "VU", labels: { en: "Vanuatu", ar: "فانواتو" }, lang: "bi", currency: "VUV", region: "Oceania" },
    { code: "VE", labels: { en: "Venezuela", ar: "فنزويلا" }, lang: "es", currency: "VES", region: "Americas" },
    { code: "VN", labels: { en: "Vietnam", ar: "فيتنام" }, lang: "vi", currency: "VND", region: "Asia" },
    { code: "YE", labels: { en: "Yemen", ar: "اليمن" }, lang: "ar", currency: "YER", region: "Asia" },
    { code: "ZM", labels: { en: "Zambia", ar: "زامبيا" }, lang: "en", currency: "ZMW", region: "Africa" },
    { code: "ZW", labels: { en: "Zimbabwe", ar: "زيمبابوي" }, lang: "en", currency: "ZWL", region: "Africa" },
    { code: "VA", labels: { en: "Holy See", ar: "الفاتيكان" }, lang: "it", currency: "EUR", region: "Europe" },
    { code: "PS", labels: { en: "Palestine", ar: "فلسطين" }, lang: "ar", currency: "ILS", region: "Asia" }
  ];

  function cleanCode(code) {
    return String(code || "").trim().toUpperCase();
  }

  function cleanLang(lang) {
    return String(lang || "en").trim().slice(0, 2).toLowerCase();
  }

  function getCurrentLang() {
    return cleanLang(localStorage.getItem(STORAGE_KEYS.lang) || document.documentElement.lang || "en");
  }

  function isRtlLang(lang) {
    return RTL_LANGS.includes(cleanLang(lang));
  }

  function getCountry(code) {
    const wanted = cleanCode(code);
    return COUNTRIES.find((country) => country.code === wanted) || null;
  }

  function getCountryLabel(countryOrCode, lang) {
    const country = typeof countryOrCode === "string" ? getCountry(countryOrCode) : countryOrCode;
    const selectedLang = cleanLang(lang || getCurrentLang());

    if (!country) return "";

    return (
      country.labels?.[selectedLang] ||
      country.labels?.en ||
      country.name ||
      country.code
    );
  }

  function getSavedCountry() {
    const savedCode = cleanCode(localStorage.getItem(STORAGE_KEYS.country));
    return getCountry(savedCode) || getCountry("SE") || COUNTRIES[0];
  }

  function saveCountry(code) {
    const country = getCountry(code) || COUNTRIES[0];
    const label = getCountryLabel(country, country.lang);
    const lang = cleanLang(country.lang);

    localStorage.setItem(STORAGE_KEYS.country, country.code);
    localStorage.setItem(STORAGE_KEYS.countryLabel, label);
    localStorage.setItem(STORAGE_KEYS.lang, lang);
    localStorage.setItem(STORAGE_KEYS.currency, country.currency || "");
    localStorage.setItem(STORAGE_KEYS.region, country.region || "");

    document.documentElement.lang = lang;
    document.documentElement.dir = isRtlLang(lang) ? "rtl" : "ltr";

    if (document.body) {
      document.body.setAttribute("dir", isRtlLang(lang) ? "rtl" : "ltr");
    }

    window.dispatchEvent(new CustomEvent("hk-country-change", {
      detail: {
        country,
        code: country.code,
        label,
        lang,
        currency: country.currency,
        region: country.region,
        dir: isRtlLang(lang) ? "rtl" : "ltr"
      }
    }));

    return country;
  }

  function createCountryOptions(selectElement, options = {}) {
    if (!selectElement) return;

    const selectedCountry = getSavedCountry();
    const lang = cleanLang(options.lang || getCurrentLang());

    selectElement.innerHTML = "";

    COUNTRIES.forEach((country) => {
      const option = document.createElement("option");

      option.value = country.code;
      option.textContent = `${getCountryLabel(country, lang)} · ${country.currency}`;
      option.dataset.lang = country.lang;
      option.dataset.currency = country.currency;
      option.dataset.region = country.region;

      selectElement.appendChild(option);
    });

    selectElement.value = selectedCountry.code;
  }

  function getCountriesByRegion(region) {
    const wanted = String(region || "").trim().toLowerCase();

    if (!wanted) return COUNTRIES.slice();

    return COUNTRIES.filter((country) => {
      return String(country.region || "").toLowerCase() === wanted;
    });
  }

  function searchCountries(keyword) {
    const q = String(keyword || "").trim().toLowerCase();

    if (!q) return COUNTRIES.slice();

    return COUNTRIES.filter((country) => {
      return (
        country.code.toLowerCase().includes(q) ||
        country.lang.toLowerCase().includes(q) ||
        country.currency.toLowerCase().includes(q) ||
        country.region.toLowerCase().includes(q) ||
        Object.values(country.labels || {}).some((label) => {
          return String(label).toLowerCase().includes(q);
        })
      );
    });
  }

  function initSavedCountry() {
    const saved = getSavedCountry();
    const hasSavedLang = Boolean(localStorage.getItem(STORAGE_KEYS.lang));

    localStorage.setItem(STORAGE_KEYS.country, saved.code);
    localStorage.setItem(STORAGE_KEYS.countryLabel, getCountryLabel(saved, saved.lang));
    localStorage.setItem(STORAGE_KEYS.currency, saved.currency || "");
    localStorage.setItem(STORAGE_KEYS.region, saved.region || "");

    if (!hasSavedLang) {
      localStorage.setItem(STORAGE_KEYS.lang, saved.lang || "en");
    }
  }

  const API = {
    countries: COUNTRIES,
    count: COUNTRIES.length,
    rtlLangs: RTL_LANGS,
    storageKeys: STORAGE_KEYS,
    cleanCode,
    cleanLang,
    isRtlLang,
    getCurrentLang,
    getCountry,
    getSavedCountry,
    getCountryLabel,
    saveCountry,
    createCountryOptions,
    getCountriesByRegion,
    searchCountries,
    initSavedCountry
  };

  initSavedCountry();

  window.AMG_COUNTRIES = COUNTRIES;
  window.COUNTRIES = COUNTRIES;
  window.countries = COUNTRIES;

  window.HK_GLOBAL_COUNTRIES = API;
  window.HK_GLOBAL = window.HK_GLOBAL || {};
  window.HK_GLOBAL.countries = API;

  window.HK_GLOBAL_COUNTRY_COUNT = COUNTRIES.length;
})();
