


const li = document.querySelectorAll('.nav__item')

const li_clon = li.cloneNode(true)

const navar_movil = document.querySelector('.menu-mobile__list')



    for (let i = 0; i < li_clon.length; i++) {

        const element = li_clon[i];

        element.className = 'menu-mobile__item'
        element.children[0].className = 'menu-mobile--link'

        navar_movil.append(element)

    }


/////////////////////// Mostrar y ocultar barra ////////////////////

const menu_movil = document.querySelector('.menu-mobile')
const btn_movil = document.querySelector('.mobile-btn__wrap')


btn_movil.addEventListener("click", (e) => {
    console.log('se preciono');
})






