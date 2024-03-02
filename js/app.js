const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //carrito vacio

const getProducts =  async() => {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
    //El async es para recorrer el array json
//al forEach le cambio a data.ForEach para que se ejecute cada uno de los elementos del array

        data.forEach((product) => {                 
        let content = document.createElement("div"); 
        content.className= "card";
        content.innerHTML = `
            <img src="${product.img}">                
            <h3>${product.nombre}</h3>
            <p> ${product.precio} €</p>
            `;
    
        shopContent.append(content); 
    
        let comprar = document.createElement("button")
        comprar.className="comprar"
        comprar.innerText = "Comprar";
    
        content.append(comprar)
    
        comprar.addEventListener("click", ()=>{
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
            alert("¡Has añadido un producto al Carrito!")
            if(repeat){
                carrito.map((prod)=>{
                    if(prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            
            }else{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
    
            });
            carritoCounter();
            saveLocal();
            }
        });
    });
}

getProducts()
//utilizo .forEach para recorrer el array
//la palabra "product" la declaro en el .forEach para luego llamar a los elementos
//con append le digo que shopContent retenga todo lo que tiene content

//set item para enviar info a Local Storage
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Get item para obtener esa info.
JSON.parse(localStorage.getItem("carrito"))

