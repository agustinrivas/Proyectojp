let email = document.getElementById("email");
let password = document.getElementById("password");

function ingreso() {
    if (email.value.length > 0 && password.value.length > 0){
        location.replace("portada.html");
    } else {
        alert("Su email o contraseña son incorrectos");
    }
}