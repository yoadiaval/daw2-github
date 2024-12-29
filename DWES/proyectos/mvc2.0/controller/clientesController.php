<?php
include_once "../model/cliente.php";

if (isset($_GET['accion'])) {
    switch ($_GET['accion']) {
        case 'enviarEditar':
            $condicion = "id = '" . $_GET['id'] . "'";
            $clienteSeleccionado = Cliente::obtener($condicion);
            break;
        case 'eliminar':
            $condicion = "id = '" . $_GET['id'] . "'";
            $mensaje = Cliente::eliminar($condicion);
            break;
    }
}

if (isset($_GET['enviar']) && $_GET['enviar'] == 'enviar') {
    if ($_GET['id'] !== ' ') {
        $datos = "nombre = '" . $_GET['nombre'] . "'";
        $condicion = "id = '" . $_GET['id'] . "'";
        $mensaje = Cliente::editar($datos, $condicion);
    } else {
        $mensaje = "Debe seleccionar un Cliente para editar";
    }

}

if (isset($_GET['enviar']) && $_GET['enviar'] == 'agregar') {

    $datos = "'" . $_GET['nombre'] . "'";
    $mensaje = Cliente::agregar($datos);


}


$clientes = Cliente::obtener("1");
include_once "../views/showClientes.php";
?>