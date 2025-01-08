<?php
include_once "../model/Soporte.php";

class CintaVideo extends Soporte
{
    private string $duracion;
    public function __construct($titulo, $precio, $duracion)
    {
        parent::__construct($titulo, $precio);
        $this->duracion = $duracion;

    }
    public static function agregarCintaVideo($cinta)
    {
        $conexion = ConexionDB::conectar();
        $datosSoporte = "'" . $cinta->getCodSoporte() . "','" . $cinta->getTitulo() . "','" . $cinta->getPrecio() . "'";
        $sql = "insert into soporte (cod, titulo, precio) values({$datosSoporte});";
        $respuestaSoporte = $conexion->query($sql);

        if ($respuestaSoporte) {
            $datosCintaVideo = "'" . $cinta->getCodSoporte() . "','" . $cinta->duracion . "'";
            $sqlCintaVideo = "insert into cintavideo (cod_soporte, duracion) values({$datosCintaVideo});";
            $respuestaCintaVideo = $conexion->query($sqlCintaVideo);
            if ($respuestaCintaVideo) {
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
        echo "Tipo: Cinta Video <br/>";
        parent::muestraResumen();
    }
}
?>