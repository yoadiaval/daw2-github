<?php
if (isset($_GET['accion']) && $_GET['accion'] == 'enviarEditar') {
    $cod = $_GET['cod'];
    $apiUrl = "http://localhost/proyectos/APIs/api.php/{$cod}";
    // Usar file_get_contents para hacer una solicitud GET a la API
    $response = file_get_contents($apiUrl);
    if ($response) {
        $productoSeleccionado = json_decode($response, true);
      
    }
}
include_once "./indexView.php";
?>