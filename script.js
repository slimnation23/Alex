const menuBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("active");

  navLink.forEach((item) => {
    item.addEventListener('click', () => {
      navList.classList.remove("active");
    })
  })
}
