const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: false,
    },
    tel: {
      type: Number,
      required: false,
    },
    place: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema );