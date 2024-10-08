<?php
class Persona{
    private $dni;
    private $nombre;
    private $email;

    public function __construct($dni, $nombre, $email){
        $this-> dni = $dni;
        $this-> nombre = $nombre;
        $this-> email = $email;
    }
    public function __get($nombre_att){
        switch (true) {
            case $nombre_att=="dni":
                return $this -> dni;
                break;
            case $nombre_att=="nombre":
                return $this -> nombre;
                break;
            case $nombre_att=="email":
                return $this -> email;
                break;
                default:
                alert("El valor insertado es incorrecto");
                break;
        }
    }
    public function  __set($nombre_att, $valor){
        switch (true) {
            case $nombre_att == "dni":
                $this -> dni = $valor;
                break;
            case $nombre_att == "nombre":
                $this -> nombre = $valor;
                break;
            case $nombre_att == "email":
                $this -> email = $valor;
                break;
            
            default:
                alert("El valor insertado es incorrecto");
                break;
        }
    }

}
?>