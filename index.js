



const carrito = []

function agregarTablaAsado() {
  carrito.push(productos[0]);
  Toastify({
    text: ` El producto se agrego al carrito`,
    duration: 3000
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





const botonNumero20 = document.getElementById("botonComprar")
botonNumero20.addEventListener('click', comprar)


let preciofinal = 0;
function comprar() {
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
}


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
pProductos.innerHTML = productos;

const botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener('click', agregarAlCarrito);

function agregarAlCarrito(_carrito) {
  let carritoDiv = document.querySelector("carrito");
  let pCrear = document.createElement("p");
  carritoDiv.append(pCrear);
  pCrear.innerHTML = _carrito
}
function actualizarCarrito() {
  pProductos.innerHTML = productos;
}
agregarAlCarrito()
actualizarCarrito()

//.........................................................


