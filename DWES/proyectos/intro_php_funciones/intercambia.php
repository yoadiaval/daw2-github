<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$a = 3;
$b = 4;
function intercambia(&$a, &$b,){
$c = $a;
$a = $b;
$b = $c; 
}
intercambia($a, $b);

echo "a: $a , b:$b"
?>
    
</body>
</html>
