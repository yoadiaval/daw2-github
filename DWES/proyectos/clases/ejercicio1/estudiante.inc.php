<?php
class Estudiante extends Persona
{
    private $numExpediente;
    public function __construct($dni, $nombre, $email, $numExpediente)
    {
        parent::__construct($dni, $nombre, $email);
        $this->numExpediente = $numExpediente;
    }

    public function __get($prop)
    {
        $propPadre = parent::__get($prop);
        if ($propPadre !== null) {
            return $propPadre;
        }
        if ($prop === "numExpediente") {
            return $this->numExpediente;
        } else {
            return null;
        }
    }

    public function __set($prop, $newValue)
    {
        $parentProp = parent::__get($prop);
        if ($parentProp !== null) {
            parent::__set($prop, $newValue);
        } else {
            switch (true) {
                case $prop == 'numExpediente':
                    $this->numExpediente = $newValue;
                    break;
            }
        }
        return $this;

    }
    public function mostrar()
    {
        return parent::mostrar() . "- $this->numExpediente";
    }
}
?>