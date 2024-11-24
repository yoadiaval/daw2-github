<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="validacion.php" method="POST">
        <input type="text" placeholder="nombre" name="nombre">
        <input type="text" placeholder="Apellidos" name="apellido">
        <input type="text" email name="email">
        <input type="radio" name="sexo" id="femenino" value="femenino"><label for="femenino">Femenino</label>
        <input type="radio" name="sexo" id="masculino" value="masculino"><label for="masculino">Masculino</label>
        <label for="convivientes">Número de convivientes</label><input type="number" min="0" name="convivientes">
        <label for="aficiones">Aficiones</label>
        <input type="checkbox" name="aficiones[]" id="futbol" value="futbol"><label for="futbol">Futbol</label>
        <input type="checkbox" name="aficiones[]" id="beisbol" value="beisbol"> <label for="basebol">Beisbol</label>
        <input type="checkbox" name="aficiones[]" id="ping pong" value="ping pong"> <label for="ping pong">Ping
            Pong</label>
        <input type="checkbox" name="aficiones[]" id="ciclismo" value="ciclismo"> <label for="ciclismo">Ciclismo</label>
        <button type="submit" name="enviar">Enviar</button>
    </form>
</body>

</html>