const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(next);
});

router.get('/:id', (req,res,next) => {
    Project.getProjectById(req.params.id)
    .then(rez => {
        res.status(200).json(rez)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = router;
