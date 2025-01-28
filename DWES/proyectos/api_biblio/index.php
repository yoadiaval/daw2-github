<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" defer></script>
    <title>Document</title>
</head>
<body>
    <h1>Listado de libros</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>AUTOR</th>
                <th>GENERO</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
</table>
    <form id="formEdit">
        <fieldset>
        <legend>Editar</legend>
         <input type="hidden" id="id">
        <label>Título</label>
         <input type="text" id="titulo">
         <label >Autor</label>
         <input type="text" id="autor">
         <label >Género</label>
         <input type="text" id="genero">
        
         <button type="submit" >Enviar</button>
        </fieldset>
    </form>
</body>
</html>