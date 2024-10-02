<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $fichero_in = "datos.txt";
    $fichero_out = "bb.txt";
    
    file_exists($fichero_out) or die ("No se encuentra el fichero");
    
    $content = file_get_contents($fichero_in);
    file_put_contents($fichero_out, $content);
    
    ?>
</body>
</html>

