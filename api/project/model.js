const db = require('../../data/dbConfig');

async function getProjects () {
   const projectsArray = await db('projects')
    projectsArray.forEach(result => {
        if(result.project_completed === 1) {
            result.project_completed = true;
        } else {
            result.project_completed = false;
        }
    })
    return projectsArray
}

function getProjectById (id) {
    return db('projects').where('project_id', id).first();
}

async function createProject (project) {
    const [id] = await db('projects').insert(project);
    
    const createdProject =  await getProjectById(id);
    [createdProject].forEach(result => {
        if(result.project_completed === 1) {
            result.project_completed = true;
        } else {
            result.project_completed = false;
        }
    })
    return createdProject;


}

module.exports = {
    getProjects,
    getProjectById,
    createProject
}