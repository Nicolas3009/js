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



  //Ejercicio. juego de cartas............
  /*class jugador {
    constructor(id, nombre, dinero) {
      this.id = id;
      this.nombre = nombre;
      this.dinero = dinero;
    }
    actualizarDinero(apuesta) {
      this.dinero += apuesta;
    }
  }
  
  
  const cantidadJugadores = parseInt(prompt("Ingrese número de jugadores"));
  const apuestaMinima = parseInt(prompt("Ingrese apuesta minima"));
  
  let pozo = 0;
  
  const jugadores = [];
  
  for (let index = 1; index <= cantidadJugadores; index++) {
    const dinero = parseInt(prompt("Ingrese el dinero del jugador" + index));
    const nombre = prompt("Ingrese nombre del jugador" + index);
    const jugador = new jugador(index, dinero, nombre);
    jugadores.push(jugador);
  }
  
  
  pozo = pozo + apuestaMinima * cantidadJugadores;
  let dineros = []
  do {
    dineros = jugadores.map(jugador => {
      if (pozo <= 0){
        return 0;
      }
      
      alert("Turno del jugador" + jugador.nombre);
      const primerlanzamiento = lanzarDado();
      alert ("Primer lanzamiento" + primerlanzamiento);
      switch (primerlanzamiento) {
        case 1:
          pozo += apuestaMinima;
          jugador.actualizarDinero(-apuestaMinima);
          alert("se agrego al pozo" + apuestaMinima);
          alert("El nuevo valor del pozzo es" + pozo);
          break;
        case 6:
          pozo -= apuestaMinima;
          jugador.actualizarDinero(apuestaMinima);
          alert("se resto del pozo" + apuestaMinima);
          alert("El nuevo valor del pozzo es" + pozo);
          break;
  
        default:
          const segundaApuesta = parseInt(prompt("Ingrese segunda apuesta"));
          const condision = prompt("ingrse 1 si quiere indicar mayor o 2 si quiere indicar menor");
          const segundoLanzamiento = lanzarDado();
          alert ("Segundo lanzamiento" + segundoLanzamiento);
          if (condision == 1 && segundoLanzamiento > primerlanzamiento) {
            pozo -= segundaApuesta;
            jugador.actualizarDinero(segundaApuesta);
            alert("se resto del pozo" + segundaApuesta);
            alert("El nuevo valor del pozo es" + pozo);
          }
          else if (condision == 1 && segundoLanzamiento <= primerlanzamiento) {
            pozo += segundaApuesta;
            jugador.actualizarDinero(-segundaApuesta);
            alert("se agredo al pozo" + segundaApuesta);
            alert("El nuevo valor del pozo es" + pozo);
          }
          else if (condision == 2 && segundoLanzamiento < primerlanzamiento) {
            pozo -= segundaApuesta;
            jugador.actualizarDinero(segundaApuesta);
            alert("se resto del pozo" + segundaApuesta);
            alert("El nuevo valor del pozo es" + pozo);
          }
          else if (condision == 2 && segundoLanzamiento >= primerlanzamiento) {
            pozo += segundaApuesta;
            jugador.actualizarDinero(-segundaApuesta);
            alert("se agredo al pozo" + segundaApuesta);
            alert("El nuevo valor del pozo es" + pozo);
          }
          break;
      }
      return jugador.dinero;
    });
  } while (pozo > 0 && corroborarDinero(dineros));
  alert("Termino el juego");
  alert("El pozo es de" + pozo);
  alert(jugadores);
  
  function lanzarDado() {
    return Math.floor(Math.random() * 6 + 1);
  }
  
  function corroborarDinero(dineros) {
    let flag = true;
    for (const dinero of dineros) {
      if (dinero <= 0) {
        flag = false;
        return flag;
      }
  
    }
    return flag;
  }
  */
  
  
  
  
  //otros ejercics
  
  //let ingresoNombre = prompt("Ingrrse su nombre");
  //let salida = ingresoNombre  + " " + "ingresado"
  //alert (salida)
  
  
  
  
  //let nombreUsuario = prompt("Ingrese su nombre de usuario");
  
  //if (nombreUsuario == ""){
  //    alert("No ingresaste el nombre de usuario");}
  
  //else{
   //   alert("Nombre de usuario ingresado" + ":" + " " + nombreUsuario);}
  
  
  
  
  
  
   //let nombreIngreso = prompt ("Ingresar nombre");
   //let apellidoIngreso= prompt ("Ingresar Apellido");
  
   //if ((nombreIngreso !="") && (apellidoIngreso !="")){
     // alert("Nombre:" + " " + nombreIngreso + " " + "Apellido:" + " " + apellidoIngreso)}
   //else{
     // alert ("Error: Ingresar nombre y apellido")}
  
  
  
  
  
  
  // let nombreIngreso = prompt ("Ingresar nombre");
  
  //if ((nombreIngreso != " ") && (nombreIngreso == "NICO") || nombreIngreso == "nico"){
    //  alert("Hola Nico")}
  // else{
    //  alert ("Error: Ingresar nombre valido")}
  
  
  
  
  
  
   //let numero= parseInt(prompt("ingresar numero"));
   //for(let index= 0; index < numero; index++){
    //if(index % 2 == 0){
      //console.log("numero", index);}}
  
  
  
  
  
  
     //let numero= parseInt(prompt("ingresar numero"))
     //if (numero % 10 ==0){
      //console.log("es valido");
     //} else{
    //console.log("no es valido");}
  
  
  
  
  
  /*let today = new Date(); //me entrega la fecha de hoy
  let day = today.getDay(); //me entrega un numero indicando el dia, siendo el lunes el #1
  switch (day){
  case 1:
    console.log("es lunes");
    break;
    case 2:
    console.log("es martes");
    break;
    case 3:
    console.log("es miercoles");
    break;
    case 4:
    console.log("es jueves");
    break;
    case 5:
    console.log("es viernes");
    break;
    case 6:
    console.log("es sabado");
    break;
    case 7:
    console.log("es domingo");
    break;
    default:
      alert ("que dia es?")
      break;
    }*/
  
  
  
  
  //primer entrega de js
  
  /*   let ingreso = parseInt(prompt("Ingresar número"));
    
    for (let index = 1; index <= 10; index++) {
      if((ingreso !==" ") && (ingreso <= 100)) {
        let resultado = ingreso + index;
        alert (ingreso + " " + "+" + " " +index + " " +"="+ " " + resultado)
      } else{
        alert("vuelva a cargar la página e ingrese un nuevo número" )
        break;
        
      }
      
    }*/