const btn = document.querySelector(".hamburger");
let navbar = document.querySelector('nav');
let navlink = document.querySelectorAll('.nav-items a')
let hamburgerImage = document.querySelector('.hamburger-img')

btn.addEventListener('click', openMenu,false);




function openMenu() {
  if (navbar.style.height == 'initial')
  navbar.style.height = '100%';
  else 
  navbar.style.height = 'initial';
  
  if (navbar.style.backgroundColor == 'transparent')
  navbar.style.backgroundColor = '#396df2'
  else
  navbar.style.backgroundColor = 'transparent';

  for (let i = 0; i < navlink.length; i++) {
    if (navlink[i].style.display == 'none')
    navlink[i].style.display = 'block';
    else
    navlink[i].style.display = 'none';
  }

  if ( hamburgerImage.src == 'img/html5-icon.png') {
   hamburgerImage.src = 'img/css-icon.png'
  console.log("ham")
}
  else {
  hamburgerImage.src = 'img/html5-icon.png';
  console.log("hamburger");
 }
}