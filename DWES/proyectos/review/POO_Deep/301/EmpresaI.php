<?php
include_once "312Trabajador.php";
class Empresa
{
    private $nombre;
    private $direccion;
    private static $arrayTrabajadores = [];

    public function __construct($nombre, $direccion)
    {
        $this->nombre = $nombre;
        $this->direccion = $direccion;
    }

    public function getNombre()
    {
        return $this->nombre;
    }
    public function setNombre($newNombre)
    {
        $this->nombre = $newNombre;
    }

    public function getDireccion()
    {
        return $this->direccion;
    }
    public function setDireccion($newDireccion)
    {
        $this->direccion = $newDireccion;
    }

    public function agregarTrabajador(Trabajador $nuevoTrabajador)
    {
        self::$arrayTrabajadores[] = $nuevoTrabajador;
    }

    public static function listarTrabajadoresHTML()
    {
        echo "<h2>Listado de Trabajadores</h2>";
        foreach (self::$arrayTrabajadores as $trabajador) {
            echo "<br/>Trabajador************************";
            Trabajador::toHtml($trabajador);
        }
    }

    public static function costeTotalNominas()
    {
        $total = 0;
        foreach (self::$arrayTrabajadores as $trabajador) {
            $total += $trabajador->calcularSueldo();
        }
        return $total;
    }

    public static function toJson()
    {
        foreach (self::$arrayTrabajadores as $trabajador => $values) {
        }
    }
}
?>