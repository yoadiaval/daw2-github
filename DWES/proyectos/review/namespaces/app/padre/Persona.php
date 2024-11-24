<?php
namespace app\padre;
class Persona
{
    protected $nombre;
    protected $edad;

    public function __construct($nombre, $edad)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    public function __get($prop)
    {
        switch ($prop) {
            case 'nombre':
                return $this->nombre;
            case 'edad':
                return $this->edad;
            default:
                return null;
        }
    }

    public function __toString()
    {
        return "Nombre: $this->nombre, Edad: $this->edad";
    }
}
?>