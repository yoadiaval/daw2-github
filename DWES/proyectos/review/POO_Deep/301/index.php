<?php
include "312Trabajador.php";
include "Empresa.php";
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
    $gerente = new Gerente("Juan", "Perez", 30, 3000);
    $empleado = new Empleado("Laura", "Perez", 20, 48, 10);

    $empleado->agregarTelefono("123456789");
    $empleado->agregarTelefono("623456789");
    $empleado->agregarTelefono("523456789");

    $gerente->agregarTelefono("123456789");
    $gerente->agregarTelefono("623456789");
    $gerente->agregarTelefono("523456789");

    echo Gerente::toHtml($gerente);

    $empresa = new Empresa("Empresa Deep", "Calle 123");
    $empresa->agregarTrabajador($gerente);
    $empresa->agregarTrabajador($empleado);
    Empresa::listarTrabajadoresHTML();
    echo $empresa->costeTotalNominas();
    ?>
</body>

</html>