const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-items a');
const hamburgerBtn = document.querySelector('.hamburger');

const closeBtn = document.createElement('img');
closeBtn.src = 'img/toolbar.png';
closeBtn.style.position = 'fixed';
closeBtn.style.top = '25px';
closeBtn.style.right = '10px';
closeBtn.style.pointer = 'cursor';

function openMenu() {
  navItems.style.display = 'block';
  navItems.style.width = '100%';
  navItems.style.height = '100%';
  navItems.style.backgroundColor = '#396df2';
  navItems.style.opacity = 0.9;
  navItems.style.zIndex = 9;
  navItems.style.position = 'fixed';
  navItems.style.top = 0;
  navItems.style.left = 0;
  navItems.style.padding = '24px';
  hamburgerBtn.style.display = 'none';
  navItems.appendChild(closeBtn);
  closeBtn.style.display = 'initial';

  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].style.display = 'block';
  }
}

function closeMenu() {
  closeBtn.style.display = 'none';
  hamburgerBtn.style.display = 'initial';
  navItems.style.width = '0%';
  navItems.style.height = '0%';
  navItems.style.backgroundColor = 'transparent';
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].style.display = 'none';
  }
}

hamburgerBtn.addEventListener('click', openMenu);
navLinks[0].addEventListener('click', closeMenu);
navLinks[1].addEventListener('click', closeMenu);
navLinks[2].addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeMenu);
