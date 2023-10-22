// Obtenemos elementos del DOM
const menuIcon = document.getElementById("menu-icon");
const menuMobile = document.getElementById("mobile-menu");

// Función para mostrar u ocultar el menú y agregar/quitar la clase "active"
function toggleMenu() {
    if (menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active");
        menuIcon.textContent = "menu";
         // Quita la clase "active" para ocultar el menú
    } else {
        menuMobile.classList.add("active");
        menuIcon.textContent = "close"; // Agrega la clase "active" para mostrar el menú
    }
}

// Agregar un evento de clic al icono del menú
menuIcon.addEventListener("click", toggleMenu);