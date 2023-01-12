const url1 = 'https://randomuser.me/api/'

/*
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
*/

let url2 = "info.txt";
let url3 = "C:\Users\Juan Pablo Quijano\OneDrive - fi.uba.ar\Curso Front End -Ticmas Academy\Proyecto CV\js\info.txt"
let url4 = "https://raw.githubusercontent.com/juampiquijano/Proyecto_CV/master/js/info.txt"

/**
fetch (url2)
.then(texto => texto.text())
.then(texto2 => console.log(texto2));
 */

fetch(url4)
  .then(response => response.text())
  .then(content => document.getElementById("archivo").innerHTML = content)
/**
  {
    let lines = content.split(/\n/);
    lines.forEach(line => console.log(line));
  }); */