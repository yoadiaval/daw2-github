<?php
include_once "../model/Cliente.php";
include_once "../model/Juego.php";
include_once "../model/Dvd.php";
include_once "../model/CintaVideo.php";

class VideoClub
{
    private static $soportes = [];
    private static $clientes = [];
    private static $alquileres = [];

    //OBTENCION DE DATOS 
    public static function getClientes($condicion = 1)
    {
        $conexion = ConexionDB::conectar();
        $sql = "select * from cliente where $condicion;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            self::$clientes = $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            echo "error al obtener los clientes";
        }

        return self::$clientes;
    }
    public static function actualizarCliente($condcion, $data)
    {
        Cliente::actualizarCliente($condcion, $data);
    }
    public static function getSoportes()
    {
        $conexion = ConexionDB::conectar();
        $sql = "select * from soporte where 1;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            self::$soportes = $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            echo "error al obtener los soportes";
        }

        return self::$soportes;
    }
    public static function ObtenerSoporteTipo()
    {
        $conectar = conexionDB::conectar();
        $sql = "SELECT 
                    cod,
                    titulo,
                    precio,
                    CASE 
                        WHEN juego.consola IS NOT NULL THEN 'Juego'
                        WHEN cintavideo.duracion IS NOT NULL THEN 'Cinta'
                        WHEN dvd.idioma IS NOT NULL THEN 'dvd'
                        ELSE 'desconocido'
                    END AS tipo
                FROM soporte
                LEFT JOIN juego ON soporte.cod = juego.cod_soporte
                LEFT JOIN cintavideo ON soporte.cod = cintavideo.cod_soporte
                LEFT JOIN dvd ON soporte.cod = dvd.cod_soporte;";

        $respuesta = $conectar->query($sql);
        if ($respuesta) {
            return $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            return [];
        }
    }
    public static function getAlquileres()
    {
        $conexion = ConexionDB::conectar();
        $sql = "select * from cliente_soporte where 1;";
        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            self::$alquileres = $respuesta->fetch_all(MYSQLI_ASSOC);
        } else {
            echo "error al obtener los soportes";
        }

        return self::$alquileres;
    }
    //OPERACION CON ALQUILER
    public static function agregarAlquiler($cod_soporte, $id_cliente)
    {
        $conexion = ConexionDB::conectar();
        $sql = "insert into cliente_soporte (cliente_id, soporte_cod) values('" . $id_cliente . "','" . $cod_soporte . "');";

        $respuesta = $conexion->query($sql);
        if ($respuesta) {
            return true;
        } else {
            return false;
        }
    }
    //OPERACIONES CON LOS SOPORTES
    public static function incluirJuego($titulo, $precio, $consola, $minNumJugadores, $maxNumJugadores)
    {
        $juego = new Juego($titulo, $precio, $consola, $minNumJugadores, $maxNumJugadores);
        Juego::agregarJuego($juego);
    }
    public static function incluirDvd($titulo, $precio, $idioma, $formatoPantalla)
    {
        $dvd = new Dvd($titulo, $precio, $idioma, $formatoPantalla);
        Dvd::agregarDvd($dvd);
    }
    public static function incluirCintaVideo($titulo, $precio, $duracion)
    {
        $cinta = new CintaVideo($titulo, $precio, $duracion);
        CintaVideo::agregarCintaVideo($cinta);
    }
    //OPERACIONES CON EL CLIENTE
    public static function incluirCliente($nombre)
    {
        $cliente = new Cliente($nombre);
    }

    public static function eliminarCliente($id)
    {
        Cliente::eliminar($id);
    }
    /*public static function listarClientes()
    {
        foreach (self::$clientes as $cliente) {
            $cliente->muestraResumen();
        }
    }
    public static function listarSoportes()
    {
        foreach (self::$soportes as $soporte) {
            $soporte->muestraResumen();
        }
    }*/
    /* public static function alquilarClienteSoporte($idCliente, $codSoporte)
     {
         $existeSoporte = false;
 //se obtiene el objeto cliente
         foreach (self::$clientes as $key => $cliente) {
             if ($key == $idCliente) {
                 $objCliente = $cliente;
             }
         }
 //Se verifica que exista el código del soporte
         foreach (self::$soportes as $key => $soporte) {
             if ($key == $codSoporte) {
                 $existeSoporte = true;
             }
         }
 //si el objeto cliente está configurado y existe el soporte se alquila 
         if (isset($objCliente) && $existeSoporte) {
             var_dump($objCliente);
             $objCliente->alquilar($codSoporte);

         }else{
             echo "No existe el soporte o no existe el cliente para los datos proporcionados";
         }

     }*/



}
?>