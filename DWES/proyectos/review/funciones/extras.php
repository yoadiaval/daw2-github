<?php
$fecha = "03-11-2014";
if (preg_match("/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/", $fecha, $partes) == 1) {
    echo "La fecha completa es " . $partes[0];
    echo "El día es " . $partes[1];
    echo "El mes es " . $partes[2];
    echo "El año es " . $partes[3];
} else {
    echo "Formato de fecha no válido";
}
print_r($partes);

?>