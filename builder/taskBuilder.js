const Task = require('./task');

class TaskBuilder {
    constructor() {
        this.name = '';
        this.description = '';
        this.date = new Date();
        this.isFinished = false;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setDate(date) {
        this.date = date;
        return this;
    }

    setIsFinished(isFinished) {
        this.isFinished = isFinished;
        return this;
    }
    
    build() {
        return new Task(this.name, this.description, this.date, this.isFinished);
    }
}

module.exports = TaskBuilder;