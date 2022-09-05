document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

function mostrarUser(){
    if(localStorage.getItem("mi_user")){
        document.getElementById("userPortada").innerHTML=``
        mi_user_json=localStorage.getItem("mi_user");
        mi_user=JSON.parse(mi_user_json);
        for(let userOne of mi_user){ 
        document.getElementById("userPortada").innerHTML =
        userOne ;
    }
};
}
document.addEventListener("DOMContentLoaded", function(){
    localStorage.getItem("mi_user");
    mostrarUser()
    });