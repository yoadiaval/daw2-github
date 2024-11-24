<?php
session_start();
if (isset($_POST['enviar']) && $_POST['enviar'] === 'enviar') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $sexo = $_POST['sexo'];
    $_SESSION['nombre'] = $nombre;
    $_SESSION['email'] = $email;
    $_SESSION['sexo'] = $sexo;
} else {
    echo "Por favor, complete el formulario.";
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
    <form action="formulario3.php" method="POST">
        <input type="number" name="convivientes">
        <input type="checkbox" name="aficiones[]" value="beisbol"><label for="">Beisbol</label>
        <input type="checkbox" name="aficiones[]" value="ciclismo"><label for="">Ciclismo</label>
        <input type="checkbox" name="aficiones[]" value="natacion"><label for="">Natación</label>
        <button type="submit" value="enviar" name="enviar">Enviar</button>
    </form>
</body>

</html>