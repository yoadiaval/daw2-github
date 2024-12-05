<?php
//Conexion con la base
include 'conexion.php';
$conexion = conexion();
// Componemos la sentencia SQL
$ssql = "SELECT * FROM vendedor";
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
 <table>
 <tr>
 <th>ID</th>
 <th>Nombre</th>
 </tr>
 <?php
 while ($row = $result->fetch_array()) {
    echo '<tr><td>' . $row["id"] . '</td>';
    echo '<td>' . $row["nombre"] . '</td></tr>';
    }
 ?>
 </table>

 <h2>Modificar cliente</h2>
 <form method="POST" action="update.php">
<label for="identificador">ID</label>
 <input type="text" name="identificador"><br>
 <label for="nombre">Nuevo Nombre</label>
 <input type="text" name="nombre"><br>
 <button type="submit" name = "enviar" value="enviar">Actualizar</button>
 </form>


 <h2>Eliminar cliente</h2>
 <form action="delete.php" method = "POST">
 <label for="identificador">Iserte el identificador del vendedor que desea eliminar</label>
 <input type="text" name="identificador">
 <button type="submit" name = "enviar" value= "enviar">Enviar</button>
 </form>
</body>
</html>

