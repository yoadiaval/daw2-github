<?php
include_once "../model/Soporte.php";
include_once "../model/conexionDB.php";
class Cliente
{
    private string $nombre;
    private $soportesAlquilados = [];
    private $numSoportesAlquilados = 0;
    private string $id;

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
        $randomNum = rand(100, 999);
        $this->id = strtoupper(substr($nombre, 0, 3)) . $randomNum;
        $this->agregarCliente();
    }

    public function agregarCliente()
    {
        $conexion = ConexionDB::conectar();
        $sql = "insert into cliente (id, nombre) values ('" . $this->id . "','" . $this->nombre . "');";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }

    }

    public static function actualizarCliente($condicion, $data)
    {
        $conexion = ConexionDB::conectar();
        $sql = "update cliente set " . $data . " where " . $condicion . ";";
        $respuesta = $conexion->query($sql);

        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }
    public static function eliminar($id)
    {
        $conexion = ConexionDB::conectar();
        $sql = "delete from cliente where id = '" . $id . "';";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }

    public function obtenerSoportes()
    {
        $conexion = ConexionDB::conectar();
        $sql = "select soporte_cod from cliente_soporte where cliente_id='" . $this->id . "';";
        $respuesta = $conexion->query($sql);

        if ($respuesta) {
            $this->soportesAlquilados = $respuesta->fetch_all(MYSQLI_ASSOC);
        }
    }

    public function listarAlquileres()
    {
        $this->obtenerSoportes();
        foreach ($this->soportesAlquilados as $cod_soporte) {
            echo $cod_soporte['soporte_cod'] . "<br/>";
        }

    }

    public function getIdCliente()
    {
        return $this->id;
    }
    public function muestraResumen()
    {
        echo "Nombre: {$this->nombre} <br/>
              Identificador: {$this->id}<br/><br/>";

    }
    /*public function alquilar($codSoporte)
    {
        $this->soportesAlquilados[] = $codSoporte;
        $this->numSoportesAlquilados++;
    }
    public function devolver($codSoporte)
    {
        $pos_a_eliminar = array_search($codSoporte, $this->soportesAlquilados);

        if ($pos_a_eliminar !== false) {
            unset($this->soportesAlquilados[$pos_a_eliminar]); //elimina el valor en esa posición;
        } else {
            $message = "<br/>este soporte no está en la lista de alquilados {$pos_a_eliminar}<br/>";
            echo $message;
        }

    }*/

}
?>