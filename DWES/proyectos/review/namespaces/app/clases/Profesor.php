<?php
namespace app\clases;
use app\padre\Persona;

class Profesor extends Persona
{
    private $asignatura;

    public function __construct($nombre, $edad, $asignatura)
    {
        parent::__construct($nombre, $edad);
        $this->asignatura = $asignatura;
    }

    public function __get($prop)
    {
        if ($prop === 'asignatura') {
            return $this->asignatura;
        }

        return parent::__get($prop);
    }

    public function __toString()
    {
        return parent::__toString() . ", Asignatura: $this->asignatura";
    }
}
?>