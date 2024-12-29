<?php
include_once "../views/layout/header.php";

?>
<link rel="stylesheet" href="../views/style/styleGestores.css">
<h1>Gestion de Productos</h1>
<div>
    <h2>Listado de productos</h2>

    <table>
        <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
        </tr>

        <?php
        foreach ($productos as $producto) { ?>
            <tr>
                <td><?php echo $producto['cod'] ?></td>
                <td><?php echo $producto['descripcion'] ?></td>
                <td><?php echo $producto['precio'] ?></td>
                <td>
                    <a class="edit" href="productosController.php?accion=editar&id=<?php echo $producto['cod'] ?>">editar</a>
                    <a class="del" href="productosController.php?accion=eliminar&id=<?php echo $producto['cod'] ?>">Eliminar</a>
                </td>
            </tr>
        <?php }
        ?>
    </table>
    <p><?php echo $message ?? " " ?></p>
</div>

<div>

    <?php

    ?>
    <form action="" method="GET">
        <fieldset>
            <legend>Modificar Producto</legend>
            <label for="descripcion">Descripción</label>
            <input type="text" id="descripcion" name="descripcion"
                value="<?php echo $productoSeleccionado !== null ? $productoSeleccionado[0]['descripcion'] : ''; ?>"
                required>

            <label for="precio">Precio</label>
            <input type="text" id="precio" name="precio"
                value="<?php echo $productoSeleccionado !== null ? $productoSeleccionado[0]['precio'] : ''; ?>"
                required>

            <input type="hidden" name="cod"
                value="<?php echo $productoSeleccionado !== null ? $productoSeleccionado[0]['cod'] : ''; ?>">

            <input type="submit" value="enviar" name="enviar">
        </fieldset>
    </form>
    <div class="notificacion">
    <p><?php echo $errorMessage ?? " "; ?></p>
    </div>
</div>

<div>
    <form action="" method="GET">
        <fieldset>
            <legend>Agregar porducto</legend>
            <label for="descripcion">Descripción</label>
            <input type="text" id="descripcion" name="descripcion" required>
            <label for="precio">Precio</label>
            <input type="text" id="precio" name="precio" required>
            <input type="submit" value="enviar" name="agregar">
        </fieldset>

    </form>
</div>
<?php
include_once "../views/layout/footer.php";
?>