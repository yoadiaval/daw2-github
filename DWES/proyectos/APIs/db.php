<?php 
class Db{
private static $hostname = "127.0.0.1";
private static $user = "phpmyadmin";
private static $password = "1234";
private static $database = "tienda";

public static conectar(){
try {
    $conexion = new mysqli(self::$hostname, self::$user, self::$password, self::$database);
} catch (mysqli_sql_exception $error) {
    echo "ERROR! " . $error->getMessage();
}
return $conexion;
}

public static cerrarCx($conexion){
    $conexion->close();
}



}
?>