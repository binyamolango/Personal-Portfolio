// mobile menu script

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-invisible');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const logo2 = document.getElementById('logo2');
const closeBtn = document.createElement('button');
const closeImg = document.createElement('img');
const navLink = document.getElementById('nav-link-menu');

closeBtn.classList.toggle('hidden');
closeImg.src = 'img/ic_cross.svg';
closeImg.alt = 'close-icon';

closeBtn.appendChild(closeImg);
if (nav) {
  nav.appendChild(closeBtn);
}

function displayMenu() {
  menu.classList.toggle('hidden');
  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  logo.classList.toggle('hidden');
  logo2.classList.toggle('hidden');
}

function closeMenu() {
  menu.classList.toggle('hidden');
  menuBtn.classList.toggle('hidden');
  closeBtn.classList.toggle('hidden');
  logo.classList.toggle('hidden');
  logo2.classList.toggle('hidden');
}

if (menuBtn) {
  menuBtn.addEventListener('click', displayMenu);
}
closeBtn.addEventListener('click', closeMenu);
if (navLink) {
  navLink.addEventListener('click', closeMenu);
}

// popup window script

const projects = [{
  name: 'Project 1',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: './Screenshots/jazz-concert-project/Screenshot 2023-08-03 093319.png',
  imageAll: './Screenshots/jazz-concert-project/Screenshot 2023-08-03 093319.png',
  imageAll2: './Screenshots/jazz-concert-project/Screenshot 2023-08-03 093319.png',
  headerImg: 'img/ic_cross.svg',
  'workImg-alt': 'work1-image',
  'headerImg-alt': 'close-icon',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  buttonDesc: 'See this project',
  arrowImg1: 'img/arrow.svg',
  arrowImg2: 'img/Union.svg',
  'arrow-alt': 'arrow-image',
  linkToLive: 'https://binyamolango.github.io/jazz-concert-capstone-project/',
  linkToSource: 'https://github.com/binyamolango/jazz-concert-capstone-project',
  liveImg1: 'img/Union2.svg',
  liveImg2: 'img/ic_link_teal.svg',
  sourceImg1: 'img/Vector.svg',
  sourceImg2: 'img/github-black.svg',
  liveText: 'See live',
  sourceText: 'See source',
  previous: 'Previous project',
  next: 'Next project',
}, {
  name: 'Project 2',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: 'proj-img/Rectangle 21 (5).svg',
  imageAll: 'img/work-imgAll.svg',
  imageAll2: 'img/imageAll2.svg',
  headerImg: 'img/ic_cross.svg',
  'workImg-alt': 'work2-image',
  'headerImg-alt': 'close-icon',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  buttonDesc: 'See this project',
  arrowImg1: 'img/arrow.svg',
  arrowImg2: 'img/Union.svg',
  'arrow-alt': 'arrow-image',
  linkToLive: '',
  linkToSource: '',
  liveImg1: 'img/Union2.svg',
  liveImg2: 'img/ic_link_teal.svg',
  sourceImg1: 'img/Vector.svg',
  sourceImg2: 'img/github-black.svg',
  liveText: 'See live',
  sourceText: 'See source',
  previous: 'Previous project',
  next: 'Next project',
}, {
  name: 'Project 3',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: 'proj-img/Rectangle 21 (1).svg',
  imageAll: 'img/work-imgAll.svg',
  imageAll2: 'img/imageAll2.svg',
  headerImg: 'img/ic_cross.svg',
  'workImg-alt': 'work3-image',
  'headerImg-alt': 'close-icon',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  buttonDesc: 'See this project',
  arrowImg1: 'img/arrow.svg',
  arrowImg2: 'img/Union.svg',
  'arrow-alt': 'arrow-image',
  linkToLive: '',
  linkToSource: '',
  liveImg1: 'img/Union2.svg',
  liveImg2: 'img/ic_link_teal.svg',
  sourceImg1: 'img/Vector.svg',
  sourceImg2: 'img/github-black.svg',
  liveText: 'See live',
  sourceText: 'See source',
  previous: 'Previous project',
  next: 'Next project',
}, {
  name: 'Project 4',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: 'proj-img/Rectangle 21 (2).svg',
  imageAll: 'img/work-imgAll.svg',
  imageAll2: 'img/imageAll2.svg',
  headerImg: 'img/ic_cross.svg',
  'workImg-alt': 'work4-image',
  'headerImg-alt': 'close-icon',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  buttonDesc: 'See this project',
  arrowImg1: 'img/arrow.svg',
  arrowImg2: 'img/Union.svg',
  'arrow-alt': 'arrow-image',
  linkToLive: '',
  linkToSource: '',
  liveImg1: 'img/Union2.svg',
  liveImg2: 'img/ic_link_teal.svg',
  sourceImg1: 'img/Vector.svg',
  sourceImg2: 'img/github-black.svg',
  liveText: 'See live',
  sourceText: 'See source',
  previous: 'Previous project',
  next: 'Next project',
}, {
  name: 'Project 5',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: 'proj-img/Rectangle 21 (3).svg',
  imageAll: 'img/work-imgAll.svg',
  imageAll2: 'img/imageAll2.svg',
  headerImg: 'img/ic_cross.svg',
  'workImg-alt': 'work5-image',
  'headerImg-alt': 'close-icon',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  buttonDesc: 'See this project',
  arrowImg1: 'img/arrow.svg',
  arrowImg2: 'img/Union.svg',
  'arrow-alt': 'arrow-image',
  linkToLive: '',
  linkToSource: '',
  liveImg1: 'img/Union2.svg',
  liveImg2: 'img/ic_link_teal.svg',
  sourceImg1: 'img/Vector.svg',
  sourceImg2: 'img/github-black.svg',
  liveText: 'See live',
  sourceText: 'See source',
  previous: 'Previous project',
  next: 'Next project',
}, {
  name: 'Project 6',
  description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: 'proj-img/Rectangle 21 (4).svg',
  imageAll: 'img/work-imgAll.svg',
  imageAll2: 'img/imageAll2.svg',
  headerImg: 'img/ic_cross.svg',
  'workImg-alt': 'work6-image',
  'headerImg-alt': 'close-icon',
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  buttonDesc: 'See this project',
  arrowImg1: 'img/arrow.svg',
  arrowImg2: 'img/Union.svg',
  'arrow-alt': 'arrow-image',
  linkToLive: '',
  linkToSource: '',
  liveImg1: 'img/Union2.svg',
  liveImg2: 'img/ic_link_teal.svg',
  sourceImg1: 'img/Vector.svg',
  sourceImg2: 'img/github-black.svg',
  liveText: 'See live',
  sourceText: 'See source',
  previous: 'Previous project',
  next: 'Next project',
}];

