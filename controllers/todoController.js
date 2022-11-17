const TodoRepo = require('../repository/todoRepository')

class TodoController {
    async getAll(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }

    async createTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.task,
            request.body.done);

        response.json({
            "status": "Task created"
            })
    }



    async deleteTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.DeleteTaskRepo();

        response.json({
            "status": "Task deleted"
            })
    }


    async updateTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.updateTaskRepo(request.body.done,request.body.id);

        response.json({
            "status": "Task updated"
            })
    }
   


}

module.exports = TodoController;