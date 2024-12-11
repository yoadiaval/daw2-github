<?php
class Db{
    private $db;

    function __construct($servidor, $usuario, $clave, $dbname) {
        $this->db = new mysqli($servidor, $usuario, $clave, $dbname);
        if( $this->db->connect_errno) {
            echo "Error de conexión: " .  $this->db->connect_errno;
            } 
        return $this->db;
      }
    
      function closeConnection() {
        if ($this->db) $this->db->close();
      }

    function getData($sql){
        $respuesta = $this->db->query($sql);
        $resArray = array();
        if ($respuesta) {
             $resArray = $respuesta->fetch_all(MYSQLI_ASSOC);
        }
        return $resArray;
    }  
}


?>