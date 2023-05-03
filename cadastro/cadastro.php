<?php 
         include("conecta.php");
        $nome = $_POST["nome"];
        $sobrenome = $_POST["sobrenome"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
        $senha = $_POST["senha"];
        
        $comando = $pdo->prepare("INSERT INTO usuario(nome,email,telefone,senha) VALUES ('$nome', '$email','$telefone', '$senha')");

        $resultado = $comando->execute();
        
        header("location: cadastro.html");
        
    ?>
 