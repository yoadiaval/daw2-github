<?php
include_once '../models/conexiondb.php';

class Instituto {

    public static function getAlumnos() {
        $con = Conexiondb::conectar();
        $sql = 'SELECT * FROM alumnos WHERE 1;';
        $resp = $con->query( $sql );

        if ( $resp ) {
            return $resp->fetch_all( MYSQLI_ASSOC );
        } else {
            return false;
        }
    }

    public static function getAsignaturas() {
        $con = Conexiondb::conectar();
        $sql = 'SELECT * FROM asignaturas WHERE 1;';
        $resp = $con->query( $sql );

        if ( $resp ) {
            return $resp->fetch_all( MYSQLI_ASSOC );
        } else {
            return false;
        }
    }

    public static function getMatriculas() {
        $con = Conexiondb::conectar();
        $sql = "SELECT matriculas.codigo, alumnos.nia, alumnos.nombre, alumnos.apellidos, asignaturas.nombre as asignatura, matriculas.año as anyo FROM matriculas
        LEFT JOIN alumnos ON alumnos.nia = matriculas.nia
        LEFT JOIN asignaturas ON asignaturas.codigo = matriculas.codigo
        ORDER BY alumnos.nia, asignatura ASC ;" ;
        $resp = $con->query( $sql );

        if ( $resp ) {
            return $resp->fetch_all( MYSQLI_ASSOC );
        } else {
            return false;
        }
    }

    public  static function eliminarMatricula( $cod ) {
        $con = Conexiondb::conectar();
        $sql = "DELETE FROM matriculas WHERE codigo='". $cod."';";
        $resp = $con->query( $sql );

        if ( $resp ) {
            return true;
        } else {
            return false;
        }
    }
    public static function matricular( $data ) {
        $nia = $data[ 'nia' ];
        $codigo = $data[ 'codigo' ];
        $anyo = $data[ 'anyo' ];
        $sql = "INSERT INTO matriculas(nia, codigo, año) VALUES ('$nia','$codigo','$anyo')";
        $resp = $con->query( $sql );

        if ( $resp ) {
            return true;
        } else {
            return false;
        }
        
    }

}

?>