<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>ÁREA DE LOS CONOS</h1>
<?php
include_once "area.php";
$conos = array("cono1"=>array(3,15), "cono2"=>array(8,21), "cono3"=>array(9.5,6));

foreach($conos as $cono=>$dimensiones){
    $areaCono = area($conos[$cono][0], $conos[$cono][1]);
    echo "Área del " . $cono . " (radio: " . $conos[$cono][0] . "mm, altura: " . $conos[$cono][1] ."mm): " . number_format($areaCono,2) . "mm<sup>2</sup><br/>";

}

?>

</body>
</html>

<!--sup-->