<?php
class User
{
    private static $userList = [
        "user1" => "1234",
        "user2" => "1234",
        "user3" => "1234",
        "user4" => "1234",
    ];

    private static $adminList = [
        "admin1" => "1234",
        "admin2" => "1234",
        "admin3" => "1234",
        "admin4" => "1234",
    ];
    public static function loginAdmin($user, $password)
    {

        foreach (self::$adminList as $adminName => $passwordAdmin) {
            if ($user == $adminName && $passwordAdmin == $password) {
                return true;
            }
        }
        return false;

    }
    public static function loginUser($user, $passwordUser)
    {
        foreach (self::$userList as $username => $password) {
            if ($username == $user && $password){
                return true;
            }
        }
        return false;
    }
}
?>