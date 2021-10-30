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


/*BOTON DE IR ARRIBA Y BARRA SUPERIOR DE SCROLL*/

addEventListener('DOMContentLoaded', () => {

    const boton_ir_arriba = document.querySelector('#ir_arriba_boton')
    const barra_indicador = document.querySelector('.indicador_scroll')

    /*OBTENER LA CANTIDAD DE PIXELES QUE SE DESPLAZAN EN EL SCROLL*/

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    /*VERIFICAR SI EL SCROLL ESTA EN EL PUNTO DE INICIO*/

    const irArriba = () => {

        if (obtener_pixeles_inicio() > 0) {
            requestAnimationFrame(irArriba)
            scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 1))
        }
    }

    const indicarScroll = () => {

        if (obtener_pixeles_inicio() > 50) {
            boton_ir_arriba.className = 'mostrar'
        } else {
            boton_ir_arriba.className = 'ocultar'
        }

        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight

        let avance_scroll = (obtener_pixeles_inicio() / alto) * 10
        barra_indicador.style.width = `${avance_scroll}%`     
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicarScroll)
})