<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Empleado seleccionado</h1>
<table>
        <thead>
            <tr>
                <td>ID</td>
                <td>NOMBRE</td>
                <td>APELLIDO</td>
                <td>SALARIO</td>
                <td>FECHA</td>
                <td>PUESTO</td>
                
            </tr>
        </thead>
        <tbody>
            <?php 
            if($empleadoSeleccionado !=[]){ ?>
                   <tr>
                    <td><?php echo $empleadoSeleccionado[0]['id'] ?></td>
                    <td><?php echo $empleadoSeleccionado[0]['nombre'] ?></td>
                    <td><?php echo $empleadoSeleccionado[0]['apellido'] ?></td>
                    <td><?php echo $empleadoSeleccionado[0]['salario'] ?></td>
                    <td><?php echo $empleadoSeleccionado[0]['fecha_contratacion'] ?></td>
                    <td><?php echo $empleadoSeleccionado[0]['puesto'] ?></td>
                    
                   </tr>
               <?php }
            ?>
        </tbody>
    </table>

</body>
</html>
