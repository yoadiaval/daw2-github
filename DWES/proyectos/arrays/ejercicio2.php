<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php    $coches = array("111BCE"=>array("audi", "U", "4"), "111BCF"=>array("bmw", "A", "4"), "111BCG"=>array("chevrolet", "L", "2"), "111BCG"=>array("citroen", "F", "4"));
    for($coches as $coche){
        print_r($coche);
    }
    ?>

</body>
</html>