<?php
$hora = "21:50:12";
$test = preg_match("/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/", $hora, $partes);

if($test == 1){
   echo "hora válida";
}else{
    echo "hora inválida";
}
?>