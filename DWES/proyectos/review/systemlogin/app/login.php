<?php
session_start();
include "./../datos.php";
if(isset($_POST['enviar']) && $_POST['enviar']  == 'enviar'){

    $usuario = $_POST['usuario'];
    $password = $_POST['password'];
   
    if(isset($adminList[$usuario]) && $adminList[$usuario]['password'] == $password){
        
        $_SESSION['usuario'] = $usuario;
        
        header("Location: ./../pages/adminMain.php");
    }elseif(isset($userList[$usuario]) && $userList[$usuario]['password'] == $password){
       
        $_SESSION['usuario'] = $usuario;
      
        header("Location: ./../pages/userMain.php");
    }
}

?>