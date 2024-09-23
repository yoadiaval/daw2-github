<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
</head>
<body>
    <h1>Ejercicio de contadores</h1>
    <p>Este contador va del 1 al 100</p>
    <?php
    for($i = 1; $i <= 100; $i++){
        
        if($i==100){
            echo $i;
        }else{
            echo $i .", ";
        }
    }
echo "<br/>";

     ?>
     <p>Este contador va del 10 al 0</p>

<?php
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