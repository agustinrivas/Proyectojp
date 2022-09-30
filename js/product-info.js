let productInfo = [];
let productCom = [];

function mostrarProdInfoID(){
    localStorage.getItem("productosID")
}
const PRDCTINFO = PRODUCT_INFO_URL+localStorage.getItem("productosID")+EXT_TYPE

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRDCTINFO).then(function(resultado){
        if (resultado.status === "ok"){
            productInfo = resultado.data;
            mostrarProducto(productInfo); 
            mostrarImg(productInfo);            
        }
    });
})

function mostrarProducto(productInfo){
    document.getElementById("producto").innerHTML = "";
    
                let htmlPrd = `
                    <li>
                    <h1>${productInfo.name}</h1><br>
                        <h5>Precio</h5>  
                        ${productInfo.currency} ${productInfo.cost}<br>
                        <h5>Descripción</h5>  
                        ${productInfo.description} <br>
                        <h5>Categoría</h5> 
                        ${productInfo.category} <br>
                        <h5>Cantidad Vendidos</h5> 
                        ${productInfo.soldCount} <br>
                        <h5>Imágenes Ilustrativas</h5><br>
                        
                    </li>
            `;
             
         
        document.getElementById("producto").innerHTML = htmlPrd;
     
 }
 function mostrarImg(productInfo){
    document.getElementById("prdImg").innerHTML = "";
    for(let i = 0; i < productInfo.images.length; i++){
        let img = productInfo.images[i];
    
                let htmlCom = `
                    <li>
                     <img src="${img}" >
                       
                    </li>
            `;
             
         
        document.getElementById("prdImg").innerHTML += htmlCom;
     
  }
 }
 


 document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRDCTCMNTS).then(function(resultado){
        if (resultado.status === "ok"){
            productCom = resultado.data;
            mostrarComents(productCom);              
        }
    });
})

 const PRDCTCMNTS = PRODUCT_INFO_COMMENTS_URL+localStorage.getItem("productosID")+EXT_TYPE
 
 function mostrarComents(productCom){
    document.getElementById("comentarios").innerHTML = "";
    for(let i = 0; i < productCom.length; i++){
        let coments = productCom[i];
    
                let htmlCom = `
                    <li>
                    <h5 >${coments.user}</h5> ${coments.dateTime}<br> 
                        ${coments.description} <br>
                        ${coments.score} <br>
                    </li>
            `;
             
         
        document.getElementById("comentarios").innerHTML += htmlCom;
     
  }
 }