<?php
header('Content-Type: application/json');
include 'conexionDB.php';
include "./producto.php";

// Obtener la acción de la URL (GET, POST, PUT, DELETE)
$request_method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI']; /*Obtengo la ruta de la peticion*/
$uri_parts = explode('/', $uri); /*para un uri /usuarios/2 -> [ '' , usuarios , 2]*/

// El ID del recurso (si es necesario) lo tomamos de la URL
$lastPart = $uri_parts[count($uri_parts) - 1]; /*Busco el cod en la posición 2*/

if ($request_method == "GET") {
        if ($lastPart !== "api.php") {
                $condicion = "cod = {$cod}";
                $productos = Producto::getProductos($condicion);

        } else {
                $productos = Producto::getProductos();
        }

        if ($productos) {
                return json_encode($productos);
        }

}

/*$data = json_decode(file_get_contents("php://input"), true);*/
$data = json_decode(
        '{
                "cod":"13",
                "nombre": "Producto 10",
                "descripcion": "Descripción del producto",
                "precio": 100.50
                }',
        true
                );
switch ($request_method) {
        case 'POST':
                Producto::postProducto($data);
                break;
        case 'PUT':
                Producto::putProducto($data);
                break;
        case 'PATCH':
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