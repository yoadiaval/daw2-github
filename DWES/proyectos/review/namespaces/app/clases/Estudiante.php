<?php
namespace app\clases;
use app\padre\Persona;

class Estudiante extends Persona
{
    private $calificacion;

    public function __construct($nombre, $edad, $calificacion)
    {
        parent::__construct($nombre, $edad);
        $this->calificacion = $calificacion;
    }

    public function __get($prop)
    {
        if ($prop === 'calificacion') {
            return $this->calificacion;
        }

        return parent::__get($prop);
    }

    public function __toString()
    {
        return parent::__toString() . ", Calificación: $this->calificacion";
    }
}
?>