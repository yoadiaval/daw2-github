<?php
session_start();
echo "el color seleccionado es: " . $_SESSION['bgcolor'];
echo '<br/><a href="fondoSesion.php">Regresar</a>';
echo '<br/><a href="fondoSesion.php?reiniciar=1">Regresar y reiniciar</a>';
?>