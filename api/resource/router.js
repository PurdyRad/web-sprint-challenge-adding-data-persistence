const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
    .then(newResource => {
        res.status(201).json(newResource);
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
