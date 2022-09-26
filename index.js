


const botonCarrito = document.querySelectorAll('.btn-primary');
botonCarrito.forEach((botonAñadirAlCarrito) => {
  botonAñadirAlCarrito.addEventListener('click', clickYAñadir);
});


const divContenedor = document.querySelector('.divContenedor');

function clickYAñadir(event) {
  const boton = event.target;
  const item = boton.closest('.card')

  const titulo = item.querySelector('.card-title').textContent;
  const precio = item.querySelector('.card-precio').textContent;
  const imagen = item.querySelector('.card-img-top').src;
 

  agregarElProductoAlCarrito(titulo, precio, imagen);
}

function agregarElProductoAlCarrito(titulo, precio, imagen) {
  const filaDelCarrito = document.createElement(`div`);
  const carrito = `
  <div class="divDeProductos">
  <div>
    <img src=${imagen} alt="">
    <p >${titulo}</p>
  </div>
  <div >

    <p class="precio">${precio}</p>
  </div>
  <div>

    <button>+</button>
    <p>0</p>
    <button>-</button>
  </div>
  <div>

    <button>X</button>
  </div>
</div>`;
filaDelCarrito.innerHTML = carrito;
divContenedor.append(filaDelCarrito);

actulizarPrecioTotal()
}


function actulizarPrecioTotal(){
  let total = 0;
  const totalDelCarrito = document.querySelector('.total');
  const divDeProductos = document.querySelectorAll('.divDeProductos')
  divDeProductos.forEach(divDeProductos => {
    //elemento completo
const precio = divDeProductos.querySelector('.precio')
//obtenemos solo el precio, sin el signo $ y deja de ser un string
 const precioSolo = Number( precio.textContent.replace('$', ''));
 divDeProductos.querySelector('.')
});
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