// models/rewardPoints.js
const mongoose = require("mongoose");

const rewardPointsSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    points: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const RewardPoints = mongoose.model("RewardPoints", rewardPointsSchema);

module.exports = RewardPoints;
