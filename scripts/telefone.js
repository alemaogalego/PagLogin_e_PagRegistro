const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Adiciona a formatação (xx) xxxxx-xxxx
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/^(\d*)/, '($1');
    }

    e.target.value = value;
});