<?php

include "conexion.php";
$conexion = conexion();
if ($_POST) {
// Recuperamos los datos del formulario
$nombre = $_POST["nombre"];
$ident = $_POST["identificador"];
// Componemos la sentencia SQL
$ssql = "INSERT INTO vendedor VALUES ('$ident', '$nombre')";
// Ejecutamos la sentencia y comprobamos si ha ido bien
if ($conexion->query($ssql)) {
echo "<p>Registro insertado con éxito</p>";
} else {
echo "<p>Hubo un error al ejecutar la sentencia de inserción: {$conexion->error}</p>";
}
$conexion->close();
}
?>