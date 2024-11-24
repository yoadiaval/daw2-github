<?php
$peliculas = array("pelicula1", "Pelicula2", "Pelicula3");
$series = array("serie1", "Serie2", "Serie3");

if (isset($_POST['enviar']) && $_POST['enviar'] == 'enviar') {    
    $nombre = $_POST['nombre'];
    $contraseña = $_POST['password'];
    if ($nombre == 'user' && $contraseña == 'user') {
        session_start();
        $_SESSION['peliculas'] = $peliculas;
        $_SESSION['series'] = $series;
        $_SESSION['user'] = $nombre;
        header('Location: peliculas.php');
    } else {
        echo "Nombre o contraseña incorrectos.";
    }
}
?>