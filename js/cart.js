const  IDCART= CART_INFO_URL+"25801"+EXT_TYPE
let listaCart = [];

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(IDCART).then(function(resultado){
        if (resultado.status === "ok"){
            listaCart = resultado.data.articles;
            mostrarCart(listaCart)               
        }
    });
})

function mostrarCart(){
    let number = document.getElementById("number")
    let htmlA101 = "";
    for(let i = 0; i < listaCart.length; i++){
        let datos = listaCart[i];
            htmlA101 += `
            <div onclick="redireccionar(${datos.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${datos.image}" alt="${datos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${datos.name}-${datos.currency} ${datos.unitCost}</h4>
                            <small><strong>Subtotal: ${datos.currency} ${(parseInt(datos.unitCost)*datos.count)}</strong></small>
                        </div>
                        <p>Cantidad <input type="number" id="number" name="cantidad" min="1" value="${datos.count}"></p>
                    </div>
                </div>
            </div>
            `
            document.getElementById("listadoCart").innerHTML = htmlA101;
        }
     }
/*function numeroInput(valor) {
    document.getElementById("subTotal").innerHtML=(parseInt(datos.unitCost)*valor)
} */  
    