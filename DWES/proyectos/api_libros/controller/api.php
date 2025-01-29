<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, PUT, DELETE, PATCH, GET');
header('Access-Control-Allow-Headers: Content-type');



include_once "../models/libro.php";


$uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];
$uri_parts = explode('/', $uri);
$last_part = $uri_parts[count($uri_parts)-1];




switch ($last_part == "api.php") {
    case 'GET':
       
       header('Content-Type: text/html');
        if(Libro::getLibros("1") !==[]){
           $libros = Libro::getLibros("1");
            include "../view/tableBody.php";
        }else{
            include "../view/noHayDatos.php";
        }
        break;
    
    default:
        break;
}


?>