const RewardPoints = require("../../models/rewardModel");


// Add points to user
const addRewardPoints = async (req, res) => {
  try {
    const { userEmail, points } = req.body;

    let rewardPoints = await RewardPoints.findOne({ userEmail });

    if (rewardPoints) {
      rewardPoints.points += points;
    } else {
      rewardPoints = new RewardPoints({ userEmail, points });
    }

    await rewardPoints.save();

    res.json({
      message: "Points added successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

// Get user points
const getUserRewardPoints = async (req, res) => {
  try {
    const { userEmail } = req.query;

    const rewardPoints = await RewardPoints.findOne({ userEmail });

    if (rewardPoints) {
      res.json({
        data: { points: rewardPoints.points },
        message: "Points fetched successfully",
        success: true,
        error: false,
      });
    } else {
      res.json({
        data: { points: 0 },
        message: "No points found for user",
        success: true,
        error: false,
      });
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  addRewardPoints,
  getUserRewardPoints,
};
