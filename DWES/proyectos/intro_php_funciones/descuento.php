<?php 
include "funciones.inc.php" 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Función Descuentos</h1>
    <?php 
    echo "Descuento aplicado a 250 euros es:  " . calculaDescuento(250, 10) . "<br/>";
    echo "Descuento aplicado a 85 euros sin indicar descuento: " . calculaDescuento(85);
    ?>
</body>
</html>