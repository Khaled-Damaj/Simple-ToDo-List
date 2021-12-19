let input = document.querySelector(".todo-head input");
let addBtn = document.querySelector(".todo-head span");
let container = document.querySelector(".todo-container");
let complete = document.querySelector(".completed span");
let tasks = document.querySelector(".tasks span");

window.onload = () => {
  input.focus();
};

addBtn.onclick = (e) => {
  if (input.value === "") {
    console.log("Empty");
  } else {
    let noTaskMessage = document.querySelector(".no-task-message");

    if (document.body.contains(document.querySelector(".no-task-message"))) {
      noTaskMessage.remove();
    }

    let todoBoxs = Array.from(document.querySelectorAll(".todo-box"));
    let isAdded = false;

    todoBoxs.forEach((box) => {
      if (box.children[1].textContent === input.value) {
        isAdded = true;
        console.log("ee");
      }
    });

    if (!isAdded) {
      let mainSpan = document.createElement("span");
      mainSpan.setAttribute("class", "todo-box");
      mainSpan.innerHTML = `
        <input type="checkbox" class="checkbox" name="" id="" />
        <span>${input.value}</span>
        <span class="delete">Delete</span>`;
      container.appendChild(mainSpan);
    } else {
      alert("Has already been added");
    }
    calculateTasks();
  }
};

document.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
    if (container.childElementCount === 0) {
      createNoTaskMessage();
    }
  }
  if (e.target.checked) {
    if (!e.target.parentNode.classList.contains("finished")) {
      e.target.parentNode.classList.add("finished");
    } else {
      e.target.parentNode.classList.remove("finished");
    }
  }
  calculateTasks();
});

function createNoTaskMessage() {
  let noTaskMessage = document.createElement("span");
  noTaskMessage.className = "no-task-message";
  let textNode = document.createTextNode("No Task To show");
  noTaskMessage.appendChild(textNode);
  container.appendChild(noTaskMessage);
}

function calculateTasks() {
  if (document.body.contains(document.querySelector(".no-task-message"))) {
    tasks.textContent = 0;
  } else {
    tasks.textContent = container.childElementCount;
    complete.textContent = document.querySelectorAll(".finished").length;
  }
}
