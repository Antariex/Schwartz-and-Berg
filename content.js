// Hero image changer
            // Arreglo de rutas de las imágenes que deseas mostrar
            const imagenes = [
                "./images/hotpastrami.jpg",
                "./images/vareniques.jpg",
                "./images/ribs.jpg",
                "./images/burguer.jpg",
                "./images/goulash.jpg",
                "./images/chessecake.jpg"
            ];

            const imagenElement = document.getElementById("imagenReemplazar");
            let currentIndex = 0;

            // Función para cambiar la imagen cada 3 segundos
            function cambiarImagen() {
                imagenElement.src = imagenes[currentIndex];
                currentIndex = (currentIndex + 1) % imagenes.length;
            }

            // Establecer un intervalo para llamar a la función cada 3 segundos
            const intervalo = setInterval(cambiarImagen, 2000);

            // Detener el intervalo cuando sea necesario (por ejemplo, al hacer clic en la imagen)
            // imagenElement.addEventListener("click", () => {
            //     clearInterval(intervalo);});

// Obtenemos elementos del DOM
const menuIcon = document.getElementById("menu-icon");
const menuMobile = document.getElementById("mobile-menu");

// Función para mostrar u ocultar el menú y agregar/quitar la clase "active"
function toggleMenu() {
    if (menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active"); // Quita la clase "active" para ocultar el menú
    } else {
        menuMobile.classList.add("active"); // Agrega la clase "active" para mostrar el menú
    }
}

// Agregar un evento de clic al icono del menú
menuIcon.addEventListener("click", toggleMenu);