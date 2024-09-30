<?php
$fichero = "datos.txt";

if(file_exists($fichero)){
    $content = file_get_contents($fichero);
    $patron = "/\w{1,}@\w{1,}\.[a-z]{2,4}/";
    $resultado = preg_replace($patron, "ydiaval@alu.edu.gva",$content);
    echo $resultado;
} 
?>