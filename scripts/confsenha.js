
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        if (password.value !== confirmPassword.value) {
            e.preventDefault(); // Impede o envio do formulário
            alert('As senhas não coincidem. Por favor, verifique.');
        }
    });
