let todos = [];

// function to add a new task
// 1st parameter is an array of all the existing todos
// 2nd and 3rd parameter are the details of the task

function addTodo(todos, name, urgency) {
  let newTodo = {
    // the 'id' is to unique identify each task - if there are 
    // tasks with the same name therefore there is a unique id
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    urgency: urgency
  };
  todos.push(newTodo);
}

// math.random will give me a random number
// .floor will round down the number
// .ceil will round up the number

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
  }); // the function here will return true - we are also looking 
      // for the index in the array 
    
  // to check if the task with the given id really exists
  // if the id does not exist, then findIndex will return -1
  if (indexToReplace > -1){
    todos[indexToReplace] = modifiedTask; 
  } 
}    

function deleteTask(todos, id) {
  let indexToDelete = null;
  for (let index = 0; index < todos.length; index++)
    if (todos[index].id == id) {
      indexToDelete = index;
      break;
    }
  // if we found the index that we want to delete
  if (indexToDelete !== null) {
  todos.splice(indexToDelete, 1);
  } else {
    console.log("Task is not found")
  }
}

// for testing 
addTodo(todos, "Wash the car", 5); 
addTodo(todos, "Sweep the floor", 3); 
addTodo(todos, "Clear the toilet", 5); 
console.log(todos)

// for testing
modifyTask(todos, todos[0].id, "Wash the fruits",4); 
console.log(todos); 

// for testing
deleteTask(todos, todos[1].id); 
console.log(todos); 