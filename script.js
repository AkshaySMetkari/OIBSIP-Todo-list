console.log("program started");

let addToDobutton = document.getElementById("new-task-submit");
let container = document.getElementById("tasks");
let inputField = document.getElementById("new-task-input");

addToDobutton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("style123");
  paragraph.innerText = inputField.value;
  container.appendChild(paragraph);
  inputField.value =null;
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    container.removeChild(paragraph);
  });
});
