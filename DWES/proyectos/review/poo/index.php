<?php
include "clase.php"
    ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $e = new Estudiante("1254873", "yoannet", "y@nauta.com", "13227810");
    $e->__set("numExpediente", "2")->__set("numExpediente", "3");
    echo $e->__get("numExpediente");
    $e->test();
    ?>
</body>

</html>