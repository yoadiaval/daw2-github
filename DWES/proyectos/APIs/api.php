<?php
header('Content-Type: application/json');

include_once "./producto.php";

// Obtener la acción de la URL (GET, POST, PUT, DELETE)
$request_method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); /*La combinacin de parse_url y PHP_URL_PATH devuelve solo el end point /usuarios/5 que en principio hará referencia a la tabla y el id de la base de datos*/
$uri_parts = explode('/', $uri); /*para un uri /usuarios/2 -> [ '' , usuarios , 2]*/

// El ID del recurso (si es necesario) lo tomamos de la URL
$id = isset($uri_parts[2]) ? (int) $uri_parts[2] : null; /*Busco el id en la posición 2*/

if ($request_method == "GET") {
        if ($id !== null) {
                $condicion = "id = {$id}";
                $productos = Producto::getProductos($condicion);

        } else {
                $productos = Producto::getProductos();
        }

        if ($respuesta) {

                return json_encode($productos);
        }

}

/*$data = json_decode(file_get_contents("php://input"), true);
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
                Producto::DeleteProducto($data);
                break;
        default:

                break;
}*/


?>