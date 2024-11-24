<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (isset($_COOKIE['accesos'])) {
        setcookie('accesos', $_COOKIE['accesos'] + 1, time() + (7 * 24 * 60 * 60)); // Incrementamos y actualizamos la cookie con duración de 7
        echo "numero de accesos: ". $_COOKIE['accesos']. "\n";  
    }else{
        echo "Bienvenido por primera vez.\n";
        setcookie('accesos', 1, time() + (7 * 24 * 60 * 60)); // Incrementamos y actualizamos la cookie con duración de 7 días
    }
    
    if (isset($_GET['reiniciar']) && $_GET['reiniciar'] == 1) {
        
        setcookie('accesos', 0, time() + (7 * 24 * 60 * 60)); // Reseteamos la cookie
        header('Location: contadorVisitas.php'); // Redireccionamos a la página actual
    }
    ?>
    <a href="contadorVisitas.php?reiniciar=1">Reiniciar</a>
    
</body>

</html>