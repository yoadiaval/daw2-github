<?php
include_once "../model/Soporte.php";

class Juego extends Soporte
{
    private string $consola;
    private int $minNumJugadores;
    private string $maxNumJugadores;

    public function __construct($titulo, $precio, $consola, $minNumJugadores, $maxNumJugadores)
    {
        parent::__construct($titulo, $precio);
        $this->consola = $consola;
        $this->minNumJugadores = $minNumJugadores;
        $this->maxNumJugadores = $maxNumJugadores;

    }

    public static function agregarJuego($juego)
    {
        $conexion = ConexionDB::conectar();
        $datosSoporte = "'" . $juego->getCodSoporte() . "','" . $juego->getTitulo() . "','" . $juego->getPrecio() . "'";
        $sql = "insert into soporte (cod, titulo, precio) values({$datosSoporte});";
        $respuestaSoporte = $conexion->query($sql);

        if ($respuestaSoporte) {
            $datosJuego = "'" . $juego->getCodSoporte() . "','" . $juego->consola . "'," . $juego->minNumJugadores . "," . $juego->maxNumJugadores;
            $sqlJuego = "insert into juego (cod_soporte, consola, minJugadores, maxJugadores) values({$datosJuego});";
            $respuestaJuego = $conexion->query($sqlJuego);
            if ($respuestaJuego) {
                return true;
            } else {
                return false;
            }
        } else {
            echo "Fallo al agregar el soporte";
            return false;
        }

    }
    public function muestraResumen()
    {
        echo "Tipo: Juego <br/>";
        parent::muestraResumen();
    }
}
?>