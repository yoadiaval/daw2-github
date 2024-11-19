<?php
$hora = "24:30:12";
/*$esCorrecta = true;
$arrHora = explode(":", $hora);
switch (true) {
    case $arrHora[0] >= 24 or $arrHora[0] < 0:
    case $arrHora[1] >= 60 or $arrHora[1] < 0:
    case $arrHora[2] >= 60 or $arrHora[2] < 0:
        $esCorrecta = false;
        break;
}

echo $esCorrecta ? "La hora es correcta" : "La hora es incorrecta";
*/

//VARIANTE2


preg_match("/^(\d{2}):(\d{2}):(\d{2})/",$hora,$arrHora);

switch (true) {
    case $arrHora[1] >= 24 or $arrHora[1] < 0:
    case $arrHora[2] >= 60 or $arrHora[2] < 0:
    case $arrHora[3] >= 60 or $arrHora[3] < 0:
        $esCorrecta = false;
        break;
}

echo $esCorrecta ? "La hora es correcta" : "La hora es incorrecta";


?>