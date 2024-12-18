<?php
include_once '../modelo/DataBase.php';

$modelo = new GestorPedidos();
if (isset($_GET['accion'])) {
    $modelo->{$_GET['accion']}();
}

if (isset($_GET['enviar']) && $_GET['enviar'] = 'enviar') {
    $modelo->insertar();
}
class GestorPedidos
{
    private $modeloPedido;

    public function __construct()
    {
        $this->modeloPedido = new Modelo();
    }

    public function mostrarGestionPedido()
    {
        header('Location:../vista/gestionPedidos.php');
    }

    public function consultarPedido(): array
    {
        $pedidos = $this->modeloPedido->obtenerdatos('pedido', 1);
        return $pedidos;
    }

    public function insertar()
    {
        $cliente = $_GET['id_cliente'];
        $producto = $_GET['cod_producto'];
        $fecha = $_GET['date'];
        $datos = "'$producto','$cliente', '$fecha'";


        $this->modeloPedido->insertar('pedido', $datos);
        $this->mostrarGestionPedido();
        /*header( 'Location: index.php?accion=mostrarGestionPedido&modelo=pedido' );*/
    }
}

?>