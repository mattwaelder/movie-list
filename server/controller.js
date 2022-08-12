const model = require('./model.js');

//should have a get and post

module.exports = {

  get: function(req, res) {
    console.log('received', req.method, 'data:', req.body)
    model.getAll((err, data) => {
      if (err) {
        console.log(err)
      }
      res.send(data);
    })
  }, //its a method

  post: function(req, res) {
    console.log('received', req.method, 'data:', req.body)
  },

};