var mongoose = require("mongoose");
var userSchema = require("../models/user").schema;
var Schema = mongoose.Schema;

var auctionSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Brand: {
    type: String,
    required: true
  },
  Model: {
    type: String,
    required: true
  },
  Image: String,
  userValue: {
    type: Number,
    required: true
  },
  PropValue: {
    type: Number,
   // required: true
  },
  FinalValue: {
    type: Number,
   // required: true
  },
  User: {
    type: userSchema,
    required: true
  },
  Bids: [{
    User: userSchema,
    Value: Number,
    Date: Date
}],
  Status: {
    type: String,
    required: true,
    default: "Pending"
  }
});

module.exports = mongoose.model("Auction", auctionSchema);
