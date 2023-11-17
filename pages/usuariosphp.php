<?php
include('protect.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NOAR</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
    rel="stylesheet">

  <link rel="stylesheet" type="text/css" href="usuarios.css">
</head>

<body>
    


  <header>

  <div class="grid_header">

    <div class="conectado">
      Conectado: <?php echo $_SESSION['nome'];?>
  </div>

  <div class="novo_usuario">
        <a href="cadastro.php">Cadastrar novo usuário</a>
    </div>

    <div class="inicio">
        <a href="telahome.php">Início</a>
    </div>

</div>

</header>

<div class="titulo_usuario">
<p class="titulo">Usuários</p>
</div>

<div id="container-relatorios">
 <div id="relatorio">
  <p id="id-atendente"><?php echo $_SESSION['id_atendente']; ?></p>
  <div id="info-atendente">
    <p id="nome-atendente"><?php echo $_SESSION['nome']; ?></p>
  </div>
  <div id="botao-editar">
    <a href="editorphp.php" class="botao">
      Editar
    </a>
  </div>
 </div>
</div>


</body>
</html>   