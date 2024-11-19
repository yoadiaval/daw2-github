<?php
function saludo($nombre)
{
    echo "Hola, $nombre";
}
function cuenta($a, $b)
{
    for ($i = $a; $i <= $b; $i++) {
        echo $i;
        if ($i < $b) {
            echo ",";
        }
    }
}
function intercambia($a, $b)
{
    $c = $a;
    $a = $b;
    $b = $c;
    echo "a=$a y b=$b";
}
function descuento($precio, $descuento = 0)
{
    return $precio - ($precio * $descuento / 100);
}
?>