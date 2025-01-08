<?php
include_once "../model/VideoClub.php";
include_once "../model/Cliente.php";

if (isset($_GET['accion']) && $_GET['accion'] == 'eliminarCliente') {
    VideoClub::eliminarCliente($_GET['id']);
}
if (isset($_GET['formCliente']) && $_GET['formCliente'] == 'enviar') {
    VideoClub::incluirCliente($_GET['nombre']);
}

if (isset($_GET['formAlquiler']) && $_GET['formAlquiler'] == 'enviar') {
    VideoClub::agregarAlquiler($_GET['soporteSeleccionado'], $_GET['clienteSeleccionado']);
}

if (isset($_GET['juego']) && $_GET['juego'] == 'enviar') {
    $titulo = $_GET['titulo'];
    $precio = $_GET['precio'];
    $consola = $_GET['consola'];
    $minjug = $_GET['minjug'];
    $maxjug = $_GET['maxjug'];
    VideoClub::incluirJuego($titulo, $precio, $consola, $minjug, $maxjug);
}

if (isset($_GET['dvd']) && $_GET['dvd'] == 'enviar') {
    $titulo = $_GET['titulo'];
    $precio = $_GET['precio'];
    $idioma = $_GET['idioma'];
    $formato = $_GET['formato'];

    VideoClub::incluirDvd($titulo, $precio, $idioma, $formato);
}
if (isset($_GET['cinta']) && $_GET['cinta'] == 'enviar') {
    $titulo = $_GET['titulo'];
    $precio = $_GET['precio'];
    $duracion = $_GET['duracion'];

    VideoClub::incluirCintaVideo($titulo, $precio, $duracion);
}

if (isset($_GET['accion']) && $_GET['accion'] == 'editarCliente') {
    $id = $_GET['id'];
    $condicion = "id='" . $id . "'";
    $clienteSeleccionado = VideoClub::getClientes($condicion);
    include_once "../views/showEditCliente.php";
}
if (isset($_GET['accion']) && $_GET['accion'] == 'mofificarCliente') {
    $id = $_GET['id'];
    $nombre = $_GET['nombre'];

    $datos = "nombre = '" . $nombre . "'";
    $condicion = "id='" . $id . "'";
    VideoClub::actualizarCliente($condicion, $datos);

}

$soportes = VideoClub::getSoportes();
$soportesTipo = VideoClub::ObtenerSoporteTipo();
$clientes = VideoClub::getClientes();
include_once "../views/showGestion.php";
?>