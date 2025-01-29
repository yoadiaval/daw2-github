<?php
include_once "../models/conexiondb.php";
class Libro{
    public static function getLibros($condicion){
        $con = Conexiondb::conectar();
        $sql = "SELECT * FROM libros WHERE $condicion ;";
        $resp = $con -> query($sql);

        if($resp){
            $libros = $resp->fetch_all(MYSQLI_ASSOC);
            return $libros;
        }else{
            return false;
        }
    }
}

?>