// Project 1 elements and values

const workSection = document.getElementById('portfolio');
const grid = document.createElement('div');
const work0 = document.createElement('div');
const work0Title = document.createElement('h2');
const work1Fig = document.createElement('figure');
const work1Img = document.createElement('img');
const work1Desc = document.createElement('div');
const container = document.createElement('div');
const work1Title = document.createElement('h3');
const workDescList = document.createElement('ul');
const workDescItem1 = document.createElement('li');
const workDescItem2 = document.createElement('li');
const workDescItem3 = document.createElement('li');
const workBtn = document.createElement('button');
const workBtnDesc = document.createTextNode(projects[0].buttonDesc);
const arrowImg1 = document.createElement('img');
const arrowImg2 = document.createElement('img');

work0Title.textContent = 'Projects';
work1Img.src = projects[0].image;
work1Img.alt = projects[0]['workImg-alt'];
work1Title.textContent = projects[0].name;
[workDescItem1.textContent,
  workDescItem2.textContent,
  workDescItem3.textContent] = projects[0].technologies;
arrowImg1.src = projects[0].arrowImg1;
arrowImg1.alt = projects[0]['arrow-alt'];
arrowImg2.src = projects[0].arrowImg2;
arrowImg2.alt = projects[0]['arrow-alt'];

if (workSection) {
  workSection.classList.add('work');
  workSection.setAttribute('id', 'portfolio');
  workSection.appendChild(grid);
}
grid.classList.add('grid');
work0.className = 'container work0';
work0Title.className = 'title darkblue';
work1Fig.className = 'work1 work-cont work1-fig';
work1Img.classList.add('work-img');
work1Desc.className = 'work1 work-cont workDesc work1-desc';
container.classList.add('container');
workDescList.classList.add('workDesc-list');
workDescItem1.classList.add('workDesc-item');
workDescItem2.classList.add('workDesc-item');
workDescItem3.classList.add('workDesc-item');
workBtn.className = 'workBtn btn-cont';
workBtn.setAttribute('id', 'work1-btn');
arrowImg1.className = 'arrow-img visible';
arrowImg2.className = 'arrow-img invisible';

