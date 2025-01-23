<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');  // Permite solicitudes de cualquier dominio
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');  // Permite los métodos necesarios
header('Access-Control-Allow-Headers: Content-Type');  // Permite cabeceras como Content-Type

include 'conexionDB.php';
include './producto.php';


$request_method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI']; /*Obtengo la ruta de la peticion*/
$uri_parts = explode('/', $uri); /*para un uri /usuarios/2 -> [ '' , usuarios , 2]*/
$lastPart = $uri_parts[count($uri_parts) - 1]; /*Busco el cod en la posición 2*/

if ($request_method == "GET") {
        if ($lastPart !== "api.php") {
                $condicion = "cod = {$lastPart}";
                $productos = Producto::getProductos($condicion);
        } else {
                $productos = Producto::getProductos();
        }
        if ($productos) {
                echo json_encode($productos);
        }
}

switch ($request_method) {
        case 'POST':
                Producto::postProducto($data);
                break;
        case 'PUT':
                $data = file_get_contents("php://input");
                $data_decod = json_decode($data, true);
                $respuesta =  Producto::putProducto($data_decod);
                break;
        case 'PATCH':
                $data = file_get_contents("php://input");
                $data_decod = json_decode($data, true);
                $respuesta = Producto::putProducto($data_decod);
                Producto::patchProducto($data);
                break;
        case 'DELETE':
                $cod = $data['cod'];
                $respuesta = Producto::deleteProducto($cod);
                break;
        default:
                break;
}


?>