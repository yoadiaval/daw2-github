<!DOCTYPE html>
<?php
session_start();
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .error{
            color:red;
        }
    </style>
</head>
<body>
    <form action="./controller/loginController.php" method="POST">
        <input type="text" name="username" placeholder="Inserte el usuario" required>
        <input type="password" name="password" placeholder="Inserte la contraseña" required>
        <input type="submit" name="enviar" value="enviar">
    </form>
    <p class="error">
        <?php 
        echo $_SESSION['mensaje'] ?? '';
        unset($_SESSION['mensaje']);
        ?>
    </p>
</body>
</html>