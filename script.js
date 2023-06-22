// const menuBtn = document.getElementsByClassName("menu-btn");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-invisible");
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");
const closeBtn = document.createElement("button");
const closeImg = document.createElement("img");
const dotDiv = document.getElementById("dot-div");
const navLink = document.getElementById("nav-link-menu");

closeBtn.classList.toggle("hidden");
closeImg.src = "img/ic_cross.svg";

closeBtn.appendChild(closeImg);
nav.appendChild(closeBtn);

function displayMenu(e) {
    menu.classList.toggle("hidden");
    menuBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    logo2.classList.toggle("hidden");
}

function closeMenu(event) {
    menu.classList.toggle("hidden");
    menuBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    logo2.classList.toggle("hidden");
}

menuBtn.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", closeMenu);
navLink.addEventListener("click", closeMenu);
