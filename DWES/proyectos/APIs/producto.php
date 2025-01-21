<?php
include_once "./conexionDB.php";
class Producto
{
    public static function getProductos($condicion = 1)
    {
        $conexion = ConexionDB::conectar();
        $sql = "SELECT * FORM prodctos where $condicion;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return $respuesta->fetch_all(MYSQLI_ASSOC);
        }
    }
    /*  public static function postProducto($data){}
     public static function putProducto($data){}
     public static function patchProducto($data){}
     public static function deleteProducto($data){} */
}

?>