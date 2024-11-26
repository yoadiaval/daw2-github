<?php
class Usuario{
    private $username;
    private $password;
    public static $usuarios=[];
    
    public function __constructor($username,$password){
        $this->username = $username;
        $this->password = $password;
    }
    
    public function getUsername(){
        return $this->username;
    }
    public function getPassword(){
        return $this->password;
    }
    public static function agregarUser(Usuario $usuario){
        self::$usuarios[] = [$usuario->getUsername()=>['username'=>$usuario->getUsername(), 'password' => $usuario->getPassword()]]; 
    }
    public static function getUsuarios(){
        return self::$usuarios;
    }
}
?>
