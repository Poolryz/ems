function sliderPartners() {
  const sliderList = document.querySelector(".partners-slider__list");
  const slider = document.querySelector(".partners-slider");
  const sliderListWidth = sliderList.clientWidth;
  const slidersArr = sliderList.children;
  const slidersLength = slidersArr.length;
  const widthItem = slidersArr[0].clientWidth;
  const gap = 12;
  let itemsLine = 5;

  const screenWidth = document.documentElement.scrollWidth;
  if (screenWidth > 1060) {
    itemsLine = 5;
  }
  if (screenWidth < 1060 && screenWidth > 965) {
    itemsLine = 3;
  } else if (screenWidth < 965) {
    itemsLine = 2;
  }
  const gapSum = 12 * (itemsLine - 1);
  const widthContent = widthItem * itemsLine;
  console.log(screenWidth, itemsLine);

  let flag = false;
  slider.style = `width:${widthContent + gapSum}px`;
  sliderList.style = `transform: translate(0px,0 )`;
  if (slidersLength <= 5) {
    return;
  } else if (slidersLength <= 10) {
    setInterval(() => {
      if (!flag) {
        sliderList.style = `transform: translate(-${
          (widthItem + gap) * (slidersLength - itemsLine)
        }px,0 )`;
        flag = true;
      } else {
        sliderList.style = `transform: translate(0px,0 )`;
        flag = false;
      }
    }, 3500);
  } else {
    const fullGroups = Math.floor(slidersLength / itemsLine);
    const remainder = slidersLength % itemsLine;

    let currentIndex = 0;

    function slideStep() {
      let translateX = 0;

      if (currentIndex < fullGroups) {
        translateX = -(widthItem + gap) * itemsLine * currentIndex;
      } else if (remainder > 0 && currentIndex === fullGroups) {
        translateX =
          -(widthItem + gap) * itemsLine - (widthItem + gap) * remainder;
      } else {
        currentIndex = -1;
        translateX = 0;
      }

      sliderList.style.transform = `translate(${translateX}px, 0)`;
      currentIndex++;

      setTimeout(slideStep, 3500);
    }

    slideStep();
  }
}
export default sliderPartners;
