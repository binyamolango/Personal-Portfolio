export const projects = [{
    "name" : "Project 1",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "image" : "proj-img/Rectangle 21.svg",
    "headerImg" : "img/ic_cross.svg",
    "technologies" : ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "buttonDesc" : "See this project",
    "arrowImg1" : "img/arrow.svg",
    "arrowImg2" : "img/Union.svg",
    "linkToLive" : "",
    "linkToSource" : "",
    "previous" : "Previous project",
    "next" : "Next project"
}, {
    "name" : "Project 2",
    "description" : "",
    "image" : "",
    "technologies" : "",
    "linkToLive" : "",
    "linkTo Source" : ""
}, {
    "name" : "Project 3",
    "description" : "",
    "image" : "",
    "technologies" : "",
    "linkToLive" : "",
    "linkTo Source" : ""
}, {
    "name" : "Project 4",
    "description" : "",
    "image" : "",
    "technologies" : "",
    "linkToLive" : "",
    "linkTo Source" : ""
}, {
    "name" : "Project 5",
    "description" : "",
    "image" : "",
    "technologies" : "",
    "linkToLive" : "",
    "linkTo Source" : ""
}, {
    "name" : "Project 6",
    "description" : "",
    "image" : "",
    "technologies" : "",
    "linkToLive" : "",
    "linkTo Source" : ""
}];

const workSection = document.getElementById("portfolio");
const grid = document.createElement("div");
const work0 = document.createElement("div");
const work0Title = document.createElement("h2");
const work1Fig = document.createElement("figure");
const work1Img = document.createElement("img");
const work1Desc = document.createElement("div");
const container = document.createElement("div");
const work1Title = document.createElement("h3");
const workDescList = document.createElement("ul");
const workDescItem1 = document.createElement("li");
const workDescItem2 = document.createElement("li");
const workDescItem3 = document.createElement("li");
const workBtn = document.createElement("button");
const workBtnDesc = document.createTextNode(projects[0]["buttonDesc"]);
const arrowImg1 = document.createElement("img");
const arrowImg2 = document.createElement("img");

work0Title.textContent = "Projects";
work1Img.src = projects[0]["image"];
work1Title.textContent = projects[0]["name"];
workDescItem1.textContent = projects[0]["technologies"][0];
workDescItem2.textContent = projects[0]["technologies"][1];
workDescItem3.textContent = projects[0]["technologies"][2];
arrowImg1.src = projects[0]["arrowImg1"];
arrowImg2.src = projects[0]["arrowImg2"];

if (workSection) {
    workSection.classList.add("work");
    workSection.setAttribute("id", "portfolio");
    workSection.appendChild(grid);
}
grid.classList.add("grid");
work0.className = "container work0";
work0Title.className = "title darkblue";
work1Fig.className = "work1 work-cont work1-fig";
work1Img.classList.add("work-img");
work1Desc.className = "work1 work-cont workDesc work1-desc";
container.classList.add("container");
workDescList.classList.add("workDesc-list");
workDescItem1.classList.add("workDesc-item");
workDescItem2.classList.add("workDesc-item");
workDescItem3.classList.add("workDesc-item");
workBtn.className = "workBtn btn-cont";
workBtn.setAttribute("id", "work1-btn");
arrowImg1.className = "arrow-img visible";
arrowImg2.className = "arrow-img invisible";

grid.append(work0, work1Fig, work1Desc);
work0.appendChild(work0Title);
work1Fig.appendChild(work1Img);
work1Desc.appendChild(container);
container.append(work1Title, workDescList, workBtn)
workDescList.append(workDescItem1, workDescItem2, workDescItem3);
workBtn.append(workBtnDesc, arrowImg1, arrowImg2);

// const menuBtn = document.getElementsByClassName("menu-btn");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-invisible");
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");
const closeBtn = document.createElement("button");
const closeImg = document.createElement("img");
// const dotDiv = document.getElementById("dot-div");
const navLink = document.getElementById("nav-link-menu");

closeBtn.classList.toggle("hidden");
closeImg.src = "img/ic_cross.svg";

closeBtn.appendChild(closeImg);
if(nav) {
    nav.appendChild(closeBtn);
}

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

if(menuBtn) {
    menuBtn.addEventListener("click", displayMenu);
}
closeBtn.addEventListener("click", closeMenu);
if(navLink) {
    navLink.addEventListener("click", closeMenu);
}

const work1Btn = document.getElementById("work1-btn");

function popupWindow(e) {
    window.open("proj1-desc.html", "popUp", "width=1200, height=1000");
}

if(work1Btn) {
    work1Btn.addEventListener("click", popupWindow);
}
work1Img.addEventListener("click", popupWindow);
