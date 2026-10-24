const tasks = [
    {
        id: 1,
        title: "Learn JavaScript",
        completed: true
    },
    {
        id: 2,
        title: "Practice DSA",
        completed: false
    },
    {
        id: 3,
        title: "Build TaskFlow",
        completed: false
    }
];

function displayTasks(tasks) {
    for (const task of tasks) {
        console.log(`Title: ${task.title}`);
        if (task.completed) {
            console.log("Status: Completed");
        } else {
            console.log("Status: Pending");
        }
    }
}

displayTasks(tasks);

function countCompltedTasks(tasks) {
    let completedCount = 0;
    for (const task of tasks) {
        if (task.completed) {
            completedCount++;
        }
    }
    return completedCount;
}

const completedTasks = countCompltedTasks(tasks);
console.log("Number of completed tasks:", completedTasks);

function completeTasks(tasks, tasksIds) {
    for (const task of tasks) {
        if (tasksIds.includes(task.id)) {
            task.completed = true;
        }
    }
}
completeTasks(tasks, [2]);