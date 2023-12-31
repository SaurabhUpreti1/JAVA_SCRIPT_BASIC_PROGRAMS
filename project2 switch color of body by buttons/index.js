let btn = document.querySelectorAll(".btn");
let body = document.querySelector("body");
btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "btn1") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "btn2") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id === "btn3") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "btn4") {
      body.style.backgroundColor = "yellow";
    }
  });
});
