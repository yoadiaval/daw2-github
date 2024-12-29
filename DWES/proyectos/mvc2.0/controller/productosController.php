<?php
include_once "../model/producto.php";

$productoSeleccionado = null;
if (isset($_GET['enviar']) && $_GET['enviar'] == 'enviar') {

    $newDesc = $_GET['descripcion'];
    $newPrecio = $_GET['precio'];
    if ($_GET['cod'] !== '') {
        $cod = $_GET['cod'];
        $data = "descripcion = '" . $newDesc . "', precio = '" . $newPrecio . "'";
        $respuesta = Producto::editar($data, $cod);
    } else {
        $errorMessage = "Debe seleccionar un producto para editar";
    }

}
if (isset($_GET['agregar']) && $_GET['agregar'] == 'enviar') {

    $descripcion = $_GET['descripcion'];
    $precio = $_GET['precio'];
    $data = "'" . $descripcion . "','" . $precio . "'";
    $result = Producto::agregar($data);
    if ($result) {
        $message = "Accion ejecutada correctamente";
    } else {
        $message = "Algo fue mal!";
    }
}

if (isset($_GET['accion']) && isset($_GET['id'])) {
    switch ($_GET['accion']) {
        case 'editar':
            $productoSeleccionado = Producto::obtenerSeleccionado($_GET['id']);
            break;
        case 'eliminar':
            $result = Producto::eliminar($_GET['id']);
            if ($result) {
                $message = "Accion ejecutada correctamente";
            } else {
                $message = "Algo fue mal!";
            }
            break;
    }
}

$productos = Producto::obtenerProductos();
include "../views/showProductos.php";



?>