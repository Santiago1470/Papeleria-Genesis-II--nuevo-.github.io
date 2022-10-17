
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