const input = document.querySelector("#inputvalue");
const btn = document.querySelector(".button");
const listContainer = document.querySelector("#list-container");

btn.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("you should write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${input.value}<i class="fa-solid fa-trash"></i>`;
    listContainer.appendChild(li);
    input.value = "";
    li.querySelector("i").addEventListener("click", remove);
    function remove() {
      li.remove();
    }
  }
});
