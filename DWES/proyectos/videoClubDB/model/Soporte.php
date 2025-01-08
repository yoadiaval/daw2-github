<?php
class Soporte
{
    private string $titulo;
    private $precio;
    private $cod = 0;
    const IVA = 0.21;

    public function __construct($titulo, $precio)
    {
        $this->titulo = $titulo;
        $this->precio = $precio;
        $randomNum = rand(100, 999);
        $this->cod = strtoupper(substr($titulo, 0, 3)) . $randomNum;

    }

    public function getPrecioConIva()
    {
        return $this->precio * (1 - self::IVA);
    }
    public function muestraResumen()
    {
        echo "Código: {$this->cod}  <br/> 
              Precio: $this->precio euros <br/>
              precio IVA incluido:" . $this->getPrecioConIva() . "euros <br/>
              Tenet <br/>"
            . $this->precio . "euros (IVA no incluido)<br/><br/> ";
    }

    public function getCodSoporte()
    {
        return $this->cod;
    }
    public function getTitulo()
    {
        return $this->titulo;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

}
?>