grid.append(work0, work1Fig, work1Desc);
work0.appendChild(work0Title);
work1Fig.appendChild(work1Img);
work1Desc.appendChild(container);
container.append(work1Title, workDescList, workBtn);
workDescList.append(workDescItem1, workDescItem2, workDescItem3);
workBtn.append(workBtnDesc, arrowImg1, arrowImg2);

// Project 2 elements and values

const work2Fig = document.createElement('figure');
const work2Img = document.createElement('img');
const work2Desc = document.createElement('div');
const container2 = document.createElement('div');
const work2Title = document.createElement('h3');
const workDescList2 = document.createElement('ul');
const workDescItem21 = document.createElement('li');
const workDescItem22 = document.createElement('li');
const workDescItem23 = document.createElement('li');
const workBtn2 = document.createElement('button');
const workBtnDesc2 = document.createTextNode(projects[1].buttonDesc);
const arrowImg21 = document.createElement('img');
const arrowImg22 = document.createElement('img');

work2Img.src = projects[1].image;
work2Img.alt = projects[1]['workImg-alt'];
work2Title.textContent = projects[1].name;
[workDescItem21.textContent,
  workDescItem22.textContent,
  workDescItem23.textContent] = projects[1].technologies;
arrowImg21.src = projects[1].arrowImg1;
arrowImg21.alt = projects[1]['arrow-alt'];
arrowImg22.src = projects[1].arrowImg2;
arrowImg22.alt = projects[1]['arrow-alt'];

work2Fig.className = 'work2 work-cont work2-fig';
work2Img.classList.add('work-img');
work2Desc.className = 'work2 work-cont workDesc work2-desc visible';
container2.classList.add('container');
workDescList2.classList.add('workDesc-list');
workDescItem21.classList.add('workDesc-item');
workDescItem22.classList.add('workDesc-item');
workDescItem23.classList.add('workDesc-item');
workBtn2.className = 'workBtn btn-cont';
workBtn2.setAttribute('id', 'work2-btn');
arrowImg21.className = 'arrow-img visible';
arrowImg22.className = 'arrow-img invisible';

grid.append(work2Fig, work2Desc);
work2Fig.appendChild(work2Img);
work2Desc.appendChild(container2);
container2.append(work2Title, workDescList2, workBtn2);
workDescList2.append(workDescItem21, workDescItem22, workDescItem23);
workBtn2.append(workBtnDesc2, arrowImg21, arrowImg22);

// Project 3 elements and values

const work3Fig = document.createElement('figure');
const work3Img = document.createElement('img');
const work3Desc = document.createElement('div');
const container3 = document.createElement('div');
const work3Title = document.createElement('h3');
const workDescList3 = document.createElement('ul');
const workDescItem31 = document.createElement('li');
const workDescItem32 = document.createElement('li');
const workDescItem33 = document.createElement('li');
const workBtn3 = document.createElement('button');
const workBtnDesc3 = document.createTextNode(projects[2].buttonDesc);
const arrowImg31 = document.createElement('img');
const arrowImg32 = document.createElement('img');

work3Img.src = projects[2].image;
work2Img.alt = projects[2]['workImg-alt'];
work3Title.textContent = projects[2].name;
[workDescItem31.textContent,
  workDescItem32.textContent,
  workDescItem33.textContent] = projects[2].technologies;
arrowImg31.src = projects[2].arrowImg1;
arrowImg31.alt = projects[2]['arrow-alt'];
arrowImg32.src = projects[2].arrowImg2;
arrowImg31.alt = projects[2]['arrow-alt'];

work3Fig.className = 'work3 work-cont work3-fig';
work3Img.classList.add('work-img');
work3Desc.className = 'work3 work-cont workDesc work3-desc visible';
container3.classList.add('container');
workDescList3.classList.add('workDesc-list');
workDescItem31.classList.add('workDesc-item');
workDescItem32.classList.add('workDesc-item');
workDescItem33.classList.add('workDesc-item');
workBtn3.className = 'workBtn btn-cont';
workBtn3.setAttribute('id', 'work3-btn');
arrowImg31.className = 'arrow-img visible';
arrowImg32.className = 'arrow-img invisible';

