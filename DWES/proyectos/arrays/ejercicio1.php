<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    for($i=0; $i<=10; $i++){
        for($j=0; $j<=10; $j++){
            $tabla[$i][$j] = $i * $j;
        }
    }

    
    for($i=0; $i<=10; $i++){
        echo "Tabla del ". $i . ":<br/>";
        for($j=0; $j<=10; $j++){
           echo "$i x  $j = " . $tabla[$i][$j] . "<br/> ";
        }
        echo "<br/>";
    }
   
    ?>
</body>
</html>