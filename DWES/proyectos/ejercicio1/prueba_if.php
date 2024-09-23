<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $nota1 = rand(1,10);
    $nota2 = rand(1,10);

    if($nota1 > $nota2){
        $notaMayor= $nota1;
        echo "nota 1: " . $nota1 . "<br/>";
        echo "nota 2: " . $nota2 . "<br/>";
        echo "nota mayor " . $notaMayor . "<br/>";
    }else{
        $notaMayor = $nota2;
        echo "nota 1: " . $nota1 . "<br/>";
        echo "nota 2: " . $nota2 . "<br/>";
        echo "nota mayor: " . $notaMayor . "<br/>";
    }
    
    ?>
</body>
</html>