const scriptURL = 'https://script.google.com/macros/s/AKfycbwS91DBKZ7SadrziC2W4vnijsXUrXqhre7Y4TeD53xUnrHw-Vbe0HslFYJr6E4sf9MC/exec';
const form = document.forms['registro'];
let integranteCount = 1;

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario
    if (validarFormulario()) {
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
    } else {
        alert('Por favor, corrige los errores en el formulario antes de enviarlo.');
    }
});

function validarFormulario() {
    let valido = true;

    // Validar documento del referente
    const documentoReferente = document.getElementById('Documento');
    if (documentoReferente.value.length > 8) {
        valido = false;
        documentoReferente.style.borderColor = 'red';
    } else {
        documentoReferente.style.borderColor = '';
    }

    // Validar los documentos de los integrantes
    for (let i = 1; i <= integranteCount; i++) {
        const documentoIntegrante = document.getElementById(`Integrante${i}_Documento`);
        if (documentoIntegrante && documentoIntegrante.value.length > 8) {
            valido = false;
            documentoIntegrante.style.borderColor = 'red';
        } else if (documentoIntegrante) {
            documentoIntegrante.style.borderColor = '';
        }
    }

    return valido;
}

function addIntegrante() {
    integranteCount++;
    const integrantesDiv = document.getElementById('integrantes');
    const newIntegrante = document.createElement('div');
    newIntegrante.className = 'integrante';
    newIntegrante.innerHTML = `
        <label for="Integrante${integranteCount}_Nombres">Nombres:</label>
        <input type="text" name="Integrante${integranteCount}_Nombres" id="Integrante${integranteCount}_Nombres" placeholder="Nombres" required>
        <label for="Integrante${integranteCount}_Apellido">Apellido:</label>
        <input type="text" name="Integrante${integranteCount}_Apellido" id="Integrante${integranteCount}_Apellido" placeholder="Apellido" required>
        <label for="Integrante${integranteCount}_Documento">Documento:</label>
        <input type="text" name="Integrante${integranteCount}_Documento" id="Integrante${integranteCount}_Documento" placeholder="DNI" maxlength="8">
        <label for="Integrante${integranteCount}_Celular">Teléfono:</label>
        <input type="tel" name="Integrante${integranteCount}_Celular" id="Integrante${integranteCount}_Celular" placeholder="Teléfono" required>
        <label for="Integrante${integranteCount}_Email">Email:</label>
        <input type="email" name="Integrante${integranteCount}_Email" id="Integrante${integranteCount}_Email" placeholder="Email" required>
        <label for="Integrante${integranteCount}_Profesion">Profesión:</label>
        <input type="text" name="Integrante${integranteCount}_Profesion" id="Integrante${integranteCount}_Profesion" placeholder="Profesión" required>
        <button type="button" onclick="removeIntegrante(this)">Eliminar</button>
    `;
    integrantesDiv.appendChild(newIntegrante);
}

function removeIntegrante(button) {
    const integranteDiv = button.parentElement;
    integranteDiv.remove();
    integranteCount--;
}
