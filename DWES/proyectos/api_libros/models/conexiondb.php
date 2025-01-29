<?php
class Conexiondb{
    private static $localhost = "127.0.0.1";
    private static $user = "phpmyadmin";
    private static $password = "1234";
    private static $database = "biblioteca";

 public static function conectar(){
    try {
        $conexion = new mysqli(self::$localhost, self::$user, self::$password, self::$database);
    } catch (myqli_sql_error $error) {
        echo "ERROR!".$error->getMensaje();
    }
    return $conexion;
 }
 public static function cerrarCx($conexion){
    $conexion->cerrarCx();

}
    
}


?>