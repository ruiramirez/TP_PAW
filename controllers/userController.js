var mongoose = require("mongoose");
var User = require("../models/user");
var bcrypt = require("bcryptjs");
var config = require("../config/database");

var userController = {};

userController.findUser = (req, res, next) => {
	User.findById({ _id: req.params.id }, (err, user) => {
		if (err) {
			next(err);
		} else {
			res.json(user);
		}
	});
};

userController.getByUsername = function (username, callback) {
	const query = { Username: username };
	User.findOne(query, callback);
};

//criarUtilizador() registar
userController.registerUser = function (req, res, next) {
	var user = new User({
		Email: req.body.Email,
		Password: req.body.Password,
		Username: req.body.Username,
		Name: req.body.Name,
		AddressDetail: req.body.AddressDetail,
		City: req.body.City,
		PostalCode: req.body.PostalCode,
		Country: req.body.Country,
		CreditBalance: 0,
		DebitBalance: 0,
		UserType: "User"
	});

	User.find(
		{ $or: [{ Email: user.Email }, { Username: user.Username }] },
		(err, userExists) => {
			if (userExists.length != 0) {
				res.send("Username already exists!");
			} else {
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(user.Password, salt, (err, hash) => {
						if (err) {
							throw err;
						} else {
							user.Password = hash;
							user.save(err => {
								if (err) {
									next(err); //res.json({success: faile, msg: 'failed to register user'});
								} else {
									res.json(user);
								}
							});
						}
					});
				});
			}
		}
	);
};

userController.deleteUser = (req, res, next) => {
	User.findByIdAndRemove(req.body._id, (err, user) => {
		if (err) {
			next(err);
		} else {
			res.json(user);
		}
	});
};

userController.updateUser = (req, res, next) => {
	var query = '{ "' + req.body.Field + '" : "' + req.body.Value + '" }';
	var jQuery = JSON.parse(query);

	//Transforma query em JSON object e dá update do field especificado
	User.findByIdAndUpdate(req.body._id,
		jQuery,
		{
			new: true
		}, (err, user) => {
			if (err) {
				next(err);
			} else {
				user.save(err => {
					if (err) {
						next(err);
					} else {
						res.json(user);
					}
				});
			}
		});
};

//todos os users
userController.getAllUsers = function (req, res, next) {
	User.find({}, (err, users) => {
		if (err) {
			next(err);
		} else {
			res.json(users);
		}
	});
};

//user por username que será o id
userController.getUserById = function (id, callback) {
	const query = { _id: id };
	User.findById(query, callback);
};

userController.comparePassword = (candidatePassword, hash, callback) => {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) {
			throw err;
		}
		callback(null, isMatch);
	});
};

module.exports = userController;
