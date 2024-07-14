const scriptURL = 'https://script.google.com/macros/s/AKfycbwS91DBKZ7SadrziC2W4vnijsXUrXqhre7Y4TeD53xUnrHw-Vbe0HslFYJr6E4sf9MC/exec';
const form = document.forms['registro'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form) // Enviar datos del formulario como FormData
    })
    .then(response => {
        if (response.ok) {
            alert("Gracias por registrarte"); // Mostrar mensaje de éxito si la respuesta es satisfactoria
            form.reset(); // Reiniciar el formulario
        } else {
            throw new Error('Error en la solicitud'); // Lanzar error si la respuesta no es satisfactoria
        }
    })
    .catch(error => {
        console.error('Error:', error); // Capturar y mostrar errores en la consola
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.'); // Mostrar mensaje de error al usuario
    });
});
