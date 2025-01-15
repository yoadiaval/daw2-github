<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border-collapse: collapse;

        }

        th,
        td {
            border: 1px solid black;
            padding: 0.2rem;
        }
    </style>
</head>

<body>
    <h1>Bienvenido Administrador</h1>
    <h2>Insertar un Porducto</h2>
    <form action="./adminController.php">
        <input type="text" name="descripcion" placeholder="Inserte la descripcion" required>
        <input type="text" name="precio" placeholder="Inserte el precio" required>
        <input type="submit" name="enviar" value="enviar">
    </form>
    <h2>Listado de productos</h2>
    <table>
        <thead>
            <tr>
                <th>COD</th>
                <th>DESCRIPCION</th>
                <th>PRECIO</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if (isset($productos)) {
                foreach ($productos as $producto) { ?>
                    <tr>
                <!-- codigo de los productos-->
                    </tr>
                <?php }
            } else { ?>
                <tr>
                    <td colspan="3">No hay productos para mostrar</td>
                </tr>
            <?php }
            ?>
        </tbody>
    </table>
</body>

</html>