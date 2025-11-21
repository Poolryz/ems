import animateText from "./utils/animateCount";
import mobileMenuFunc from "./utils/mobileMenuFunc";
import SimpleSlider from "./utils/simleSlider";
import sliderPartners from "./utils/sliderPartners";
// Инициализируем приложение при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем страницы
  initHomePage();
  initAboutPage();
  sliderPartners();
  animateText();
});

/**
 * Инициализация домашней страницы
 */
function initHomePage() {
  const home = document.querySelector(".home");
  if (!home) return;
}

/**
 * Инициализация страницы about
 */
function initAboutPage() {
  const about = document.querySelector(".about");
  if (!about) return;
}

// Инициализация слайдера при загрузке DOM
document.addEventListener("DOMContentLoaded", function () {
  new SimpleSlider(".slider-container");
});

mobileMenuFunc();
