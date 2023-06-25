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

// Project 5 elements and values

const work5Fig = document.createElement("figure");
const work5Img = document.createElement("img");
const work5Desc = document.createElement("div");
const container5 = document.createElement("div");
const work5Title = document.createElement("h3");
const workDescList5 = document.createElement("ul");
const workDescItem51 = document.createElement("li");
const workDescItem52 = document.createElement("li");
const workDescItem53 = document.createElement("li");
const workBtn5 = document.createElement("button");
const workBtnDesc5 = document.createTextNode(projects[4]["buttonDesc"]);
const arrowImg51 = document.createElement("img");
const arrowImg52 = document.createElement("img");

work5Img.src = projects[4]["image"];
work5Title.textContent = projects[4]["name"];
workDescItem51.textContent = projects[4]["technologies"][0];
workDescItem52.textContent = projects[4]["technologies"][1];
workDescItem53.textContent = projects[4]["technologies"][2];
arrowImg51.src = projects[4]["arrowImg1"];
arrowImg52.src = projects[4]["arrowImg2"];

work5Fig.className = "work5 work-cont work5-fig";
work5Img.classList.add("work-img");
work5Desc.className = "work5 work-cont workDesc work5-desc visible";
container5.classList.add("container");
workDescList5.classList.add("workDesc-list");
workDescItem51.classList.add("workDesc-item");
workDescItem52.classList.add("workDesc-item");
workDescItem53.classList.add("workDesc-item");
workBtn5.className = "workBtn btn-cont";
workBtn5.setAttribute("id", "work5-btn");
arrowImg51.className = "arrow-img visible";
arrowImg52.className = "arrow-img invisible";

grid.append(work5Fig, work5Desc);
work5Fig.appendChild(work5Img);
work5Desc.appendChild(container5);
container5.append(work5Title, workDescList5, workBtn5)
workDescList5.append(workDescItem51, workDescItem52, workDescItem53);
workBtn5.append(workBtnDesc5, arrowImg51, arrowImg52);

// Project 6 elements and values

const work6Fig = document.createElement("figure");
const work6Img = document.createElement("img");
const work6Desc = document.createElement("div");
const container6 = document.createElement("div");
const work6Title = document.createElement("h3");
const workDescList6 = document.createElement("ul");
const workDescItem61 = document.createElement("li");
const workDescItem62 = document.createElement("li");
const workDescItem63 = document.createElement("li");
const workDescItem64 = document.createElement("li");
const listBtn = document.createElement("button");
const workBtn6 = document.createElement("button");
const workBtnDesc6 = document.createTextNode(projects[5]["buttonDesc"]);
const arrowImg61 = document.createElement("img");
const arrowImg62 = document.createElement("img");

work6Img.src = projects[5]["image"];
work6Title.textContent = projects[5]["name"];
workDescItem61.textContent = projects[5]["technologies"][0];
workDescItem62.textContent = projects[5]["technologies"][1];
workDescItem63.textContent = projects[5]["technologies"][2];
listBtn.textContent = "+1";
arrowImg61.src = projects[5]["arrowImg1"];
arrowImg62.src = projects[5]["arrowImg2"];

work6Fig.className = "work6 work-cont work6-fig";
work6Img.classList.add("work-img");
work6Desc.className = "work6 work-cont workDesc work6-desc";
container6.classList.add("container");
workDescList6.classList.add("workDesc-list");
workDescItem61.classList.add("workDesc-item");
workDescItem62.classList.add("workDesc-item");
workDescItem63.className = "workDesc-item visible";
workDescItem64.className = "workDesc-item invisible";
workBtn6.className = "workBtn btn-cont";
workBtn6.setAttribute("id", "work6-btn");
arrowImg61.className = "arrow-img visible";
arrowImg62.className = "arrow-img invisible";

grid.append(work6Fig, work6Desc);
work6Fig.appendChild(work6Img);
work6Desc.appendChild(container6);
container6.append(work6Title, workDescList6, workBtn6)
workDescList6.append(workDescItem61, workDescItem62, workDescItem63, workDescItem64);
workDescItem64.appendChild(listBtn);
workBtn6.append(workBtnDesc6, arrowImg61, arrowImg62);

listBtn.addEventListener("click", () => {
    workDescItem63.classList.toggle("visible");
    workDescItem64.classList.toggle("invisible");
    workDescItem64.classList.toggle("hidden");
})

// add background images

const geo1 = document.createElement("div");
const geo2 = document.createElement("div");
const geo3 = document.createElement("div");
const geo4 = document.createElement("div");
const geo5 = document.createElement("div");

geo1.className = "geo1 invisible";
geo2.className = "geo2 invisible";
geo3.className = "geo3 invisible";
geo4.className = "geo4 invisible";
geo5.className = "geo5 invisible";

grid.append(geo1, geo2, geo3, geo4, geo5);

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

function popupWindow5(e) {
    window.open("proj5-desc.html", "popUp", "width=1200, height=1000");
}

function popupWindow6(e) {
    window.open("proj6-desc.html", "popUp", "width=1200, height=1000");
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
workBtn5.addEventListener("click", popupWindow5);
work5Img.addEventListener("click", popupWindow5);
workBtn6.addEventListener("click", popupWindow6);
work6Img.addEventListener("click", popupWindow6);
