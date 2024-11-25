<?php
abstract class Persona
{
    protected $nombre;
    protected $apellido;
    protected $edad;



    public function __construct($nombre, $apellido, $edad)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->edad = $edad;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getApellido(){
        return $this->apellido;
    }
    public function setApellido($newApellido){
        $this->apellido = $newApellido;
    }

    public function get_edad()
    {
        return $this->edad;
    }

    public function setEdad($newEdad){
        $this->edad = $newEdad;
    }
    abstract public static function toHtml(Persona $persona);
}


abstract class Trabajador extends Persona{
    protected $telefonos = [];

    public function agregarTelefono($telefono)
    {
        $this->telefonos[] = $telefono;
    }

    public function getTelefonos()
    {
        return "<li>" . implode("</li><li>", $this->telefonos) . "</li>";
    }
    abstract public function calcularSueldo();
    public function debePagarImpuesto(){
        if($this->edad >= 21){
            return true;
        }
    }

    public static function toHtml(Persona $persona){
        if($persona instanceof Trabajador){
            echo "<p>Nombre: $persona->nombre</p>";
            echo "<p>Apellido: $persona->apellido</p>";
            echo "<p>Edad: $persona->edad</p>";
            echo $persona->getTelefonos();
        }
    }

    public function toSerialize()
    {
        return serialize([
            'nombre' => $this->nombre,
            'apellido' => $this->apellido,
            'edad' => $this->edad,
        ]);
    }
    public function toJson()
    {
        return json_encode([
            'nombre' => $this->nombre,
            'apellido' => $this->apellido,
            'edad' => $this->edad,
        ]);
    }
}
class Gerente extends Trabajador
{
    private $salario;

    const SUELDO_TOPE = 3333;

    public function __construct($nombre, $apellido, $edad, $salario)
    {
        parent::__construct($nombre, $apellido, $edad);
        $this->salario = $salario;
    }

    public function getSalario(){
        return $this->salario;
    }
    public function setSalario($newSalario){
        $this->salario = $newSalario;
    }

    public function calcularSueldo(){
        return $this->salario + $this->salario * $this->edad/100;
    }

}


class Empleado extends Trabajador{
    private $horasTrabajadas;
    private $preciosPorHora;

    public function __construct($nombre, $apellido, $edad, $horasTrabajadas, $preciosPorHora){
        parent::__construct($nombre, $apellido, $edad);
        $this->horasTrabajadas = $horasTrabajadas;
        $this->preciosPorHora = $preciosPorHora;
    }

    public function getHorasTrabajadas(){
        return $this->horasTrabajadas;
    }
    public function setHorasTrabajadas($newHorasTrabajadas){
        $this->horasTrabajadas = $newHorasTrabajadas;
    }
    public function getPreciosPorHora(){
        return $this->preciosPorHora;
    }
    public function setPreciosPorHora($newPreciosPorHora){
        $this->preciosPorHora = $newPreciosPorHora;
    }
    public function calcularSueldo(){
        return $this->horasTrabajadas * $this->preciosPorHora;
    }

   
}
?>