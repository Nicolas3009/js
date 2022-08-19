
let precioCuchillo = 600
let precioTabla = 400
let precioVaso = 300
let suma1 = precioCuchillo + precioTabla
let suma2 = precioCuchillo + precioVaso
let suma3 = precioTabla + precioVaso
let suma4 = precioCuchillo + precioTabla + precioVaso

//function calcularPrecios(){

alert ("Hola, ingrese el número del producto que desea comprar. Nuestros productos son: Cuchillo = 1, Tabla = 2, Vaso = 3")
let seleccion = prompt("ingrese el número del producto seleccionado")
switch (seleccion) {
  case "1":
    alert ("El precio del Cuchillo es de:" + " " + precioCuchillo + "pesos")
    break; 
    case "2":
    alert ("El precio de la Tabla es de:" + " " + precioTabla + "pesos")
    break;
    case "3":
      alert ("El precio del Vaso es de:" + " " + precioVaso + "pesos")
      break;
      case "1 y 2":
        alert ("El precio total es de:" + " " + precioCuchillo + " " + "+" + " " + precioTabla + " " + "=" + " " + suma1 + " "+ "pesos");
        break;
        case  (("1 y 3") || ("3 y 1")):
          alert ("El precio total es de:" + " " + precioCuchillo + " " + "+" + " " + precioVaso + " " + "=" + " " + suma2 + " "+ "pesos" );
          break;
          case  "2 y 3":
            alert ("El precio total es de:" + " " + precioTabla + " " + "+" + " " + precioVaso + " " + "=" + " " + suma3 + " "+ "pesos" );
            break; 
             case (("1 2 y 3") || ("3 2 y 1") || ("2 3 y 1") || ("2 1 y 3") || ("1 3 y 2") || ("3 1 y 2")):
            alert ("El precio total es de:" + " " + precioCuchillo + " " + "+" + " " + precioTabla + " " + "+" + " " + precioVaso + " " + "=" + " " + suma4 + " " + "pesos" );
            break; 
  default:
  alert ("Hola, vuevla a cargar la página y seleccione un producto" )
    break;
  
    
}
//}





