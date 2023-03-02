const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight);

const str = "10011010101011101101010111000001110101100101",
  matrix = str.split("");

let font = 30,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  $.fillStyle = "rgba(0,0,0,.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#0f0";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
  backToResume();

}
const bodyCanvas = document.querySelector('.body__canvas');
bodyCanvas.style.display = 'none';
const bodyBtn = document.querySelector('.body-btn');
const bodyContent = document.querySelector('.body__content');
const codeBtn = document.querySelector('.code__btn');

const backToResume = () => {
  bodyBtn.addEventListener('click', () => {
    bodyContent.style.display = 'block';
    bodyCanvas.style.display = 'none';
    C.style.background = 'black';
  })
}

codeBtn.addEventListener('click', () => {
  bodyContent.style.display = 'none';
  bodyCanvas.style.display = 'block';
  C.style.background = 'black';
  setInterval(draw, 55);
})

window.addEventListener("resize", () => location.reload()); 