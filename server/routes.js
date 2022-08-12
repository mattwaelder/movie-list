const controller = require('./controller.js');
const router = require('express').Router();

//endpoint of '/movies'
//controller.get if get is a method on exports obj in controller. what if exports individually not an obj?
router.get('/movies', controller.get);

router.post('/movies', controller.post);

module.exports = router;