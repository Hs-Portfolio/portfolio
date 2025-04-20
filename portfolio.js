const slider = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");

let currentIndex = 0;
const slidesPerView = 3;




const totalDots = Math.ceil(slides.length / slidesPerView);
for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveTo(i));
  dotsContainer.appendChild(dot);
}

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth + 10; // match CSS gap
  const sliderPosition = currentIndex * slideWidth;
  slider.style.transform = `translateX(-${sliderPosition}px)`;
  updateDots();
}

function moveTo(index) {
  currentIndex = index * slidesPerView;
  updateSliderPosition();
}

function updateDots() {
  const activeIndex = Math.floor(currentIndex / slidesPerView);
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
}

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= slidesPerView;
    if (currentIndex < 0) currentIndex = 0;
    updateSliderPosition();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentIndex < slides.length - slidesPerView) {
    currentIndex += slidesPerView;
    if (currentIndex > slides.length - slidesPerView) {
      currentIndex = slides.length - slidesPerView;
    }
    updateSliderPosition();
  }
});

window.addEventListener("resize", updateSliderPosition);



// Initial position
updateSliderPosition();
