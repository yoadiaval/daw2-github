<?php

class Modelo
{
    private $db;

    public function __construct()
    {

        $this->db = new mysqli("127.0.0.1", "phpmyadmin", "1234", "tienda");
         if ($this->db->connect_errno) {
             echo "Error de conexión: " . $this->db->connect_errno;
         }
    }

    public function insertar($tabla, $data)
    {
        $consulta = "insert into " . $tabla . " values(null," . $data . ");";
        echo $consulta;
        $resultado = $this->db->query($consulta);
        if ($resultado) {
            return true;
        } else {
            return false;
        }
    }

    public function obtenerdatos($tabla, $condicion)
    {
        $consulta = "select * from " . $tabla . " where " . $condicion . ";";
        $resultado = $this->db->query($consulta);
        $resArray = array();
        if ($resultado) {
            $resArray = $resultado->fetch_all(MYSQLI_ASSOC); //devuelve todo en un array asociativo
        }
        return $resArray;
    }

    public function actualizar($tabla, $data, $condicion)
    {
        $consulta = "update " . $tabla . " set " . $data . " where " . $condicion . ";";
        echo $consulta;
        $resultado = $this->db->query($consulta);
        if ($resultado) {
            return true;
        } else {
            return false;
        }
    }

    public function eliminar($tabla, $condicion)
    {
        $eliminar = "delete from " . $tabla . " where " . $condicion . " ;";
        $resultado = $this->db->query($eliminar);
        if ($resultado) {
            return true;
        } else {
            return false;
        }
    }

    function closeConnection()
    {
        if ($this->db)
            $this->db->close();
    }
}
?>