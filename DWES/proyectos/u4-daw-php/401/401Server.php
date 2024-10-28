<?php
echo $_SERVER["PHP_SELF"]."<br>"; // Nombre del script ejecutado
echo $_SERVER["SERVER_SOFTWARE"]."<br>"; // Tipo de server: Apache/2.4.46 (Win64) OpenSSL/1.1.1g PHP/7.4.9
echo $_SERVER["SERVER_NAME"]."<br>"; // Nombre del dominio: localhost

echo $_SERVER["REQUEST_METHOD"]."<br>"; // GET
echo $_SERVER["REQUEST_URI"]."<br>"; // URL sin el domio: /u4-daw-php/401Server.php
echo $_SERVER["QUERY_STRING"]."<br>"; // heroe=Batman

/*echo $_POST['nombre']*/

echo $_SERVER["HTTP_REFERER"]."<br>"; //página desde la que se hizo la petición : http://localhost:8080/u4-daw-php/401/
?>