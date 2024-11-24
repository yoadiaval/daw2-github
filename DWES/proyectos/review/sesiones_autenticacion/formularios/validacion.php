<?php
if (isset($_POST['enviar'])) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $sexo = $_POST['sexo'];
    $email = $_POST['email'];
    $convivientes = $_POST['convivientes'];
    $array = $_POST['aficiones'];
    echo "Nombre: " . $nombre . "<br>";
    echo "Apellido: " . $apellido . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Sexo: " . $sexo . "<br>";
    echo "Número de convivientes: " . $convivientes . "<br>";
    echo "Aficiones: ";
    var_dump($array);
}
?>