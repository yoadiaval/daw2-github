<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: index.php');
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
    <h1>Bienvenido
        <?php
        echo $_SESSION['user'];
        ?>
    </h1>
    <ul>
        <?php
        echo "<li>" . implode("</li><li>", $_SESSION['series']) . "</li>";
        ?>
    </ul>
    <a href="peliculas.php">Ver Películas</a>
    <a href="logout.php">Cerrar Sesión</a>
</body>

</html>