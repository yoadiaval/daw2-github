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
    $nota3 = rand(1,10);

    if($nota1 > $nota2 and $nota1 > $nota3){
        $notaMayor= $nota1;
        echo "nota 1: " . $nota1 . "<br/>";
        echo "nota 2: " . $nota2 . "<br/>";
        echo "nota 3: " . $nota3 . "<br/>";
        echo "nota mayor " . $notaMayor . "<br/>";
    }else{
        if($nota2 > $nota3){
           $notaMayor = $nota2;
           echo "nota 1: " . $nota1 . "<br/>";
           echo "nota 2: " . $nota2 . "<br/>";
           echo "nota 3: " . $nota3 . "<br/>";
           echo "nota mayor " . $notaMayor . "<br/>";
        }else{
            $notaMayor = $nota3;
            echo "nota 1: " . $nota1 . "<br/>";
            echo "nota 2: " . $nota2 . "<br/>";
            echo "nota 3: " . $nota3 . "<br/>";
            echo "nota mayor " . $notaMayor . "<br/>";
        }
    }
    ?>
</body>
</html>