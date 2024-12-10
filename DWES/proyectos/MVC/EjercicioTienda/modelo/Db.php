<?php
class Db{
    private $db;

    function createConnection($servidor, $usuario, $clave, $dbname) {
        $db = new mysqli($servidor, $usuario, $clave, $dbname);
        if($db->connect_errno) {
            echo "Error de conexión: " . $db->connect_errno;
            } 
        return $db;
      }
    
      function closeConnection() {
        if ($this->db) $this->db->close();
      }

    function getData($sql){
        $respuesta = $this->db->query($sql);
        $resArray = array();
        if ($respuesta) {
             $resArray = $respuesta->fetch_all();
        }
        return $resArray;
    }  
}


?>