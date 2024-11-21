<?php
include "clases.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <h1>COCHES Y MOTOS EN STOCK</h1>
    <?php
    $coche1 = new Coche("Toyota" ,"Corolla", "25000", "2200");
    $moto1 = new Coche("Harley-Davidson" ,"Sportster", "15000", true);
    $moto2 = new Coche("Ducati" ,"Diavel", "18000", false);
    
    ?>
</body>
</html>