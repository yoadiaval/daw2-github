<?php
include_once "../modelo/conexionDB.php";
class Producto
{
    public static function getProductos($condicion = 1)
    {
        $conn = ConexionDB::conectar();
        $sql = "SELECT * FROM productos WHERE $condicion;";
        $resp = $conn->query($sql);
        if ($resp) {
            echo json_encode($resp->fetch_all(MYSQLI_ASSOC));
        } else {
            echo json_encode(["mensaje" => "Error al obtener los producto"]);
        }
        ConexionDB::cerrarCx($conn);
    }

    public static function postProducto($data)
    {
        $conn = ConexionDB::conectar();
        $sql = "INSERT INTO productos VALUES (null,'" . $data['descripcion'] . "','" . $data['precio'] . "','" . $data['nombre'] . "' );";
        $resp = $conn->query($sql);
        if ($resp) {
            echo json_encode(["mensaje" => "Producto agregado correctamente"]);
        } else {
            echo json_encode(["mensaje" => "Error al agregar el producto"]);
        }
        ConexionDB::cerrarCx($conn);
    }

    public static function putProducto($data)
    {
        /*Se cmprueba que vienen todos los datos*/
        if (!isset($data['cod'], $data['nombre'], $data['descripcion'], $data['precio'])) {

            echo json_encode(["mensaje" => "400, Faltan campos obligatorios (cod, nombre, descripcion, precio)"]);
            return;
        }
        $conn = ConexionDB::conectar();
        $newData = "cod= '" . $data['cod'] . "', descripcion = '" . $data['descripcion'] . "',precio = '" . $data['precio'] . "', nombre = '" . $data['nombre'] . "'";
        $sql = "UPDATE productos SET $newData WHERE cod = '" . $data['cod'] . "';";

        $resp = $conn->query($sql);

        if ($resp) {

            echo json_encode(["mensaje" => "Producto modificado correctamente"]);
        } else {
            echo json_encode(["mensaje" => "Error al modificar el producto"]);
        }
        ConexionDB::cerrarCx($conn);
    }

    public static function patchProducto($data)
    {
        $newdatos = [];
        foreach ($data as $clave => $valor) {
            $newdatos[] = "$clave='" . $valor . "'";
        }
        ;

        $conn = ConexionDB::conectar();
        $sql = "UPDATE productos SET " . implode(',', $newdatos) . " where cod='" . $data['cod'] . "';";
        $resp = $conn->query($sql);
        if ($resp) {
            echo json_encode(["mensaje" => "Producto modificado correctamente"]);
        } else {

            echo json_encode(["mensaje" => "Error al modificar el producto"]);
        }
        ConexionDB::cerrarCx($conn);
    }

    public static function deleteProducto($data)
    {
        $cod = $data['cod'];
        $conn = conexionDB::conectar();
        $sql = "DELETE FROM productos WHERE cod = '{$cod}';";
        $resp = $conn->query($sql);
        if ($resp) {
            echo json_encode(["mensaje" => "Producto eliminado correctamente"]);
        } else {
            echo json_encode(["mensaje" => "Error al eliminar el producto"]);
        }
        ConexionDB::cerrarCx($conn);
    }
}

?>