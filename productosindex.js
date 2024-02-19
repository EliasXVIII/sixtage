const btnCart= document.querySelector('.contenedorcarroicono')
const contenedorCarroProducto = document.querySelector('.contenedorcarroproducto')

btnCart.addEventListener('click', ()=>{
    contenedorCarroProducto.classList.toggle ('hiddencarro')
}) 