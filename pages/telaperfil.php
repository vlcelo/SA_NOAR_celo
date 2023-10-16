<?php $mysqli = include 'conexao.php';?>

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

  <link rel="stylesheet" type="text/css" href="/assets/perfil.css">
</head>

<body>

  <header>
    <div class="navbar">
      <div class="relatorios">
        <a href="relatórios.html">Relatórios</a>
    </div>
    <div class="inicio">
        <a href="home.html">Início</a>
    </div>
    <div class="conectado">
        <a href="home.html">Perfil</a>
    </div>
</div>
        
</header>

<p class="titulo">Meu perfil</p>
    <div class="form-caixa">

        <div class="perfil">
        <p>Bem-vindo ao seu perfil, <?php echo $usercpf; ?>!</p>
        </div>


</div>


</body>
</html>    
