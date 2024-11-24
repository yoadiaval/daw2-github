<?php
session_start();

if (isset($_POST['enviar']) && $_POST['enviar'] == "enviar") {
    $_SESSION['convivientes'] = $_POST['convivientes'];
    $aficiones = $_SESSION['aficiones'] = $_POST['aficiones'];


}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Sexo</th>
            <th>Convivientes</th>
            <th>Aficiones</th>
        </tr>
        <tr>
            <td><?php echo $_SESSION['nombre']; ?></td>
            <td><?php echo $_SESSION['email']; ?></td>
            <td><?php echo $_SESSION['sexo']; ?></td>
            <td><?php echo $_SESSION['convivientes']; ?></td>
            <td><?php foreach ($aficiones as $aficion) {
                echo $aficion . "<br>";
            }
            ; ?></td>
        </tr>
    </table>
</body>

</html>