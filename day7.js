const task = {
    title: "Learn JavaScript",
    priority: "High",
    completed: false
};

console.log(task);

console.log(task.title);

task.completed = true;

console.log(task.completed);
task.AssignTo = "Akash"
console.log(task.AssignTo)

const task1 = {
    title: "Learn JavaScript",
    completed: true
};

const task2 = {
    title: "Practice DSA",
    completed: false
};

function displayTask(task) {
    console.log("Task:", task.title);
    console.log("Completed:", task.completed);
}

displayTask(task1);
displayTask(task2);