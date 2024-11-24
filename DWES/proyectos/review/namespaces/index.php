<?php
include_once "./autoload.php";
use app\clases\Estudiante;
use app\clases\Profesor;

// Crear un Estudiante
$estudiante = new Estudiante("Laura", 20, 9.5);
echo "Estudiante:\n";
echo $estudiante . PHP_EOL;

// Crear un Profesor
$profesor = new Profesor("Carlos", 45, "Matemáticas");
echo "\nProfesor:\n";
echo $profesor . PHP_EOL;
?>