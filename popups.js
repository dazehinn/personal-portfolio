const projects = [
  {
    id: 'popup1',
    Title: 'Tonic',
    closeButt: '&times;',
    Client: 'CANOPY',
    counter1: 'img/Counter.png',
    Role: 'Back End Dev',
    counter2: 'img/Counter.png',
    year: '2015',
    snapshot: 'img/Snapshoot Portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
    badges: ['html', 'Ruby on rail', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },

  {
    id: 'popup2',
    Title: 'Multi-Post Stories',
    closeButt: '&times;',
    Client: 'FACEBOOK',
    counter1: 'img/Counter.png',
    Role: 'Full Stack Dev',
    counter2: 'img/Counter.png',
    year: '2015',
    snapshot: 'img/Snapshoot Portfolio (1).png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
    badges: ['html', 'Ruby on rail', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },

  {
    id: 'popup2',
    Title: 'Facebook 360',
    closeButt: '&times;',
    Client: 'FACEBOOK',
    counter1: 'img/Counter.png',
    Role: 'Full Stack Dev',
    counter2: 'img/Counter.png',
    year: '2015',
    snapshot: 'img/Snapshoot Portfolio (2).png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
    badges: ['html', 'Ruby on rail', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },

  {
    id: 'popup4',
    Title: 'Uber Navigation',
    closeButt: '&times;',
    Client: 'Uber',
    counter1: 'img/Counter.png',
    Role: 'Lead Developer',
    counter2: 'img/Counter.png',
    year: '2018',
    snapshot: 'img/Snapshoot Portfolio (3).png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'",
    badges: ['html', 'Ruby on rail', 'css', 'javascript'],
    liveBtn: 'See live',
    sourceBtn: 'See Source',
  },
];

const modalArray = [];
for (let i = 0; i < projects.length; i += 1) {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  // Check if the media query is true
  if (mediaQuery.matches) {
    const modal = document.createElement('div');
    modal.classList.add('closePopup');
    const modalPty = {
      display: 'none',
      backgroundColor: '#c1c7d0',
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9,
      overflow: 'auto',
      padding: '16px',
    };
    Object.assign(modal.style, modalPty);

    const card = document.createElement('div');
    const cardPty = {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      padding: '12px',
      opacity: 1,
    };
    Object.assign(card.style, cardPty);

    modal.appendChild(card);

    const title = document.createElement('h2');
    title.textContent = projects[i].Title;
    const titlePty = {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      color: '#172b4d',
    };
    Object.assign(title.style, titlePty);

    const closeButt = document.createElement('span');
    closeButt.innerHTML = projects[i].closeButt;
    const closeButtPty = {
      color: '#67798e',
      fontSize: '24px',
      fontWeight: '900',
      position: 'absolute',
      top: '35px',
      right: '32px',
    };
    Object.assign(closeButt.style, closeButtPty);

    card.append(title, closeButt);

    const counter1Img = document.createElement('img');
    counter1Img.src = projects[i].counter1;
    counter1Img.style.marginLeft = '5px';
    counter1Img.style.marginRight = '5px';

    const counter2Img = document.createElement('img');
    counter2Img.src = projects[i].counter2;
    counter2Img.style.marginLeft = '5px';
    counter2Img.style.marginRight = '5px';

    const positions = document.createElement('div');
    const positionsPty = {
      fontFamily: "'Poppins', sansSerif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '13px',
      color: '#344563',
      margin: '12px 0',
    };
    Object.assign(positions.style, positionsPty);

    positions.append(projects[i].Client, counter1Img, projects[i].Role, counter2Img,
      projects[i].year);

    card.appendChild(positions);

    const snapshot = document.createElement('img');
    snapshot.src = projects[i].snapshot;

    card.append(snapshot);

    const description = document.createElement('p');
    description.textContent = projects[i].description;
    description.style.marginTop = '12px';
    description.style.marginBottom = '24px';
    card.append(description);

    const badges = document.createElement('ul');

    for (let j = 0; j < projects[i].badges.length; j += 1) {
      const li = document.createElement('li');
      li.textContent = projects[i].badges[j];

      const liPty = {
        padding: '4px 12px',
        background: '#ebebff',
        borderRadius: '8px',
        fontFamily: "'Poppins', sans-serif",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.03em',
        color: '#6070ff',
        margin: '5px',
      };
      Object.assign(li.style, liPty);

      badges.append(li);
    }
    card.append(badges);

    const btnArea = document.createElement('div');
    const btnAreaPty = {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '24px',
    };
    Object.assign(btnArea.style, btnAreaPty);
    card.append(btnArea);

    const liveIcon = document.createElement('img');
    liveIcon.src = 'img/live-icon.svg';
    const liveBtn = document.createElement('button');
    liveBtn.textContent = projects[i].liveBtn;
    liveBtn.style.width = '130px';
    liveBtn.append(liveIcon);
    const liveBtnPty = {
      padding: '12px',
      border: '1px solid #6070ff',
      borderRadius: '8px',
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17px',
      color: '#396df2',
      textAlign: 'center',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-around',
    };
    Object.assign(liveBtn.style, liveBtnPty);
    btnArea.append(liveBtn);

    const sourceIcon = document.createElement('img');
    sourceIcon.src = 'img/source-icon.png';
    const sourceBtn = document.createElement('button');
    sourceBtn.textContent = projects[i].sourceBtn;
    sourceBtn.style.width = '146px';
    sourceBtn.append(sourceIcon);
    Object.assign(sourceBtn.style, liveBtnPty);
    btnArea.append(sourceBtn);

    modalArray.push(modal);

    document.querySelector('body').appendChild(modal);

    closeButt.addEventListener('click', () => { modalArray[i].classList.remove('openPopup'); modalArray[i].classList.add('closePopup'); });

    const seeProject = document.querySelectorAll('.see-project');
    seeProject[i].addEventListener('click', () => { modalArray[i].classList.remove('closePopup'); modalArray[i].classList.add('openPopup'); });
  } else {
    const modal = document.createElement('div');
    modal.classList.add('closePopup');
    const modalPty = {
      backgroundColor: '#c1c7d0',

      height: '100%',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9,
      padding: '16px',
      overflow: 'auto',
    };
    Object.assign(modal.style, modalPty);

    const card = document.createElement('div');
    const cardPty = {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      padding: '12px',
      opacity: 1,
    };
    Object.assign(card.style, cardPty);

    modal.appendChild(card);

    const title = document.createElement('h2');
    title.textContent = projects[i].Title;
    const titlePty = {
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      color: '#172b4d',
    };
    Object.assign(title.style, titlePty);

    const closeButt = document.createElement('span');
    closeButt.innerHTML = projects[i].closeButt;
    const closeButtPty = {
      color: '#67798e',
      fontSize: '24px',
      fontWeight: '900',
      position: 'absolute',
      top: '35px',
      right: '32px',
    };
    Object.assign(closeButt.style, closeButtPty);

    card.append(title, closeButt);

    const counter1Img = document.createElement('img');
    counter1Img.src = projects[i].counter1;
    counter1Img.style.marginLeft = '5px';
    counter1Img.style.marginRight = '5px';

    const counter2Img = document.createElement('img');
    counter2Img.src = projects[i].counter2;
    counter2Img.style.marginLeft = '5px';
    counter2Img.style.marginRight = '5px';

    const positions = document.createElement('div');
    const positionsPty = {
      fontFamily: "'Poppins', sansSerif",
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '13px',
      color: '#344563',
      margin: '12px 0',
    };
    Object.assign(positions.style, positionsPty);

    positions.append(projects[i].Client, counter1Img, projects[i].Role, counter2Img,
      projects[i].year);

    card.appendChild(positions);

    const snapshot = document.createElement('img');
    snapshot.src = projects[i].snapshot;
    snapshot.style.width = '586px';
    snapshot.style.marginLeft = 'auto';
    snapshot.style.marginRight = 'auto';

    card.append(snapshot);

    const leftOverSpace = document.createElement('div');
    leftOverSpace.style.display = 'flex';
    card.append(leftOverSpace);

    const description = document.createElement('p');
    description.textContent = projects[i].description;
    description.style.marginTop = '12px';
    description.style.marginBottom = '24px';
    description.style.width = '500px';
    leftOverSpace.append(description);

    const badges = document.createElement('ul');

    for (let j = 0; j < projects[i].badges.length; j += 1) {
      const li = document.createElement('li');
      li.textContent = projects[i].badges[j];

      const liPty = {
        padding: '4px 12px',
        background: '#ebebff',
        borderRadius: '8px',
        fontFamily: "'Poppins', sans-serif",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.03em',
        color: '#6070ff',
        margin: '5px',
      };
      Object.assign(li.style, liPty);

      badges.append(li);
    }

    const rightBlock = document.createElement('div');
    rightBlock.style.display = 'flex';
    rightBlock.style.flexDirection = 'column';
    rightBlock.append(badges);

    const btnArea = document.createElement('div');
    const btnAreaPty = {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '24px',
    };
    Object.assign(btnArea.style, btnAreaPty);
    rightBlock.append(btnArea);

    const liveIcon = document.createElement('img');
    liveIcon.src = 'img/live-icon.svg';
    const liveBtn = document.createElement('button');
    liveBtn.textContent = projects[i].liveBtn;
    liveBtn.style.width = '130px';
    liveBtn.append(liveIcon);
    const liveBtnPty = {
      padding: '12px',
      border: '1px solid #6070ff',
      borderRadius: '8px',
      fontFamily: "'Poppins', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17px',
      color: '#396df2',
      textAlign: 'center',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-around',
    };
    Object.assign(liveBtn.style, liveBtnPty);
    btnArea.append(liveBtn);

    const sourceIcon = document.createElement('img');
    sourceIcon.src = 'img/source-icon.png';
    const sourceBtn = document.createElement('button');
    sourceBtn.textContent = projects[i].sourceBtn;
    sourceBtn.style.width = '146px';
    sourceBtn.append(sourceIcon);
    Object.assign(sourceBtn.style, liveBtnPty);
    btnArea.append(sourceBtn);
    leftOverSpace.append(rightBlock);

    modalArray.push(modal);

    document.querySelector('body').appendChild(modal);

    closeButt.addEventListener('click', () => { modalArray[i].classList.remove('openPopup'); modalArray[i].classList.add('closePopup'); });
    const seeProject = document.querySelectorAll('.see-project');
    seeProject[i].addEventListener('click', () => { modalArray[i].classList.remove('closePopup'); modalArray[i].classList.add('openPopup'); });
  }
}
