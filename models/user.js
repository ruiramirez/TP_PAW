var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    Email: {
      type: String,
      required: true
    },
    Password: {
      type: String,
      required: true
    },
    Username: {
      type: String,
      required: true
    },
    Name: {
      type: String,
      required: true
    },
    AddressDetail: String,
    City: String,
    PostalCode: String,
    Country: String,
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
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userSchema);
