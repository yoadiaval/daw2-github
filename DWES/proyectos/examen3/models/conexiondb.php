<?php
class Conexiondb{
private static $localhost = "127.0.0.1";
private static $user = "phpmyadmin";
private static $password = "1234";
private static $db = "instituto_db";

public static function conectar(){
    try {
       $con = new mysqli(self::$localhost ,self::$user ,self::$password ,self::$db );
    } catch (mysqli_sql_error $error) {
        echo "ERROR!" .$error->getMessage();
    }
    return $con;
}


public static function cerrarCx($con){
    $con->close();
}

}


?>