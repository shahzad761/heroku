const pool = require('../dbcon')

class TodoRepo {

    async getAllTasks() {
        return await pool.query('select * from public.todoList');
    }

    async createTaskRepo(task,done) {
        return await pool.query('insert into public.todoList (task,done) values ($1,$2)',[task,done]);
    }

    async DeleteTaskRepo() {
        return await pool.query('DELETE FROM public.todolist WHERE id  IN (SELECT id FROM public.todolist ORDER BY id LIMIT 1)');
    }


    async updateTaskRepo(done,id) {
        return await pool.query('update public.todoList set done=$1 where id = $2',[done,id]);
    }
}

module.exports = TodoRepo;