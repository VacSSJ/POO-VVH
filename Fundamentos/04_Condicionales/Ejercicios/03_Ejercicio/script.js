console.log("Vinculado");

function nombreUsuarioContraseña() {
    //Identificar si el usuario y contraseña son correctos
    let resultado = "";
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let _contraseña = prompt("Ingrese su contraseña: ");

    if(nombreUsuario == usuario123 && _contraseña == secreto) {
        resultado = `Acceso concedido.`
        } else if(nombreUsuario != usuario123){
        resultado = `Acceso denegado. Has ingresado el usuario incorrecto: <h2>${nombreUsuario}</h2>`
        };
        
    document.getElementById('lista').innerHTML = resultado;
}