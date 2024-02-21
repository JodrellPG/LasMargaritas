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

/*###################################### */

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



document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery .fotos-item");
    const popup = document.querySelector(".popup-image");
    const expandedImg = document.querySelector(".popup-image img");
    const prevButton = document.querySelector(".popup-image .prev");
    const nextButton = document.querySelector(".popup-image .next");

    let currentIndex = 0;
    let startX;

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            showImage(index);
        });
    });

    popup.addEventListener("mousedown", handleMouseDown);
    popup.addEventListener("mousemove", handleMouseMove);
    popup.addEventListener("mouseup", handleMouseUp);

    popup.addEventListener("click", (event) => {
        if (event.target === popup || event.target.tagName.toLowerCase() === "span") {
            popup.style.display = "none";
        }
    });

    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);

    function showImage(index) {
        expandedImg.src = images[index].getAttribute("src");
        popup.style.display = "flex";
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    }

    function showNextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    }

    function handleMouseDown(event) {
        startX = event.clientX;
    }

    function handleMouseMove(event) {
        if (startX === undefined) return;
        const currentX = event.clientX;
        const difference = startX - currentX;

        if (Math.abs(difference) > 50) {
            if (difference > 0 && currentIndex < images.length - 1) {
                // Mover a la siguiente imagen
                currentIndex++;
                showImage(currentIndex);
                startX = undefined;
            } else if (difference < 0 && currentIndex > 0) {
                // Mover a la imagen anterior
                currentIndex--;
                showImage(currentIndex);
                startX = undefined;
            }
        }
    }

    function handleMouseUp() {
        startX = undefined;
    }
});