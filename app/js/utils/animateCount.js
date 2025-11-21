function animateText() {
  const counters = document.querySelectorAll(".block-about__value");
  const animated = new Set();

  function animateCount(counterElement, targetNumber) {
    let current = 0;
    const step = Math.ceil(targetNumber / 45);
    const interval = setInterval(() => {
      current += step;
      if (current >= targetNumber) {
        current = targetNumber;
        clearInterval(interval);
      }
      counterElement.textContent = `+${current}`;
    }, 40);
  }

  function onScroll() {
    counters.forEach((counterElement) => {
      if (animated.has(counterElement)) return;
      const rect = counterElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animated.add(counterElement);
        const targetNumber = +counterElement.getAttribute("data-target");
        animateCount(counterElement, targetNumber);
      }
    });
    // Если все анимированы — убираем обработчик
    if (animated.size === counters.length) {
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // чтобы анимировать сразу, если блоки видны при загрузке
}
export default animateText;
