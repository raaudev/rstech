document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    emailjs.send("service_ry16ecl", "template_xkiwb58", {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    })
    .then(function(response) {
        console.log('E-mail enviado com sucesso:', response);
        alert('E-mail enviado com sucesso!');
        // Aqui você pode redirecionar o usuário para uma página de confirmação, se desejar
    }, function(error) {
        console.error('Erro ao enviar o e-mail:', error);
        alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
    });
});
