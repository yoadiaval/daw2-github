
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Editar el Empleado</h1>
    <form action="" method="GET">
        <fieldset>
            <legend>Inserte un empleado</legend>
            <input type="text" placeholder="Inserte el nombre" name="nombre" value="<?php echo empleadoSeleccionado[0]['nombre']?>" required>
            <input type="text" placeholder="Inserte el apellido" name="apellido"  value="<?php echo empleadoSeleccionado[0]['apellido']?>" required >
            <label >Salario</label>
            <input type="number" placeholder="Inserte el salario" name="salario" value="<?php echo empleadoSeleccionado[0]['salario']?>" min=0 required>
            <label>Fecha de contratación</label>
            <input type="date" name="fecha" required>
            <input type="text" placeholder="Inserte el puesto" name="puesto" value="<?php echo empleadoSeleccionado[0]['puesto']?>" required>
            <input type="submit" name="enviarNuevoEmpleado" value="enviar">
        </fieldset>
    </form>
</body>
</html>