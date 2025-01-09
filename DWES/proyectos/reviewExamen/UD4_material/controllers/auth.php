<?php
include_once "../models/user.php";
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

if (isset($_POST['registrar'])) {
    $respuesta = User::registro($username, $password);
    echo $respuesta;
    if ($respuesta) {
        echo "respuesta positiva";
       /* $mensaje = "Usuario registrado con exito";
        $_SESSION['mensaje'] = $mensaje;
        header("Location: ../views/register.php");*/
       /* header("Location:../index.php");*/
    } else {
        echo "respuesta negativa";
       /* $mensaje = "Este usuario ya está registrado";
        $_SESSION['mensaje'] = $mensaje;
        header("Location: ../views/register.php");*/
    }
}
if (isset($_POST['login'])) {
    $respuesta = User::login($username, $password);
    if ($respuesta) {
        $_SESSION['$username'];
        header("Location:../views/dashboard.php");
    } else {
        $mensaje = "Este usuario no está registrado aún";
        $_SESSION['mensaje'] = $mensaje;
        header("Location:../views/login.php");
    }
}

?>