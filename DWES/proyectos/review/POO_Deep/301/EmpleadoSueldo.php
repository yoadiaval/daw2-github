<?php
class EmpleadoSueldo
{

    private $nombre;
    private $apellidos;
    private $sueldo;
    private $telefonos = [];
    private static $sueldoTope = 3333;

    public function __construct($nombre, $apellidos, $sueldo = 1000)
    {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->sueldo = $sueldo;

    }

    public function __get($propiedad)
    {
        switch ($propiedad) {
            case 'nombre':
                return $this->nombre;
            case 'apellidos':
                return $this->apellidos;
            case 'sueldo':
                return $this->sueldo;
            default:
                return null;
        }
    }
    public static function getSueldoTope()
    {
        return self::$sueldoTope;
    }
    public static function setSueldoTope($newValue)
    {
        self::$sueldoTope = $newValue;
    }
    public function debePagarImpuesto()
    {
        if ($this->sueldo >= self::$sueldoTope) {
            return true;
        }
    }

    public function agregarTelefono($telefono)
    {
        $this->telefonos[] = $telefono;
    }

    public function listarTelefonos()
    {
        foreach ($this->telefonos as $telefono) {
            echo $telefono . "<br>";
        }
    }

    public function vaciarTelefonos()
    {
        $this->telefonos = [];
    }
}

?>