const menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

function openMenu() {
  //alert("menu opened!");
  menu.style.display = "flex";
  body.style.overflowY = "hidden";
}

function closeMenu() {
  menu.style.display = "none";
  body.style.overflowY = "scroll";
}
