<?php
if (isset($_GET['accion']) && $_GET['accion'] == 'enviarEditar') {
    $cod = $_GET['cod'];
    $apiUrl = "http://localhost/APIs/api.php/{$cod}";
   
    $response = file_get_contents($apiUrl);
    if ($response) {
        $productoSeleccionado = json_decode($response, true);
    }
}
include_once "./indexView.php";
?>