// Flecha de desplazamiento

document.addEventListener("DOMContentLoaded", function () {
    const btnSubir = document.getElementById("btnSubir");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
            btnSubir.style.display = "block";
        } else {
            btnSubir.style.display = "none";
        }
    };

    btnSubir.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});


// Efecto hidden


document.addEventListener("DOMContentLoaded", function() {
    // Obtener el footer
    const footer = document.querySelector(".footer");

    // Función para verificar si el footer está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Escuchar el evento de scroll
    window.addEventListener("scroll", function() {
        // Si el footer está en el viewport y todavía tiene la clase 'footer-hidden'
        if (isInViewport(footer) && footer.classList.contains("footer-hidden")) {
            footer.classList.remove("footer-hidden");
            footer.classList.add("footer-visible");
        }
    });
});
