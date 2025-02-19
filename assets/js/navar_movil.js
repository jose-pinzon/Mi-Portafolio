const menu_movil = document.querySelector('.menu-mobile')

let countClick = true


btn_movil.addEventListener('click', () => {
    
    if( countClick ){
        menu_movil.style.transform = 'translateX(0rem)'
        countClick = false
    }else{
        menu_movil.style.transform = 'translateX(-32rem)'
        countClick = true
    }
})

btnMobilCLose.addEventListener('click', () => {
    menu_movil.style.transform = 'translateX(-32rem)'
})