<?php
include_once "../model/pedido.php";
include_once "../model/producto.php";
include_once "../model/cliente.php";
$respuestaConsulta = array();

if (isset($_GET['enviar']) && $_GET['enviar'] == 'enviar') {
    $id_cliente = $_GET['cliente'];
    $cod_producto = $_GET['producto'];
    $fecha = $_GET['fecha'];
    $datos = "'" . $cod_producto . "','" . $id_cliente . "','" . $fecha . "'";
    $mensaje = Pedido::agregar($datos);
}

if (isset($_GET['enviar']) && $_GET['enviar'] == 'consultar') {
    $cod_pedido = $_GET['consultaProducto'];
    $condicion = "cod_producto='" . $cod_pedido . "'";
    $respuestaConsulta = Pedido::obtenerPedidos($condicion);

}

if (isset($_GET['accion']) && $_GET['accion'] == 'eliminar') {
    $cod_pedido = $_GET['id'];
    $condicion = "cod_pedido='" . $cod_pedido . "'";
    $mensaje = Pedido::eliminar($condicion);
}

$pedidos = Pedido::obtenerPedidos('1');
$productos = Producto::obtenerProductos();
$clientes = Cliente::obtener('1');
include_once "../views/showPedidos.php";
?>