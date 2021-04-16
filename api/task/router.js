const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('ya got the get endpoint')
});

router.post('/', (req, res, next) => {
    console.log('ya got the post endpoint')
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = router;
