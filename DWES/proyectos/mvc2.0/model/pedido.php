<?php
include_once "../model/conexionDB.php";
class Pedido
{
    public static function obtenerPedidos($condicion = 1)
    {
        $conexion = ConexionDB::conectar();
        $sql = "select * from pedidos where $condicion ORDER BY fecha DESC;";

        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            $pedidos = $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            $pedidos = [];
        }
        ConexionDB::cerrarCx($conexion);
        return $pedidos;
    }
    public static function agregar($datos)
    {
        $conexion = ConexionDB::conectar();
        $sql = "insert into pedidos values (null," . $datos . ");";

        $respuesta = $conexion->query($sql);
        $mensaje = $respuesta ? "Agregado pedido correctamente" : "algo fue mal";
        ConexionDB::cerrarCx($conexion);
        return $mensaje;
    }
    public static function eliminar($condicion)
    {
        $conexion = ConexionDB::conectar();
        $sql = "delete from pedidos where $condicion;";

        $respuesta = $conexion->query($sql);
        $mensaje = $respuesta ? "Pedido eliminado correctamente" : "Algo fue mal!";
        ConexionDB::cerrarCx($conexion);
        return $mensaje;
    }
}
?>