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
