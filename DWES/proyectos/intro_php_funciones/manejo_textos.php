<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejerccicio Manejo Textos</title>
</head>
<body>
    <h1>Manejo textos</h1>
<h2>Área de un círculo</h2>
 <?php
    $radio = 6; 
    define('PI', 3.146); 
    $area = PI * $radio;
    $textoResultado = "El área calculada del círculo es: " . number_format($area, 2) . "<br/>";
    echo $textoResultado;
   ?>
   <h2> Texto llevado a mayúsculas</h2>
   <?php

    $textoResultadoMayus = strtoupper($textoResultado);
    echo $textoResultadoMayus;
 ?>   
  <h2>Modificación de texto</h2>
  <?php 
  $textoResultadoModificado = str_replace("calculada", "obtenida", $textoResultado);
  echo $textoResultadoModificado

  ?>
  <h2>Longitud del texto</h2>
  <?php 
  echo "la longitud del texto modificado es: " . strlen($textoResultadoModificado);
  ?>

  <h2>Búsqueda por posición</h2>
  <?php
  echo "la posición de la palabra \" circulo \" dentro de la cadena de texto es: " . strpos($textoResultadoModificado, "círculo")
  ?>

<h2>Segmentación de textos</h2>

<?php
$arrayNumerosToString = "";
$numeros = "1,2,3,4,5";
$arrayNumeros = explode(",", $numeros);
$arrayNumerosToString = implode("+", $arrayNumeros);
$suma  = 0;


for($i = 0; $i < count($arrayNumeros) ; $i++ ){
 $suma += $arrayNumeros[$i];
}
echo $arrayNumerosToString . "=" . $suma;
?>
</body>
</html>