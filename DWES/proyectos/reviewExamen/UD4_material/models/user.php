<?php
class user
{
    private static $usuarios = [
        "user1" => "1234",
        "user2" => "1234"
    ];

    public function __construct(Type $var = null) {
        $this->var = $var;
    }

    public static function login($username, $password)
    {
        $existeUser = false;
        foreach (self::$usuarios as $usuario) {
            if($usuario==$username){
                $existeUser = true;
            }
        }
        if ($existeUser) {
            return true;
        } else {
            return false;
        }
    }

    public static function registro($username, $password)
    {
        $existeUser = false;
        foreach (self::$usuarios as $usuario=>$pass) {
        
            if($usuario==$username){
                $existeUser = true;
                exit;
            }
        }

      /*  if (!$existeUser) {
            self::$usuarios[$username] =  $password;
            var_dump(self::$usuarios);
            return true;
        } else {
            return false;
        }*/
    }

    public static function getUsuarios()
    {
        return self::$usuarios;
    }
}
?>