<?php
class user
{
    private static $usuarios = [];
    public static function login($username, $password)
    {
        $existeUser = false;
        foreach (self::$usuarios as $usuario) {
            $existeUser = true;
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
        foreach (self::$usuarios as $usuario) {
            $existeUser = true;
        }
        if (!$existeUser) {
            self::$usuarios[$username] = ['username' => $username, 'password' => $password];
            return true;
        } else {
            return false;
        }
    }
    public static function getUsuarios()
    {
        return self::$usuarios;
    }
}
?>