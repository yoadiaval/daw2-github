<?php include_once "vista/layouts/header.php";
?>
<h2>Editar un Cliente</h2>
<form action="" method="GET">
    <input type="text" placeholder="Inserte nombre" name="nombre" value="<?php echo $cliente[0]['nombre'] ?>"
        required><br>
    <input type="hidden" name="modelo" value="cliente"><br />
    <input type="hidden" name="id" value="<?php echo $cliente[0]['id'] ?>">
    <input type="submit" name="accion" id="guardar" value="actualizar"><br>
</form>
<?php include_once "vista/layouts/footer.php" ?>