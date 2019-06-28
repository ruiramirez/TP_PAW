var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var auctionSchema = require("../models/auction").schema;
var userSchema = require("../models/user").schema;

var bidSchema = new Schema ({
    Auction: {
        type: auctionSchema,
        required: true
    },
    User: {
        type: UserSchema,
        required: true
    },
    BidValue: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Bid", bidSchema);