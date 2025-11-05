// Function to create a task after a delay
//Create async functions createTask, completeTask, and manageTasks that log task creation and completion with 1-second delays as shown in the expected output.
function createTask(taskName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = { id: 1, name: taskName }
            console.log(`Task created: ${JSON.stringify(obj)}`)
            resolve(obj);
        }, 1000)
    })
  
}

// Function to complete the task after a delay
function completeTask(task) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task '${task.name}' completed!`);
            resolve(`Task '${task.name}' completed!`)
        }, 1000)
    })
}

// Main function to manage the task
async function manageTasks(taskName) {
    const createdTask = await createTask(taskName);
    await completeTask(createdTask)
}