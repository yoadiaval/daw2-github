<?php
include_once "../model/user.php";
session_start();

if (isset($_GET['enviar'])) {
    $user = $_GET['user'];
    $password = $_GET['password'];

    if (isset($_GET['admin']) && $_GET['admin'] == "on") {
        $admin = $_GET['admin'];
        if (User::loginAdmin($user, $password)) {
            header("Location: ./adminController.php");
            
        } else {
            $_SESSION['error'] = "Usuario o contraseña incorrectos";
            header("Location: ../index.php");
        }
    } else {
        if (User::loginUser($user, $password)) {
            header("Location:./userController.php");
        } else {
            $_SESSION['error'] = "Usuario o contraseña incorrectos";
            header("Location: ../index.php");
        }
    }

}

?>