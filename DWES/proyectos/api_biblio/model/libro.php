<?php
include_once "../model/conexiondb.php";
class Libro{
    public static function getLibros($condition = "1"){
        $con = Conexiondb::conectar();
        $sql = "SELECT * FROM libros WHERE $condition ;";
        $resp = $con->query($sql);
        if($resp){
            echo json_encode($resp->fetch_all(MYSQLI_ASSOC));
        } else{
            echo json_encode();
        }
    }
    public static function putLibro($data){
        $con = Conexiondb::conectar();
        
        foreach ($data as $key => $value) {
            $data_format[] = "$key = '$value'"; 
        }
        $sql = "UPDATE libros SET " . implode(',', $data_format)." WHERE id='".$data['id'] ."';"; 
        $resp = $con->query($sql);

        if($resp){
            echo  json_encode(["mensaje"=>"Libro modificado correctamente"]);
        }else{
            echo json_encode(["mensaje"=>"ERROR al modificar el libro"]);
        }
        
    }
    public static function deleteLibro($data){
        $con = Conexiondb::conectar();
        $sql = "DELETE FROM libros WHERE id='".$data['id']."';";
        
        $resp = $con->query($sql);
        if($resp){
            echo json_encode(["mensaje"=>"Libro eliminado exitosamente"]);
        }else{
            echo json_encode(["mensaje"=>"Ha ocurrido un error al eliminar el libro"]);
        }
    }
    /*public static function addLibro(){}
    
    public static function patchLibro(){}
    */
}

?>