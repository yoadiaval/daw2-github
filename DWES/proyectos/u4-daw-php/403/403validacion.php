<?php
$aficionesList = array("beisbol","natacion","pintura","lectura");
$aficiones = $_GET["aficiones"];

foreach($aficiones as $aficion){
    $flag = false;
   for ($i=0; $i < count($aficionesList); $i++) { 
    if($aficionesList[$i] ==  $aficion){
        $flag = true;
    }
   }
   if($flag == false){
    echo "se han detectado elementos que no existen en la lista";
   }
}
?>
//Para cambiar elmentos que se envian al server como que los envíos se hacen mediante get 
//copio la url del navagador y le cambio una de las aficions por una que no est'een la lista 
//para que salte el mensaje.