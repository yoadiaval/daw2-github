<?php
class Empleado{
    private $nombre;
    private $apellidos;
    private $sueldo;

    public function __construct($nombre, $apellidos, $sueldo){
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->sueldo = $sueldo;
    }
 public function __get($propiedad){
     switch($propiedad){
         case 'nombre':
             return $this->nombre;
         case 'apellidos':
             return $this->apellidos;
         case'sueldo':
             return $this->sueldo;
         default:
             return null;
     }
 }

 public function __set($propiedad, $valor){
     switch($propiedad){
         case 'nombre':
             $this->nombre = $valor;
             break;
         case 'apellidos':
             $this->apellidos = $valor;
             break;
         case'sueldo':
             $this->sueldo = $valor;
             break;
     }
 }

 public function debePagarImpuesto(){
     if($this->saldo >=3333){
        return true;
     }
 }
}
?>


