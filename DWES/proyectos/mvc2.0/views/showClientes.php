<?php
include_once "../views/layout/header.php";
?>
<link rel="stylesheet" href="../views/style/styleGestores.css">
<h1>Gestión de clientes</h1>
<div>
    <h2>Listado de clientes</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
        </tr>
        <?php
        if ($clientes !== []) {
            foreach ($clientes as $cliente) { ?>
                <tr>
                    <td><?php echo $cliente['id'] ?></td>
                    <td><?php echo $cliente['nombre'] ?></td>
                    <td>
                        <a class="edit"
                            href="<?php echo $_SERVER['PHP_SELF'] . "?accion=enviarEditar&id=" . $cliente['id'] ?>">Editar</a>
                        <a class="del"
                            href="<?php echo $_SERVER['PHP_SELF'] . "?accion=eliminar&id=" . $cliente['id'] ?>">Eliminar</a>
                </tr>
            <?php }
        } else { ?>

        <?php } ?>
    </table>
</div>
<div>
    <form action="" method="GET">
        <fieldset>
            <legend>Editar un cliente</legend>
            <label for="">Nombre</label>
            <input type="text" name="nombre" value="<?php echo $clienteSeleccionado[0]['nombre'] ?? " " ?>">
            <input type="hidden" name="id" value="<?php echo $clienteSeleccionado[0]['id'] ?? " " ?>">
            <input type="submit" name="enviar" value="enviar">
        </fieldset>
    </form>
</div>
<div>

    <form action="" method="GET">
        <fieldset>
            <legend>Agregar un cliente</legend>
            <label>Nombre</label>
            <input type="text" name="nombre">
            <input type="submit" name="enviar" value="agregar">
        </fieldset>

    </form>

    <div class="notificacion">
        <p><?php echo $mensaje ?? '' ?></p>
    </div>
</div>
<?php
include_once "../views/layout/footer.php";
?>