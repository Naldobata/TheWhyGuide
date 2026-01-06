const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", (e) => {
  menu.classList.toggle("open");
   e.stopPropagation();
});

document.addEventListener("click", function (e) {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  }
});

menu.addEventListener("click", function (e) {
  e.stopPropagation();
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const menuLinks = mobileMenu.querySelectorAll("a");

function openMenu() {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}

menuBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

/* ITEM ATIVO AUTOMATICO */
const currentPath = window.location.pathname;

menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});
