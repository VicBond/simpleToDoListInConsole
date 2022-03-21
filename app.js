let command = prompt('Please enter a command');
const todos = ['clean the house', 'clean the backyard', 'wash a car'];


while (command !== 'quit' && command !== 'q') {
  if(command === 'list'){
    console.log('********************************');
    todos.forEach((task, i) => {
      console.log(`${i}: ${task}`);
    });
    console.log('********************************');
  }
  command = prompt('Please enter a command');

  
}
console.log('OK, You quit!');