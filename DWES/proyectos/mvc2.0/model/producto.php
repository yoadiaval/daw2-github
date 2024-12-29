<?php
include_once "../model/conexionDB.php";

class Producto
{
    public static function obtenerProductos()
    {
        $conexion = ConexionDB::conectar();
        $sql = "Select * from productos;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            $productos = $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            $productos = [];
        }
        ConexionDB::cerrarCx($conexion);
        return $productos;
    }

    public static function eliminar($id_prod)
    {
        $conexion = ConexionDB::conectar();
        $sql = "delete from productos where cod = $id_prod";
        $resultado = $conexion->query($sql);
        ConexionDB::cerrarCx($conexion);
        if($resultado){
            return true;
        }else{
            return false;
        }
    }
    public static function obtenerSeleccionado($id_prod)
    {
        $conexion = ConexionDB::conectar();
        $sql = "select * from productos where cod = $id_prod";
        $respuesta = $conexion->query($sql);
        $producto = $respuesta->fetch_all(MYSQLI_ASSOC);
        ConexionDB::cerrarCx($conexion);
        return $producto;
    }
    public static function editar($data, $cod )
    {
        $conexion = ConexionDB::conectar();
        $sql = "update productos set $data where cod= $cod;";
        $respuesta = $conexion->query($sql);
        ConexionDB::cerrarCx($conexion);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }
    public static function agregar($data)
    {
        $conexion = ConexionDB::conectar();
        $sql = "insert into productos values (null," . $data . ");";
        $respuesta = $conexion->query($sql);
        ConexionDB::cerrarCx($conexion);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }
}
?>