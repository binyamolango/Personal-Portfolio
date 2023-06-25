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
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "image" : "proj-img/Rectangle 21 (5).svg",
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
    "name" : "Project 3",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "image" : "proj-img/Rectangle 21 (1).svg",
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
    "name" : "Project 4",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "image" : "proj-img/Rectangle 21 (2).svg",
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
    "name" : "Project 5",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "image" : "proj-img/Rectangle 21 (3).svg",
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
    "name" : "Project 6",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    "image" : "proj-img/Rectangle 21 (4).svg",
    "headerImg" : "img/ic_cross.svg",
    "technologies" : ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    "buttonDesc" : "See this project",
    "arrowImg1" : "img/arrow.svg",
    "arrowImg2" : "img/Union.svg",
    "linkToLive" : "",
    "linkToSource" : "",
    "previous" : "Previous project",
    "next" : "Next project"
}];

// Project 1 elements and values

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

// Project 2 elements and values

const work2Fig = document.createElement("figure");
const work2Img = document.createElement("img");
const work2Desc = document.createElement("div");
const container2 = document.createElement("div");
const work2Title = document.createElement("h3");
const workDescList2 = document.createElement("ul");
const workDescItem21 = document.createElement("li");
const workDescItem22 = document.createElement("li");
const workDescItem23 = document.createElement("li");
const workBtn2 = document.createElement("button");
const workBtnDesc2 = document.createTextNode(projects[1]["buttonDesc"]);
const arrowImg21 = document.createElement("img");
const arrowImg22 = document.createElement("img");

work2Img.src = projects[1]["image"];
work2Title.textContent = projects[1]["name"];
workDescItem21.textContent = projects[1]["technologies"][0];
workDescItem22.textContent = projects[1]["technologies"][1];
workDescItem23.textContent = projects[1]["technologies"][2];
arrowImg21.src = projects[1]["arrowImg1"];
arrowImg22.src = projects[1]["arrowImg2"];

work2Fig.className = "work2 work-cont work2-fig";
work2Img.classList.add("work-img");
work2Desc.className = "work2 work-cont workDesc work2-desc visible";
container2.classList.add("container");
workDescList2.classList.add("workDesc-list");
workDescItem21.classList.add("workDesc-item");
workDescItem22.classList.add("workDesc-item");
workDescItem23.classList.add("workDesc-item");
workBtn2.className = "workBtn btn-cont";
workBtn2.setAttribute("id", "work2-btn");
arrowImg21.className = "arrow-img visible";
arrowImg22.className = "arrow-img invisible";

grid.append(work2Fig, work2Desc);
work2Fig.appendChild(work2Img);
work2Desc.appendChild(container2);
container2.append(work2Title, workDescList2, workBtn2)
workDescList2.append(workDescItem21, workDescItem22, workDescItem23);
workBtn2.append(workBtnDesc2, arrowImg21, arrowImg22);

// Project 3 elements and values

const work3Fig = document.createElement("figure");
const work3Img = document.createElement("img");
const work3Desc = document.createElement("div");
const container3 = document.createElement("div");
const work3Title = document.createElement("h3");
const workDescList3 = document.createElement("ul");
const workDescItem31 = document.createElement("li");
const workDescItem32 = document.createElement("li");
const workDescItem33 = document.createElement("li");
const workBtn3 = document.createElement("button");
const workBtnDesc3 = document.createTextNode(projects[2]["buttonDesc"]);
const arrowImg31 = document.createElement("img");
const arrowImg32 = document.createElement("img");

work3Img.src = projects[2]["image"];
work3Title.textContent = projects[2]["name"];
workDescItem31.textContent = projects[2]["technologies"][0];
workDescItem32.textContent = projects[2]["technologies"][1];
workDescItem33.textContent = projects[2]["technologies"][2];
arrowImg31.src = projects[2]["arrowImg1"];
arrowImg32.src = projects[2]["arrowImg2"];

