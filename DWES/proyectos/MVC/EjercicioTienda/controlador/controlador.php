<?php

include_once '../modelo/Tienda.php';
$productos = Tienda::getProductos();
include_once '../vista/showProductos.php';

?>