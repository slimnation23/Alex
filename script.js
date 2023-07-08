const menuBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("show");
}
