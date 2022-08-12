var db = require('./db_connection.js');


module.exports = {

  getAll: (callback) => {
    db.connection.execute(
      "SELECT * FROM movies;",
      (err, results, fields) => {
        console.log('ran query, returning:', results);
        err ? callback(err) : callback(null, results)
      }
    )
  },

  //insert into movies table? or into column/row? review syntax...

  create: (callbaci) => {
    db.connection.execute(
      "INSERT INTO () VALUES ();"
    )
  }




};