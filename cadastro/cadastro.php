<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        // $id = $_POST["id"];
        $nome = $_POST["nome"];
        $sobrenome = $_POST["sobrenome"];
        $email = $_POST["email"];
        $celular = $_POST["celular"];
        $senha= $_POST["senha"];
        $confirmarSenha= $_POST["confirmarSenha"];
        
        $comando = $pdo->prepare("INSERT INTO cadastro(nome,sobrenome,email,celular,senha,confirmarSenha) VALUES('$id','$nome','$sobrenome','$email','$celular','$senha','$confirmarSenha')");

        $resultado = $comando->execute();
        
        header("location: cadastro.html");
        
    ?>
</body>
</html>