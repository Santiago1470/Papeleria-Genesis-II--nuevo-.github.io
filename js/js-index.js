var bloqueoMapa = document.getElementById("bloquear-mapa");
var opcionDesbloqueo = document.getElementById("opcionDesbloqueo");

bloqueoMapa.addEventListener("click", desbloquearMapa);
opcionDesbloqueo.addEventListener("click", bloquearMapa);

function desbloquearMapa() {
    bloqueoMapa.style.display = "none";
}

function bloquearMapa() {
    bloqueoMapa.style.display = "flex";
}