telefonos = {
  samsung: "Galaxy S8",
  apple: "iPhone 8",
  nokia: "Lumia 230",
  huawei: "Mate 9",
  sony: "Xperia XZ",
};

document.querySelector("body").innerHTML = `<h1>Telefonos en stock</h1>`;
document.getElementById("table").innerHTML = `<tr>
<td>índice</td>
<td>Valor</td>
</tr>`;
document.getElementById("table").innerHTML += `${Object.keys(telefonos)
  .map((key) => {
    return `<tr>
    <td>${key}</td>
    <td>${telefonos[key]}</td>
    </tr>`;
  })
  .join("")}`;
