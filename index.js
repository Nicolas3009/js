


//...Api y fetch ...........................

function obtenerPersonajes(done) {

  const resultados = fetch("https://rickandmortyapi.com/api/character")
  resultados
    .then(respuesta => respuesta.json())
    .then(data => {
      done(data)
    });
}

obtenerPersonajes(data => {

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



//Carrito................................................................

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

function agregarElProductoAlCarrito(titulo, precio, imagen, cantidad) {

  const elementoTitulo = divContenedor.getElementsByClassName('titulo');
  for (let i = 0; i < elementoTitulo.length; i++) {
    if (elementoTitulo[i].innerText === titulo) {
      const cantidadDeElementos = elementoTitulo[i].parentElement.parentElement.parentElement.querySelector('.cantidadDeLosProductos');
      cantidadDeElementos.value++;
      actulizarPrecioTotal();
      return;
    }
  }

  const filaDelCarrito = document.createElement(`div`);
  const carrito =

    `
  <div class="divDeProductos">
  <div>
    <img src=${imagen} alt="">
    <h6 class="titulo">${titulo}</h6>
  </div>
  <div >
    <p class="precio">${precio} </p>
  </div>
  <div>
    
    <input class="cantidadDeLosProductos" type="number" placeholder="cantidad" value="1">
    
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
    const valorExactoDeLosProductos = Number(cantidadDeLosProductos.value);

    total = total + precioSolo * valorExactoDeLosProductos;
  });

  totalDelCarrito.innerHTML = `TOTAL: $${total}`
  console.log(actulizarPrecioTotal, "hola")
}

function borarItemDelCarrito(event) {
  const botonX = event.target;
  botonX.closest('.divDeProductos').remove();
  actulizarPrecioTotal();
}

//...funcion para incrementar el producto desde el carrito con un contador

function aumentarLaCantidadDeLosElementos(event) {
  const modificar = event.target;
  console.log(modificar);
  modificar.value <= 0 ? (modificar.value = 1) : null
  actulizarPrecioTotal();
}

console.log(actualizarPrecioTotal, 'hola');



//...funcion para baciar el carrito y relizar la compra 
function clickYComprar() {
  divContenedor.innerHTML = " ";
  actulizarPrecioTotal();
  Toastify({
    text: "Gracias por su compra!",
    duration: 3000
  }).showToast();

}