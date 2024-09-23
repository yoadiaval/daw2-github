<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    for($i = 1; $i <= 100; $i++){
        
        if($i==100){echo $i;}else{
            echo $i .", ";
        }
    }
echo "<br/>";
    $i= 10;
    while($i >= 0){
        if($i == 0){
            echo $i;
        }else{
            echo $i . "-";
        }
        $i--;
    }


    ?>
</body>
</html>