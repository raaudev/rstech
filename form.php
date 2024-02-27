<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $mensagem = addslashes($_POST['mensagem']);
    
    $para = "raudineysilva629@gmail.com";
    $assunto = "Coleta de dados - Rs Tech";
    
    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;
    
    $cabeca = "From: bentoalves223@gmail.com"."\n"."Reply-to: ".$email."/n"."X=Mailer:PHP/".phpversion();
    
    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>