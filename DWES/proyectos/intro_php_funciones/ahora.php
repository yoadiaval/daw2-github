
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    date_default_timezone_set("Europe/Madrid"); //para que coincida la hora con la de los ordenadores
    $now = date('d M Y - H:i:s');
    echo $now;
    ?>
</body>
</html>