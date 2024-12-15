<?php
include_once "layouts/header.php";
?>

<a href="index.php?accion=agregar">Agregar producto</a>
<table>
   <tr>
      <th>Código</th>
      <th>Descripción</th>
      <th>Acciones</th>
   </tr>
   <?php

   foreach ($productos as $producto) { ?>
      <tr>
         <td><?php echo $producto['cod'] ?></td>
         <td><?php echo $producto['descripcion'] ?></td>
         <td>
            <a href="index.php?accion=editar&cod=<?php echo $producto['cod'] ?>">Editar</a>
            <a href="index.php?accion=eliminar&cod=<?php echo $producto['cod'] ?>"
               onclick="return confirm('Está seguro de eliminar este registro'); false">Eliminar</a>
         </td>
      </tr>
   <?php }


   ?>
</table>

<?php
include_once "layouts/footer.php";
?>