/* ===============================
   AutoMarket Global - Countries
   195 countries: 193 UN Member States + 2 UN Observer States
   =============================== */

(function () {
  "use strict";

  const COUNTRY_ROWS = `
AF|Afghanistan|افغانستان|fa|rtl|AFN|fa-AF
AL|Albania|Shqipëri|sq|ltr|ALL|sq-AL
DZ|Algeria|الجزائر|ar|rtl|DZD|ar-DZ
AD|Andorra|Andorra|ca|ltr|EUR|ca-AD
AO|Angola|Angola|pt|ltr|AOA|pt-AO
AG|Antigua and Barbuda|Antigua and Barbuda|en|ltr|XCD|en-AG
AR|Argentina|Argentina|es|ltr|ARS|es-AR
AM|Armenia|Հայաստան|hy|ltr|AMD|hy-AM
AU|Australia|Australia|en|ltr|AUD|en-AU
AT|Austria|Österreich|de|ltr|EUR|de-AT
AZ|Azerbaijan|Azərbaycan|az|ltr|AZN|az-AZ
BS|Bahamas|Bahamas|en|ltr|BSD|en-BS
BH|Bahrain|البحرين|ar|rtl|BHD|ar-BH
BD|Bangladesh|বাংলাদেশ|bn|ltr|BDT|bn-BD
BB|Barbados|Barbados|en|ltr|BBD|en-BB
BY|Belarus|Беларусь|be|ltr|BYN|be-BY
BE|Belgium|België / Belgique|nl|ltr|EUR|nl-BE
BZ|Belize|Belize|en|ltr|BZD|en-BZ
BJ|Benin|Bénin|fr|ltr|XOF|fr-BJ
BT|Bhutan|འབྲུག|dz|ltr|BTN|dz-BT
BO|Bolivia|Bolivia|es|ltr|BOB|es-BO
BA|Bosnia and Herzegovina|Bosna i Hercegovina|bs|ltr|BAM|bs-BA
BW|Botswana|Botswana|en|ltr|BWP|en-BW
BR|Brazil|Brasil|pt|ltr|BRL|pt-BR
BN|Brunei|Brunei Darussalam|ms|ltr|BND|ms-BN
BG|Bulgaria|България|bg|ltr|BGN|bg-BG
BF|Burkina Faso|Burkina Faso|fr|ltr|XOF|fr-BF
BI|Burundi|Burundi|fr|ltr|BIF|fr-BI
CV|Cabo Verde|Cabo Verde|pt|ltr|CVE|pt-CV
KH|Cambodia|កម្ពុជា|km|ltr|KHR|km-KH
CM|Cameroon|Cameroun|fr|ltr|XAF|fr-CM
CA|Canada|Canada|en|ltr|CAD|en-CA
CF|Central African Republic|République centrafricaine|fr|ltr|XAF|fr-CF
TD|Chad|تشاد / Tchad|fr|ltr|XAF|fr-TD
CL|Chile|Chile|es|ltr|CLP|es-CL
CN|China|中国|zh|ltr|CNY|zh-CN
CO|Colombia|Colombia|es|ltr|COP|es-CO
KM|Comoros|جزر القمر|ar|rtl|KMF|ar-KM
CG|Congo|Congo|fr|ltr|XAF|fr-CG
CD|Democratic Republic of the Congo|République démocratique du Congo|fr|ltr|CDF|fr-CD
CR|Costa Rica|Costa Rica|es|ltr|CRC|es-CR
CI|Côte d’Ivoire|Côte d’Ivoire|fr|ltr|XOF|fr-CI
HR|Croatia|Hrvatska|hr|ltr|EUR|hr-HR
CU|Cuba|Cuba|es|ltr|CUP|es-CU
CY|Cyprus|Κύπρος|el|ltr|EUR|el-CY
CZ|Czechia|Česko|cs|ltr|CZK|cs-CZ
DK|Denmark|Danmark|da|ltr|DKK|da-DK
DJ|Djibouti|جيبوتي|ar|rtl|DJF|ar-DJ
DM|Dominica|Dominica|en|ltr|XCD|en-DM
DO|Dominican Republic|República Dominicana|es|ltr|DOP|es-DO
EC|Ecuador|Ecuador|es|ltr|USD|es-EC
EG|Egypt|مصر|ar|rtl|EGP|ar-EG
SV|El Salvador|El Salvador|es|ltr|USD|es-SV
GQ|Equatorial Guinea|Guinea Ecuatorial|es|ltr|XAF|es-GQ
ER|Eritrea|ኤርትራ|ti|ltr|ERN|ti-ER
EE|Estonia|Eesti|et|ltr|EUR|et-EE
SZ|Eswatini|eSwatini|en|ltr|SZL|en-SZ
ET|Ethiopia|ኢትዮጵያ|am|ltr|ETB|am-ET
FJ|Fiji|Fiji|en|ltr|FJD|en-FJ
FI|Finland|Suomi|fi|ltr|EUR|fi-FI
FR|France|France|fr|ltr|EUR|fr-FR
GA|Gabon|Gabon|fr|ltr|XAF|fr-GA
GM|Gambia|The Gambia|en|ltr|GMD|en-GM
GE|Georgia|საქართველო|ka|ltr|GEL|ka-GE
DE|Germany|Deutschland|de|ltr|EUR|de-DE
GH|Ghana|Ghana|en|ltr|GHS|en-GH
GR|Greece|Ελλάδα|el|ltr|EUR|el-GR
GD|Grenada|Grenada|en|ltr|XCD|en-GD
GT|Guatemala|Guatemala|es|ltr|GTQ|es-GT
GN|Guinea|Guinée|fr|ltr|GNF|fr-GN
GW|Guinea-Bissau|Guiné-Bissau|pt|ltr|XOF|pt-GW
GY|Guyana|Guyana|en|ltr|GYD|en-GY
HT|Haiti|Haïti|fr|ltr|HTG|fr-HT
HN|Honduras|Honduras|es|ltr|HNL|es-HN
HU|Hungary|Magyarország|hu|ltr|HUF|hu-HU
IS|Iceland|Ísland|is|ltr|ISK|is-IS
IN|India|भारत|hi|ltr|INR|hi-IN
ID|Indonesia|Indonesia|id|ltr|IDR|id-ID
IR|Iran|ایران|fa|rtl|IRR|fa-IR
IQ|Iraq|العراق|ar|rtl|IQD|ar-IQ
IE|Ireland|Éire / Ireland|en|ltr|EUR|en-IE
IL|Israel|ישראל|he|rtl|ILS|he-IL
IT|Italy|Italia|it|ltr|EUR|it-IT
JM|Jamaica|Jamaica|en|ltr|JMD|en-JM
JP|Japan|日本|ja|ltr|JPY|ja-JP
JO|Jordan|الأردن|ar|rtl|JOD|ar-JO
KZ|Kazakhstan|Қазақстан|kk|ltr|KZT|kk-KZ
KE|Kenya|Kenya|en|ltr|KES|en-KE
KI|Kiribati|Kiribati|en|ltr|AUD|en-KI
KP|North Korea|조선민주주의인민공화국|ko|ltr|KPW|ko-KP
KR|South Korea|대한민국|ko|ltr|KRW|ko-KR
KW|Kuwait|الكويت|ar|rtl|KWD|ar-KW
KG|Kyrgyzstan|Кыргызстан|ky|ltr|KGS|ky-KG
LA|Laos|ລາວ|lo|ltr|LAK|lo-LA
LV|Latvia|Latvija|lv|ltr|EUR|lv-LV
LB|Lebanon|لبنان|ar|rtl|LBP|ar-LB
LS|Lesotho|Lesotho|en|ltr|LSL|en-LS
LR|Liberia|Liberia|en|ltr|LRD|en-LR
LY|Libya|ليبيا|ar|rtl|LYD|ar-LY
LI|Liechtenstein|Liechtenstein|de|ltr|CHF|de-LI
LT|Lithuania|Lietuva|lt|ltr|EUR|lt-LT
LU|Luxembourg|Luxembourg|fr|ltr|EUR|fr-LU
MG|Madagascar|Madagasikara|mg|ltr|MGA|mg-MG
MW|Malawi|Malawi|en|ltr|MWK|en-MW
MY|Malaysia|Malaysia|ms|ltr|MYR|ms-MY
MV|Maldives|ދިވެހި ރާއްޖެ|dv|rtl|MVR|dv-MV
ML|Mali|Mali|fr|ltr|XOF|fr-ML
MT|Malta|Malta|mt|ltr|EUR|mt-MT
MH|Marshall Islands|Marshall Islands|en|ltr|USD|en-MH
MR|Mauritania|موريتانيا|ar|rtl|MRU|ar-MR
MU|Mauritius|Maurice|en|ltr|MUR|en-MU
MX|Mexico|México|es|ltr|MXN|es-MX
FM|Micronesia|Micronesia|en|ltr|USD|en-FM
MD|Moldova|Moldova|ro|ltr|MDL|ro-MD
MC|Monaco|Monaco|fr|ltr|EUR|fr-MC
MN|Mongolia|Монгол Улс|mn|ltr|MNT|mn-MN
ME|Montenegro|Crna Gora|sr|ltr|EUR|sr-ME
MA|Morocco|المغرب|ar|rtl|MAD|ar-MA
MZ|Mozambique|Moçambique|pt|ltr|MZN|pt-MZ
MM|Myanmar|မြန်မာ|my|ltr|MMK|my-MM
NA|Namibia|Namibia|en|ltr|NAD|en-NA
NR|Nauru|Nauru|en|ltr|AUD|en-NR
NP|Nepal|नेपाल|ne|ltr|NPR|ne-NP
NL|Netherlands|Nederland|nl|ltr|EUR|nl-NL
NZ|New Zealand|New Zealand|en|ltr|NZD|en-NZ
NI|Nicaragua|Nicaragua|es|ltr|NIO|es-NI
NE|Niger|Niger|fr|ltr|XOF|fr-NE
NG|Nigeria|Nigeria|en|ltr|NGN|en-NG
MK|North Macedonia|Северна Македонија|mk|ltr|MKD|mk-MK
NO|Norway|Norge|no|ltr|NOK|no-NO
OM|Oman|عُمان|ar|rtl|OMR|ar-OM
PK|Pakistan|پاکستان|ur|rtl|PKR|ur-PK
PW|Palau|Palau|en|ltr|USD|en-PW
PA|Panama|Panamá|es|ltr|PAB|es-PA
PG|Papua New Guinea|Papua New Guinea|en|ltr|PGK|en-PG
PY|Paraguay|Paraguay|es|ltr|PYG|es-PY
PE|Peru|Perú|es|ltr|PEN|es-PE
PH|Philippines|Pilipinas|en|ltr|PHP|en-PH
PL|Poland|Polska|pl|ltr|PLN|pl-PL
PT|Portugal|Portugal|pt|ltr|EUR|pt-PT
QA|Qatar|قطر|ar|rtl|QAR|ar-QA
RO|Romania|România|ro|ltr|RON|ro-RO
RU|Russia|Россия|ru|ltr|RUB|ru-RU
RW|Rwanda|Rwanda|rw|ltr|RWF|rw-RW
KN|Saint Kitts and Nevis|Saint Kitts and Nevis|en|ltr|XCD|en-KN
LC|Saint Lucia|Saint Lucia|en|ltr|XCD|en-LC
VC|Saint Vincent and the Grenadines|Saint Vincent and the Grenadines|en|ltr|XCD|en-VC
WS|Samoa|Sāmoa|sm|ltr|WST|sm-WS
SM|San Marino|San Marino|it|ltr|EUR|it-SM
ST|Sao Tome and Principe|São Tomé e Príncipe|pt|ltr|STN|pt-ST
SA|Saudi Arabia|السعودية|ar|rtl|SAR|ar-SA
SN|Senegal|Sénégal|fr|ltr|XOF|fr-SN
RS|Serbia|Србија|sr|ltr|RSD|sr-RS
SC|Seychelles|Seychelles|en|ltr|SCR|en-SC
SL|Sierra Leone|Sierra Leone|en|ltr|SLE|en-SL
SG|Singapore|Singapore|en|ltr|SGD|en-SG
SK|Slovakia|Slovensko|sk|ltr|EUR|sk-SK
SI|Slovenia|Slovenija|sl|ltr|EUR|sl-SI
SB|Solomon Islands|Solomon Islands|en|ltr|SBD|en-SB
SO|Somalia|الصومال|so|ltr|SOS|so-SO
ZA|South Africa|South Africa|en|ltr|ZAR|en-ZA
SS|South Sudan|South Sudan|en|ltr|SSP|en-SS
ES|Spain|España|es|ltr|EUR|es-ES
LK|Sri Lanka|ශ්‍රී ලංකාව|si|ltr|LKR|si-LK
SD|Sudan|السودان|ar|rtl|SDG|ar-SD
SR|Suriname|Suriname|nl|ltr|SRD|nl-SR
SE|Sweden|Sverige|sv|ltr|SEK|sv-SE
CH|Switzerland|Schweiz / Suisse|de|ltr|CHF|de-CH
SY|Syria|سوريا|ar|rtl|SYP|ar-SY
TJ|Tajikistan|Тоҷикистон|tg|ltr|TJS|tg-TJ
TZ|Tanzania|Tanzania|sw|ltr|TZS|sw-TZ
TH|Thailand|ประเทศไทย|th|ltr|THB|th-TH
TL|Timor-Leste|Timor-Leste|pt|ltr|USD|pt-TL
TG|Togo|Togo|fr|ltr|XOF|fr-TG
TO|Tonga|Tonga|to|ltr|TOP|to-TO
TT|Trinidad and Tobago|Trinidad and Tobago|en|ltr|TTD|en-TT
TN|Tunisia|تونس|ar|rtl|TND|ar-TN
TR|Türkiye|Türkiye|tr|ltr|TRY|tr-TR
TM|Turkmenistan|Türkmenistan|tk|ltr|TMT|tk-TM
TV|Tuvalu|Tuvalu|en|ltr|AUD|en-TV
UG|Uganda|Uganda|en|ltr|UGX|en-UG
UA|Ukraine|Україна|uk|ltr|UAH|uk-UA
AE|United Arab Emirates|الإمارات العربية المتحدة|ar|rtl|AED|ar-AE
GB|United Kingdom|United Kingdom|en|ltr|GBP|en-GB
US|United States|United States|en|ltr|USD|en-US
UY|Uruguay|Uruguay|es|ltr|UYU|es-UY
UZ|Uzbekistan|Oʻzbekiston|uz|ltr|UZS|uz-UZ
VU|Vanuatu|Vanuatu|en|ltr|VUV|en-VU
VA|Holy See (Vatican City)|Santa Sede / Vaticano|it|ltr|EUR|it-VA
VE|Venezuela|Venezuela|es|ltr|VES|es-VE
VN|Vietnam|Việt Nam|vi|ltr|VND|vi-VN
PS|State of Palestine|فلسطين|ar|rtl|ILS|ar-PS
YE|Yemen|اليمن|ar|rtl|YER|ar-YE
ZM|Zambia|Zambia|en|ltr|ZMW|en-ZM
ZW|Zimbabwe|Zimbabwe|en|ltr|ZWL|en-ZW
`;

  const COUNTRIES = COUNTRY_ROWS.trim().split("\n").map((row) => {
    const [code, name, localName, lang, dir, currency, locale] = row.split("|");

    return {
      id: code,
      code,
      name,
      localName,
      local: localName,
      label: `${name} - ${localName}`,
      lang,
      language: lang,
      dir,
      currency,
      locale
    };
  });

  window.AMG_COUNTRIES = COUNTRIES;
  window.COUNTRIES = COUNTRIES;
  window.countries = COUNTRIES;

  const STORAGE_KEYS = [
    "amg_country",
    "amg_selected_country",
    "selectedCountry",
    "country"
  ];

  function getCountryByCode(code) {
    return COUNTRIES.find((country) => country.code === code) || COUNTRIES.find((country) => country.code === "SE");
  }

  function getSavedCountryCode() {
    const params = new URLSearchParams(window.location.search);
    const countryFromUrl = params.get("country");

    if (countryFromUrl && getCountryByCode(countryFromUrl.toUpperCase())) {
      return countryFromUrl.toUpperCase();
    }

    for (const key of STORAGE_KEYS) {
      const value = localStorage.getItem(key);
      if (value && getCountryByCode(value.toUpperCase())) {
        return value.toUpperCase();
      }
    }

    return "SE";
  }

  function saveCountry(country) {
    STORAGE_KEYS.forEach((key) => localStorage.setItem(key, country.code));
    localStorage.setItem("amg_country_label", country.label);
    localStorage.setItem("amg_country_lang", country.lang);
    localStorage.setItem("amg_country_dir", country.dir);
    localStorage.setItem("amg_country_currency", country.currency);
    localStorage.setItem("amg_country_locale", country.locale);
  }

  function applyCountry(country) {
    if (!country) return;

    saveCountry(country);

    document.documentElement.lang = country.lang || "en";
    document.documentElement.dir = country.dir || "ltr";

    document.body.dataset.country = country.code;
    document.body.dataset.countryLang = country.lang;
    document.body.dataset.countryCurrency = country.currency;

    const outputSelectors = [
      "[data-selected-country]",
      "[data-country-output]",
      ".selected-country-name",
      ".country-name-output",
      "#selectedCountry",
      "#selectedCountryName",
      "#selectedCountryTitle",
      "#currentCountry",
      "#countryName"
    ];

    document.querySelectorAll(outputSelectors.join(",")).forEach((element) => {
      if (element && element.tagName !== "SELECT") {
        element.textContent = country.label;
      }
    });

    window.dispatchEvent(
      new CustomEvent("amg:countrychange", {
        detail: { country }
      })
    );
  }

  function fillCountrySelect(select) {
    if (!select) return;

    const selectedCode = getSavedCountryCode();
    select.innerHTML = "";

    COUNTRIES.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.code;
      option.textContent = country.label;
      option.dataset.lang = country.lang;
      option.dataset.dir = country.dir;
      option.dataset.currency = country.currency;
      option.dataset.locale = country.locale;
      select.appendChild(option);
    });

    select.value = selectedCode;

    select.addEventListener("change", () => {
      const country = getCountryByCode(select.value);
      applyCountry(country);

      document.querySelectorAll("select").forEach((otherSelect) => {
        if (
          otherSelect !== select &&
          (
            otherSelect.id === "countrySelect" ||
            otherSelect.dataset.countrySelect !== undefined ||
            otherSelect.name === "country" ||
            otherSelect.name === "countryCode"
          )
        ) {
          otherSelect.value = country.code;
        }
      });
    });
  }

  function initCountries() {
    const countrySelects = document.querySelectorAll(
      "#countrySelect, [data-country-select], select[name='country'], select[name='countryCode']"
    );

    countrySelects.forEach(fillCountrySelect);

    const selectedCountry = getCountryByCode(getSavedCountryCode());
    applyCountry(selectedCountry);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCountries);
  } else {
    initCountries();
  }
})();
