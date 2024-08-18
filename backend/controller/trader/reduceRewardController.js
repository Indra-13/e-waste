const userModel = require("../../models/userModel");

exports.reduceRewardPoints = async (req, res) => {
    try {
      const { userEmail, pointsToReduce } = req.body;
      const user = await userModel.findOne({ email: userEmail });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      if (user.rewardPoints < pointsToReduce) {
        return res
          .status(400)
          .json({ success: false, message: "Insufficient reward points" });
      }

      user.rewardPoints -= pointsToReduce;
      await user.save();

      return res.json({
        success: true,
        message: "Reward points reduced successfully",
        data: { rewardPoints: user.rewardPoints },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

};
