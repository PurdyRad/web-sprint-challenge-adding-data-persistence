const db = require('../../data/dbConfig');

function getProjects () {
    return db('projects');
}

function getProjectById (id) {
    return db('projects').where('project_id', id).first();
}

async function createProject (project) {
    const [id] = await db('projects').insert(project);
    if (project.project_completed === 1) {
        project.project_completed = true;
    } else {
        project.project_completed = false;
    }
    return getProjectById(id)

    // const result = []
    // id.forEach(thing => {
    //     if (!result.project_id
    //          && !result.project_name
    //           && !result.project_description
    //            &&!result.project_completed) {
    //         result.project_id = thing.project_id;
    //         result.project_name = thing.project_name;
    //         result.project_description = thing.project_description;
    //         result.project_completed = thing.project_completed;
    //     } if (result.project_completed == 0) {
    //         result.project_completed = false;
    //     } if (result.project_completed == 1) {
    //         result.project_completed = true;
    //     }
    // });

}

module.exports = {
    getProjects,
    createProject
}