const imglist = [
  "./imgs/1.jpg",
  "./imgs/2.jpg",
  "./imgs/3.jpg",
  "./imgs/4.jpg",
  "./imgs/5.jpg",
];
let pos = 0;
const img = document.querySelector("img");
const positionItems = document.getElementsByClassName("positionItem");
//timer = setInterval(next, 3000); //ejecuta la funcion next cada 3segundos

function next() {
  img.setAttribute("src", imglist[pos]);

  for (let i = 0; i < positionItems.length; i++) {
    if (i == pos) {
      positionItems[pos].style.backgroundColor = "white";
    } else {
      positionItems[i].style.backgroundColor = " rgba(255, 255, 255, 0.338)";
    }
  }

  pos == imglist.length - 1 ? (pos = 0) : pos++;
}

function backward(element) {
  img.setAttribute("src", imglist[pos]);
  for (let i = 0; i < positionItems.length; i++) {
    if (i == pos) {
      positionItems[pos].style.backgroundColor = "white";
    } else {
      positionItems[i].style.backgroundColor = " rgba(255, 255, 255, 0.338)";
    }
  }
  pos == 0 ? (pos = imglist.length - 1) : pos--;
}

for (let i = 0; i < imglist.length; i++) {
  document.getElementById(
    "position"
  ).innerHTML += `<div class="positionItem"></div>`;
}
