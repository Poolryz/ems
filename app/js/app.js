// Инициализируем приложение при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем страницы
  initHomePage();
  initAboutPage();
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
