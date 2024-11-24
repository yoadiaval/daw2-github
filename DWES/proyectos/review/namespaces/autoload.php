<?php
spl_autoload_register(function ($nombreClase) {
    // Reemplazar las barras invertidas del namespace por barras normales para la ruta de archivos
    $nombreClase = str_replace('\\', '/', $nombreClase);
    include_once $nombreClase . ".php";
});
?>