var db = require('../db');

module.exports = {
  messages: {
    get: function(callback) {
      console.log("models get 7");
      var queryStr = "select Messages.id, Messages.text, Users.username, Rooms.roomname from Messages \
                      left outer join Users on (Messages.userid = Users.id) \
                      left outer join Rooms on (Messages.roomid = Rooms.id) \
                      order by Messages.id desc";
      db.query(queryStr, function(err, result){
        console.log('result: ', result);
        console.log('error: ', err);
        callback(result);
      });
    },
    post: function(params, callback) {
      var queryStr = "INSERT INTO Messages(text, userid, roomid) \
                      VALUES(?, (select id from Users where username = ? limit 1), \
                      (select id from Rooms where roomname = ? limit 1));";
      db.query(queryStr, params, function(err, result){
        console.log('result: ', result);
        console.log('error: ', err);
        callback(result);
      })
    }
  },

  users: {
    get: function(callback) {
       console.log("models get 28");
      var queryStr = "select * from Users";
      db.query(queryStr, function(err, result){
        console.log('result: ', result);
        console.log('error: ', err);
        callback(result);
      })
    },
    post: function(params, callback) {
      var queryStr = "INSERT INTO Users(username) VALUES(?);";
      db.query(queryStr, params, function(err, result){
        console.log('result: ', result);
        console.log('error: ', err);
        callback(result);
      })
    }
  },

  rooms: {
    get: function(callback) {
       console.log("models get 44");
      var queryStr = "select * from Rooms";
      db.query(queryStr, function(err, result){
        callback(result);
      })
    },
    post: function(params, callback) {
      var queryStr = "INSERT INTO Rooms(roomname) VALUES(?);";
      db.query(queryStr, params, function(err, result){
        callback(result);
      })
    }
  }
};

