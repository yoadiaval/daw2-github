<?php
class Persona
{
    protected $dni;
    protected $nombre;
    protected $email;

    public function __construct($dni, $nombre, $email)
    {
        $this->dni = $dni;
        $this->nombre = $nombre;
        $this->email = $email;
    }
    public function getDni()
    {
        return $this->dni;
    }
    public function getNombre()
    {
        return $this->nombre;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function mostrar()
    {
        return "$this->nombre - $this->dni - $this->email";
    }
}

class Estudiante extends Persona
{
    private $numExpediente;
    public function __construct($dni, $nombre, $email, $numExpediente)
    {
        parent::__construct($dni, $nombre, $email);
        $this->numExpediente = $numExpediente;
    }

    public function getNumExpediente()
    {
        return $this->numExpediente;
    }
    public function mostrar()
    {
        return parent::mostrar() . "-$this->numExpediente";
    }
}
?>