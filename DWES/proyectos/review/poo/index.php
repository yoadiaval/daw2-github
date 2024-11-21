<?php
include "./clase.php";
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
    $e = new Estudiante("1254873", "laura", "y@nauta.com", "1546");
    $e->mostrar();
    ?>
</body>

</html>