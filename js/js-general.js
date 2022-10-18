
var logoMenu = document.getElementById("logo-menu-desplegable");

logoMenu.addEventListener("click", abrirMenu);

function abrirMenu() {
    logoMenu.style.visibility = "hidden";
    logoPapeleria = document.getElementById("contenedor-logo-papeleria").style.visibility = "hidden";
    contenedorMenu = document.getElementById("contenedor-menu-desplegable").style.display = "block";
    contenedorMenu = document.getElementById("contenedor-menu-desplegable").style.animation = "mover-menu-desplegable 800ms";
}

var equisCerrarMenu = document.getElementById("salir-menu-desplegado");

equisCerrarMenu.addEventListener("click", cerrarMenu)

function cerrarMenu() {
    logoMenu.style.visibility = "visible";
    logoPapeleria = document.getElementById("contenedor-logo-papeleria").style.visibility = "visible";
    contenedorMenu = document.getElementById("contenedor-menu-desplegable").style.animation = "cerrar-menu-desplegado 800ms";
    setTimeout(animacionDeCerrarMenu, 700);
}

function animacionDeCerrarMenu() {
    contenedorMenu = document.getElementById("contenedor-menu-desplegable").style.display = "none";
}

var opcionVerMas = document.getElementById("nav-mas");
var contador = 0;

opcionVerMas.addEventListener("click", abrirMenuMas);

function abrirMenuMas() {
    contador = contador + 1;

    if (contador % 2 == 0) {
        contenedorMenuMas = document.getElementById("menu-mas").style.transform = "translateY(-50px)";
        contenedorMenuMas = document.getElementById("menu-mas").style.transition = "ease 500ms";    

        flechaArriba = document.getElementById("flecha-arriba-menu-mas").style.display = "none";
        flechaArriba = document.getElementById("flecha-abajo-menu-mas").style.display = "block";
    } else {
        contenedorMenuMas = document.getElementById("menu-mas").style.transform = "translateY(50px)";
        contenedorMenuMas = document.getElementById("menu-mas").style.transition = "all ease 500ms";
        flechaAbajo = document.getElementById("flecha-arriba-menu-mas").style.display = "block";
        flechaAbajo = document.getElementById("flecha-abajo-menu-mas").style.display = "none";
    }
}