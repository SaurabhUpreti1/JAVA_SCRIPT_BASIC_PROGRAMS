let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let body = document.querySelector(".body");

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
start.addEventListener("click", () => {
  a = setInterval(() => {
    body.style.backgroundColor = getRandomColor();
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(a);
  a = null;
});
