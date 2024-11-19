<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>Este contador va del 1 al 100</h2>
    <?php
    for ($i = 1; $i <= 100; $i++) {
        echo $i;
        if ($i < 100) {
            echo ",";
        }
    }
    echo "</br>";
    ?>
    <h2>Este contador va del 0 al 10</h2>
    <?php
    $num = 10;
    while ($num >= 0) {
        echo $num;
        if ($num > 0) {
            echo "-";
        }
        $num--;
    }
    ?>
</body>

</html>