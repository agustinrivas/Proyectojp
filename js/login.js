let email = document.getElementById("email");
let password = document.getElementById("password");

function ingreso() {
    if (email.value.length > 0 && password.value.length > 0){
        location.replace("portada.html");
    } else {
        alert("Su email o contraseña son incorrectos");
    }
}
let user= []
function agregarUser(){
    let valorUser = document.getElementById("email").value ;
    user.push(valorUser) ;
    let mi_user_json = JSON.stringify(user) ;
    localStorage.setItem("mi_user", mi_user_json) ;
};

document.getElementById("ingresoUser").addEventListener("click", function(){
    agregarUser();
    });