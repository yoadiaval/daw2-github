<?php
//Conexion con la base
include 'conexion.php';
$conexion = conexion();
if(isset($_POST['enviar']) && $_POST['enviar']=='enviar'){
    $nombre = $_POST["nombre"];
   $id = $_POST["identificador"];
    // Montamos la sentencia SQL
    $ssql = "UPDATE vendedor SET nombre='$nombre' WHERE id='$id'";
    // Ejecutamos la sentencia de actualización
    if($conexion->query($ssql)) {
    echo '<p>Cliente actualizado con éxito</p>';
    } else {
    echo '<p>Error al actualizar el cliente: ' . $conexion->error . '</p>';
    }
}
// Por ejemplo, recibimos los datos de un formulario enviado por POST

?>