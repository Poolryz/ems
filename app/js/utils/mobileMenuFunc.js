function mobileMenuFunc() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobil-menu");
  const menuOverlay = document.querySelector(".mobil-menu__overlay");
  const btnClose = document.querySelector(".btm-cancel");
  let burgerFlag = false;

  btnClose.addEventListener("click", () => {
    burgerFlag = !burgerFlag;
    if (burgerFlag) {
      menu.classList = "mobil-menu mobil-menu_active";
    } else {
      menu.classList = "mobil-menu";
    }
  });

  menuOverlay.addEventListener("click", () => {
    burgerFlag = !burgerFlag;
    if (burgerFlag) {
      menu.classList = "mobil-menu mobil-menu_active";
    } else {
      menu.classList = "mobil-menu";
    }
  });

  burger.addEventListener("click", () => {
    burgerFlag = !burgerFlag;
    if (burgerFlag) {
      menu.classList = "mobil-menu mobil-menu_active";
    } else {
      menu.classList = "mobil-menu";
    }
  });
}
export default mobileMenuFunc;
