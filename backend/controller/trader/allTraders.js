const traderModel = require("../../models/traderModel");

async function allTradersController(req, res) {
  try {
    console.log("userid all Users", req.userId);

    const allTraders = await traderModel.find();

    res.json({
      message: "All Traders ",
      data: allTraders,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allTradersController;
