<?php
include_once "../modelo/Db.php";

if(isset($_POST['enviar']) && $_POST['enviar'] == "enviar"){
 $productof = $_POST['prodSeleccionado'];
 $productof = intval($productof); 
 $peticion = "SELECT * FROM pedido WHERE cod_pedido = '$productof';";

 $db = new Db("127.0.0.1", "phpmyadmin", "1234", "tienda");
 $pedidos = $db->getData($peticion);
}
include_once("./controlador.php");
/*include("../vista/showProductos.php");*/
?>