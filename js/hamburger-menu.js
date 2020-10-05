// This is the code for the hamburger menu
const circle = document.querySelector('.circle-box')

const text = document.querySelector('.nav-links')

const burger = document.querySelector('.burger-menu')

circle.addEventListener('click', function(){
        circle.classList.toggle('toggle')
        burger.classList.toggle('hamburger')
        text.classList.toggle('appear')
})
// ----------------------------------------
