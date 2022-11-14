const  IDCART= CART_INFO_URL+"25801"+EXT_TYPE
let listaCart = [];

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(IDCART).then(function(resultado){
        if (resultado.status === "ok"){
            listaCart = resultado.data.articles;
            mostrarCart(listaCart)
            mostrarSbT(listaCart)               
        }
    });
})

function mostrarCart(){
    
    let htmlCart = "";
    for(let i = 0; i < listaCart.length; i++){
        let datos = listaCart[i];
            htmlCart += `
            <div  class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${datos.image}" alt="${datos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${datos.name}-${datos.currency} ${datos.unitCost}</h4>
                            <small><p><strong>Subtotal: ${datos.currency} <spam id="nm">${datos.unitCost*datos.count}</spam></strong></p></small>
                        </div>
                        <p>Cantidad <input oninput="(actualizarValue(${datos.unitCost}),SubT2(${datos.unitCost}))" type="number" id="number" name="cantidad" min="1" value="${datos.count}"></p>
                    </div>
                </div>
            </div>
            `
            document.getElementById("listadoCart").innerHTML = htmlCart;
        }
     }
/*function numeroInput(valor) {
    document.getElementById("subTotal").innerHtML=(parseInt(datos.unitCost)*valor)
} */  

document.getElementById('number').addEventListener('input', actualizarValue());

function actualizarValue(costo){
    document.getElementById('nm').innerHTML = `${parseInt(costo)*document.getElementById('number').value}`
  }
    
  function mostrarSbT(){
    
    let htmlSbT = "";
    for(let i = 0; i < listaCart.length; i++){
        let dat = listaCart[i];
            htmlSbT += `<p>${dat.currency} <spam id=SubT> ${dat.unitCost*dat.count}</spam></p>
            `
            document.getElementById("SbT").innerHTML = htmlSbT;
        }
     }
     document.getElementById('number').addEventListener('input', SubT2());

function SubT2(valor){
    document.getElementById('SubT').innerHTML = `${parseInt(valor)*parseInt(document.getElementById('number').value)}`
  }
    
  document.getElementById('2a5').addEventListener('input', costoEnvío2a5());

  function costoEnvío2a5(){
    for(let i = 0; i < listaCart.length; i++){
        let listaCE = listaCart[i];
      document.getElementById('cE').innerHTML = `<p>${listaCE.currency} ${0,15*100}</p>`
    }  
 }

 document.getElementById('5a8').addEventListener('input', costoEnvío5a8());

  function costoEnvío5a8(){
    for(let i = 0; i < listaCart.length; i++){
        let listaCE = listaCart[i];
      document.getElementById('cE').innerHTML = `<p>${listaCE.currency} ${0,07*100}</p>`
    }  
 }

 document.getElementById('12a15').addEventListener('input', costoEnvío12a15());

  function costoEnvío12a15(){
    for(let i = 0; i < listaCart.length; i++){
        let listaCE = listaCart[i];
      document.getElementById('cE').innerHTML = `<p>${listaCE.currency} ${0,05*100}</p>`
    }  
 }

 document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById("formulario");
   form.addEventListener('submit', function(event){
    const check = document.getElementById("tarjetaC").checked;
    if (!check || !form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        checked();
      }
      form.classList.add('was-validated');
      document.getElementById("tarjetaC").addEventListener("change",checked)
    })
  });

 function checked(){
    const check = document.getElementById("tarjetaC");
    let errorText = document.getElementById("errorCheck");
    if(!check.checked){
      check.classList.add("is-invalid");
      check.classList.remove("is-valid");
      errorText.innerHTML=`Debe seleccionar una forma de pago`
      document.querySelector(".btn-link").style.color = "red"
      return false
    }else {
      check.classList.add("is-valid");
      check.classList.remove("is-invalid");
      errorText.innerHTML=``
      document.querySelector(".btn-link").style.color = "#0d6efd"
      return true
  }
  }
     