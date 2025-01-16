<?php 
session_start();
include_once "../model/empleado.php";

$empleados = Empleado::getEmpleados("1");


if(isset($_POST['enviar'])){
 $username = $_POST['username'];
 $password  = $_POST['password'];
 $respuesta = Empleado::login($username, $password); 

    if($respuesta){
        $_SESSION['username'] = $username;
        header("Location:./dashboardController.php");
    
}else{
   $_SESSION['mensaje'] = "Ha introducido datos incorrectos";
   header("Location: ../index.php");
} 
}




?>