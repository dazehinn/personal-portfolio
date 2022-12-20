const btn = document.querySelector('.hamburger');

const navbar = document.querySelector('nav');

const navlink = document.querySelectorAll('.nav-items a');
const hamburgerImage = document.querySelector('.hamburger-img');

function openMenu() {
  if (navbar.style.height === 'initial') {
    navbar.style.height = '100%';
  } else {
    navbar.style.height = 'initial';
  }
  if (navbar.style.backgroundColor === 'transparent') {
    navbar.style.backgroundColor = '#396df2';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }

  for (let i = 0; i < navlink.length; i += 1) {
    if (navlink[i].style.display === 'none') {
      navlink[i].style.display = 'block';
    } else {
      navlink[i].style.display = 'none';
    }
  }

  if (hamburgerImage.src === 'img/enabled.png') {
    hamburgerImage.src = 'img/Toolbar.png';
  } else {
    hamburgerImage.src = 'img/toolbar.png';
  }
}

function closeMenu() {
  navlink[0].style.display = 'none';
  navlink[1].style.display = 'none';
  navlink[2].style.display = 'none';
  hamburgerImage.src = 'img/Enabled.png';
  navbar.style.height = 'initial';
  navbar.style.backgroundColor = 'transparent';
}

btn.addEventListener('click', openMenu, false);

navlink[0].addEventListener('click', closeMenu);
navlink[1].addEventListener('click', closeMenu);
navlink[2].addEventListener('click', closeMenu);