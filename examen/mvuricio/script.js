// referente de https://medium.com/daniiable-in-the-workplace/como-hacer-un-login-con-javascript-y-html-sencillo-aff1dab6a6bf //
function go(){

    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 


document
.getElementById("myBtn")
.addEventListener("click", displayDate);

function displayDate(event) {
    event.preventDefault();
  document.getElementById("demo").innerHTML = Date();
}





// acordeon referente de https://www.w3schools.com/howto/howto_js_accordion.asp //
    let acc = document.getElementsByClassName("accordion");
    let i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
