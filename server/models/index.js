var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = "select * from Messages";
      db.query(queryStr, function(err, result){
        callback(result);
      })
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = "INSERT INTO Users (username) VALUES (?);";
      db.query(queryStr, function(err, result){
        callback(result);
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = "select * from Users";
      db.query(queryStr, function(err, result){
        callback(result);
      })
    },
    post: function (params, callback) {
      var queryStr = "INSERT INTO Users (username) VALUES (?);";
      db.query(queryStr, function(err, result){
        callback(result);
      })
    }
  }
};

