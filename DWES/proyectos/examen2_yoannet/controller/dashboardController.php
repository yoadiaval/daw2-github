<?php 
session_start();
include_once "../model/empleado.php";


$username = $_SESSION['username'] ?? null;

/*se comprueba si se desea agregar un nuevo empleado*/
if(isset($_GET['enviarNuevoEmpleado']) && $_GET['enviarNuevoEmpleado'] == "enviar"){
    $datos = "null,'{$_GET['nombre']}','{$_GET['apellido']}', '{$_GET['salario']}' , '{$_GET['fecha']}' , '{$_GET['puesto']}'";
    if(Empleado::addEmpleado($datos)){
     header("Location: {$_SERVER['PHP_SELF']}");
    }else{
      $mensaje = "Ha ocurrido un error";
    };
      
  }
  /*SI SE PASA POR PARÁMETRO LA VARIABLE ACCION SE DETECTA QUE SE DESEA HACER UNA ACCION SOBRE EL EMPLEADO 
  CON UN SWITCH  SE CNONTROLA Y SE ACTUA EN DEPENDENCIA DEL TIPO DE ACCION MANDANDO A UNA VISTA U OTRA */ 
if(isset($_GET['accion'])){
    $id = $_GET['id'];
    switch ($_GET['accion']) {
        case 'ver':
            $condicion = "id={$id}";
           $empleadoSeleccionado = Empleado::getEmpleados($condicion);
           
           include_once "../views/verClientview.php";
            break;
        case 'editar':
           
            $condicion = "id={$id}";
            $empleadoSeleccionado = Empleado::getEmpleados($condicion);
            include_once "../views/editClientview.php";

            /*Empleado::actualizar($datos);*/
            break;
        case 'eliminar':
            Empleado::eliminar($id);    
            break;
    }  
    
}else{
    $empleados = Empleado::getEmpleados("1");
include_once "../views/dashboard.php";
}

?>