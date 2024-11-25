<?php
abstract class Persona
{
    protected $nombre;
    protected $edad;



    public function __construct($nombre, $edad)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function get_edad()
    {
        return $this->edad;
    }
    abstract public static function toHtml(Persona $persona);
}

class Empleado extends Persona
{
    private $sueldo;
    private $telefonos = [];

    const SUELDO_TOPE = 3333;

    public function __construct($nombre, $edad, $sueldo = 1000)
    {
        parent::__construct($nombre, $edad);
        $this->sueldo = $sueldo;
    }

    public function getSueldo()
    {
        return $this->sueldo;
    }

    public function setSueldo($sueldo)
    {
        $this->sueldo = $sueldo;
    }

    public function agregarTelefono($telefono)
    {
        $this->telefonos[] = $telefono;
    }

    public function getTelefonos()
    {
        return "<li>" . implode("</li><li>", $this->telefonos) . "</li>";
    }

    public function debePagarImpuesto()
    {
        if ($this->sueldo >= self::SUELDO_TOPE && $this->edad >= 21) {
            return true;
        }
    }
    public static function toHtml(Persona $persona)
    {
        if ($persona instanceof Empleado) {
            echo "<p>Nombre: $persona->nombre</p>";
        }
    }

    public function __toString()
    {
        return "Nombre: " . $this->nombre . "<br/> Edad: " . $this->edad . "<br/> Sueldo: " . $this->sueldo . "<br/> Telefonos: " . $this->getTelefonos();
    }
}
?>