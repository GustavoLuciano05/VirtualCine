<?php 
         include("conecta.php");
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
        $senha = $_POST["senha"];
        
        $comando = $pdo->prepare("INSERT INTO usuario(nome,email,telefone,senha) VALUES ('$nome', '$email','$telefone', '$senha')");

        $resultado = $comando->execute();
        
        header("location: cadastro.html");
        
    ?>
 