document.querySelector("#muestraFormularioA").addEventListener("click",function(){
    document.querySelector(".formularioPopUpA").classList.add("active");
});

document.querySelector(".formularioPopUpA .botonCerrarPopupA").addEventListener("click",function(){
    document.querySelector(".formularioPopUpA").classList.remove("active");
});