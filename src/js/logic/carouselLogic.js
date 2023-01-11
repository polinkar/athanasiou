// Testimonials Carousel
const carouselLogic = () => {
  const buttons = document.querySelectorAll("[data-carousel-btn]");
  const slides = document.querySelectorAll(".carousel__slide");
  const dots = document.querySelector("[data-pagination]");
  const dotsArray = [];

  slides.forEach((slide, i) => {
    let dot = document.createElement("div");
    dot.classList.add("carousel__dot");
    if (i === 0) {
      dot.setAttribute("data-active", "");
      dot.classList.add("carousel__dot--active");
    }
    // Unshift instead of push to reverse the order before inserting to DOM
    dotsArray.unshift(dot);
  });

  dotsArray.forEach((dot) => {
    dots.insertAdjacentElement("afterbegin", dot);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
      // Select it this way to make sure it's working even if we have more carousels.
      // console.log(offset);

      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const dots = document.querySelector("[data-pagination]");

      const activeSlide = slides.querySelector("[data-active]");
      const activeDot = dots.querySelector("[data-active]");

      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      let newIndexDot = [...dots.children].indexOf(activeDot) + offset;

      // console.log(activeDot);

      // Make sure it is working OK for first and last.
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      if (newIndexDot < 0) newIndexDot = dots.children.length - 1;
      if (newIndexDot >= dots.children.length) newIndexDot = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;

      dots.children[newIndex].dataset.active = true;
      delete activeDot.dataset.active;

      dots.children[newIndex].classList.add("carousel__dot--active");
      activeDot.classList.remove("carousel__dot--active");
    });
  });

  const carouselContainer = document.querySelector(".carousel__container");
  const carouselImage = document.querySelector(".carousel__image");

  if (carouselContainer || carouselImage) {
    const carouselHeight = carouselImage.getBoundingClientRect().height;
    const carouselWidth = carouselImage.getBoundingClientRect().width;

    carouselContainer.style.height = `${carouselHeight}px`;
    carouselContainer.style.width = `${carouselWidth}px`;
  }
};

carouselLogic();

export default carouselLogic;
