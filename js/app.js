const navegadorBotones = document.querySelector("#navegador--botones");
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const cerrarMenu1 = document.querySelector("#cerrar-menu1");

abrirMenu.addEventListener("click", () =>{
    navegadorBotones.classList.add("visible");
});

cerrarMenu.addEventListener("click", () =>{
    navegadorBotones.classList.remove("visible");
});
cerrarMenu1.addEventListener("click", () =>{
    navegadorBotones.classList.remove("visible");
});