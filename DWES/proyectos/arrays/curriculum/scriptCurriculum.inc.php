   <?php
   //mmandar el idioma para la url y recogerlo de ella y mostrarlo
   //pasarle un parametro a la url donde le indiques que idioma quiero
    $texto_es = "Soy desarrollador web con experiencia en la creación de aplicaciones dinámicas y sitios web interactivos utilizando tecnologías como HTML, CSS, JavaScript ";
    $texto_en = "I am a web developer with experience in building dynamic applications and interactive websites using technologies like HTML, CSS, JavaScript.";
    $idioma = isset($_GET['idioma']) ? $_GET['idioma'] : 'es';
    $texto = "texto_" . $idioma;
    echo $$texto . "<br/><br/>";
?>