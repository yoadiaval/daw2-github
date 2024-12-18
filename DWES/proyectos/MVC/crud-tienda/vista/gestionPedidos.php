<?php
include_once "../modelo/DataBase.php";
include_once "../controlador/gestorPedidos.php";

//Se reciben las acciones por GET y se llama a la funcion correspondiente del controlador
$modeloPedido = new GestorPedidos();


$pedidos = $modeloPedido->consultarPedido();
$clientes = new Modelo();
$productos = new Modelo();
$clientesList = $clientes->obtenerdatos("cliente", 1);
$productosList = $productos->obtenerdatos("producto", 1);



include "layouts/header.php";
?>
<link rel="stylesheet" href="estilos/style.css">
<div>
    <h2>Nuevo Pedido</h2>
    <form action="../controlador/gestorPedidos.php" method="GET">
        <label for="">Seleccione Cliente</label>
        <select name="id_cliente">
            <?php
            if (!empty($clientesList)) {
                foreach ($clientesList as $cliente) { ?>
                    <option value="<?php echo $cliente['id'] ?>"><?php echo $cliente['nombre'] ?></option>
                <?php }
            } else { ?>
                <option value="0">No hay clientes para mostrar</option>
            <?php }

            ?>
        </select>
        <label for="">Seleccione Producto</label>
        <select name="cod_producto">
            <?php
            if (!empty($productosList)) {
                foreach ($productosList as $producto) { ?>
                    <option value="<?php echo $producto['cod'] ?>"><?php echo $producto['descripcion'] ?></option>
                <?php }
            } else { ?>
                <option value="0">No hay productos para mostrar</option>
            <?php }

            ?>
        </select>
        <input type="date" name="date">
        <input type="submit" name="enviar" value="enviar">
    </form>

</div>
<div>
    <h2>Listado de pedidos</h2>
    <table>
        <tr>
            <th>Codigo Pedido</th>
            <th>Código Producto</th>
            <th>ID cliente</th>
            <th>Fecha</th>
        </tr>
        <?php
        if (!empty($pedidos)) {
            foreach ($pedidos as $pedido) { ?>
                <tr>
                    <th><?php echo $pedido['cod_pedido'] ?></th>
                    <th><?php echo $pedido['cod_producto'] ?></th>
                    <th><?php echo $pedido['id_cliente'] ?></th>
                    <th><?php echo $pedido['fecha'] ?></th>
                </tr>
            <?php }
        } else { ?>
            <tr>
                <td colspan="4">No hay pedidos que mostrar</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        <?php }
        ?>
    </table>
</div>

<?php
include "layouts/footer.php";

?>