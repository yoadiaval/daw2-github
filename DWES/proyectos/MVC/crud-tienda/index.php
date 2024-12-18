<?php
include_once "controlador/gestorProductos.php";
include_once "controlador/gestorClientes.php";


//Se reciben las acciones por GET y se llama a la funcion correspondiente del controlador
$modelo = new ModeloController();
$modeloCliente = new GestorClientes();


if (isset($_GET['accion'])) {
    if (isset($_GET['modelo'])) {
        switch ($_GET['modelo']) {
            case 'producto':
                $modelo->{$_GET['accion']}();
                break;
            case 'cliente':
                $modeloCliente->{$_GET['accion']}();
                break;

        }
    }

} else {
    $productos = $modelo->mostrar();
    $clientes = $modeloCliente->mostrarClientes();
    include_once "vista/main.php";
}
?>