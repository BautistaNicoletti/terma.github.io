const btnToggle = document.querySelector('.btn__toggle'),
btnClose = document.querySelector('.btn__close'),
menu = document.querySelector('.links')

btnToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
})

btnClose.addEventListener("click", () => {
    menu.classList.remove("active");
})

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -25

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})

window.onscroll = function() {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById('header');

    if(scroll > 20) {
        header.classList.add('header_mod');
    } else {
        header.classList.remove('header_mod');
    }
}