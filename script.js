// the 'DOMContentLoaded' events fires when all the 
// HTML elements in the webpage has been created
// We use it to define the entry point of our application

document.addEventListener("DOMContentLoaded", function(){
    function main(){
        let todos =[];
        addTodo(todos, "Walk the dog", 5); 
        addTodo(todos, "Fish the fish", 1); 
        addTodo(todos, "Clean the floor", 2); 
        addTodo(todos, "Wash the car", 3); 
        
        for (let task of todos){
            // create an empty <li>
            const li = document.createElement('li'); 

            li.innerHTML = `${t.name} (urgency: ${t.urgency})`

            const todoListElement = document.querySelector("#todoList");
            todoListElement.appendChild(li); 
        }
    }

})

function renderTodos(todos){

}

main(); 


// const prompt = require('prompt-sync')();

// function showMenu(){
//   while (true){
//     console.log("===== Todo List Menu ====");
//     console.log("1. Show all tasks"); 
//     console.log("2. Add a new Task");
//     console.log("3. Modify an existing task");
//     console.log("4. Delete a task"); 
//     console.log("5. Exit");
//     let choice = prompt("Enter your choice here: ")
//     if (choice === "1"){
//       displayTask(todos); 
//     } else if (choice === "2"){
//       let name = string(prompt("Enter the name of the task: "))
//       let urgency = parseInt(prompt("Enter the urgency (1-5): ")); 
//       addTodo(todos, name, urgency); 
//       console.log("Task added successfully!");       
//     } else if (choice === "3"){
//       let id = parseInt(prompt("Enter the task ID to modify: ")); 
//       let newTaskName = prompt("Enter the new name for the task: "); 
//       let newUrgency = parseInt(prompt("Enter the new urgency (1-5): "));
//       modifyTask(todos, id, newTaskName, newUrgency); 
//       console.log("Task modified successfully!"); 
//     } else if (choice === "4"){
//       let id = parseInt(prompt("Enter the task ID to delete: "));
//       deleteTask(todos, id); 
//       console.log("Task deleted successfully!"); 
//     } else if (chocie === "5"){
//       console.log("Exiting the application..."); 
//       break;
//     } else {
//       console.log("Invalid choice. Please select a number between 1 and 5."); 
//     }
//   }
// }

// function displayTasks(todos){
//   if (todos.length === 0){
//     console.log("There are no tasks to display.");
//     return; 
//   }
//   console.log("==== Tasks ====");
//   for (let task of todos){
//     console.log(`ID: ${task.id}, Name: ${task.name}, Urgency: ${task.urgency}`); 
//   }
// }

// showMenu();


