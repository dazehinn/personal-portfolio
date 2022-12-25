const detailBtns = document.querySelectorAll('.see-project');
const body = document.querySelector('body');

/* CREATION OF HTML ELEMENTS */

const popupOverlay = document.createElement('div');
popupOverlay.className = 'overlay';

const popupCard = document.createElement('div');
popupCard.classList.add('popup-card');

const popupDetails = document.createElement('div');
popupDetails.classList.add('popup-details');

const worksDescription = document.createElement('div');
worksDescription.classList.add('works-description');

const worksIntro = document.createElement('div');
worksIntro.classList.add('works-intro');

const popupHeader = document.createElement('div');
popupHeader.classList.add('popup-header');

const projectTitle = document.createElement('h2');
projectTitle.classList.add('project-title');
projectTitle.textContent = 'Multi-post Stories';

const popupCloseBtn = document.createElement('span');
popupCloseBtn.classList.add('popup-close-btn');
popupCloseBtn.innerHTML = '&times;';

const frame = document.createElement('div');
frame.classList.add('frame');

const client = document.createElement('span');
client.classList.add('client');
client.textContent = 'CANOPY';

const counter1 = document.createElement('img');
counter1.classList.add('counter');
counter1.src = 'img/Counter.png';

const role = document.createElement('span');
role.classList.add('role');
role.textContent = 'Back End Dev';

const counter2 = document.createElement('img');
counter2.classList.add('counter');
counter2.src = 'img/Counter.png';

const year = document.createElement('span');
year.classList.add('year');
year.textContent = '2015';

const snapshot = document.createElement('img');
snapshot.classList.add('snapshot');
snapshot.src = 'img/Snapshoot Portfolio (3).png';

const details = document.createElement('span');
details.classList.add('details');
details.textContent = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'";

const tags = document.createElement('ul');
tags.classList.add('tags');

const listItem1 = document.createElement('li');
listItem1.textContent = 'html';

const listItem2 = document.createElement('li');
listItem2.textContent = 'css';

const listItem3 = document.createElement('li');
listItem3.textContent = 'javascript';

const popupBtns = document.createElement('ul');
popupBtns.classList.add('popup-buttons');

const listBtn1 = document.createElement('li');
const seeBtn1 = document.createElement('button');
seeBtn1.classList.add('action-button', 'see-project', 'pop-click');
seeBtn1.textContent = 'See live';
const btnIcon1 = document.createElement('img');
btnIcon1.src = 'img/live-icon.svg';

const listBtn2 = document.createElement('li');
const seeBtn2 = document.createElement('button');
seeBtn2.classList.add('action-button', 'see-project', 'pop-click');
seeBtn2.textContent = 'See Source';
const btnIcon2 = document.createElement('img');
btnIcon2.src = 'img/github-button-icon.png';

/** APPENDING HTML ELEMENTS TO POPUP WINDOW */

body.appendChild(popupOverlay);
popupOverlay.appendChild(popupCard);
popupCard.appendChild(popupDetails);
popupDetails.appendChild(worksDescription);
worksDescription.appendChild(worksIntro);
worksIntro.append(popupHeader, frame, snapshot, details, tags, popupBtns);
popupHeader.appendChild(projectTitle);
popupHeader.appendChild(popupCloseBtn);
frame.append(client, counter1, role, counter2, year);
tags.append(listItem1, listItem2, listItem3);
popupBtns.append(listBtn1, listBtn2);
listBtn1.append(seeBtn1);
seeBtn1.append(btnIcon1);
listBtn2.append(seeBtn2);
seeBtn2.append(btnIcon2);

/* Action Listeners */

function openPopup() {
  popupOverlay.style.display = 'block';
}

function closePopup() {
  popupOverlay.style.display = 'none';
}

for (let i = 0; i < detailBtns.length; i += 1) {
  detailBtns[i].addEventListener('click', openPopup);
}

popupCloseBtn.addEventListener('click', closePopup);
