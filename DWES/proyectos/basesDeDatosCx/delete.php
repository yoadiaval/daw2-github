<?php
//Conexion con la base
include 'conexion.php';
$conexion = conexion();

if(isset($_POST['enviar']) && $_POST['enviar'] == 'enviar'){
    $id = $_POST["identificador"];
    //Creamos la sentencia SQL
    $ssql = "DELETE FROM vendedor WHERE id='$id'";
    // Ejecutamos la sentencia de borrado
    if($conexion->query($ssql)) {
    echo '<p>Contacto borrado con éxito</p>';
    } else {
    echo '<p>Error al borrar el contacto: ' . $conexion->error . '</p>';
    }

}
?>