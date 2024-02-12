const menuNavE = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {
    menuNavE.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
    menuNavE.classList.remove("visible");
})