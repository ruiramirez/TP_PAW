var mongoose = require("mongoose");
var Auction = require('../models/auction');

var User = require("../models/user");
var config = require('../config/database');

var auctionController = {};


auctionController.getByAuctions = function (auction, callback) {
    const query = {
        Auction: auction
    };
    Auction.findOne(query, callback);
};

auctionController.registerAuction = function (req, res, next) {
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
        Bids: req.body.Bids
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
    }
    )
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

    Auction.updateOne({ _id: req.body._id }, {
        $push: {
            Bids: {
                User: req.body.User,
                Value: req.body.Value,
                Date: new Date(),
            },
        }
    }, (err, act) => {
        if (err) {
            return err;
        } else {
            Auction.updateOne({ _id: req.body._id }, {
                $push: {
                    Bids: { $each: [], $sort: { Value: -1 } },
                },
            }, (err, act) => {
                if (err) {
                    return err;
                } else {
                    res.json(act);
                }
            });
        }
    });
   
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

    auctionController.getNumberOfBids = function (req, res, next) {
        Auction.aggregate([{
            $unwind: "$Bids"

        }, {
            $match: {
                "Title": req.body.Title
            }
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



    module.exports = auctionController;