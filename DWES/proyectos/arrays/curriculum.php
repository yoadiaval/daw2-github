<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    //mmandar el idioma para la url y recogerlo de ella y mostrarlo
    //pasarle un poarametro a la url donde le indiques que idioma quiero
    <?php 
    $texto_es = "cv_ español";
    $texto_en = "cv_ingles";
    $idioma = "es";
    $texto = "texto_" . $idioma;
    echo $$texto;
    ?>
</body>
</html>