document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const containerSaludo = document.getElementById('container-saludo');
    const nombreInput = document.getElementById('nombre');
    const nameForm = document.getElementById('nameForm');
    const textoPregunta = document.getElementById('texto-pregunta');
    const textoSaludo = document.getElementById('texto-saludo');
    const aceptarBtn = document.getElementById('aceptarBtn');

    const preguntas = [
        "Hola, ¿cuál es tu nombre?"
    ];

    const saludo = [
        `Hola {nombre}. Bienvenido/a a CeSim. El Registro se debe completar por única vez por fecha y escenario 
        hasta 8 integrantes. Puedes consultar la fecha disponible. Tenga todos los datos personales 
        de aquellos integrantes que asistirán. Muchas Gracias`,
        
    ];

    let indexPregunta = 0;
    let indexTexto = 0;
    let nombreUsuario = '';

    function mostrarTextoAnimado(elemento, texto) {
        if (indexTexto < texto.length) {
            elemento.innerHTML += texto[indexTexto];
            indexTexto++;
            setTimeout(function() { mostrarTextoAnimado(elemento, texto); }, 50); // Ajusta la velocidad aquí
        } else {
            indexTexto = 0; // Reinicia el índice para el próximo texto
        }
    }

    function iniciarEfectoEscritura() {
        mostrarTextoAnimado(textoPregunta, preguntas[indexPregunta]);
    }

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        nombreUsuario = nombreInput.value.trim();
        if (nombreUsuario) {
            container.style.display = 'none';
            containerSaludo.style.display = 'block';
            textoSaludo.innerHTML = ''; // Reinicia el texto del saludo
            setTimeout(function() {
                mostrarTextoAnimado(textoSaludo, saludo.join('').replace('{nombre}', nombreUsuario));
            }, 500);
        } else {
            alert('Por favor, ingresa tu nombre.');
        }
    });

    aceptarBtn.addEventListener('click', function() {
        // Redirigir a la página deseada
        window.location.href = "./formulario.html"; // Reemplaza con la URL correcta
    });

    // Iniciar el efecto de escritura al cargar la página
    iniciarEfectoEscritura();
});
