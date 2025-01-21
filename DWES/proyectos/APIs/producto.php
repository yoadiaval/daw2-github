<?php
include_once "./conexionDB.php";
class Producto
{
    public static function getProductos($condicion = 1)
    {
        $conexion = ConexionDB::conectar();
        $sql = "SELECT * FROM productos WHERE $condicion;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return $respuesta->fetch_all(MYSQLI_ASSOC);
        }
    }
    public static function postProducto($data)
    {
        $conexion = ConexionDB::conectar();
        $sql = "INSERT INTO productos VALUES (null,'" . $data['descripcion'] . "','" . $data['precio'] . "','" . $data['nombre'] . "' );";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }

    public static function putProducto($data)
    {
        if (!isset($data['cod'], $data['nombre'], $data['descripcion'], $data['precio'])) {
            echo "400, Faltan campos obligatorios (cod, nombre, descripcion, precio)";
            return;
        }
        $conexion = ConexionDB::conectar();
        $newData = "cod= '" . $data['cod'] . "', descripcion = '" . $data['descripcion'] . "',precio = '" . $data['precio'] . "', nombre = '" . $data['nombre'] . "'";
        $sql = "UPDATE productos SET {$newData} WHERE cod = '" . $data['cod'] . "';";
        echo $sql;
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }
    public static function patchProducto($data)
    {

        $newdatos = [];
        if (!isset($data['cod'])) {
            echo "NO ha proporcionado el código del producto";
            return;
        }
        if (isset($data['descripcion'])) {
            $newdatos[] = "descripcion='" . $data['descripcion'] . "'";
        }
        if (isset($data['precio'])) {
            $newdatos[] = "precio='" . $data['precio'] . "'";
        }
        if (isset($data['nombre'])) {
            $newdatos[] = "nombre ='" . $data['nombre'] . "'";
        }
        var_dump($newdatos);
         if (empty($newdatos)) {
             echo "no se han proporcionado campos para actualizar";
             return;
         }
        
        $conexion = ConexionDB::conectar();
        $sql = "UPDATE productos SET " . implode(',', $newdatos) . "where cod='" . $data['cod'] . "'";
        $respuesta = $conexion->query($sql);
        if($respuesta){
            return true;
        }else{
            return false;
        }
    }
    public static function deleteProducto($cod)
    {
        $conexion = conexionDB::conectar();
        $sql = "DELETE FROM productos WHERE cod = {$cod};";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }
}

?>