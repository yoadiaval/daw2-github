<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script src="./script.js" defer></script>
  <style>
    a {
      cursor: pointer;
      background-color: rgb(201, 201, 201);
      border: 1px solid gray;
      margin: 0.5rem;
    }
  </style>
</head>

<body>
  <div>
    <button onclick="obtenerDatos()">Obtener</button>
    <button>Agregar</button>
    <button>Modificar</button>
    <button>Eliminar</button>
  </div>
  <h2>Listado de productos</h2>
  <table>
    <thead>
      <tr>
        <td>CODIGO</td>
        <td>DESCRIPCION</td>
        <td>PRECIO</td>
        <td>NOMBRE</td>
        <td>ACCONES</td>
      </tr>
    </thead>
    <tbody></tbody>
  </table>


  <h2>Modificar </h2>
  <p>Seleccione solo los valores que quiera modificar. De no seleccionar ninguno se mandarán a modificar todos los valores</p>
  
  <form id="formModif">
    <div>
      <input type="checkbox" id="checkdescripcion"><label for="">Descripcion</label>
      <input type="text" id="descripcion" name="descripcion"
        value="<?php echo $productoSeleccionado[0]['descripcion'] ?? '' ?> ">
    </div>
    <div>
      <input type="checkbox" id="checkprecio"><label for="">Precio</label>
      <input type="text" id="precio" name="precio" value="<?php echo $productoSeleccionado[0]['precio'] ?? '' ?>">
    </div>

    <div>
      <input type="checkbox" id="checknombre"><label for="">Nombre</label>
      <input type="text" id="nombre" name="nombre" value="<?php echo $productoSeleccionado[0]['nombre'] ?? '' ?>">
    </div>

    <input type="text" name="cod" value="<?php echo $productoSeleccionado[0]['cod']  ?? ''?>">
    <button type="submit">Modificar</button>

  </form>
</body>

</html>