<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Listado de Productos</h1>
<table>
     <tr> <th>id</th> <th>Descripción</th> </tr>
     <?php 
     foreach($productosas $producto) {
        echo "<tr>
           <td>".$producto['id']."</td>
           <td>".$producto['descripcion']."</td>
        </tr>";
     }
     ?>
</table>
</body>
</html>