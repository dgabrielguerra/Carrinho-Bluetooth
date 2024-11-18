const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const inf = document.getElementById("inf");
const informacoes = document.querySelectorAll("#inf .informacoes");

let idx = 0;


const imgWidth = img[0].clientWidth;


imgs.style.width = `${img.length * imgWidth}px`;
inf.style.width = `${informacoes.length * imgWidth}px`;

function carrosel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * imgWidth}px)`;
  inf.style.transform = `translateX(${-idx * imgWidth}px)`;
}

setInterval(carrosel, 2500);
