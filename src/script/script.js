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

const sliders = document.querySelectorAll(".project-content__skills");
sliders.forEach(scroll);

function scroll(slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
} //*************** Part 2 ***********************
//**********************************************
//
// const projectsBox = document.querySelector(".projectsBox");
// let isDown2 = false;
// let startX2;
// let scrollLeft2;
//
// projectsBox.addEventListener("mousedown", (e) => {
//   isDown2 = true;
//   projectsBox.classList.add("active");
//   startX2 = e.pageX - projectsBox.offsetLeft;
//   scrollLeft2 = projectsBox.scrollLeft;
// });
// projectsBox.addEventListener("mouseleave", () => {
//   isDown2 = false;
//   projectsBox.classList.remove("active");
// });
// projectsBox.addEventListener("mouseup", () => {
//   isDown2 = false;
//   projectsBox.classList.remove("active");
// });
// projectsBox.addEventListener("mousemove", (e) => {
//   if (!isDown2) return;
//   e.preventDefault();
//   const x2 = e.pageX - projectsBox.offsetLeft;
//   const walk2 = x2 - startX2; //scroll-fast
//   projectsBox.scrollLeft = scrollLeft2 - walk2;
//   console.log(walk2);
// });
