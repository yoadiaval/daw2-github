<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $num1 = 3;
    $num2 = 5;
    $num3 = 8;
    $num1 *= 4;
    echo $num1 . "</br>"; //12
    echo $num1 <= $num2 . "</br>"; // false
    echo $num3 > $num1 and $num3 > $num2 . "</br>"; // false && true -> false
    echo $num3 > $num1 or $num3 > $num2 . "</br>"; // false or true -> true
    echo $num1 > $num2 xor $num1 > $num3 . "</br>"; // true xor true -> false
    $num3--;
    echo $num3 . "</br>"; //7
    $num3 += $num1;
    echo $num3 . "</br>"; // 19
    
    ?>
</body>

</html>