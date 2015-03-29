var models = require('../models');
var bluebird = require('bluebird');

var messageParams = ['message', 'username', 'roomname'];
var userParams = ['username'];
var roomParams = ['roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("controllers get");
      models.messages.get(function(result){
        console.log(result);
        res.send(result);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(){
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
       console.log("models get 25");
      models.users.get(function(result){
        res.send(result);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(){
        res.sendStatus(201);
      })
    }
  },

  rooms: {
    get: function (req, res) {
      console.log("models get 38");
      models.rooms.get(function(result){
        res.send(result);
      })
    },
    post: function (req, res) {
      var params = [req.body.roomname];
      models.rooms.post(params, function(){
        res.sendStatus(201);
      })
    }
  }
};

