const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const menuLinks = mobileMenu.querySelectorAll("a");
const body = document.body;

/* ABRIR / FECHAR MENU */
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("open");
  overlay.classList.toggle("open");
  body.classList.toggle("menu-open"); // 🔥 BLUR + ANIMAÇÃO
});

/* FECHAR AO CLICAR NO OVERLAY */
overlay.addEventListener("click", closeMenu);

/* FECHAR AO CLICAR FORA */
document.addEventListener("click", closeMenu);

/* NÃO FECHAR AO CLICAR DENTRO */
mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("open");
  body.classList.remove("menu-open"); // 🔥 REMOVE BLUR
}

/* ITEM ATIVO AUTOMÁTICO */
const currentPath = window.location.pathname.split("/").pop();

menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

