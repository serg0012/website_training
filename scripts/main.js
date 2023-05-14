const btnForm = document.querySelector(".btn-booking");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".callback-form");
// const btnsMoreInfo = document.querySelectorAll('.more__info');
const body = document.querySelector("body");
const scrollToTopBtn = document.getElementById("scroll-to-top");

btnForm.addEventListener("click", () => {
  overlay.style.display = "flex";
  body.style.overflow = "hidden";
});

// btnsMoreInfo.forEach((btn) => {
//     btn.addEventListener(('click'), () => {
//         overlay.style.display = 'flex';
//         body.style.overflow = 'hidden';
//     })
// })

form.addEventListener("click", (e) => {
  e.stopPropagation();
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  body.style.overflow = "auto";
});

// Переміщення до елементу з id booking
function scrollToBooking() {
  const booking = document.getElementById("booking");
  booking.scrollIntoView({ behavior: "smooth" });
}

// Переміщення до елементу з id header
function scrollToHeader() {
  const header = document.getElementById("header");
  header.scrollIntoView({ behavior: "smooth" });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

// Функція, яка піднімає сторінку вгору
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// показуємо кнопку, коли користувач прокрутив сторінку до певної висоти
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
