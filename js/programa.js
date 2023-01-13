const url = "https://raw.githubusercontent.com/juampiquijano/Proyecto_CV/master/js/info.txt"

/* Pido la información al servidor */
fetch(url)
  .then(response => response.text())
  .then(info => {
    info = info.split("\n")
    let info_personal = JSON.parse(info[0])[0]
    let info_exp = JSON.parse(info[1])
    carga_info(info_personal);
    for (var i in info_exp) {
      console.log(info_exp[i])
      crear_tarjeta(info_exp[i]);
    }
  })

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
    seccion.insertAdjacentHTML("beforeend", tarjeta)
}
