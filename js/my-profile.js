document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById("formulario");
   form.addEventListener('submit', function(event){
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    })
    localStorage.getItem("mi_user");
    mostrarEmail();
});

  function mostrarEmail(){
    if(localStorage.getItem("mi_user")){
        document.getElementById("email").innerHTML=``
        mi_user_json=localStorage.getItem("mi_user");
        mi_user=JSON.parse(mi_user_json);
        for(let userOne of mi_user){ 
        document.getElementById("email").innerHTML =
        userOne ;
    }
};
}
