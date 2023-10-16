let todos = [];

// function to add a new task
// 1st parameter is an array of all the existing todos
// 2nd and 3rd parameter are the details of the task

function addTodo(todos, name, urgency) {
  let newTodo = {
    // the 'id' is to unique identify each task
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency
  };
  todos.push(newTodo);
}

// math.random will give me a random number
// .floor will round down the number
// .ceil will round up the number

// for testing 
// addtodo(todos, "Wash the car", 5); 
// addtodo(todos, "Sweep the floor", 3); 
// addtodo(todos, "Clear the toilet", 5); 
// console.log(todos)

// modifyTask(todos, todos[0].id, "Wash the fruits",4); 
// console.log(todos); 

// deleteTask(todos, todos[1].id); 
// console.log(todos); 

function modifyTask(todos, id, newName, newUrgency) {
  // Create the new task
  let modifiedTask = {
    "id": id,
    "name": newName,
    "Urgency": newUrgency
  }
  // get the index of the task that we want to replace 
  const indexToReplace = todos.findIndex(function(t){
    return t.id == id; 
  });
    
  // to check if the task with the given id really exists
  if (indexToReplace > -1){
    todos[indexToReplace] = modifiedTask; 
  } 
}    
//   let task = null;
//   for (let task of todos) {
//     if (taskToDo.id == id) {
//       task = taskToDo;
//     }
//   }
//   if (task) {
//     task.name = newTaskName;
//   } else {
//     console.log("Task is not found")
//   }
// }

function deleteTask(todos, id) {
  let indexToDelete = null;
  for (let index = 0; index < todos.length; index++)
    if (todos[index].id == id) {
      indexToDelete = index;
      break;
    }
  if (indexToDelete !== null) {
  todos.splice(indexToDelete, 1);
  } else {
    console.log("Task is not found")
  }
}

const prompt = require('prompt-sync')();

function showMenu(){
  while (true){
    console.log("===== Todo List Menu ====");
    console.log("1. Show all tasks"); 
    console.log("2. Add a new Task");
    console.log("3. Modify an existing task");
    console.log("4. Delete a task"); 
    console.log("5. Exit");
    let choice = prompt("Enter your choice here: ")
    if (choice === "1"){
      displayTask(todos); 
    } else if (choice === "2"){
      let name = string(prompt("Enter the name of the task: "))
      let urgency = parseInt(prompt("Enter the urgency (1-5): ")); 
      addTodo(todos, name, urgency); 
      console.log("Task added successfully!");       
    } else if (choice === "3"){
      let id = parseInt(prompt("Enter the task ID to modify: ")); 
      let newTaskName = prompt("Enter the new name for the task: "); 
      let newUrgency = parseInt(prompt("Enter the new urgency (1-5): "));
      modifyTask(todos, id, newTaskName, newUrgency); 
      console.log("Task modified successfully!"); 
    } else if (choice === "4"){
      let id = parseInt(prompt("Enter the task ID to delete: "));
      deleteTask(todos, id); 
      console.log("Task deleted successfully!"); 
    } else if (chocie === "5"){
      console.log("Exiting the application..."); 
      break;
    } else {
      console.log("Invalid choice. Please select a number between 1 and 5."); 
    }
  }
}

function displayTasks(todos){
  if (todos.length === 0){
    console.log("There are no tasks to display.");
    return; 
  }
  console.log("==== Tasks ====");
  for (let task of todos){
    console.log(`ID: ${task.id}, Name: ${task.name}, Urgency: ${task.urgency}`); 
  }
}

showMenu();


