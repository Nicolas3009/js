
const productos = [
  {
    nombre: "Cuchillo",
    precio: 600,
    id: 1,
  },
  {
    nombre: "Tabla",
    precio: 400,
    id: 2,
  },
  {
    nombre: "Vaso",
    precio: 300,
    id: 3,
  },
  {
    nombre: "Mantel",
    precio: 100,
    id: 4,
  },
];

const botonNumero20 = document.getElementById("botonComprar")

botonNumero20.addEventListener('click',comprar)


let preciofinal = 0;
function comprar() {
  let cantidad = prompt("Cuantos items desea comprar");
  alert(
    "Elija el item que quiere comprar:\n1-cuchillo\n2-table\n3-vaso\n4-mantel"
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
  constructor(nombre,precio,id){
    this.nombre = nombre
    this.precio = precio
    this.id = id
  }
}

const crearEInsertar = (Nombre,Precio,ID) => {
  nuevo = new Item(Nombre,Precio,ID)
  productos.push(nuevo)
  console.log('Funcion! Producto añadido');
}



