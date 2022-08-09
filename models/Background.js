const mongoose = require("mongoose");

const BackgroundSchema = new mongoose.Schema(
  {
    background: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Background", BackgroundSchema);