const controller = require('./controller.js');
const router = require('express').Router();

//endpoint of '/movies'
//controller.get if get is a method on exports obj in controller. what if exports individually not an obj?
router.get('/movies', controller.get);

router.post('/addmovie', controller.post);

router.get('/search', controller.search);

module.exports = router;