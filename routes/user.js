var express = require("express");
var router = express.Router();
var passport = require("passport");
var jwt = require("jsonwebtoken");
var userController = require("../controllers/userController");
var config = require("../config/database");

//Register
router.post("/register", userController.registerUser);

//Authenticate
router.post("/authenticate", (req, res, next) => {
  console.log("aqui ->>>>>>>>" + req.body.Username);
  var username = req.body.Username;
  var password = req.body.Password;

  userController.getByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }
    userController.comparePassword(password, user.Password, (err, isMatch) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        var token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 86400 //24 horas
        });

        res.json({
          success: true,
          token: "Bearer " + token,
          user: {
            id: user._id,
            username: user.Username,
            email: user.Email
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong Password" });
      }
    });
  });
});

//profile pode ser a homepage/dashboard
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
