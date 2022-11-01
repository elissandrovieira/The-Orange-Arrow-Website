let mobileMenu = document.querySelector('.navigation')
let btnMobile = document.querySelector('.btn-mobile')
let btnClose = document.querySelector('.btn-close')



btnMobile.addEventListener('click', function(){
    mobileMenu.classList.add('open')
})


btnClose.addEventListener('click', function(){
    mobileMenu.classList.remove('open') 
})