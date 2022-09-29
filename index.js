




//...Api y fetch ...........................

function obtenerPersonajes(done) {

  const resultados = fetch("https://rickandmortyapi.com/api/character")
  resultados
    .then(respuesta => respuesta.json())
    .then(data => {
      done(data)
    });
}

obtenerPersonajes (data => {

data.results.forEach(personaje => {

  const div = document.createRange().createContextualFragment(//HTML
  `  <div>
  <div class="contenedorImagen">
      <img src="${personaje.image}" alt="">
  </div>
  <h2>${personaje.name}</h2>
  <p>${personaje.status}</p>
</div>`);

const main = document.querySelector('.sectionApi');
main.append(div);
});

  });



const botonCarrito = document.querySelectorAll('.btn-primary');
botonCarrito.forEach((botonAñadirAlCarrito) => {
  botonAñadirAlCarrito.addEventListener('click', clickYAñadir);
});

const botonComprar = document.querySelector('.botonComprar')
botonComprar.addEventListener("click", clickYComprar);

//seleciono el contenedor de mis div en el carrito, para luego baciarlo al tocar el boton de comprar
const divContenedor = document.querySelector('.divContenedor');

function clickYAñadir(event) {
  const boton = event.target;
  const item = boton.closest('.card')

  const titulo = item.querySelector('.card-title').textContent;
  const precio = item.querySelector('.card-precio').textContent;
  const imagen = item.querySelector('.card-img-top').src;


  //...Notificacion de que el producto se agrego correctamente........
  Toastify({
    text: ` El producto se agrego al carrito`,
    duration: 1300,
  }).showToast();

  agregarElProductoAlCarrito(titulo, precio, imagen);
}

function agregarElProductoAlCarrito(titulo, precio, imagen) {
  const filaDelCarrito = document.createElement(`div`);
  const carrito = `
  <div class="divDeProductos">
  <div>
    <img src=${imagen} alt="">
    <h6>${titulo}</h6>
  </div>
  <div >

    <p class="precio">${precio}</p>
  </div>
  <div>

    <button id="1" class=" cantidadDeLosProductos">+</button>
    
   
  </div>
  <div>
    <button class="eliminarProducto">X</button>
  </div>
</div>`;
  filaDelCarrito.innerHTML = carrito;
  divContenedor.append(filaDelCarrito);

  filaDelCarrito
    .querySelector('.eliminarProducto')
    .addEventListener("click", borarItemDelCarrito);

  filaDelCarrito
    .querySelector('.cantidadDeLosProductos')
    .addEventListener("click", aumentarLaCantidadDeLosElementos);

  actulizarPrecioTotal();
}

//...Actualiza el precio total..........
function actulizarPrecioTotal() {
  let total = 0;
  const totalDelCarrito = document.querySelector('.total');
  const divDeProductos = document.querySelectorAll('.divDeProductos')

  //...Opero con los elementos que obtuve arriba a ravez de un forEach.......
  divDeProductos.forEach(divDeProductos => {
    //elemento completo
    const precio = divDeProductos.querySelector('.precio')
    //obtengo solo el precio, sin el signo $ y deja de ser un string (por la propiedad Number)
    const precioSolo = Number(precio.textContent.replace('$', ''));
    //...obtengo la cantidad de un producto......
    const cantidadDeLosProductos = divDeProductos.querySelector('.cantidadDeLosProductos')
    const valorExactoDeLosProductos = Number(cantidadDeLosProductos.id);

    total = total + precioSolo * valorExactoDeLosProductos;
  });

  totalDelCarrito.innerHTML = `TOTAL: $${total}`
}

function borarItemDelCarrito(event) {
  const botonX = event.target;
  botonX.closest('.divDeProductos').remove();
  actulizarPrecioTotal();
}

//...funcion para incrementar el producto desde el carrito con un contador
let contador = 1;
function aumentarLaCantidadDeLosElementos(event) {
  const modificar = event.target;
  if (modificar.value <= 0) {
    modificar.value = 1;
  }
  actulizarPrecioTotal();
  contador += 1;
  let pContador = document.querySelector(".cantidadDeLosProductos")
  pContador.innerHTML = contador;

  console.log(modificar);
}



//...funcion para baciar el carrito y relizar la compra 
function clickYComprar() {
  divContenedor.innerHTML = " ";
  actulizarPrecioTotal();
  Toastify({
    text: "Gracias por su compra!",
    duration: 3000
  }).showToast();

}



































