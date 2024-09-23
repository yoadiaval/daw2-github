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
}else{
    if($nota2 > $nota3){
       $notaMayor = $nota2;
      
    }else{
        $notaMayor = $nota3;
    }
}
echo "nota mayor " . $notaMayor . "<br/>";
    
    switch(true){
        case $notaMayor < 5: echo "insuficiente"; break;
        case $notaMayor < 7: echo "suficiente"; break;
        case $notaMayor >= 7 and $notaMayor < 9 : echo "notable"; break;
        case $notaMayor >= 9: echo "sobresaliente"; break;
    }
    ?>
</body>
</html>