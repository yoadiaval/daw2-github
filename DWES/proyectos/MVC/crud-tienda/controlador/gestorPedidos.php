<?php
include_once 'modelo/DataBase.php';

class GestorPedidos {
    private $modeloPedido;

    public function __construct() {
        $this->modeloPedido = new Modelo();
    }

    public function mostrarGestionPedido() {
        include 'vista/gestionPedidos.php';
    }

    public function consultarPedido(): array {
        $pedidos = $this->modeloPedido->obtenerdatos( 'pedido', 1 );
        return $pedidos;
    }

    public function insertar( $datos ) {
        $this->modeloPedido->insert( 'pedido', $datos );
        $this->modeloPedido->mostrarGestionPedido();
        /*header( 'Location: index.php?accion=mostrarGestionPedido&modelo=pedido' );*/
    }
}

?>