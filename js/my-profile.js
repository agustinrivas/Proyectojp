document.addEventListener('DOMContentLoaded', function (){
    localStorage.getItem("mi_user");
    mostrarEmail();
    localStorage.getItem("mis_datosPerfil");
    mostrarPerfil();
    const form = document.getElementById("formulario");
   form.addEventListener('submit', function(event){
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }else{ agregarPerfil();}
      form.classList.add('was-validated');
    })
});

function mostrarEmail(){
    if(localStorage.getItem("mi_user")){
        document.getElementById("emailP").innerHTML=``
        mi_user_json=localStorage.getItem("mi_user");
        mi_user=JSON.parse(mi_user_json);
        for(let userOne of mi_user){ 
        document.getElementById("emailP").innerHTML =
        userOne ;
    }
};
}

let perfil= []
function agregarPerfil(){
    let emailP=document.getElementById("emailP")
    let nombre1=document.getElementById("nombre1")
    let apellido1=document.getElementById("apellido1")
    let valorEmail = document.getElementById("emailP").value ;
    perfil.push(valorEmail) ;
    let valorNombre1 = document.getElementById("nombre1").value ;
    perfil.push(valorNombre1) ;
    let valorApellido1 = document.getElementById("apellido1").value ;
    perfil.push(valorApellido1) ;
    let mi_perfil_json = JSON.stringify(perfil) ;
    localStorage.setItem("mis_datosPerfil", mi_perfil_json) ; 
  };

function mostrarPerfil(){
    if(localStorage.getItem("mis_datosPerfil")){
        document.getElementById("emailP","nombre1","apellido1").innerHTML=``
        mis_datosPerfil_json=localStorage.getItem("mis_datosPerfil");
        mis_datosPerfil=JSON.parse(mi_user_json);
        for(let perfilOne of mi_user){ 
        document.getElementById("emailP","nombre1","apellido1").innerHTML =
        perfilOne ;
        }
    };
    }       