<?php
include "Persona.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $e = new Persona("John", 20);

    $emp = new Empleado("John", 20, 30000);

    $emp->agregarTelefono("123456789");
    $emp->agregarTelefono("823456789");
    /*echo EmpleadoSueldo::toHtml($e);*/

    echo $emp->debePagarImpuesto() ? "Debe pagar impuesto" : "No debe pagar impuesto";

    echo Empleado::toHtml($emp);
    ?>
</body>

</html>