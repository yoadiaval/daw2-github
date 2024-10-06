
<?php
$fechaNac = "01/18/1993";
$arrFechNac = explode("/", $fechaNac);

// Validar si la fecha es correcta
if (checkdate($arrFechNac[0], $arrFechNac[1], $arrFechNac[2])==1) {
    // Convertir la fecha de nacimiento en timestamp
    $nacToTime = strtotime("{$arrFechNac[2]}-{$arrFechNac[0]}-{$arrFechNac[1]}");
    $hoy = time();
    $edad = ($hoy - $nacToTime) / (60 * 60 * 24 * 365);
    echo "Edad: " . $edad;
} else {
    echo "Fecha de nacimiento no válida.";
}
?>