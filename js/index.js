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






    let ingreso = parseInt(prompt("Ingresar número"));
  
  for (let index = 1; index <= 10; index++) {
    if((ingreso !==" ") && (ingreso <= 100)) {
      let resultado = ingreso + index;
      alert (ingreso + " " + "+" + " " +index + " " +"="+ " " + resultado)
    } else{
      alert("vuelva a cargar la página e ingrese un nuevo número" )
      break;
      
    }
    
  }




