<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php    
   $coches = array("C11BCE" => array("bmw", "U", "4"), 
                   "A11BCF" => array("audi", "A", "4"), 
                   "B11BCG" => array("chevrolet", "L", "2"), 
                   "D11BCG" => array("citroen", "F", "4"));

    ksort($coches);

    foreach($coches as $key => $val){
       echo "$key <br/>";
       foreach($val as $item){
        echo "$item <br/>";
       }
    }
    ?>

</body> 
</html>