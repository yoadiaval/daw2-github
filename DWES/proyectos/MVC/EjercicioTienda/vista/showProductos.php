<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Listado de Productos</h1>
<select>
   <form action="" method="post"></form>
     <?php 
     foreach($productos as $producto) {
        echo "<option>".$producto['descripcion']."</option>";
     }
     ?>
</select>
</body>
</html>