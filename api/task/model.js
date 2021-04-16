const db = require('../../data/dbConfig');

function getTasks () {
    return db('tasks as t').leftJoin('projects as p', 't.project_id', 'p.project_id').select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
}

function getTaskById (id) {
    return db('tasks').where('task_id', id).first();
}

async function createTask (task) {
    const [id] = await db('tasks').insert(task);
    if (task.task_completed === 1) {
        task.task_completed = true;
    } else {
        task.task_completed = false;
    }
    return getTaskById(id)

    // const result = []
    // id.forEach(thing => {
    //     if (!result.Task_id
    //          && !result.Task_name
    //           && !result.Task_description
    //            &&!result.Task_completed) {
    //         result.Task_id = thing.Task_id;
    //         result.Task_name = thing.Task_name;
    //         result.Task_description = thing.Task_description;
    //         result.Task_completed = thing.Task_completed;
    //     } if (result.Task_completed == 0) {
    //         result.Task_completed = false;
    //     } if (result.Task_completed == 1) {
    //         result.Task_completed = true;
    //     }
    // });

}

module.exports = {
    getTasks,
    createTask
}