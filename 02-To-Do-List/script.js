const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add event listener for Enter key
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
    li.appendChild(span);
    saveData(); // Save immediately after adding
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData(); // Save when marking as checked/unchecked
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData(); // Save when deleting a task
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
