const scriptURL = 'https://script.google.com/macros/s/AKfycbznxh1AuxK3Nbyoz0gbSL3CM2ql9wH6EdWUIlew26xnYKaCpaScG20IPld3G44ZAJ0RgQ/exec';
const form = document.forms['registro'];

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            alert("Gracias por registrarte");
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdcLC0cwDAkhTx27Z7yZGXYulKrBLPIXdh6Zntqp-JLYd8uKQ/viewform?usp=sf_link';
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    });
});
