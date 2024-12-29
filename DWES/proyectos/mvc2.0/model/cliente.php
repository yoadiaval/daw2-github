<?php
include_once "../model/conexionDB.php";
class Cliente
{
    public static function obtener($condicion = 1)
    {
        $conexion = ConexionDB::conectar();
        $sql = "select * from clientes where $condicion;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            $clientes = $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            $clientes = [];
        }
        ConexionDB::cerrarCx($conexion);
        return $clientes;
    }
    public static function agregar($datos)
    {
        $conexion = ConexionDB::conectar();
        $sql = "insert into clientes values (null, " . $datos . ");";
        echo $sql;
        $respuesta = $conexion->query($sql);
        $mensaje = $respuesta ? "Cliente agregado correctamente" : "Algo fue mal";
        ConexionDB::cerrarCx($conexion);
        return $mensaje;
    }
    public static function editar($datos, $condicion)
    {
        $conexion = ConexionDB::conectar();
        $sql = "update clientes set $datos where $condicion ;";

        $respuesta = $conexion->query($sql);
        $mensaje = $respuesta ? "Cliente editado correctamente!" : "Algo fue mal!";
        ConexionDB::cerrarCx($conexion);
        return $mensaje;
    }
    public static function eliminar($condicion)
    {
        $conexion = ConexionDB::conectar();
        $sql = "delete from clientes where $condicion";
        $respuesta = $conexion->query($sql);
        $mensaje = $respuesta ? "Cliente eliminado correctamente" : "Algo fue mal";
        ConexionDB::cerrarCx($conexion);
        return $mensaje;
    }

}
?>