<?php
include_once "../model/Soporte.php";

class Dvd extends Soporte
{
    private string $idioma;
    private string $formatoPantalla;

    public function __construct($titulo, $precio, $idioma, $formatoPantalla)
    {
        parent::__construct($titulo, $precio);
        $this->idioma = $idioma;
        $this->formatoPantalla = $formatoPantalla;
    }

    public static function agregarDvd($dvd)
    {
        $conexion = ConexionDB::conectar();
        $datosSoporte = "'" . $dvd->getCodSoporte() . "','" . $dvd->getTitulo() . "','" . $dvd->getPrecio() . "'";
        $sql = "insert into soporte (cod, titulo, precio) values({$datosSoporte});";
        $respuestaSoporte = $conexion->query($sql);

        if ($respuestaSoporte) {
            $datosDvd = "'" . $dvd->getCodSoporte() . "','" . $dvd->idioma . "','" . $dvd->formatoPantalla . "'";
            $sqlDvd = "insert into dvd (cod_soporte, idioma, formatoPantalla) values({$datosDvd});";
            $respuestaDvd = $conexion->query($sqlDvd);
            if ($respuestaDvd) {
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
        echo "Tipo: Dvd <br/>";
       parent::muestraResumen();
    }
}
?>