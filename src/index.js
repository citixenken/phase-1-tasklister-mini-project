document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let myForm = document.querySelector("form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskCreation(e.target.new_task_description.value); //input field id and value
    myForm.reset(); // reset form after submission
  });
});

//taskCreation
//=============
function taskCreation(task) {
  // console.log(task);
  let taskItem = document.createElement("li");
  let cancelButton = document.createElement("button");

  //sentence case form inputs
  let sentenceCasedTask = toSentenceCase(task);
  taskItem.textContent = `${sentenceCasedTask}` + "  ";

  // console.log(taskItem);
  cancelButton.textContent = "❌";
  // console.log(cancelButton);
  cancelButton.addEventListener("click", taskDeletion); // cancelButton event listener
  taskItem.appendChild(cancelButton); //append cancelButton to taskItem before appending to list
  // console.log(taskItem);
  document.querySelector("#tasks").appendChild(taskItem);

  // let taskEdit = document.querySelector("#tasks");
  // taskEdit.addEventListener("click", updateInput);
}

//delete function
//================
const taskDeletion = (e) => {
  e.target.parentNode.remove();
};

//sentence case function
//=======================
const toSentenceCase = (task) => {
  const newTaskStr = task
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
  return newTaskStr;
};

//edit input value
//=================
// function updateInput(taskEdit) {
//   document.getElementById("tasks").value = taskEdit;
// }
