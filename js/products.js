const AUTOS101_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"
//array donde se cargarán los datos recibidos:
let listaAutos101 = [];

function mostrarAutos(){

    let htmlA101 = "";
    for(let i = 0; i < listaAutos101.length; i++){
        let datos = listaAutos101[i];
            htmlA101 += `
            <div onclick="setCatID(${datos.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${datos.image}" alt="${datos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${datos.name}-${datos.currency} ${datos.cost}</h4>
                            <small class="text-muted">${datos.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${datos.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("listadoA101").innerHTML = htmlA101;
    }

    document.addEventListener("DOMContentLoaded", function(){
        getJSONData(AUTOS101_URL).then(function(resultado){
            if (resultado.status === "ok"){
                listaAutos101 = resultado.data.products;
                mostrarAutos(listaAutos101)               
            }
        });
    })
/* 
-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en listaAutos101.
-Por último, se llama a mostrarAutos() pasándole por parámetro listaAutos101.
*/