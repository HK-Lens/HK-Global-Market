
/* ===============================
   AutoMarket Global - Home App
   =============================== */

function updateHomeCountryCard() {
  if (!window.CountryService) return;

  CountryService.updateSelectedCountryText();

  const country = CountryService.getSelectedCountry();
  const heroCard = document.querySelector(".hero-card");

  if (heroCard) {
    heroCard.setAttribute(
      "aria-label",
      `Selected country is ${country.name}`
    );
  }
}

function initHomePage() {
  updateHomeCountryCard();

  window.addEventListener("countryChanged", () => {
    updateHomeCountryCard();
  });
}

document.addEventListener("DOMContentLoaded", initHomePage);
