<?php include_once "vista/layouts/header.php" ?>
<h2>Insertar un Cliente</h2>
<form action="" method="GET">
    <input type="text" placeholder="Inserte nombre" name="nombre" required><br>
    <input type="hidden" name="modelo" value="cliente"><br />
    <input type="submit" name="accion" id="guardar" value="insertar"><br/>
</form>
<?php include_once "vista/layouts/footer.php" ?>