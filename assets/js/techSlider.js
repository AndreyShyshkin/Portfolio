const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;
let autoSlideInterval;

function nextSlide() {
  slideIndex = (slideIndex + 1) % (slider.children.length - 4);
  updateSliderPosition();
}

function prevSlide() {
  slideIndex =
    (slideIndex - 1 + slider.children.length - 4) %
    (slider.children.length - 4);
  updateSliderPosition();
}

function updateSliderPosition() {
  slider.style.transform = `translateX(-${slideIndex * 20}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

startAutoSlide();
