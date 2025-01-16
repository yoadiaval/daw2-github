<?php
include_once '../model/conexiondb.php';

class Empleado {
    private static $listaAcceso = [
        'administrador'=>'1234',
        'Dios'=>'123456'
    ];

    /*FUNCION QUE REALIZA EL LOGIN A LA APLICACION EN FUNCION DEL USERNAME Y EL PASSWORD ENVIADO POR PARÁMETROS */
    public static function login( $username, $password ) {
        foreach ( self::$listaAcceso as $user => $passw ) {
            if ( $user == $username && $passw == $password ) {
                return true;
            }

        }
        return false;
    }
/*FUNCION PARA AGREGAR EMPLEADOS SE LE PASA POR PARÁMETRO LOS DATOS DEL EMPLEADO */
    public static function addEmpleado( $datos ) {
        $conexion = Conexiondb::conectar();
        $sql = "insert into empleados (id, nombre, apellido, salario, fecha_contratacion, puesto) values({$datos});";

        $respuesta = $conexion->query( $sql );

        if ( $respuesta ) {
            return true;
        } else {
            return false;
        }
    }
/*FUNCION PARA OBTENER LOS EMPLEADOS CUYO PARÁMETRO ES LA CONDICION QUE POR DEFECTO ES 1 PARA QUE LOS DEVUELVA TODOS */
    public static function getEmpleados( $condicion = "1") {
        $conexion = Conexiondb::conectar();
        $sql = "select * from empleados where {$condicion};";
        $respuesta = $conexion  ->query( $sql );

        if ( $respuesta ) {
            return $respuesta->fetch_all( MYSQLI_ASSOC );
        } else {
            return [];
        }
    }
    /*FUNCION A LA QUE S ELE PASA POR PARAMETRO EL ID PARA ELIMINAR AL EMPLEADO*/ 
    public static function eliminar( $id ){
        $conexion = Conexiondb::conectar();
        $condicion = "id={$id}";
        $sql = "DELETE FROM empleados WHERE {$condicion};";
        $respuesta = $conexion->query( $sql );
        if ( $respuesta ) {
            return true;
        } else {
            return false;   
        }

    }
    public static function actualizar( $datos ) {

    }
    }

   
?>