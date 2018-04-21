

var friendsData = require("../data/friends.js");
var path = require("path");
var bodyParser = require("body-parser");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    
    //user scores
    var newFriend = req.body;
    var scores = newFriend.scores;




    //user match
    var matchName = "";
    var matchPhoto = "";

    var totalDifference = 10000;

    
    for (var i = 0; i < friendsData.length; i++) {
      var diff = 0;
      
      for (var j = 0; j < scores.length; j++) {
        diff += Math.abs(parseInt(friendsData[i].scores[j]) - scores[j]);
        };   

        if (diff < totalDifference) {
          totalDifference = diff;
          matchName = friendsData[i].name;
          matchPhoto = friendsData[i].photo;
        }
      }
    
      friendsData.push(newFriend);
      var obj = { status: "OK", matchName: matchName, matchPhoto: matchPhoto }
      res.json(obj);
  });
};
