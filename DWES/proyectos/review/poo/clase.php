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

  public function lanzarError()
  {

    $a = 2;
    if ($a == 2) {
      throw new Exception("a no puede ser 2");
    }
  }
  public function test()
  {
    try {
      $this->lanzarError();
    } catch (Exception $e) {
      echo $e->getMessage();
    }
  }
}
?>