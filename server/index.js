const express = require('express');

//files
const db = require('./db_connection.js');
const router = require('./routes.js');
//probably dont need these (bc router)
const controller = require('./controller.js');
const model = require('./model.js');

//middleware
const morgan = require('morgan');
var cors = require('cors');


const app = express();
module.exports.app = app;
//port
app.set('port', 3000)

//logger, parsing middlware
//'dev' is just a log style preset
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());

//send movies reqeusts to router
app.use('/movies', router);

//static assets
app.use(express.static('client/dist'));


if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Server listening on', app.get('port'));
}