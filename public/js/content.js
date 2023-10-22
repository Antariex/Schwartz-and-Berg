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

            //Llama a la función después de cargar el documento
            document.addEventListener('DOMContentLoaded', function() {
                cambiarImagen();
            });

            // Función para cambiar la imagen cada 2 segundos
            function cambiarImagen() {
                imagenElement.src = imagenes[currentIndex];
                currentIndex = (currentIndex + 1) % imagenes.length;
            }

            // Establecer un intervalo para llamar a la función cada 2 segundos
            const intervalo = setInterval(cambiarImagen, 2000);

            // Detener el intervalo cuando sea necesario (por ejemplo, al hacer clic en la imagen)
            // imagenElement.addEventListener("click", () => {
            //     clearInterval(intervalo);});