const url = "https://raw.githubusercontent.com/juampiquijano/Proyecto_CV/master/info.txt";
var botonContacto = document.getElementById("boton-contacto");
var botonCerrar = document.getElementById("boton-cerrar");
var mensaje = document.getElementById("cuadro-mensaje");


/* Pido la información al servidor */
fetch(url)
  .then(response => response.text())
  .then(info => {
    info = info.split("\n")
    let info_personal = JSON.parse(info[0])[0]
    let info_exp = JSON.parse(info[1])
    let capacidades = info[2].split(",")
    /* Cargo la información personal */
    carga_info(info_personal);
    for (var i in info_exp) {
      /* Creo las tarjetas con la información real */
      crear_tarjeta(info_exp[i]);
    }
    /* Agrego las capacidades */
    crear_capacidades(capacidades);
  }
)

/* Abre la solapa de mensaje*/
botonContacto.addEventListener("click", () => {
  mensaje.style.display = "inline-block";
});

/* Cierra la solapa de mensaje*/
botonCerrar.addEventListener("click", () => {
  mensaje.style.display = "none";
});

/* Capturar datos del formulario */
function capturarDatos () {
  var correo_input = document.getElementById("correo");
  var correo= correo_input.value;
  var mensaje_input = document.getElementById("contenido-mensaje");
  var mensaje = mensaje_input.value;
  if ( correo == "" ) {
    alert("El correo es obligatorio");
    correo_input.focus();
  } else {
    if ( !( correo.includes("@") ) ) {
      alert("Por favor, ingrese una dirección de correo válida. El correo debe contener el signo @");
      correo_input.focus();
    } else {
      if ( mensaje.length <= 10 ) {
        alert("Escriba un mensaje de al menos 10 caractéres")
        mensaje_input.focus();
      } else {
        correo_input.value = ""
        mensaje_input.value = ""
        console.log(correo);
        console.log(mensaje);
        return [correo, mensaje]
      } 
    } 
  } 
}

/* Enviar correo */

/*Reemplaza la indicación genérica de información personal por los valores reales*/
function carga_info(obj) {
  for (var key in obj) {
    try {
      document.getElementById(key).innerHTML = obj[key];
    } catch (error) {
      console.log("Error con la clave '" + key + "': No existe el id '" + key +"'. " + error.message);
    }
  }
}

/* Crea una tarjeta genérica y la completa con los datos reales */
function crear_tarjeta(obj) {
  let tarjeta
  tarjeta =  `<div class="col-md-6">
                <div class="card">
                    <h4 class="card-header titulo">`+ obj.Titulo + 
                    `<small class="text-muted"> - `+ obj.Lugar +`</small></h4>
                    <div class="card-body">
                        <p class="card-text periodo">`+ obj.Periodo +`</p>
                        <p class="card-text descripcion">`+ obj.Descripcion +`</p>
                    </div>
                </div>
              </div>`
    let seccion = document.getElementById("s_"+ obj.Tipo);
    seccion.insertAdjacentHTML("beforeend", tarjeta);
}

/* Crea los contenedores de las capacidades */
function crear_capacidades(lista_cap) {
  let tarjeta;
  let seccion = document.getElementById("s_Capacidad");
  let estilo = ["success", "danger", "warning", "info", "violeta"];
  let j = 0;
  for (var i in lista_cap) {
    tarjeta = '<span class="badge bg-' + estilo[j] + ' cap">' + lista_cap[i] + '</span>';
    seccion.insertAdjacentHTML("beforeend", tarjeta);
    if (j == 4) {
      j = 0;
    } else {
      j++;
    }
  }
}

/* Animación de flechas de colapsables */
let flechas = {"f1": 0, "f2": 0, "f3": 0, "f4": 0, "f5": 0};
let keys = Object.keys(flechas);

let f1 = document.getElementById(keys[0])
let f2 = document.getElementById(keys[1])
let f3 = document.getElementById(keys[2])
let f4 = document.getElementById(keys[3])
let f5 = document.getElementById(keys[4])

f1.addEventListener("click", () => {
  flechas["f1"]++
  if ( (flechas["f1"] % 2) == 1) {
    f1.classList.add("flecha-abajo");
  } else {
    f1.classList.remove("flecha-abajo");
  }
});

f2.addEventListener("click", () => {
  flechas["f2"]++
  if ( (flechas["f2"] % 2) == 1) {
    f2.classList.add("flecha-abajo");
  } else {
    f2.classList.remove("flecha-abajo");
  }
});

f3.addEventListener("click", () => {
  flechas["f3"]++
  if ( (flechas["f3"] % 2) == 1) {
    f3.classList.add("flecha-abajo");
  } else {
    f3.classList.remove("flecha-abajo");
  }
});

f4.addEventListener("click", () => {
  flechas["f4"]++
  if ( (flechas["f4"] % 2) == 1) {
    f4.classList.add("flecha-abajo");
  } else {
    f4.classList.remove("flecha-abajo");
  }
});

f5.addEventListener("click", () => {
  flechas["f5"]++
  if ( (flechas["f5"] % 2) == 1) {
    f5.classList.add("flecha-abajo");
  } else {
    f5.classList.remove("flecha-abajo");
  }
});

