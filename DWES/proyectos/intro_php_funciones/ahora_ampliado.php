<<<<<<< HEAD
//ampliación
//crea un documento que , pasándole una fecha de nacimiento, te diga cuantos años, meses y dias tienes
//comprueba que la fecha de nacimiento es correcta.
<?php
$fechaActual = time();

$fechaNac = "01/18/93";
echo checkdate($fechaNac)
?>
=======
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
$fechaNac = "01/18/1993";
$arrFechNac = explode("/", $fechaNac);


if (checkdate($arrFechNac[0], $arrFechNac[1], $arrFechNac[2])==1) {
   
    $nacToTime = strtotime("{$arrFechNac[2]}-{$arrFechNac[0]}-{$arrFechNac[1]}");
    $hoy = time();
    $edad = ($hoy - $nacToTime) / (60 * 60 * 24 * 365);
    echo "Edad: " . $edad;
} else {
    echo "Fecha inválida";
}
    ?>
</body>
</html>
>>>>>>> 6b0df5cec27e7c7159124f75065b20f527e8c18c
