function sliderPartners() {
  const slider = document.querySelector(".partners__list");
  const items = document.querySelectorAll(".partners__item");
  let total = items.length;
  let current = 0;
  const STEP = 5;

  // Для плавной прокрутки
  function goToSlide(slideIndex) {
    const width = slider.offsetWidth;
    slider.scrollTo({
      left: width * slideIndex,
      behavior: "smooth",
    });
  }

  function updateSlide() {
    if (current + STEP >= total) {
      current = total - STEP >= 0 ? total - STEP : 0;
      goToSlide(current);
      setTimeout(() => {
        current = 0;
        goToSlide(current);
      }, 4000);
    } else {
      current += STEP;
      goToSlide(current);
    }
  }

  let interval = setInterval(updateSlide, 4000);

  // Свайп для мобильных
  let startX = 0;
  slider.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });
  slider.addEventListener("touchend", function (e) {
    let endX = e.changedTouches[0].clientX;
    let diff = endX - startX;
    if (Math.abs(diff) > 50) {
      clearInterval(interval);
      if (diff < 0 && current + STEP < total) {
        current += STEP;
      } else if (diff > 0 && current - STEP >= 0) {
        current -= STEP;
      }
      goToSlide(current);
      interval = setInterval(updateSlide, 2500);
    }
  });

  // Пересчитать количество при добавлении партнёров
  new MutationObserver(() => {
    total = document.querySelectorAll(".partners__item").length;
  }).observe(slider, { childList: true });
}
export default sliderPartners;
