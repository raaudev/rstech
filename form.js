const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    // Configurações do transporte para o Outlook
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'celeiro629@outlook.com', // Insira seu endereço de e-mail do Outlook
            pass: '@RAUZIN19' // Insira sua senha do Outlook
        }
    });

    // Opções do e-mail
    const mailOptions = {
        from: 'seu_email@outlook.com', // Insira seu endereço de e-mail do Outlook
        to: 'raudineysilva629@gmail.com', // Insira o e-mail do destinatário
        subject: 'Coleta de Dados RS TECH',
        text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    };

    // Enviar e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(`Erro ao enviar e-mail: ${error}`);
        } else {
            res.send('E-mail enviado com sucesso!');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
