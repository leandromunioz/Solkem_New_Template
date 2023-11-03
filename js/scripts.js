
$(document).ready(function () {
  $('#miTabla').DataTable();
});



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



//NavBar flotante


window.onscroll = function () {
  var navbar = document.querySelector('.navbar');
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
};

