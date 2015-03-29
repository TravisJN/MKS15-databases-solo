var models = require('../models');
var bluebird = require('bluebird');

var messageParams = ['username', 'message', 'roomname'];
var userParams = ['username'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(result){
        res.send(result);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(messageParams, req.bodyfunction(){
        res.sendStatus(201);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body.username, function(result){
        res.send(result);
      })
    },
    post: function (req, res) {
      models.users.get(userParams, function(){
        res.sendStatus(201);
      })
    }
  }
};

