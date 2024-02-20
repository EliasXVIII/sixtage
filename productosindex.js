const btnCart= document.querySelector('.contenedorcarroicono')
const contenedorCarroProducto = document.querySelector('.contenedorcarroproducto')

btnCart.addEventListener('click', ()=>{
    contenedorCarroProducto.classList.toggle ('hiddencarro')
}) 
/* hasta aqui toggle */




const carroInfo = document.querySelector ('.carroproducto');
const columnaCarro = document.querySelector ('.columnacarro');

/* lista de contenedores de productos */
const listaDeProductos = document.querySelector ('.contenedor-items')

/* variable de arreglo de productos */
let productosTodos = [];

const valorTotal = document.querySelector ('.total-pagar');

const contadorProductos = document.getElementById('#contadorproductos');

const carroVacio = document.querySelector ('.carrovacio');
const carroTotal = document.querySelector ('.total-carrito');
 
listaDeProductos.addEventListener ('click', e => {
    if(e.target.classList.contains('btnadd')){
    const producto = e.target.parentElement;

    const infoProducto = {
        quantity:1,
        title: producto.querySelector ('h2').texContent,
        price: producto.querySelector ('p').texContent,
    };
    const exits = productosTodos.some(
        producto => producto.title === infoProducto.title
    );
    
    if (exits){
        const productos = productosTodos.map(producto => {
            if (producto.title === infoProducto.title){
                producto.quantity++;
                return producto;
            }else {
                return producto;
            }
        });
        productosTodos = [...productos];
 }else{
        productosTodos = [... productosTodos, infoProducto];
     }
     showHTML ();
    }
});   

columnaCarro.addEventListener ('click', (e) => {
    if(e.target.classList.contains ('price')){
        const producto = e.target.parentElement;
        const title = producto.querySelector('p').texContent;

        productosTodos = productosTodos.filter (
            product => product.title !==title
        );
        console.log(productosTodos);
        showHTML();
    }
});


 const showHTML = () => {

   
    
    if(!productosTodos.length){
        carroVacio.classList.remove('hidden');
        columnaCarro.classList.add ('hidden');
        carroTotal.classList.add ('hidden');
    }else {
        carroVacio.classList.add ('hidden');
        columnaCarro.classList.remove('hidden');
        carroTotal.classList.remove ('hidden');
    } 
 
    /* limpieza html
 */
     columnaCarro.innerHTML = '';

    let total = 0;
    let totalDeProductos = 0;

     productosTodos.forEach(producto => {
        const contenedorproducto = document.createElement('div');
        contenedorproducto.classList.add('carroproducto');

        contenedorproducto.innerHTML = `
        <div class="infocarroproducto">
                   <span class="cantidad-producto-carrito">${producto.quantity}</span>
                   <p class="titulo-info-carrito">${producto.title}</p>
                   <span class="precio-producto-carrito">${producto.price}</span>
        </div>
        <img class="iconocruz" src="logo+iconos/cruz.svg" alt="">`;


        columnaCarro.append(contenedorproducto);
        total = 
            total + parseInt(producto.quantity * producto.price);
            totalDeProductos = totalDeProductos + producto.quantity;
    });
         valorTotal.innerText =` $$ {total}`;
         contadorProductos.innerText = totalDeProductos;
};

 