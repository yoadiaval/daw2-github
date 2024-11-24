<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (isset($_POST['enviar'])) {
        $color = $_POST['color'];
        setcookie('bgcolor', $color, time() + (24 * 60 * 60));
        if (isset($_COOKIE['bgcolor'])) {
            echo "El color elegido es:" . $_COOKIE['bgcolor'];
        }
    }
    ?>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <label for="color">Selecciona el color:</label>
        <select name="color" id="color">
            <option value="negro" <?php echo (isset($_COOKIE['bgcolor']) && $_COOKIE['bgcolor'] == 'negro') ? 'selected' : ''; ?>>Negro</option>
            <option value="rojo" <?php echo (isset($_COOKIE['bgcolor']) && $_COOKIE['bgcolor'] == 'rojo') ? 'selected' : ''; ?>>Rojo</option>
            <option value="verde" <?php echo (isset($_COOKIE['bgcolor']) && $_COOKIE['bgcolor'] == 'verde') ? 'selected' : ''; ?>>Verde</option>
        </select>
        <button type="submit" name="enviar">Enviar</button>
    </form>
</body>

</html>