grid.append(work3Fig, work3Desc);
work3Fig.appendChild(work3Img);
work3Desc.appendChild(container3);
container3.append(work3Title, workDescList3, workBtn3);
workDescList3.append(workDescItem31, workDescItem32, workDescItem33);
workBtn3.append(workBtnDesc3, arrowImg31, arrowImg32);

// Project 4 elements and values

const work4Fig = document.createElement('figure');
const work4Img = document.createElement('img');
const work4Desc = document.createElement('div');
const container4 = document.createElement('div');
const work4Title = document.createElement('h3');
const workDescList4 = document.createElement('ul');
const workDescItem41 = document.createElement('li');
const workDescItem42 = document.createElement('li');
const workDescItem43 = document.createElement('li');
const workBtn4 = document.createElement('button');
const workBtnDesc4 = document.createTextNode(projects[3].buttonDesc);
const arrowImg41 = document.createElement('img');
const arrowImg42 = document.createElement('img');

work4Img.src = projects[3].image;
work2Img.alt = projects[3]['workImg-alt'];
work4Title.textContent = projects[3].name;
[workDescItem41.textContent,
  workDescItem42.textContent,
  workDescItem43.textContent] = projects[3].technologies;
arrowImg41.src = projects[3].arrowImg1;
arrowImg41.alt = projects[3]['arrow-alt'];
arrowImg42.src = projects[3].arrowImg2;
arrowImg41.alt = projects[3]['arrow-alt'];

work4Fig.className = 'work4 work-cont work4-fig';
work4Img.classList.add('work-img');
work4Desc.className = 'work4 work-cont workDesc work4-desc visible';
container4.classList.add('container');
workDescList4.classList.add('workDesc-list');
workDescItem41.classList.add('workDesc-item');
workDescItem42.classList.add('workDesc-item');
workDescItem43.classList.add('workDesc-item');
workBtn4.className = 'workBtn btn-cont';
workBtn4.setAttribute('id', 'work4-btn');
arrowImg41.className = 'arrow-img visible';
arrowImg42.className = 'arrow-img invisible';

grid.append(work4Fig, work4Desc);
work4Fig.appendChild(work4Img);
work4Desc.appendChild(container4);
container4.append(work4Title, workDescList4, workBtn4);
workDescList4.append(workDescItem41, workDescItem42, workDescItem43);
workBtn4.append(workBtnDesc4, arrowImg41, arrowImg42);

// Project 5 elements and values

const work5Fig = document.createElement('figure');
const work5Img = document.createElement('img');
const work5Desc = document.createElement('div');
const container5 = document.createElement('div');
const work5Title = document.createElement('h3');
const workDescList5 = document.createElement('ul');
const workDescItem51 = document.createElement('li');
const workDescItem52 = document.createElement('li');
const workDescItem53 = document.createElement('li');
const workBtn5 = document.createElement('button');
const workBtnDesc5 = document.createTextNode(projects[4].buttonDesc);
const arrowImg51 = document.createElement('img');
const arrowImg52 = document.createElement('img');

work5Img.src = projects[4].image;
work2Img.alt = projects[4]['workImg-alt'];
work5Title.textContent = projects[4].name;
[workDescItem51.textContent,
  workDescItem52.textContent,
  workDescItem53.textContent] = projects[4].technologies;
arrowImg51.src = projects[4].arrowImg1;
arrowImg51.alt = projects[4]['arrow-alt'];
arrowImg52.src = projects[4].arrowImg2;
arrowImg52.alt = projects[4]['arrow-alt'];

work5Fig.className = 'work5 work-cont work5-fig';
work5Img.classList.add('work-img');
work5Desc.className = 'work5 work-cont workDesc work5-desc visible';
container5.classList.add('container');
workDescList5.classList.add('workDesc-list');
workDescItem51.classList.add('workDesc-item');
workDescItem52.classList.add('workDesc-item');
workDescItem53.classList.add('workDesc-item');
workBtn5.className = 'workBtn btn-cont';
workBtn5.setAttribute('id', 'work5-btn');
arrowImg51.className = 'arrow-img visible';
arrowImg52.className = 'arrow-img invisible';

