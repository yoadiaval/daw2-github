<?php
include_once "../model/producto.php";

if(isset($_GET['enviar'])){
   $respuesta = Producto::addProducto($_GET['descripcion'], $_GET['precio']);  
    if($respuesta){
    $mensaje= "Producto añadido con exito";
    }

}
$productos = Producto::getProductos();
include_once "../views/adminPage.php";
?>