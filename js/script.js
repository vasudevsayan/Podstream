// MOBILE SEARCH TOGGLE

const mobileSearchToggle = document.getElementById("mobileSearchToggle");
const mobileSearchBox = document.getElementById("mobileSearchBox");

mobileSearchToggle.addEventListener("click", () => {
  mobileSearchBox.classList.toggle("max-h-0");
  mobileSearchBox.classList.toggle("opacity-0");

  mobileSearchBox.classList.toggle("max-h-[80px]");
  mobileSearchBox.classList.toggle("opacity-100");
});

// SEARCH INPUT TOGGLE

const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");

searchToggle.addEventListener("click", () => {
  if (searchBox.classList.contains("w-[0px]")) {
    searchBox.classList.remove("w-[0px]", "opacity-0");
    searchBox.classList.add("w-[260px]", "opacity-100");
  } else {
    searchBox.classList.add("w-[0px]", "opacity-0");
    searchBox.classList.remove("w-[260px]", "opacity-100");
  }
});

// MOBILE MENU TOGGLE

const psMenuToggle = document.getElementById("psMenuToggle");
const psMobileMenu = document.getElementById("psMobileMenu");
const psMenuLines = document.querySelectorAll(".ps-menu-line");

psMenuToggle.addEventListener("click", () => {
  psMobileMenu.classList.toggle("opacity-0");
  psMobileMenu.classList.toggle("pointer-events-none");
  psMobileMenu.classList.toggle("-translate-y-2");
  psMobileMenu.classList.toggle("translate-y-0");

  psMenuLines[0].classList.toggle("rotate-45");
  psMenuLines[0].classList.toggle("translate-y-0");

  psMenuLines[1].classList.toggle("opacity-0");

  psMenuLines[2].classList.toggle("-rotate-45");
  psMenuLines[2].classList.toggle("translate-y-0");
});

 const faqBtns = document.querySelectorAll(".faq-toggle");

      faqBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector(".faq-icon");

          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = "rotate(45deg)";
          }
        });
      });

new Swiper(".topPodcastSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2.4,
    },
  },
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".topPodcastSwiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    grabCursor: true,
    speed: 600,
    freeMode: true,
    mousewheel: true,
  });
});

new Swiper(".upcomingShowSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,

  navigation: {
    nextEl: ".upcomingNext",
    prevEl: ".upcomingPrev",
  },
});

const upcomingShowSwiper = new Swiper(".upcomingShowSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".upcomingNext",
    prevEl: ".upcomingPrev",
  },
});
