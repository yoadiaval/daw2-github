<?php
class Conexiondb{
private static $localhost = "127.0.0.1";
private static $user = "root";
private static $password = "";
private static $database = "biblioteca";

public static function conectar(){
    try {
        $conexion = new mysqli(self::$localhost, self::$user, self::$password, self::$database);
    } catch (mysqli_sql_error $error) {
        echo "ERROR!" . $error->getMessage();
    }
    return $conexion;
}

public static function cerrarCx($conexion){
    $conexion->close();
}
}
?>