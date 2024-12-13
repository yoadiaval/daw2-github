<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Listado de Productos</h1>
<form action="./gestionPedidos.php" method="post">

<select name='prodSeleccionado'>
   <?php 
     foreach($productos as $producto) {
        echo "<option value='".$producto['cod']."'>".$producto['descripcion']."</option>";
     }
   ?>
</select>
<input type="submit" name="enviar" value="enviar">
</form>

<h2>Pedidios del producto seleccionado</h2>
<?php
/*Comprueba que la variable esté definida y que no devuelva un valor nulo*/ 
if (isset($pedidos) && $pedidos !== null) {
   var_dump($pedidos);
},

?>

</body>
</html>