grid.append(work5Fig, work5Desc);
work5Fig.appendChild(work5Img);
work5Desc.appendChild(container5);
container5.append(work5Title, workDescList5, workBtn5);
workDescList5.append(workDescItem51, workDescItem52, workDescItem53);
workBtn5.append(workBtnDesc5, arrowImg51, arrowImg52);

// Project 6 elements and values

const work6Fig = document.createElement('figure');
const work6Img = document.createElement('img');
const work6Desc = document.createElement('div');
const container6 = document.createElement('div');
const work6Title = document.createElement('h3');
const workDescList6 = document.createElement('ul');
const workDescItem61 = document.createElement('li');
const workDescItem62 = document.createElement('li');
const workDescItem63 = document.createElement('li');
const workDescItem64 = document.createElement('li');
const listBtn = document.createElement('button');
const workBtn6 = document.createElement('button');
const workBtnDesc6 = document.createTextNode(projects[5].buttonDesc);
const arrowImg61 = document.createElement('img');
const arrowImg62 = document.createElement('img');

work6Fig.className = 'work6 work-cont work6-fig';
work6Img.classList.add('work-img');
work6Desc.className = 'work6 work-cont workDesc work6-desc';
container6.classList.add('container');
workDescList6.classList.add('workDesc-list');
workDescItem61.classList.add('workDesc-item');
workDescItem62.classList.add('workDesc-item');
workDescItem63.className = 'workDesc-item visible';
workDescItem64.className = 'workDesc-item invisible';
workBtn6.className = 'workBtn btn-cont';
workBtn6.setAttribute('id', 'work6-btn');
arrowImg61.className = 'arrow-img visible';
arrowImg62.className = 'arrow-img invisible';

grid.append(work6Fig, work6Desc);
work6Fig.appendChild(work6Img);
work6Desc.appendChild(container6);
container6.append(work6Title, workDescList6, workBtn6);
workDescList6.append(workDescItem61, workDescItem62, workDescItem63, workDescItem64);
workDescItem64.appendChild(listBtn);
workBtn6.append(workBtnDesc6, arrowImg61, arrowImg62);

listBtn.addEventListener('click', () => {
  workDescItem63.classList.toggle('visible');
  workDescItem64.classList.toggle('invisible');
  workDescItem64.classList.toggle('hidden');
});

work6Img.src = projects[5].image;
work2Img.alt = projects[5]['workImg-alt'];
work6Title.textContent = projects[5].name;
[workDescItem61.textContent,
  workDescItem62.textContent,
  workDescItem63.textContent] = projects[5].technologies;
listBtn.textContent = '+1';
arrowImg61.src = projects[5].arrowImg1;
arrowImg61.alt = projects[5]['arrow-alt'];
arrowImg62.src = projects[5].arrowImg2;
arrowImg62.alt = projects[5]['arrow-alt'];

// add background images

const geo1 = document.createElement('div');
const geo2 = document.createElement('div');
const geo3 = document.createElement('div');
const geo4 = document.createElement('div');
const geo5 = document.createElement('div');

geo1.className = 'geo1 invisible';
geo2.className = 'geo2 invisible';
geo3.className = 'geo3 invisible';
geo4.className = 'geo4 invisible';
geo5.className = 'geo5 invisible';

grid.append(geo1, geo2, geo3, geo4, geo5);

// open popup window script

const popupWin = document.getElementById('popup-window');
const body = document.getElementById('body');

