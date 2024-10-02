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
    $fichero_out = "cc.txt";
    
    try {
        if(!file_exists($fichero_out)){
            throw new Exception("El fichero de salida no existe");
        }
        $content = file_get_contents($fichero_in);
        file_put_contents($fichero_out, $content);
    } catch (Exception $e) {
        echo 'Se ha producido un error: ' . $e->getMessage();
    }
    ?>
</body>
</html>

