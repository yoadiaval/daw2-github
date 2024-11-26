<?php
session_start()
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notas - Login</title>
    <style>
        button {
            width: 120px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            background-color: #556871;
            color: white;
            border: 0;
            cursor: pointer;
        }

        div {
            margin-top: 10px;
        }

        label {
            display: block;
        }
        label.lateral {
            display: inline;
            margin-left: 10px;
        }

        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Login de usuario</h1>
    
    <form action="./../controllers/auth.php" method="POST">  
       <div>
            <label>Usuario:</label> 
            <input type="text" name="username" required  value =  <?php echo isset($_COOKIE['usuario']) ? $_COOKIE['usuario'] : ""; ?>/>  
        </div>
        <div>
            <label>Contraseña:</label> 
            <input type="password" name="password" required value =  <?php echo isset($_COOKIE['password']) ? $_COOKIE['password'] : ""; ?>/>  
        </div>
        <div>
            <input type="checkbox" name="recordarme" /> 
            <label class="lateral">Recordarme</label>  
        </div>
        <div>
            <button type="submit" name="entrar" value = "entrar">Entrar</button> 
            
        </div>
    </form>
    <p>
            <?php
               echo isset($_COOKIE['mensaje']) ? $_COOKIE['mensaje'] : ""; 
                ?>
            </p>
    <div class="error">
    
    </div>
</body>
</html>