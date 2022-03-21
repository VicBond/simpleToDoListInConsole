let command = prompt('Please enter a command');
const todos = ['clean the house', 'clean the backyard', 'wash a car'];


while (command !== 'quit' && command !== 'q') {
  if(command === 'list'){
    console.log('********************************');
    todos.forEach((task, i) => {
      console.log(`${i}: ${task}`);
    });
    console.log('********************************');
  } else if(command === 'new'){
    const newTask = prompt('Enter a new task');
    todos.push(newTask);
    console.log(`${newTask} - added to the list!`);
  } else if(command === 'delete'){
    const index = prompt('Enter a task number to delete it from the list');
    const deletedTask = todos.splice(index, 1);
    console.log(`${deletedTask} - deleted from the list!`);
  }
  command = prompt('Please enter a command');

  
}
console.log('OK, You quit!');