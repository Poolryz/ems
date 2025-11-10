class SimpleSlider {
  constructor(containerSelector) {
    this.slider = document.querySelector(containerSelector);
    this.track = this.slider.querySelector(".slider-track");
    this.slides = this.slider.querySelectorAll(".slide");
    this.prevBtn = this.slider.querySelector(".slider-prev");
    this.nextBtn = this.slider.querySelector(".slider-next");
    this.dots = this.slider.querySelectorAll(".dot");
    this.currentIndex = 0;
    this.slideCount = this.slides.length;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000;

    this.init();
  }

  init() {
    // Навигационные кнопки
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Точки навигации
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Автопрокрутка
    this.startAutoPlay();

    // Пауза при наведении
    this.slider.addEventListener("mouseenter", () => this.stopAutoPlay());
    this.slider.addEventListener("mouseleave", () => this.startAutoPlay());

    // Клавиатурная навигация
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });
  }

  updateSlider() {
    // Обновляем активный слайд
    this.slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === this.currentIndex);
    });

    // Обновляем точки навигации
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });

    // Обновляем ARIA атрибуты
    this.slides.forEach((slide, index) => {
      slide.setAttribute("aria-hidden", index !== this.currentIndex);
    });

    this.dots.forEach((dot, index) => {
      dot.setAttribute("aria-current", index === this.currentIndex);
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    this.updateSlider();
    this.restartAutoPlay();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    this.updateSlider();
    this.restartAutoPlay();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlider();
    this.restartAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  destroy() {
    this.stopAutoPlay();
    // Удаляем все обработчики событий
    this.prevBtn.removeEventListener("click", () => this.prevSlide());
    this.nextBtn.removeEventListener("click", () => this.nextSlide());

    this.dots.forEach((dot, index) => {
      dot.removeEventListener("click", () => this.goToSlide(index));
    });
  }
}
export default SimpleSlider;
