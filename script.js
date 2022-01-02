const hamburger = document.querySelector('.hamburger')
const navPages = document.querySelector('.nav__pages')
const navLink = document.querySelectorAll('.nav__link')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle('active')
  navPages.classList.toggle('active')
}

navLink.forEach((n) => n.addEventListener('click', closeMenu))

function closeMenu() {
  hamburger.classList.remove('active')
  navPages.classList.remove('active')
}
