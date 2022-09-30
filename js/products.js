const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_PRECIO = "Precio:"
const ORDER_BY_PROD_PRECIOA = "Precio"
const ORDER_BY_PROD_RELEVANCIA ="Relevancia"
const AUTOS101_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"
let minCount = undefined;
let maxCount = undefined;
//array donde se cargarán los datos recibidos:
let listaAutos101 = [];

function redireccionar(id) {
    localStorage.setItem("productosID", id);
    window.location = "product-info.html"
}

function mostrarAutos(){

    let htmlA101 = "";
    for(let i = 0; i < listaAutos101.length; i++){
        let datos = listaAutos101[i];
        
    if (((minCount == undefined) || (minCount != undefined && parseInt(datos.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(datos.cost) <= maxCount))){
            htmlA101 += `
            <div onclick="redireccionar(${datos.id})" class="list-group-item list-group-item-action cursor-active">
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
     }

        document.getElementById("listadoA101").innerHTML = htmlA101;
    }

    document.addEventListener("DOMContentLoaded", function(){
        getJSONData(PRDCTSCATID).then(function(resultado){
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

    function mostrarID(){
        localStorage.getItem("catID")
    }
    const PRDCTSCATID= PRODUCTS_URL+localStorage.getItem("catID")+EXT_TYPE

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        mostrarAutos();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por precio
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        mostrarAutos();
    });
    
    function sortCat(criteria, array){
        let result = [];
        if (criteria === ORDER_BY_PROD_PRECIO){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.cost);
                let bCount = parseInt(b.cost);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
         }
        else if (criteria === ORDER_BY_PROD_PRECIOA){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.cost);
                let bCount = parseInt(b.cost);
    
                if ( aCount > bCount ){ return 1; }
                if ( aCount < bCount ){ return -1; }
                return 0;
            });
     }
    
    else if (criteria === ORDER_BY_PROD_RELEVANCIA){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
 }
     return result;
     }
    

    function sortAndShowCat(sortCrit, catArray){
        currentSortCrit = sortCrit;
    
        if(catArray != undefined){
            listaAutos101 = categoriesArray;
        }
    
        listaAutos101 = sortCat(currentSortCrit, listaAutos101);
    
        //Muestro las categorías ordenadas
        mostrarAutos();
    }

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCat(ORDER_BY_PROD_PRECIO);
    });
    document.getElementById("ascendenteP").addEventListener("click", function(){
        sortAndShowCat(ORDER_BY_PROD_PRECIOA);
    });
    document.getElementById("desRel").addEventListener("click", function(){
        sortAndShowCat(ORDER_BY_PROD_RELEVANCIA);
    });
