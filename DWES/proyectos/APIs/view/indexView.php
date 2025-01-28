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



  <p>Seleccione los valores que quiera modificar.</p>

  <form id="formModif">
    <fieldset>
      <legend>Modificar</legend>
      <br />
      <div>
        <input type="checkbox" id="checkdescripcion"><label for="">Descripcion</label>
        <input type="text" id="descripcion" name="descripcion"
          value="<?php echo $productoSeleccionado[0]['descripcion'] ?? '' ?> ">
      </div><br />
      <div>
        <input type="checkbox" id="checkprecio"><label for="">Precio</label>
        <input type="text" id="precio" name="precio" value="<?php echo $productoSeleccionado[0]['precio'] ?? '' ?>">
      </div><br />
      <div>
        <input type="checkbox" id="checknombre"><label for="">Nombre</label>
        <input type="text" id="nombre" name="nombre" value="<?php echo $productoSeleccionado[0]['nombre'] ?? '' ?>">
      </div><br />

      <input type="hidden" id="cod" value="<?php echo $productoSeleccionado[0]['cod'] ?? '' ?>">
      <button type="submit">Modificar</button>
    </fieldset>


  </form>


  <form id="formAgregar">
    <fieldset>
      <legend>Agregar</legend>
      <br />
      <label for="">Descripcion</label>
      <input type="text" placeholder="Inserte la descripcion " required><br /><br />
      <label for="">Precio</label>
      <input type="text" placeholder="Inserte el precio" required><br /><br />
      <label for="">Nombre</label>
      <input type="text" placeholder="Inserte el nombre" required><br /><br />
      <input type="submit" value="Enviar">
    </fieldset>

  </form>
</body>

</html>