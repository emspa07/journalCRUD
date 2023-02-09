const navToggle = document.querySelector(".nav-toggle");
const menuList = document.querySelector(".menuList");

navToggle.addEventListener("click", () => {
    menuList.classList.toggle("menuList_visible");
});