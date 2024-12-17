<?php include_once "vista/layouts/header.php" ?>
<h2>Insertar un producto</h2>
<form action="" method="GET">
    <input type="text" placeholder="Inserte la descripcion" name="descripcion" required><br />
    <input type="text" placeholder="Inserte el precio" name="precio" required><br />
    <input type="hidden" name="modelo" value="producto"><br />
    <input type="submit" name="accion" id="guardar" value="insertar"><br>
</form>
<?php include_once "vista/layouts/footer.php" ?>