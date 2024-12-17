<?php
include
include_once "controlador/gestorPedidos.php";

//Se reciben las acciones por GET y se llama a la funcion correspondiente del controlador
$modeloProducto = new ModeloController();
$modeloCliente = new GestorClientes();
$modeloPedido = new GestorPedidos();


$pedidos = $modeloPedido->consultarPedido();
$clientes = $modeloCliente ->
$productos = $modeloProducto ->
var_dump($pedidos);

include "vista/layouts/header.php";
?>
<div>
    <h2>Nuevo Pedido</h2>
    <form action="">
        <label for="">Seleccione Cliente</label>
        <select name="" id="">
            <option value="">pedidio1</option>
            <option value="">pedidio1</option>
            <option value="">pedidio1</option>
        </select>
        <label for="">Seleccione Producto</label>
        <select name="" id="">
            <option value="">pedidio1</option>
            <option value="">pedidio1</option>
            <option value="">pedidio1</option>
        </select>
        <input type="date">
    </form>
    <a href="">Nuevo Pedido</a>
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
include "vista/layouts/footer.php";

?>