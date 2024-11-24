<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    session_start();
    if (isset($_POST['enviar'])) {
        $color = $_POST['color'];
        $_SESSION['bgcolor'] = $color;


        header("Location: fondoSesion2.php");
    }

    if (isset($_GET['reiniciar']) && $_GET['reiniciar'] == 1) {
        session_unset();
        session_destroy();
        header("Location: " . $_SERVER['PHP_SELF']);
        exit();
    }
    ?>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <label for="color">Selecciona el color:</label>
        <select name="color" id="color">
            <option value="negro" <?php echo (isset($_SESSION['bgcolor']) && $_SESSION['bgcolor'] == 'negro') ? 'selected' : ''; ?>>Negro</option>
            <option value="rojo" <?php echo (isset($_SESSION['bgcolor']) && $_SESSION['bgcolor'] == 'rojo') ? 'selected' : ''; ?>>Rojo</option>
            <option value="verde" <?php echo (isset($_SESSION['bgcolor']) && $_SESSION['bgcolor'] == 'verde') ? 'selected' : ''; ?>>Verde</option>
        </select>
        <button type="submit" name="enviar">Enviar</button>
    </form>
</body>

</html>