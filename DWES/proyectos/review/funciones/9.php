<?php
$fichero = "datos.txt";

if(file_exists($fichero)){
    $contenido = file_get_contents($fichero);
    file_put_contents("salvaDatos.txt", $contenido);
}
?>