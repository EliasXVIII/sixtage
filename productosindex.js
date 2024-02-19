const btnCart= document.querySelector('.contenedorcarroicono')
const contenedorCarroProducto = document.querySelector('.contenedorcarroproducto')

btnCart.addEventListener('click', ()=>{
    contenedorCarroProducto.classList.toggle ('hiddencarro')
}) 

const carroInfo = document.querySelector ('carroproducto')
const columnaCarro = document.querySelector ('columnacarro')

/* lista de contenedores de productos */
const listaDeProductos = document.querySelector ('.contenedor-items')

/* variable de arreglo de productos */
let todoslosproductos =[];

const valorTotal = document.querySelector ('.total-pagar');

const contadorProductos = document.querySelector ('#contadorproductos');

const carroVacio = document.querySelector ('.carrovacio');
const carroTotal = document.querySelector ('.totalcarrito');


listaDeProductos.addEventListener ('click', e => {
    if(e.target.classList.contains('btnañadir')){
    const producto = e.target.parentElement;

    const infoProducto = {
        quantity:1,
        title: producto.querySelector ('h2').texContent,
        price: producto.querySelector ('p').texContent,
    };
    const exits = productosTodos.some(
        producto =>producto.title=== infoProducto.title
    );
    
    if (exits){
        const productos = productosTodos.map (producto => {
            if (producto.title === infoProducto.title){
                producto.quantity++;
                return producto;
            }else {
                return producto;
            }
        });
        productosTodos =[...productos];
     }else{
        productosTodos = [... productosTodos, infoProducto];
     }
     showHTML ();
    }
});   

columnaCarro. addEventListener ('click', e =>{
    if(e.target.classList.contains ('iconocruz')){
        const producto = e. target.parentElement;
        const title = producto.querySelector('p').texContent;

        productosTodos = productosTodos.filter (
            producto => producto.title ==title
        );
        console.log(productosTodos);
        showHTML();
    }
});

/* funcion para ver en html */
const showHTML = ()=>{
    if(productosTodos.length){
        carroVacio.classList.remove('hidden');
        columnaCarro.classList.add ('hidden');
        carroTotal.classList.add ('hidden');
    }else {
        carroVacio.classList.add ('hidden');
        columnaCarro.classList.remove('hidden');
    }
 
    /* limpieza html
 */
    columnaCarro.innerHTML = '';


}

