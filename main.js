const $menuIcon = document.querySelector('.menu-icon')
const $closeIcon = document.querySelector('.close-icon')
const $sidebar = document.querySelector('.sidebar')

$menuIcon.addEventListener('click', () => {
  $sidebar.classList.toggle('u-show')
})

$closeIcon.addEventListener('click', () => {
  $sidebar.classList.toggle('u-show')
})