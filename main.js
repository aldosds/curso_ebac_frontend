const form = document.getElementById('form-numerico');

function validaNumero(numeroA, numeroB) {
    const numeroValidar = numeroA < numeroB;
    return numeroValidar;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');

    formEValido = validaNumero (numeroA.value, numeroB.value);
    if (formEValido) {
        document.querySelector('.valid-message').style.display = 'block';
    } else {
        document.querySelector('.invalid-message').style.display = 'block';
    }
})

let btn = document.querySelector('#refresh');
btn.addEventListener('click', function() {
    location.reload();
});