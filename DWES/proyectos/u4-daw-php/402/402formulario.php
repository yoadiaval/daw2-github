<?php
$nombre = $_GET["nombre"];
$email = $_GET["email"];
$url = $_GET["url"];
$sexo = $_GET["sexo"];
$numberConv = $_GET["numConv"];
$aficiones = $_GET["aficiones"];
$menuFav = $_GET["menuFav"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo $nombre . "<br/>";
    echo $email . "<br/>";
    echo $url . "<br/>";
    echo $sexo . "<br/>";
    echo $numberConv . "<br/>";

   foreach ($aficiones as $aficion) { 
        echo $aficion . "<br/>";
    }

    foreach ($menuFav as $menu){
        echo $menu . "<br/>";
    } 

    ?>
</body>
</html>