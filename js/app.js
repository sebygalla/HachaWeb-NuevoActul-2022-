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



/*MODAL*/

let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.button')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];


abrir.addEventListener('click', function (e) {
    e.preventDefault();
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', function () {
    modal.classList.toggle('modal-close');

    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';

    }, 850);
});

window.addEventListener('click', function (e) {
    if (e.target == modalC) {
        modal.classList.toggle('modal-close');

        setTimeout(function () {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';

        }, 850);
    }
});