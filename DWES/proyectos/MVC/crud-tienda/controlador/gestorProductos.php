<?php
include_once "modelo/DataBase.php";
class ModeloController
{
    private $modelo;
    public function __construct()
    {
        $this->modelo = new Modelo();
    }

    public function mostrar()
    {
        $productos = $this->modelo->obtenerdatos("producto", 1);
        include_once "vista/main.php";
    }
    public function agregar()
    {
        include_once "vista/agregar.php";

    }
    public function insertar()
    {
        $descripcion = $_GET['descripcion'];
        $precio = $_GET['precio'];
        $datos = "'" . $descripcion . "'," . $precio;
        $this->modelo->insertar("producto", $datos);
        header("Location: index.php");
    }

    public function editar()
    {
        $cod = $_GET['cod'];
        $condicion = "cod = $cod";
        $productoSelec = $this->modelo->obtenerdatos("producto", $condicion);
        require_once "vista/modificar.php";
    }

    public function actualizar()
    {
        $cod = $_GET['cod'];
        $descripcion = $_GET['descripcion'];
        $precio = $_GET['precio'];
        $data = "descripcion ='" . $descripcion . "' ,precio = " . $precio;
        $condicion = "cod = " . $cod;
        $this->modelo->actualizar("producto", $data, $condicion);
        header("Location:index.php");

    }

    public function eliminar()
    {
        $condicion = "cod  =" . $_GET['cod'];
        $this->modelo->eliminar("producto", $condicion);
        header("Location:index.php");
    }

}

?>