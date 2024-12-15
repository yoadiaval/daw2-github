<?php include_once "vista/layouts/header.php";?>

<h2>Modificar producto Seleccionado</h2>
<form action="" method="GET">
    <input type="text" name="descripcion" value="<?php echo $productoSelec[0]['descripcion'] ?>"><br>
    <input type="text" name="precio" value="<?php echo $productoSelec[0]['precio'] ?>">
    <input type="hidden" name="cod" value="<?php echo $productoSelec[0]['cod'] ?>">
    <input type="submit" name="accion" id="guardar" value="actualizar"><br>
</form>
<?php include_once "vista/layouts/footer.php" ?>