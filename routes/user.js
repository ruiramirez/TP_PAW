var express = require("express");
var router = express.Router();
var passport = require("passport");
var jwt = require("jsonwebtoken");
var userController = require("../controllers/userController");
var config = require("../config/database");

//Register
router.post("/register", userController.registerUser);
router.get("/list", userController.getAllUsers);
router.delete("/delete", userController.deleteUser);
router.put("/update", userController.updateUser);
router.get("/get/:id", userController.findUser);

//Authenticate
router.post("/authenticate", (req, res, next) => {
 
  var username = req.body.Username;
  var password = req.body.Password;

  userController.getByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({
        success: false,
        msg: "User not found"
      });
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
          }
        });
      } else {
        return res.json({
          success: false,
          msg: "Wrong Password"
        });
      }
    });
  });
});

//profile pode ser a homepage/dashboard
router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res, next) => {
    res.json({
      user: req.user
    });
  }
);

module.exports = router;