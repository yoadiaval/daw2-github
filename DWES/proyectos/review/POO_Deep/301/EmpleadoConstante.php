<?php
class EmpleadosConstante
{
    private $nombre;
    private $apellidos;
    private $sueldo;
    private $telefonos = [];
    private const SUELDO_TOPE = 3333;

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

    public function debePagarImpuesto()
    {
        if ($this->sueldo >= self::SUELDO_TOPE) {
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