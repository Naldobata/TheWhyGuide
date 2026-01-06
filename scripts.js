var btnmenu = document.getElementById("btnmenu");
var menu = document.getElementById("slide-menu");

// Abrir ou fechar menu ao clicar no botão
btnmenu.addEventListener("click", function (e) {
  menu.classList.toggle("on");
  e.stopPropagation(); // impede que o clique "suba" para o document
});

// Fechar menu ao clicar fora
document.addEventListener("click", function (e) {
  if (menu.classList.contains("on")) {
    menu.classList.remove("on");
  }
});

// Impede que o clique dentro do menu feche ele
menu.addEventListener("click", function (e) {
  e.stopPropagation();
});
