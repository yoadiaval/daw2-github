<?php 
 class Estudiante extends Persona{
    private $numExpediente;
    
    public function __construct($dni, $nombre, $email, $expediente){
        Persona::__construct($dni, $nombre, $email);
        $this -> numExpediente = $expediente; 
    }
}
?>