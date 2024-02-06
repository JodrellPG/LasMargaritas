//FUNCIONES PARA QUE CUANDO SE ABRA EL MENU NO SE HAGA SCROLL PARA ABAJO
function disableScroll() {
    // Guarda la posición especifica
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // Si el evento se activa, setea la misma posición
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}

const navegadorBotones = document.querySelector("#navegador--botones");
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const cerrarMenu1 = document.querySelector("#cerrar-menu1");

abrirMenu.addEventListener("click", () =>{
    navegadorBotones.classList.add("visible");
    disableScroll();
});
cerrarMenu.addEventListener("click", () =>{
    navegadorBotones.classList.remove("visible");
    enableScroll();
});
cerrarMenu1.addEventListener("click", () =>{
    navegadorBotones.classList.remove("visible");
    enableScroll();
});
