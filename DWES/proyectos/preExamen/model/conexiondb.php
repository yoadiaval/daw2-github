<?php 
class conexiondb{
    private static $localhost = "127.0.0.1";
    private static $user = "root";
    private static $password = "";
    private $database = "tienda";

    public function conectar(){
        try {
            $conexion = new mysqli(self::$localhost, self::$user, self::$password, self::$database);
        } catch (mysqli_sql_exception $error) {
            echo "ERROR!" . $error->getMessage();
        }
        return $conexion;
    }
    public function cerrarCx($conexion){
        $conexion->close();
    }
}

?>