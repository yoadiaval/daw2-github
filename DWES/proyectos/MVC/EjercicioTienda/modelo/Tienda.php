<?php
include 'Db.php';
class Tienda{
   public static function getProductos(){
    //hace conexion con la base de datos,
    $db = new Db("127.0.0.1", "phpmyadmin", "1234", "tienda");
var_dump($db);
   /* //Se solicitan los productos de la base de datos
    $productos = $db->getData("SELECT * from productos");

    //se retornan lops productos 
    return $productos;
   */
   }

}

?>