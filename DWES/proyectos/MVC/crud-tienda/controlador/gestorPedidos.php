<?php 
include_once "modelo/DataBase.php";
class GestorPedidos{
   private $modeloPedido;
public function __construct(){
    $this->modeloPedido = new Modelo();
}

public function mostrarGestionPedido(){
    include "vista/gestionPedidos.php";
}
public function consultarPedido(): array{
   $pedidos = $this->modeloPedido->obtenerdatos("pedido", 1);
   return $pedidos;
}


}

?>