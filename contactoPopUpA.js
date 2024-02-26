/* document.querySelector("#muestraFormularioA").addEventListener("click",function(){
    document.querySelector(".formularioPopUpA").classList.add("active");
});

document.querySelector(".formularioPopUpA .botonCerrarPopupA").addEventListener("click",function(){
    document.querySelector(".formularioPopUpA").classList.remove("active");
}); */

function toggle() {
    var blur = document.getElementById('blurA');
    blur.classList.toggle('active');
    var popup = document.getElementById('popupBA');
    popup.classList.toggle('active');
  }

  // ---------------- PopUp Main Email --------