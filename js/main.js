let navlinks = document.getElementsByClassName('nav-link');
let navbar = document.getElementsByClassName('navbar')[0];
let hamburger = document.getElementsByClassName('hamburger')[0];

Array.from(navlinks).forEach(function (navlink) {
  navlink.addEventListener('mouseover', function () {
    for (let i = 0; i < navlinks.length; i++) {
      let arrow = navlink.getElementsByClassName('arrow');
      for (let j = 0; j < arrow.length; j++) {
        arrow[j].style.transform = 'rotate(180deg)';
      }
    }
  });
  navlink.addEventListener('mouseout', function () {
    for (let i = 0; i < navlinks.length; i++) {
      let arrow = navlink.getElementsByClassName('arrow');
      for (let j = 0; j < arrow.length; j++) {
        arrow[j].style.transform = '';
      }
    }
  });
});

function navbarDisplayToggle() {
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
  hamburger.classList.toggle('toggle');
}

hamburger.addEventListener('click', navbarDisplayToggle);
