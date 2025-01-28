<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');  // Permite solicitudes de cualquier dominio
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');  // Permite los métodos necesarios
header('Access-Control-Allow-Headers: Content-Type');  // Permite cabeceras como Content-Type

include '../modelo/producto.php';


$request_method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI']; /*Obtengo la ruta de la peticion*/
$uri_parts = explode('/', $uri); /*para un uri /usuarios/2 -> [ '' , usuarios , 2]*/
$lastPart = $uri_parts[count($uri_parts) - 1]; /*Busco el cod en la posición 2*/


switch ($request_method) {
        case 'GET':
                if ($lastPart !== "api.php") {
                        $condicion = "cod = {$lastPart}";
                        Producto::getProductos($condicion);
                } else {
                        Producto::getProductos();
                }
                break;
        case 'POST':
                $data_decod = json_decode(file_get_contents("php://input"), true);
                Producto::postProducto($data_decod);
                break;
        case 'PUT':
                $data_decod = json_decode(file_get_contents("php://input"), true);
                Producto::putProducto($data_decod); 
              
                break;
        case 'PATCH':
                $data_decod = json_decode(file_get_contents("php://input"), true);
                Producto::patchProducto($data_decod);
                break;
        case 'DELETE':
                $data_decod = json_decode(file_get_contents("php://input"), true);
                Producto::deleteProducto($data_decod);
                break;
        default:
                break;
}


?>