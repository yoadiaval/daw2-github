<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Función Contador 2</h1>
    <?php 
    function cuenta($a, $b){
        if($a > $b){
            for($i = $a; $i >= $b; $i--){
                echo $i;
                if($i != $b){
                    echo ", ";
                }
            }
        }else{
            for($i = $a; $i <= $b; $i++){
                echo $i;
                if($i != $b){
                    echo ", ";
                }
            }
        }
    }


    cuenta(40,20);
    ?>
</body>
</html>