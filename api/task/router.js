const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
    .then(newTask => {
        res.status(201).json(newTask);
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
