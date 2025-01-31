<?php
header( 'Content-Type: text/html; charset=UTF-8' );
header( 'Content-Type: application/json;  charset=UTF-8' );
header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Methods: GET, POST, DELETE' );
header( 'Access-Control-Allow-Headers: Content-Type, Authorization' );

include_once '../models/instituto.php';

$method = $_SERVER[ 'REQUEST_METHOD' ];
$uri = $_SERVER[ 'REQUEST_URI' ];
$uri_parts = explode( '/', $uri );
$lastPart_uri = $uri_parts[ count( $uri_parts )-1 ]; 

if ( $lastPart_uri == '1' && $method == 'GET' ) {
    $alumnos = Instituto::getAlumnos();
    echo json_encode( $alumnos );
}

if ( $lastPart_uri == '2' && $method == 'GET' ) {
    $asignaturas = Instituto::getasignaturas();
    echo json_encode( $asignaturas );
}

if ( $lastPart_uri == '3' ) {

    switch ( $method ) {

        case 'GET':
        $matriculas = Instituto::getMatriculas();
        include_once '../views/listas.php';
        break;

        case 'POST':
        $data = json_decode( file_get_contents( 'php://input' ), true );
        $resp = Instituto::matricular( $data );
        if ( $resp ) {
            echo json_encode( [ 'mensaje'=>'Matrícula realizada correctamente' ] );
        } else {
            echo json_encode( [ 'mensaje'=>'Error al realizar la matrícula' ] );
        }
        break;

        case 'DELETE':
        $data = json_decode( file_get_contents( 'php://input' ), true );
        $cod = $data[ 'codigo' ];
        $resp = Instituto::eliminarMatricula( $cod );
        if ( $resp ) {
            echo json_encode( [ 'mensaje'=>'Matrícula eliminada correctamente' ] );
        } else {
            echo json_encode( [ 'mensaje'=>'Error al eliminar la matrícula' ] );
        }
        break;

        default:
        break;
    }

}

?>