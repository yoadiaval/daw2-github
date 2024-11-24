<?php
class EmpleadoStatic
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
        echo "<li>" . implode("</li><li>", $this->telefonos) . "</li>";
    }

    public function vaciarTelefonos()
    {
        $this->telefonos = [];
    }


    public static function toHtml(EmpleadoStatic $emp)
    {
        echo "<p>Nombre: $emp->nombre, $emp->apellidos</p>";
        echo "<p>Sueldo: $emp->sueldo</p>";
        echo "<p>Debe pagar impuesto: " . ($emp->debePagarImpuesto() ? "Si" : "No") . "</p>";
        echo "<p>Telefonos:</p>";
        echo "<ul>";
        $emp->listarTelefonos();
        echo "</ul>";
    }
}

?>