const model = require('./model.js');

//should have a get and post

module.exports = {

  get: function(req, res) {
    console.log('received', req.method, 'data:', req.body)
    model.getAll((err, data) => {
      err ? console.log(err) : res.send(data);
    })
  }, //its a method

  post: function(req, res) {
    console.log('received', req.method, 'data:', req.body)
    model.create(req.body, (err, data) => {
      err ? console.log(err) : res.send(data);
    })
  },

  search: function(req, res) {
    console.log('CONTROLLER REQ', req.body)
    console.log('received', req.method, 'data:', req.body)
    model.search(req.body, (err, data) => {
      err ? console.log(err) : res.send(data);
    })
  }

};