<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $username?></h1>
    
    <form action="" method="GET">
        <fieldset>
            <legend>Inserte un empleado</legend>
            <input type="text" placeholder="Inserte el nombre" name="nombre" required>
            <input type="text" placeholder="Inserte el apellido" name="apellido" required >
            <label >Salario</label>
            <input type="number" placeholder="Inserte el salario" name="salario" min=0 required>
            <label>Fecha de contratación</label>
            <input type="date" name="fecha" required>
            <input type="text" placeholder="Inserte el puesto" name="puesto" required>
            <input type="submit" name="enviarNuevoEmpleado" value="enviar">
        </fieldset>
    </form>
    <p class="mensaje">
        <?php 
        echo isset($mensaje) ? $mensaje : "";
        ?>
        
    </p>
    <h2>Listado de empleador</h2>

    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>NOMBRE</td>
                <td>APELLIDO</td>
                <td>SALARIO</td>
                <td>FECHA</td>
                <td>PUESTO</td>
                <td>ACCIONES</td>
            </tr>
        </thead>
        <tbody>
            <?php 
            if($empleados !=[]){
                foreach ($empleados as $empleado) { ?>
                   <tr>
                    <td><?php echo $empleado['id'] ?></td>
                    <td><?php echo $empleado['nombre'] ?></td>
                    <td><?php echo $empleado['apellido'] ?></td>
                    <td><?php echo $empleado['salario'] ?></td>
                    <td><?php echo $empleado['fecha_contratacion'] ?></td>
                    <td><?php echo $empleado['puesto'] ?></td>
                    <td>
                        <a href="<?php echo $_SERVER['PHP_SELF'] . "?accion=ver&id=" . $empleado['id']?>">VER</a>
                        <a href="<?php echo $_SERVER['PHP_SELF'] . "?accion=editar&id=" . $empleado['id']?>">EDITAR</a>
                        <a href="<?php echo $_SERVER['PHP_SELF'] . "?accion=eliminar&id=" . $empleado['id']?>">ELIMINAR</a>
                    </td>
                   </tr>
               <?php }
            }else{ ?>
<tr>
    <td colspan="7">No hay empleados para mostrar</td>
</tr>
            <?php }
            ?>
        </tbody>
    </table>


    <h2>Consulta de empleado</h2>
    <form action="">

    </form>
</body>
</html>