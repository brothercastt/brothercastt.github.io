// Obtenemos el botón "Crear Usuario" por su ID
const crearUsuarioButton = document.getElementById('crear-usuario');

// Escuchamos el evento 'click' en el botón "Crear Usuario"
crearUsuarioButton.addEventListener('click', function(event) {
    // Prevenimos el comportamiento por defecto del botón (enviar formulario)
    event.preventDefault();

    // Aquí deberías realizar la lógica para crear el usuario
    // Supongamos que el usuario se crea correctamente
    const usuarioCreado = true;

    if (usuarioCreado) {
        // Redirigimos al usuario a index.html
        window.location.href = "index.html";
       
    }
});