/*





//Contador..........
let contador = 1;

//funcion para incrementar el contador y agregar nuevamente el producto al array carrito...

function incrementarTablaAsado() {
  contador += 1;
  let pContador = document.querySelector("#contador")
  pContador.innerHTML = contador;
  
}

 //funcion para descrmentar el contador......

function decrementar() {
  contador -= 1;
  let pContador = document.querySelector("#contador")
  pContador.innerHTML = contador;
}

//array bacio del carrito....
const carrito = []
let contadorCarrito = 0;
//fucion que me agrega un producto al array del carrito 
function agregarTablaAsado() {
  contadorCarrito++;
  let pContador = document.querySelector("#contadorCarrito")
  pContador.innerHTML = contadorCarrito;
  carrito.push(productos[0]);
  Toastify({
    text: ` El producto se agrego al carrito`,
    duration: 3000,
  }).showToast();
}


const botonAgregarCarrito = document.getElementById('botonCarrito');
botonAgregarCarrito.addEventListener("click", agregarTablaAsado);


const productos = [
  {
    nombre: "PORTA TABLITA ASADO X1 CALADO RECTANG",
    precio: 2500,
    id: 1,
  },
  {
    nombre: "SET ASADO SERIE 2 P/4",
    precio: 4000,
    id: 2,
  },
  {
    nombre: "JUEGO ASADOR 3 PIEZAS C/MENSULA",
    precio: 3000,
    id: 3,
  },
  {
    nombre: "JUEGO DE COLGAR X4 -LINEA PREMIUM",
    precio: 4500,
    id: 4,
  },
  {
    nombre: "TABLA 12 C/PORTA CUCH / TENEDOR",
    precio: 3000,
    id: 5,
  },
  {
    nombre: "DISPENSER PARA JUGOS",
    precio: 4800,
    id: 6,
  },
  {
    nombre: "JAMONERA",
    precio: 3200,
    id: 7,
  },
  {
    nombre: "TABLA BAGUETTE 50 x 3 CUENCO CUADRADO",
    precio: 2900,
    id: 8,
  },
  {
    nombre: "TABLA CON PLANCHETA Y UTENSILLOS",
    precio: 5600,
    id: 9,
  },
  {
    nombre: "RELOJ MAPA 30 CM",
    precio: 2100,
    id: 10,
  },
  {
    nombre: "RELOJ MAPA 60 CM",
    precio: 2900,
    id: 11,
  },
  {
    nombre: "SET 2 ESPEJOS Y RELOJ MANDALA",
    precio: 2500,
    id: 12,
  },
  {
    nombre: "SET 2 ESPEJOS Y RELOJ SOL",
    precio: 2500,
    id: 13,
  },
  {
    nombre: "TABLA CON DESTAPADOR",
    precio: 1000,
    id: 14,
  },
];


let preciofinal = 0;
//funcion para que me incremente el total del precio en el carrito....

function total(){
  for (let i = 0; i < carrito[0].precio; i++) {
   // let nuevoArray = productos.filter((el) => el.id == eleccion);
    preciofinal += nuevoArray[0].precio;
  }
}

const botonTotal = document.getElementById("botonTotal")
botonTotal.addEventListener('click', total)



/*function comprar() {
  let cantidad = prompt("Cuantos items desea comprar");
  alert(
    "Elija el item que quiere comprar: \n1-cuchillo\n2-table\n3-vaso\n4-mantel"
  );
  for (let i = 0; i < cantidad; i++) {
    let eleccion = parseInt(prompt("Ingrese el numero de item"));
    let nuevoArray = productos.filter((el) => el.id == eleccion);
    preciofinal += nuevoArray[0].precio;
  }

  alert(`Su precio final es de ${preciofinal}`);
  preciofinal = 0;
}*/

/*
class Item {
  constructor(nombre, precio, id) {
    this.nombre = nombre
    this.precio = precio
    this.id = id
  }
}

const crearEInsertar = (Nombre, Precio, ID) => {
  nuevo = new Item(Nombre, Precio, ID)
  productos.push(nuevo)
  console.log('Funcion! Producto añadido');
}



// intentando hacer que los objetos del array se agreguen al carrito 


let pProductos = document.querySelector("productos");
//pProductos.innerHTML = productos;

const botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener('click', agregarAlCarrito);

function agregarAlCarrito(_carrito) {
  let carritoDiv = document.querySelector("carrito");
  let pCrear = document.createElement("p");
  //carritoDiv.append(pCrear);
  pCrear.innerHTML = _carrito
}
function actualizarCarrito() {
  //pProductos.innerHTML = productos;
}
agregarAlCarrito()
actualizarCarrito()

//.........................................................


*/