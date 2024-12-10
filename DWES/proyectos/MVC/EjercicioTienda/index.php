<?php
include_once './modelo/Tienda.php';
$productos = Tienda::getProductos();
include './vista/showProductos.php';
?>