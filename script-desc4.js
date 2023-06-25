import { projects } from "./script.js";

// create html elements for the popup project description

const container = document.getElementById("container");
const smallContainer = document.createElement("main");
const headerBtn = document.createElement("button");
const headerImg = document.createElement("img");
const header = document.createElement("header");
const title = document.createElement("h2");
const workDescList = document.createElement("ul");
const workDescItem1 = document.createElement("li");
const workDescItem2 = document.createElement("li");
const workDescItem3 = document.createElement("li");
const gridContainer = document.createElement("section");
const grid = document.createElement("div");
const fig1 = document.createElement("figure");
const img1 = document.createElement("img");
const fig2 = document.createElement("figure");
const img2 = document.createElement("img");
const fig3 = document.createElement("figure");
const img3 = document.createElement("img");
const fig4 = document.createElement("figure");
const img4 = document.createElement("img");
const fig5 = document.createElement("figure");
const img5 = document.createElement("img");
const detailDesc = document.createElement("section");
const projDesc = document.createElement("p");
const btnContainer = document.createElement("div");
const btnLive = document.createElement("button");
const btnSource = document.createElement("button");
const btnDirection = document.createElement("div");
const btnPrev = document.createElement("button");
const btnNext = document.createElement("button");

headerImg.src = projects[3]["headerImg"];
headerImg.alt = projects[3]["headerImg-alt"];
title.textContent = projects[3]["name"];
workDescItem1.textContent = projects[3]["technologies"][0];
workDescItem2.textContent = projects[3]["technologies"][1];
workDescItem3.textContent = projects[3]["technologies"][2];
img1.src = projects[3]["image"];
img1.alt = projects[3]["workImg-alt"];
img2.src = projects[3]["image"];
img2.alt = projects[3]["workImg-alt"];
img3.src = projects[3]["image"];
img3.alt = projects[3]["workImg-alt"];
img4.src = projects[3]["image"];
img4.alt = projects[3]["workImg-alt"];
img5.src = projects[3]["image"];
img5.alt = projects[3]["workImg-alt"];
projDesc.textContent = projects[3]["description"];
btnLive.textContent = "See live";
btnSource.textContent = "See source";
btnPrev.textContent = "Previous project";
btnNext.textContent = "Next project";

if(container) {
    container.appendChild(smallContainer);
}
smallContainer.append(headerBtn, header, gridContainer, detailDesc);
headerBtn.appendChild(headerImg);
header.append(title, workDescList);
workDescList.append(workDescItem1, workDescItem2, workDescItem3);
gridContainer.appendChild(grid);
grid.append(fig1, fig2, fig3, fig4, fig5);
fig1.appendChild(img1);
fig2.appendChild(img2);
fig3.appendChild(img3);
fig4.appendChild(img4);
fig5.appendChild(img5);
detailDesc.append(projDesc, btnContainer, btnDirection);
btnContainer.append(btnLive, btnSource);
btnDirection.append(btnPrev, btnNext);

smallContainer.className = "small-container";
headerBtn.className = "headerBtn";
headerBtn.setAttribute("id", "close-popup");
header.className = "header";
title.className = "title";
workDescList.className = "workDesc-list";
workDescItem1.className = "workDesc-item";
workDescItem2.className = "workDesc-item";
workDescItem3.className = "workDesc-item";
gridContainer.className = "grid-container";
grid.className = "grid";
fig1.className = "fig1";
fig2.className = "fig2";
fig3.className = "fig3";
fig4.className = "fig4";
fig5.className = "fig5";
img1.className = "work-img";
img2.className = "work-img";
img3.className = "work-img";
img4.className = "work-img";
img5.className = "work-img";
detailDesc.className = "detail-desc";
btnContainer.className = "btn-cont";
btnLive.className = "btn-live";
btnSource.className = "btn-source";
btnDirection.className = "direction-btn invisible";

// close popup script

const closePopup = document.getElementById("close-popup");

function closePopupFunc(e) {
    window.close();
}

if(closePopup) {
    closePopup.addEventListener("click", closePopupFunc);
}
