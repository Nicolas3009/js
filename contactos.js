//Formulario de consultas.................

 
let formulario = document.querySelector("#login");


function consultar(event) {
  //event.preventDefault();
  console.log(event);
  let formulario = document.querySelector ("#login");
  console.log(formulario);
  let valueNombre = formulario.nombre.value;
  let valueGmail = formulario.gmail.value;
  let valueConsulta = formulario.consulta.value;
  console.log(valueNombre);
  console.log(valueGmail);
  console.log(valueConsulta);
  const token = generateToken(valueNombre, valueGmail, valueConsulta);
  localStorage.setItem("token", token);
}

consultar()

function generateToken(nombre, gmail, consulta){
return nombre + gmail + consulta
}
generateToken()





