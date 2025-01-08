<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../views/style/styles.css">
    <title>Document</title>
</head>

<body>
    <section class="editCliente">
        <form action="">
            <label for="">Inserte el nuevo nombre</label>
            <input type="text" name="nombre" value="<?php echo $clienteSeleccionado[0]['nombre'] ?>">
            <input type="hidden" name="id" value="<?php echo $clienteSeleccionado[0]['id'] ?>">
            <button type="submit" name="accion" value="mofificarCliente">Modificar</button>
        </form>
    </section>
</body>

</html>