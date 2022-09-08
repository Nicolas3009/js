//Formulario de consultas.................

 
//let formulario = document.querySelector("#login");


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






  /*const objetoUsuario = {
    username: valueUsername,
    password: valuePassword,
  };

  console.log(valueUsername);
  console.log(valuePassword);
  const token = generateToken(objetoUsuario.username, objetoUsuario.password);
  localStorage.setItem("token", token);
  const isAuth = existToken();
  if (isAuth) {
    const divPrivateContent = document.querySelector("#privateContent");
    divPrivateContent.className = "showContent";
    formulario.className = "hideContent";
    showUsername();
  }
}

function generateToken(username, password) {
  const usuario = {
    username,
    password,
  };
  return JSON.stringify(usuario);
}

function existToken() {
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
}

function showUsername() {
  const strong = document.querySelector("#usernameLogin");
  const token = JSON.parse(localStorage.getItem("token"));
  strong.innerHTML = token.username;
}*/