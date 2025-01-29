<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT PATCH, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

include_once "../model/libro.php";

$request_method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];
$uri_parts = explode('/', $uri);
$lastPart = $uri_parts[count($uri_parts)-1];

switch ($request_method) {
    case 'GET':
        if($lastPart !== 'api.php'){
            $condicion = "id={$lastPart}";
            $libros = Libro::getLibros($condicion);
        }else{
            $libros = Libro::getLibros();
        }

        break;
    case 'POST':
        
        break;
    case 'PATCH':
        
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"),true);
        Libro::putLibro($data);
        
        if(Libro::putLibro($data)){
            header('Content-Type: text/html');
            include "../view/vista.php";
        }else{
            header('Content-Type: text/html');
            include "../view/vista_error.php";
        }
        
        
        break;
    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        Libro::deleteLibro($data);

        break;
    default:
        # code...
        break;
}
?>