<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../views/style/styles.css">
    <title>Gestión Video Club</title>
</head>

<body>
    <h1>Gestión Video Club</h1>
    <section>

        <h2>Listado de Clientes</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
            <?php
            if ($clientes !== []) {
                foreach ($clientes as $cliente) { ?>
                    <tr>
                        <td><?php echo $cliente['id'] ?></td>
                        <td><?php echo $cliente['nombre'] ?></td>
                        <td>
                            <a
                                href="<?php echo $_SERVER['PHP_SELF'] . "?accion=editarCliente&id=" . $cliente['id'] ?>">Editar</a>
                            <a href="<?php echo $_SERVER['PHP_SELF'] . "?accion=eliminarCliente&id=" . $cliente['id'] ?>"
                                onclick="return confirm('¿Estás seguro de que deseas continuar?');">Eliminar</a>

                        </td>
                    </tr>
                <?php }
            } else { ?>
                <tr>
                    <td colspan="2">No hay Clientes para mostrar</td>
                </tr>
            <?php }
            ?>
        </table>
    </section>
    <section>
        <h2>Soportes</h2>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Precio</th>
                    <th>Tipo de Soporte</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($soportesTipo as $soporte) { ?>
                    <tr>
                        <td><?php echo $soporte['cod'] ?></td>
                        <td><?php echo $soporte['titulo'] ?></td>
                        <td><?php echo $soporte['precio'] ?></td>
                        <td> <?php echo $soporte['tipo'] ?></td>
                    </tr>
                <?php }
                ?>
            </tbody>
        </table>
    </section>
    <section>
        <h2>Formularios</h2>
        <article>
            <form action="" method="GET">
                <fieldset>
                    <legend>Agregar cliente</legend>
                    <label for="">
                        Inserte el Nombre del nuevo Cliente
                    </label>
                    <input type="text" name="nombre">
                    <input type="submit" name="formCliente" value="enviar">
                </fieldset>
            </form>
        </article>
        <article>

            <form action="" method="GET">
                <fieldset>
                    <legend>Agregar Aquiler</legend>
                    <label for="">Seleccione el Soporte a alquilar</label>
                    <select name="soporteSeleccionado">
                        <?php
                        foreach ($soportes as $soporte) { ?>
                            <option value="<?php echo $soporte['cod'] ?>"><?php echo $soporte['titulo'] ?></option>
                        <?php }

                        ?>
                    </select>
                    <label for="">Selecciones el cliente que alquila</label>
                    <select name="clienteSeleccionado">
                        <?php
                        foreach ($clientes as $cliente) { ?>
                            <option value="<?php echo $cliente['id'] ?>"><?php echo $cliente['nombre'] ?></option>
                        <?php }

                        ?>
                    </select>
                    <input type="submit" name="formAlquiler" value="enviar">
                </fieldset>
            </form>
        </article>
        <article>

            <form action="">
                <fieldset>
                    <legend>Agregar Juego</legend>

                    <input type="text" name="titulo" placeholder="Inserte el título del juego">
                    <input type="text" name="precio" placeholder="Iserte el precio">
                    <input type="text" name="consola" placeholder="Inserte la consola">
                    <input type="text" name="minjug" placeholder="Min jugadores">
                    <input type="text" name="maxjug" placeholder="Max Jugadores">

                    <input type="submit" name="juego" value="enviar">

                </fieldset>
            </form>

        </article>
        <article>


            <form action="">
                <fieldset>
                    <legend>Agregar DVD</legend>
                    <input type="text" name="titulo" placeholder="Inserte el título del juego">
                    <input type="text" name="precio" placeholder="Iserte el precio">
                    <input type="text" name="idioma" placeholder="Inserte el idioma">
                    <input type="text" name="formato" placeholder="El formato de la pantalla">
                    <input type="submit" name="dvd" value="enviar">
                </fieldset>
            </form>

        </article>
        <article>
            <form action="">
                <fieldset>
                    <legend>Agregar Cinta Video</legend>
                    <input type="text" name="titulo" placeholder="Inserte el título del juego">
                    <input type="text" name="precio" placeholder="Iserte el precio">
                    <input type="text" name="duracion" placeholder="Inserte la duracion">
                    <input type="submit" name="cinta" value="enviar">
                </fieldset>
            </form>
        </article>

    </section>
</body>

</html>