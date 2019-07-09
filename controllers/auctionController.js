var mongoose = require("mongoose");
var Auction = require('../models/auction');

var User = require("../models/user");
var config = require('../config/database');

var auctionController = {};

auctionController.findById = (req, res, next) => {
	Auction.findById({
		_id: req.params.id
	}, (err, act) => {
		if (err) {
			next(err);
		} else {
			res.json(act);
		}
	});
};

auctionController.getByAuctions = function (auction, callback) {
	const query = {
		Auction: auction
	};
	Auction.findOne(query, callback);
};

auctionController.registerAuction = function (req, res, next) {
	function addDays() {
		var result = new Date();
		result.setDate(result.getDate() + 10);
		return result;

	}

	var auction = new Auction({
		Title: req.body.Title,
		Description: req.body.Description,
		Brand: req.body.Brand,
		Model: req.body.Model,
		Image: req.body.Image,
		userValue: req.body.userValue,
		PropValue: req.body.PropValue,
		FinalValue: req.body.FinalValue,
		User: req.body.User,
		Status: "Pending",
		Bids: req.body.Bids,
		StartDate: new Date(),
		EndDate: addDays()



	});

	Auction.find({
		Title: Auction.Title
	}, (err, AuctionExists) => {
		if (AuctionExists.length != 0) {
			res.send("Auctions already created!");
		} else {
			auction.save(err => {
				if (err) {
					next(err);
				} else {
					res.json(auction);
				}
			});
		}
	})
}


auctionController.updateAuction = function (req, res, next) {


	Auction.findByIdAndUpdate(req.body._id, {
		Status: req.body.Status
	}, {
			new: true
		}, function (err, act) {
			if (err) {
				next(err);
			} else {
				act.save(err => {
					if (err) {
						next(err);
					} else {
						res.json(act);
					}
				});
			}
		})
};

auctionController.deleteAuction = function (req, res, next) {

	Auction.findByIdAndRemove(req.body._id, function (err, act) {
		if (err) {
			next(err);
		} else {

			res.json(act);
		}
	});
}




auctionController.findByTitle = function (title, callback) {
	const query = {
		Title: title
	};
	Auction.findOne(query, callback);
};




auctionController.getAuction = function (req, res, next) {
	Auction.find({},
		function (err, act) {
			if (err) {
				next(err);
			} else {
				res.json(act);
			}
		});
}

auctionController.getAuctionActive = function (req, res, next) {
	Auction.find({
		"Status": {
			"$regex": "Active"
		}
	},
		function (err, act) {
			if (err) {
				next(err);
			} else {
				res.json(act);
			}
		});
}

auctionController.makeBid = (req, res, next) => {
	console.log(req.body);
	Auction.find({ Title: req.body.Auction.Title }, (err, a) => {
		if (err) {
			next(err);
		} else {
			Auction.updateOne({
				_id: a[0]._id
			}, {
					$push: {
						Bids: {
							User: req.body.User,
							Value: req.body.Value,
							Date: new Date(),
						},
					}
				}, (err, ac) => {
					console.log(ac);
					if (err) {
						return err;
					} else {
						Auction.updateOne({
							_id: a._id
						}, {
								$push: {
									Bids: {
										$each: [],
										$sort: {
											Value: -1
										}
									},
								},
							}, (err, act) => {
								if (err) {
									console.log("houve erro");
									return err;
								} else {
									console.log("não houve erro");
									res.json(act);

								}
							});
					}
				});
		}
	})
}





auctionController.getSpecificAuctionBids = function (req, res, next) {
	Auction.aggregate([{
		$unwind: "$Bids"
	}, {
		$match: {
			"Title": req.body.Title
		}
	}, {
		$project: {
			"Title": 1,
			"Bids.User": 1,
			"Bids.Value": 1
		}
	}],
		function (err, bid) {
			if (err) {
				next(err);
			} else {
				res.json(bid);

			}
		}
	);
}

auctionController.getNumberOfBids = function (req, res, next) {
	Auction.aggregate([{
		$unwind: "$Bids"
	}, {
		$group: {
			"_id": "NumberOfBids",
			total: {
				$sum: 1
			}
		}
	}

	],
		function (err, bid) {
			if (err) {
				next(err);
			} else {
				res.json(bid);
			}
		}
	);
}

auctionController.getMaxAuctionBid = function (req, res, next) {
	console.log(req.params.id);

	Auction.find({ _id: req.params.id }, (err, act) => {
		if (err) {
			next(err);
		} else {
			Auction.aggregate([{
				$unwind: "$Bids"
			}, {
				$match: {
					"Title": act[0].Title
				}
			}, {
				$group: {
					_id: "$Title",
					max: {
						$max:
							"$Bids.Value"
					}

				}
			}],
				function (err, bid) {
					if (err) {
						next(err);
					} else {
						console.log(bid);
						res.json(bid);

					}
				}
			);

		}
	})

}

module.exports = auctionController;