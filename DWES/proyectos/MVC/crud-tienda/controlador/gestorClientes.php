<?php
include_once "modelo/DataBase.php";

class GestorClientes
{
    private $modeloCliente;

    public function __construct()
    {
        $this->modeloCliente = new Modelo();
    }
    public function mostrarEditar()
    {
        include_once "vista/editarCliente.php";
    }
    public function mostrarAgregar()
    {
        include_once "vista/crearCliente.php";
    }
    public function insertar()
    {
        $nombre = $_GET['nombre'];
        $data = "'" . $nombre . "'";
        $this->modeloCliente->insertar('cliente', $data);
        header("Location: index.php");
    }
    public function mostrarClientes()
    {
        $clientes = $this->modeloCliente->obtenerdatos("cliente", 1);
        return $clientes;
    }
    public function editar()
    {
        $id = $_GET['id'];
        $condicion = "id='" . $id . "'";
        $cliente = $this->modeloCliente->obtenerdatos("cliente", $condicion);
        var_dump($cliente);
        include "vista/editarCliente.php";
    }
    public function actualizar()
    {
        $nombre = $_GET['nombre'];
        $id = $_GET['id'];
        $data = "nombre= '" . $nombre . "'";
        $condicion = "id='" . $id . "'";
        $this->modeloCliente->actualizar("cliente", $data, $condicion);
        header("Location: index.php");
    }
    public function eliminar(){
        $id = $_GET['id'];
        $condicion = "id='". $id. "'";
        $this->modeloCliente->eliminar("cliente", $condicion);
        header("Location: index.php");
    }
}

?>