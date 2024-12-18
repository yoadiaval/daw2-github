<?php
include_once "layouts/header.php";
?>
<div>
   <a href="./controlador/gestorPedidos.php?accion=mostrarGestionPedido">Gestionar pedidos</a>
   <h2>Gestión de productos</h2>

   <a href="index.php?modelo=producto&accion=agregar">Agregar producto</a>
   <table>
      <tr>
         <th>Código</th>
         <th>Descripción</th>
         <th>Acciones</th>
      </tr>
      <?php
      if (!empty($productos)) {
         foreach ($productos as $producto) { ?>
            <tr>
               <td><?php echo $producto['cod'] ?></td>
               <td><?php echo $producto['descripcion'] ?></td>
               <td>
                  <a href="index.php?accion=editar&modelo=producto&cod=<?php echo $producto['cod'] ?>">Editar</a>
                  <a href="index.php?accion=eliminar&modelo=producto&cod=<?php echo $producto['cod'] ?>"
                     onclick="return confirm('Está seguro de eliminar este registro'); false">Eliminar</a>
               </td>
            </tr>
         <?php }
      } else {
         echo "<tr><td colspan=2>No hay productos para mostrar</td><td></td><td></td></tr>";
      }
      ?>
   </table>
</div>
<div>
   <h2>Gestión de clientes</h2>

   <a href="index.php?accion=mostrarAgregar&modelo=cliente">Agregar un Cliente</a>
   <table>
      <tr>
         <th>ID</th>
         <th>Nombre</th>
         <th>Acciones</th>
      </tr>
      <?php
      if (!empty($clientes)) {
         foreach ($clientes as $cliente) { ?>
            <tr>
               <td><?php echo $cliente['id']; ?></td>
               <td><?php echo $cliente['nombre']; ?></td>
               <td>
                  <a href="index.php?accion=editar&modelo=cliente&id=<?php echo $cliente['id'] ?>">Editar</a>
                  <a href="index.php?accion=eliminar&modelo=cliente&id=<?php echo $cliente['id'] ?>">Eliminar</a>
               </td>
            </tr>
         <?php }
      } else {
         echo "<tr>
      <td colspan=2>No hay clientes para mostrar</td>
      <td></td>
   </tr>";

      }
      ?>
   </table>
</div>
<?php
include_once "layouts/footer.php";
?>