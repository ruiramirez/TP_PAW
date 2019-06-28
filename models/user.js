var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Address: {
    AddressDetail: String,
    City: String,
    PostalCode: String,
    Country: String
  },
  CreditBalance: {
    type: Number,
    required: true,
    default: 0
  },
  DebitBalance: {
    type: Number,
    required: true,
    default: 0
  },
  UserType: String
});

module.exports = mongoose.model("User", userSchema);
