<?php

class Vehiculo {
protected $marca;
protected $modelo;
protected $precio;
protected const baseImpuesto = 21;

public function __constructor($marca, $modelo, $precio){
    $this->marca = $marca;
    $this->modelo = $modelo;
    $this->precio = $precio;
}

public function __get($prop){
switch (true) {
    case $prop == "marca":
       return $this->marca;
        
    case $prop == "modelo":
       return $this->modelo;
            
    case $prop == "precio":  
       return $this->modelo;
    
    default:
        return null;
}
}

public function calcularImpueto(){
    return $this->precio * $impuestoBase/100;
}

public function mostrarDetalles(){
    echo "Marca:" . $this->marca . "<br/> Modelo: " . $this->modelo . "Precio: " . $this->precio;
}

}



class Coche extends Vehiculo{
 private float $cilindrada;

 public function __construct($marca, $modelo, $precio, $cilindrada){
    parent::__construct($marca, $modelo, $precio);
    $this->cilindrada = $cilindrada;
 }

public function __get($prop){
    $value = parent::__get($prop);
    if($value !== null){
        return value;
    }
    
    if($prop == "cilindrada"){
        return $this->cilindrada;

    }
}

 public function calcularImpueto(){
    $impuestoFinal = $impuestoBase = parent::_calcularImpueto();
    if($this->cilindrada > 2000){
       $impuestoFinal =  $impuestoBase + 150;
    }
    return $impuestoFinal;
 }

 public function PrecioFinal(){
    return $this->precio - calcularImpueto();
}

public function mostrarDetalles(){
    echo "Detalles del Coche: <br/>";
    parent::mostrarDetalles();
    echo "Impuestos: " . calcularImpueto() . "&euro; Precio Total (con impuestos): " .PrecioFinal() . " &euro; Cilindrada: " . $this-> cilindrada;
}
}



class Moto extends Vehiculo{
  private bool $tieneSidecar;

  public function __construct($marca, $modelo, $precio, $tieneSidecar) {
    parent::_construct($marca, $modelo, $precio);
    $this->tieneSidecar = $tieneSidecar;
 }

 public function calcularImpueto(){
    $impuestoFinal = $impuestoBase = parent::_calcularImpueto();
    if(tieneSidecar){
       $impuestoFinal =  $impuestoBase + 50;
    }
    return $impuestoFinal;
 }

 public function __get($prop){
    $value = parent::__get($prop);
    if($value !== null){
        return value;
    }
    
    if($prop == "tieneSidecar"){
        return $this->tieneSidecar;

    }
}

public function PrecioFinal(){
    return $this->precio - calcularImpueto();
}

 public function mostrarDetalles(){
    echo "Detalles de la Moto: <br/>";
    parent::mostrarDetalles();
    echo "Impuestos: " . calcularImpueto() . "&euro; Precio Total (con impuestos): " . PrecioFinal() . " &euro; Tiene sidecar: " . $this-> tieneSidecar ? "Sí" : "No";
}
 
}
?>
