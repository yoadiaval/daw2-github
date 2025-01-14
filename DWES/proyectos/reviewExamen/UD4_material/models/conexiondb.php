<?php 
class Conexiondb{

    private $hostname = "127.0.0.1";
    private $database = "notas";
    private $user = "root";
    private $password = " "; 

    public static function conectar(){
        try {
            $conexion = new mysqli(self::$hostname, self::$database, self::$user, self::$password);
        } catch (mysqli_sql_exception $error) {
            echo $error->getMessage();
        }
        
        return $conexion;
    }
    public static cerrarCx($conexion){
        $conexion->close();
    }
}
?>