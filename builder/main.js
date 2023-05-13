const TaskBuilder = require('./taskBuilder');

(() => {
    const task = new TaskBuilder()
    .setName('Task 1')
    .setDescription('Description 1')
    .setDate(new Date())
    .setIsFinished(false)
    .build();
    
    console.log(task);
})();