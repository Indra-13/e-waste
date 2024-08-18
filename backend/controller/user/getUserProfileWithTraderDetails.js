// controllers/traderController.js

const traderModel = require("../../models/traderModel");

const getTraderByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email query parameter is required" });
    }

    // Find trader details by email
    const trader = await traderModel.findOne({ email });

    if (!trader) {
      return res
        .status(404)
        .json({ success: false, message: "Trader not found" });
    }

    res.status(200).json({ success: true, trader });
  } catch (error) {
    console.error("Error fetching trader details:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getTraderByEmail };
