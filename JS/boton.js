document.getElementById('MuestraFechas').addEventListener('click', function() {
    var escenario = document.getElementById('Escenario').value;
    var iframesContainer = document.getElementById('iframesContainer');

    // Oculta todos los iframes
    var iframes = iframesContainer.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
    }

    // Muestra el iframe correspondiente al escenario seleccionado
    if (escenario === 'Uno') {
        document.getElementById('iframeUno').style.display = 'block';
    } else if (escenario === 'Dos') {
        document.getElementById('iframeDos').style.display = 'block';
    } else if (escenario === 'Tres') {
        document.getElementById('iframeTres').style.display = 'block';
    }

    // Muestra el contenedor de iframes si está oculto
    if (iframesContainer.style.display === 'none') {
        iframesContainer.style.display = 'block';
    }
});

// Oculta el contenedor de iframes al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('iframesContainer').style.display = 'none';
});

document.getElementById('ocultarIframes').addEventListener('click', function() {
    document.getElementById('iframesContainer').style.display = 'none';
});
