<?php
define("PI", 3.14);
$radio = 2;
$area = PI * pow($radio, 2);
$textoResultado = "El área calculada del círculo es: " . number_format($area, 2) . "<br/>";
echo $textoResultado;
echo "Este es el textoResultado en mayusculas " . strtoupper($textoResultado);
$textoResultadoModif = str_replace("calculada", "obtenida", $textoResultado);
echo "TExto modificado: $textoResultadoModif <br/>";
echo "Longitud del texto: " . strlen($textoResultadoModif) . " <br/>";
echo "la posicion de circulo en la cadena es :" . strpos($textoResultado, "círculo") . "<br/>";

$numeros = "1,2,3,4,5";
$suma = 0;
$arr = explode(",", $numeros);
for ($i = 0; $i < count($arr); $i++) {
    $suma += $arr[$i];
}

echo implode("+", $arr) . "=" . $suma;
?>