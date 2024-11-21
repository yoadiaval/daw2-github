<?php
class Persona
{
    private $dni;
    private $nombre;
    private $email;

    public function __construct($dni, $nombre, $email)
    {
        $this->dni = $dni;
        $this->nombre = $nombre;
        $this->email = $email;
    }
    public function __get($prop)
    {
        switch (true) {
            case $prop == 'dni':
                return $this->dni;
            case $prop == 'nombre':
                return $this->nombre;
            case $prop == 'email':
                return $this->email;
            default:
                return null;
        }
    }
    public function __set($prop, $newValue)
    {
        switch (true) {
            case $prop == 'dni':
                $this->dni = $newValue;
            case $prop == 'nombre':
                $this->nombre = $newValue;
            case $prop == 'email':
                $this->email = $newValue;
        }
        return $this;
    }
    public function mostrar()
    {
        return "$this->nombre-" . "$this->dni-" . "$this->email";
    }
}

?>