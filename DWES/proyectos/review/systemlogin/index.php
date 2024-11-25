<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <h1>Acceso al sistema</h1>
    <div class="form-container">
        <h2>Inicia sesión</h2>
        <form action="./app/login.php" method="post">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required>
            <br><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <br><br>
            <button type="submit" value="enviar" name = "enviar">Login</button>
        </form>
    </div>
    </div>
</body>
</html>