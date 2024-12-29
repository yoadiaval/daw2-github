<?php include_once "../views/layout/header.php";
?>
<link rel="stylesheet" href="../views/style/styleGestores.css">
<h1>Gestión de pedidos</h1>
<div>
    <h2>Listado de pedidos</h2>
    <table>
        <tr>
            <th>Código Pedido</th>
            <th>Código producto</th>
            <th>ID Cliente</th>
            <th>Fecha</th>
        </tr>
        <?php
        if ($pedidos !== []) {
            foreach ($pedidos as $pedido) { ?>
                <tr>
                    <td><?php echo $pedido['cod_pedido'] ?></td>
                    <td><?php echo $pedido['cod_producto'] ?></td>
                    <td><?php echo $pedido['id_cliente'] ?></td>
                    <td><?php echo $pedido['fecha'] ?></td>
                    <td><a class="del"
                            href="<?php echo $_SERVER['PHP_SELF'] . "?accion=eliminar&id=" . $pedido['cod_pedido'] ?>">Eliminar</a>
                    </td>
                </tr>
            <?php }
        } else { ?>
            <tr>
                <th colspan="2">No hay pedidos para mostrar</th>
            </tr>
        <?php }
        ?>
    </table>
</div>

<div>

    <form action="" method="GET">
        <fieldset>
            <legend>Agregar un pedido</legend>
            <label for="">Seleccione un cliente</label>
            <select name="cliente">
                <?php
                foreach ($clientes as $cliente) { ?>
                    <option value="<?php echo $cliente['id'] ?>"><?php echo $cliente['nombre'] ?></option>
                <?php }
                ?>
            </select>
            <label for="">Seleccione un producto</label>
            <select name="producto">
                <?php
                foreach ($productos as $producto) { ?>
                    <option value="<?php echo $producto['cod'] ?>"><?php echo $producto['descripcion'] ?></option>
                <?php }
                ?>
            </select>
            <label for="">Fecha</label>
            <input type="date" name="fecha">
            <input type="submit" name="enviar" value="enviar">
        </fieldset>
    </form>

</div>
<div>
    <form action="" method="GET">
        <fieldset>
            <legend>
                Consultar Pedido por producto
            </legend>

            <label for="">Seleccione el producto a consutar</label>
            <select name="consultaProducto">
                <?php
                foreach ($productos as $producto) { ?>
                    <option value="<?php echo $producto['cod'] ?>"><?php echo $producto['descripcion'] ?></option>
                <?php }
                ?>
            </select>
            <input type="submit" name="enviar" value="consultar">
        </fieldset>

    </form>
    <h3>Resultado de la búsqueda</h3>
    <?php
    if ($respuestaConsulta !== []) {
        ?>
        <table>
            <tr>
                <th>Código Pedido</th>
                <th>Código producto</th>
                <th>ID Cliente</th>
                <th>Fecha</th>
            </tr>
            <?php


            foreach ($respuestaConsulta as $respuesta) { ?>
                <tr>
                    <td><?php echo $respuesta['cod_pedido'] ?></td>
                    <td><?php echo $respuesta['cod_producto'] ?></td>
                    <td><?php echo $respuesta['id_cliente'] ?></td>
                    <td><?php echo $respuesta['fecha'] ?></td>
                </tr>
            <?php }
    } else { ?>
            <p>No existen resultados para su selección o aún no ha realizado una consulta</p>
        <?php }
    ?>
    </table>




    <div class="notificacion">
        <p><?php echo $mensaje ?? " " ?></p>
    </div>
    <?php
    include_once "../views/layout/footer.php";
    ?>
</div>