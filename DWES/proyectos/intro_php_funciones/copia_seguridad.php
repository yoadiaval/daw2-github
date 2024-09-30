<?php 
$fichero = "datos.txt";

if(file_exists($fichero)){
    $content = file_get_contents($fichero);
    file_put_contents("datosCopia.txt", $content);
    echo "entre";
}
?>