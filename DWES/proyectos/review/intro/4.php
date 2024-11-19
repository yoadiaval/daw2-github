<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $nota1 = 30.6;
    $nota2 = 20.1;
    $nota3 = 10.3;
    if ($nota1 > $nota2) {
        if ($nota1 > $nota3) {
            echo "La nota  mayor es $nota1";
        } else {
            echo "La nota mayor es $nota3";
        }
    } else if ($nota2 > $nota3) {
        echo "La nota mayor es $nota2";
    } else {
        echo "La nota mayor es $nota3";
    }
    ?>
</body>

</html>