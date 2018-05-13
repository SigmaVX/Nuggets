var db = require("../models");

module.exports = function(app) {

  // ============================================================================
  // API GET ROUTES FOR USERS
  //
  // get all users
  app.get("/api/users", function (req, res) {
    // var hbsObject = {};

    db.Users.findAll({}).
    then(function (userData) {
        // hbsObject = {"users": userData};
        if (userData.length === 0) {
          // return 404 if no row was found, this means no data exists
          return res.status(404).end();
        }
        console.log("get api/users: " + JSON.stringify(userData));

        res.json(userData);

        return true;
    });

  });

  // get specific user
  app.get("/api/users/:id", function(req, res) {
    db.Users.findAll({"where": {"id": req.params.id}}).
    then(function (userData) {
      if (userData.length === 0) {
        // return 404 if no row was found, this means id does not exist
        return res.status(404).end();
      }

      res.json(userData);

      return true;
      });
  });


  // ============================================================================
  // API POST ROUTES FOR USERS
  //
  // Add Routes
  // post or insert
  app.post("/api/users", function(req, res) {
    // var condition = "user_name = '" + req.body.user_name + "'";
    console.log("in /api/users data: " + JSON.stringify(req.body));

    db.Users.create(req.body).then(function(userData) {
      res.json(userData);
    });

  });

};