// Create a new task by adding to the arrays,add the description also
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? '' : 'not'} been completed`);
    },
    markComplete: function() {
      this.complete = true;
    }

  }
  return task;//need to remember to return the task. Although you will get undefined as the result cause you return nothing.
}





// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logTaskState(); // Clean Cat Litter has been completed


console.log(tasks);



