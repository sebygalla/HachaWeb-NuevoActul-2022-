/* MENU HAMBURGUESA*/

const btnHamb = document.getElementById('hamb');
const menu = document.getElementById('menu');
const enlace = document.querySelector('.menu');




btnHamb.addEventListener('click', () => {
    menu.classList.toggle('menu-on')



});


/*al hacer click sobre un enlace se dirije a el y desaparece la lista de enlaces)*/

enlace.addEventListener('click', () => {


    enlace.classList.remove("menu-on");

});


/*BOTON DE IR ARRIBA */

const btnArriba = document.getElementById('ir_arriba_boton');

btnArriba.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});