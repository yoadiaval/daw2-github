<?php 
include_once "../model/conexiondb.php";
class Producto{
    public static function addProducto($desc, $precio){
        $conexion = conexiondb::conectar(); 
        $datos = "'{$desc}', '{$precio}'";
        $sql = "insert into productos (cod, descripcion, precio) values (null,{$datos});";
        $respuesta = $conexion->query($sql);

        if($respuesta){
            return true;
        }else{
            return false;
        }
        
    }

    public static function getProductos(){
        $conexion = conexiondb::conectar();
        $sql = "select * from productos where 1;";
        $respuesta = $conexion -> query($sql);

        if($respuesta){
            return $respuesta->fetch_all(MYSQLI_ASSOC);
        }
        
        return [];

    }
}

?>