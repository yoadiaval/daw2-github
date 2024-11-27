<?php
include "./../models/user.php";


//controla que el formulario que lanzó la accion es el de registro
if(isset($_POST['registrar']) && $_POST['registrar']=='registrar'){
    session_start();
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $newUser = new Usuario($username, $password);
    echo $newUser->getUsername();
    echo $newUser->getPassword();

    /*
    Usuario::agregarUser($newUser); //agrega un usuario al array estático de usuarios;
    $lista = Usuario::getUsuarios();
    print_r($lista);
*/
}

//controla que el formulario que lanzó la accion es el de inicio de sesión 
if(isset($_POST['entrar']) && $_POST['entrar']=='entrar'){
    session_start();
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($_POST['recordarme'])){
    $recordar = true;
    }
   
   /* echo $username;
    echo $password;
    echo $recordar;*/
    if($username == "user" && $password == "user"){
        setcookie('mensaje', 'datos de usuario incorrectos', 1, '/', 'loacalhost');
        $_SESSION['usuario'] = $username;
        
        if($recordar){
            setcookie('usuario', $username, time() + (24*60*60), "/", "localhost");
            setcookie('password', $password, time() + (24*60*60), "/", "localhost");
        }else{
            //Se destruyen las cokies en caso de que no se haya marcado la opcion de recordar
            setcookie('usuario', $userName, 1, "/", "localhost");
            setcookie('password', $password, 1, "/", "localhost");
        }
       
        header('Location:./../views/dashboard.php');    
           
    }else{
        /*throw new Exception("Datos de usuario incorrectos");*/
        setcookie('mensaje', 'datos de usuario incorrectos', time() + (24*60*60), '/', 'loacalhost');
        header('Location:./../views/login.php');
        
    }

}

?>