function popup(n) {
  popupWin.classList.toggle('hidden');
  body.classList.toggle('blur');

  const container = document.getElementById('container');
  const smallContainer = document.createElement('main');
  const header = document.createElement('header');
  const headerBtn = document.createElement('button');
  const headerImg = document.createElement('img');
  const title = document.createElement('h2');
  const workDescList = document.createElement('ul');
  const workDescItem1 = document.createElement('li');
  const workDescItem2 = document.createElement('li');
  const workDescItem3 = document.createElement('li');
  const workImage = document.createElement('img');
  const workImage2 = document.createElement('img');
  const detailDesc = document.createElement('section');
  const projDesc1 = document.createElement('p');
  const projDesc2 = document.createElement('p');
  const btnContainer = document.createElement('div');
  const anchorLive = document.createElement('a');
  const btnLive = document.createElement('button');
  const liveText = document.createTextNode(projects[n].liveText);
  const liveImg1 = document.createElement('img');
  const liveImg2 = document.createElement('img');
  const anchorSource = document.createElement('a');
  const btnSource = document.createElement('button');
  const sourceText = document.createTextNode(projects[n].sourceText);
  const sourceImg1 = document.createElement('img');
  const sourceImg2 = document.createElement('img');
  const btnDirection = document.createElement('div');
  const btnPrev = document.createElement('button');
  const btnNext = document.createElement('button');

  container.appendChild(smallContainer);
  smallContainer.append(headerBtn, header, workImage, workImage2, detailDesc);
  headerBtn.appendChild(headerImg);
  header.append(title, workDescList);
  workDescList.append(workDescItem1, workDescItem2, workDescItem3);
  detailDesc.append(projDesc1, projDesc2, btnContainer, btnDirection);
  btnContainer.append(anchorLive, anchorSource);
  anchorLive.appendChild(btnLive);
  anchorSource.appendChild(btnSource);
  btnLive.append(liveText, liveImg1, liveImg2);
  btnSource.append(sourceText, sourceImg1, sourceImg2);
  btnDirection.append(btnPrev, btnNext);

  smallContainer.className = 'small-container';
  headerBtn.className = 'headerBtn';
  headerBtn.setAttribute('id', 'close-popup');
  header.className = 'header';
  title.className = 'title';
  workDescList.className = 'workDesc-list';
  workDescItem1.className = 'workDesc-item';
  workDescItem2.className = 'workDesc-item';
  workDescItem3.className = 'workDesc-item';
  workImage.className = 'work-image-all visible';
  workImage2.className = 'work-image-all invisible';
  detailDesc.className = 'detail-desc';
  btnContainer.className = 'btn-cont';
  btnLive.className = 'btn-desc';
  liveImg1.className = 'visible';
  liveImg2.className = 'invisible';
  btnSource.className = 'btn-desc';
  sourceImg1.className = 'visible';
  sourceImg2.className = 'invisible';
  btnDirection.className = 'direction-btn invisible';

  headerImg.src = projects[n].headerImg;
  headerImg.alt = projects[n]['headerImg-alt'];
  title.textContent = projects[n].name;
  [workDescItem1.textContent,
    workDescItem2.textContent,
    workDescItem3.textContent] = projects[n].technologies;
  workImage.src = projects[n].imageAll;
  workImage2.src = projects[n].imageAll2;
  projDesc1.textContent = projects[n].description1;
  projDesc2.textContent = projects[n].description2;
  anchorLive.href = projects[n].linkToLive;
  anchorSource.href = projects[n].linkToSource;
  anchorLive.setAttribute('target', '_blank');
  anchorSource.setAttribute('target', '_blank');
  liveImg1.src = projects[n].liveImg1;
  liveImg2.src = projects[n].liveImg2;
  sourceImg1.src = projects[n].sourceImg1;
  sourceImg2.src = projects[n].sourceImg2;
  btnPrev.textContent = 'Previous project';
  btnNext.textContent = 'Next project';

  // close popup script

  function closePopupFunc() {
    popupWin.classList.toggle('hidden');
    smallContainer.classList.toggle('hidden');
    body.classList.toggle('blur');
  }

  headerBtn.addEventListener('click', closePopupFunc);
}

function popupWindow1() {
  popup(0);
}

function popupWindow2() {
  popup(1);
}

function popupWindow3() {
  popup(2);
}

function popupWindow4() {
  popup(3);
}

function popupWindow5() {
  popup(4);
}

function popupWindow6() {
  popup(5);
}

workBtn.addEventListener('click', popupWindow1);
work1Img.addEventListener('click', popupWindow1);
workBtn2.addEventListener('click', popupWindow2);
work2Img.addEventListener('click', popupWindow2);
workBtn3.addEventListener('click', popupWindow3);
work3Img.addEventListener('click', popupWindow3);
workBtn4.addEventListener('click', popupWindow4);
work4Img.addEventListener('click', popupWindow4);
workBtn5.addEventListener('click', popupWindow5);
work5Img.addEventListener('click', popupWindow5);
workBtn6.addEventListener('click', popupWindow6);
work6Img.addEventListener('click', popupWindow6);