const navToggle = document.querySelector('.nav-toggle')
const navigation = document.querySelector('.navigation')
const toggleIcon = document.getElementById('toggle-icon')

navToggle.addEventListener('click', () => {
    
    if(navigation.hasAttribute('data-visible')){
        navToggle.setAttribute('aria-expanded', false)
        toggleIcon.src = "./assets/image/icon-menu.svg"
        toggleIcon.classList = 'hamburger'
    }
   else{
    navToggle.setAttribute('aria-expanded', true)
    toggleIcon.src = "./assets/images/icon-menu-close.svg"
    toggleIcon.classList = "icon-close"
   }
   navigation.toggleAttribute('data-visible')
})