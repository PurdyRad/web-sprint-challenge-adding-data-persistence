const db = require ('../../data/dbConfig');

function getResources () {
    return db('resources');
}

function getResourceById (id) {
    return db('resources').where('resource_id', id).first()
}

async function createResource (resource) {
    const [id] = await db('resources').insert(resource)
    return getResourceById(id)
}
module.exports = {
    getResources,
    createResource
};
