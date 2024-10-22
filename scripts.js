let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".slider").offsetWidth;
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
  currentIndex = index;
}