work3Fig.className = "work3 work-cont work3-fig";
work3Img.classList.add("work-img");
work3Desc.className = "work3 work-cont workDesc work3-desc visible";
container3.classList.add("container");
workDescList3.classList.add("workDesc-list");
workDescItem31.classList.add("workDesc-item");
workDescItem32.classList.add("workDesc-item");
workDescItem33.classList.add("workDesc-item");
workBtn3.className = "workBtn btn-cont";
workBtn3.setAttribute("id", "work3-btn");
arrowImg31.className = "arrow-img visible";
arrowImg32.className = "arrow-img invisible";

grid.append(work3Fig, work3Desc);
work3Fig.appendChild(work3Img);
work3Desc.appendChild(container3);
container3.append(work3Title, workDescList3, workBtn3)
workDescList3.append(workDescItem31, workDescItem32, workDescItem33);
workBtn3.append(workBtnDesc3, arrowImg31, arrowImg32);

// Project 4 elements and values

const work4Fig = document.createElement("figure");
const work4Img = document.createElement("img");
const work4Desc = document.createElement("div");
const container4 = document.createElement("div");
const work4Title = document.createElement("h3");
const workDescList4 = document.createElement("ul");
const workDescItem41 = document.createElement("li");
const workDescItem42 = document.createElement("li");
const workDescItem43 = document.createElement("li");
const workBtn4 = document.createElement("button");
const workBtnDesc4 = document.createTextNode(projects[3]["buttonDesc"]);
const arrowImg41 = document.createElement("img");
const arrowImg42 = document.createElement("img");

work4Img.src = projects[3]["image"];
work4Title.textContent = projects[3]["name"];
workDescItem41.textContent = projects[3]["technologies"][0];
workDescItem42.textContent = projects[3]["technologies"][1];
workDescItem43.textContent = projects[3]["technologies"][2];
arrowImg41.src = projects[3]["arrowImg1"];
arrowImg42.src = projects[3]["arrowImg2"];

work4Fig.className = "work4 work-cont work4-fig";
work4Img.classList.add("work-img");
work4Desc.className = "work4 work-cont workDesc work4-desc visible";
container4.classList.add("container");
workDescList4.classList.add("workDesc-list");
workDescItem41.classList.add("workDesc-item");
workDescItem42.classList.add("workDesc-item");
workDescItem43.classList.add("workDesc-item");
workBtn4.className = "workBtn btn-cont";
workBtn4.setAttribute("id", "work4-btn");
arrowImg41.className = "arrow-img visible";
arrowImg42.className = "arrow-img invisible";

grid.append(work4Fig, work4Desc);
work4Fig.appendChild(work4Img);
work4Desc.appendChild(container4);
container4.append(work4Title, workDescList4, workBtn4)
workDescList4.append(workDescItem41, workDescItem42, workDescItem43);
workBtn4.append(workBtnDesc4, arrowImg41, arrowImg42);

// popup window script

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-invisible");
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");
const closeBtn = document.createElement("button");
const closeImg = document.createElement("img");
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

function popupWindow1(e) {
    window.open("proj1-desc.html", "popUp", "width=1200, height=1000");
}

function popupWindow2(e) {
    window.open("proj2-desc.html", "popUp", "width=1200, height=1000");
}

function popupWindow3(e) {
    window.open("proj3-desc.html", "popUp", "width=1200, height=1000");
}

function popupWindow4(e) {
    window.open("proj4-desc.html", "popUp", "width=1200, height=1000");
}

if(workBtn) {
    workBtn.addEventListener("click", popupWindow1);
}
work1Img.addEventListener("click", popupWindow1);
workBtn2.addEventListener("click", popupWindow2);
work2Img.addEventListener("click", popupWindow2);
workBtn3.addEventListener("click", popupWindow3);
work3Img.addEventListener("click", popupWindow3);
workBtn4.addEventListener("click", popupWindow4);
work4Img.addEventListener("click", popupWindow4);
