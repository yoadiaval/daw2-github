
<?php
//Conexion con la base
include 'conexion.php';
$conexion = conexion();
// Componemos la sentencia SQL
$ssql = "SELECT * FROM clientes";
// Ejecutamos la sentencia SQL
$result = $conexion->query($ssql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h2>Insertar vendedores</h2>
<form method="POST" action="insertar.php">
<label for="identificador">ID</label>
 <input type="text" name="identificador"><br>
 <label for="nombre">Nombre</label>
 <input type="text" name="nombre"><br>
 <input type="submit">
 </form>
 <h2>Datos obtenidos</h2>
 <button>Obtener vendedores</button>
 <div></div>
</body>
</html>