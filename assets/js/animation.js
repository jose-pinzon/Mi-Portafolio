
document.addEventListener('DOMContentLoaded', () => {

 let myName = document.querySelector('.info__myname')
 let carrer = document.querySelector('.info__carrer')

 myName.addEventListener('animationend', () => {
    myName.style.border = 'none'
    carrer.style.display = 'inline-block'
    carrer.style.animation = 'escribir2 2s steps(50)'
 })

 carrer.addEventListener('animationend', () => {
    carrer.style.animation = 'efecto .5s step-end infinite alternate'
 })


  // !Animacion para la parte de habilidades

  const skills = document.querySelectorAll('.container__skill')

 for (const el of skills) {
   
      const height = el.clientHeight
      const widht = el.clientWidth

      el.addEventListener('mousemove',( e ) => {
            const { layerX, layerY} = e
            const yRotation = (
               (layerX - widht) / 2 / widht  
            ) * 20
            
            const xRotation = (
               (layerY - height) / 2 / height  
            ) * 20
            
            const string = `
               perspective(500px)
               scale(1.1)
               rotateX(${xRotation}deg)
               rotateY(${yRotation}deg)
            `
            
            el.style.transform = string
      })

      el.addEventListener('mouseout', ()=> {
               el.style.transform =  `
               perspective(500px)
               scale(1)
               rotateX(0)
               rotateY(0)
            `
         })

   }


})
    

