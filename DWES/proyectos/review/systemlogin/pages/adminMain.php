<?php
session_start();

if(!isset($_SESSION['usuario'])){
    header("Location: ./../index.php"  );
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido <?php 
      echo $_SESSION['usuario'];
    ?></h1>

    <form action="userform">
        <input type="number" name = "edad" placeholder = "Inserte su edad">
        <input type="checkbox" name = "aficiones[]" value = "beisbol"><label>Beisbol</label>
        <input type="checkbox" name = "aficiones[]" value = "teatro"><label>Teatro</label>
        <input type="checkbox" name = "aficiones[]" value = "musica"><label>Música</label>
    </form>

    <a href="./../app/loguot.php">Salir</a>
</body>
</html>