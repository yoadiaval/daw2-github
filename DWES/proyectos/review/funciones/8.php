<?php
$hora = "24:30:12";
$esCorrecta = true;
$arrHora = explode(":", $hora);
switch (true) {
    case $arrHora[0] >= 24 or $arrHora[0] < 0:
    case $arrHora[1] >= 60 or $arrHora[1] < 0:
    case $arrHora[2] >= 60 or $arrHora[2] < 0:
        $esCorrecta = false;
        break;
}

echo $esCorrecta ? "La hora es correcta" : "La hora es incorrecta";
?>