<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="./controller/loginController.php">
        <input type="text" name="user" placeholder="Inserte su nombre" required>
        <input type="password" name="password" placeholder="inserte la contraseña" required>
        <label>Administrador</label>
        <input type="checkbox" name="admin">
        <input type="submit" name="enviar" value="enviar">
    </form>
    <p>
        <?php echo $_SESSION['error'] ?? "" ?>
    </p>
</body>

</html>