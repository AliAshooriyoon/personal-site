const headerBtn = document.querySelector(".header__btn");
const popUpMenu = document.querySelector(".popupMenu-Manager");
let isMenuOpen = false;
headerBtn.addEventListener("click", openMenu);
function openMenu() {
  if (!isMenuOpen) {
    popUpMenu.classList.add("show-mobile-menu");
  } else {
    popUpMenu.classList.remove("show-mobile-menu");
  }
  isMenuOpen = !isMenuOpen;
}
