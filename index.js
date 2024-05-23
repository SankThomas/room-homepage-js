const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

nextButton.addEventListener("click", () => {
  // activeSlide = activeSlide + 1;
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  showActiveSlide();
});

previousButton.addEventListener("click", () => {
  // activeSlide = activeSlide - 1;
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  showActiveSlide();
});

function showActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
