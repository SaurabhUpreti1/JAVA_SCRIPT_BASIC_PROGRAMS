let btn = document.querySelector(".btn");
let result = document.querySelector(".getanswer");

btn.addEventListener("click", () => {
  let input1 = document.querySelector("#input1").value;
  let input2 = document.querySelector("#input2").value;
  var bmi = Number((input2 / input1 ** 2) * 10000);
  if (input1 <= 0 || input1 === "") {
    result.innerHTML = document.querySelector(".getanswer").innerHTML;
    result.innerHTML += "Enter valid height  ";
  } else if (input2 <= 0 || input2 === "") {
    result.innerHTML = document.querySelector(".getanswer").innerHTML;
    result.innerHTML += "Enter valid weight  ";
  } else {
    result.innerHTML = "";
    result.innerHTML += bmi;
  }
});
