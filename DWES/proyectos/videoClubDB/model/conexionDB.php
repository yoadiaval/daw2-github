<?php
class ConexionDB
{
    private static $hostname = "127.0.0.1";
    private static $database = "videoClub";
    private static $user = "root";
    private static $password = "";

    public static function conectar()
    {
        try {
            $conexion = new mysqli(self::$hostname, self::$user, self::$password, self::$database);
        } catch (mysqli_sql_exception $error) {
            echo "!ERROR: !" . $error->getMessage();
        }
        return $conexion;
    }

    public static function cerrarCx($conexion)
    {
        $conexion->close();
    }
}
?>