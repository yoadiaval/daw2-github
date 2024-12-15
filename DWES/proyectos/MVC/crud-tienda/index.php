<?php
include_once "controlador/gestorProductos.php";

//Se reciben las acciones por GET y se llama a la funcion correspondiente del controlador
$modelo = new ModeloController();
if (isset($_GET['accion'])) {
    $modelo->{$_GET['accion']}();
} else {
    $modelo->mostrar();
}
?>