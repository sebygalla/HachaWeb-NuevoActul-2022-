
/* MENU HAMBURGUESA*/

const btnHamb= document.getElementById('hamb');
const menu= document.getElementById('menu');
const enlace= document.querySelector('.menu');




btnHamb.addEventListener('click', ()=>{
    menu.classList.toggle('menu-on')

  
     
});


/*al hacer click sobre un enlace se dirije a el y desaparece la lista de enlaces)*/

enlace.addEventListener('click', ()=>{
    
    
    enlace.classList.remove("menu-on");

});


