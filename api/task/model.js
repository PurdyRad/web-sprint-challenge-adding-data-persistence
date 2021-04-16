const db = require('../../data/dbConfig');

async function getTasks () {
    const tasksArray = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id',
     't.task_description',
      't.task_notes',
       't.task_completed',
        'p.project_name',
         'p.project_description')
         tasksArray.forEach(result => {
             if (result.task_completed === 1) {
                 result.task_completed = true;
             } else {
                result.task_completed = false;
             }
         });
         return tasksArray;
}

function getTaskById (id) {
    return db('tasks').where('task_id', id).first();
}

async function createTask (task) {
    const [id] = await db('tasks').insert(task);

    const createdTask = await getTaskById(id);
    [createdTask].forEach(result => {
        if (result.task_completed === 1) {
            result.task_completed = true;
        } else {
            result.task_completed = false;
        }
    });
    return createdTask;
}

module.exports = {
    getTasks,
    createTask
}