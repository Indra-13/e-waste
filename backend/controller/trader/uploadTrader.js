

// const traderModel = require("../../models/traderModel");

// async function UploadTradersController(req, res) {
//   try {
    

//     const uploadTrader = new traderModel(req.body);
//     const saveTrader = await uploadTrader.save();

//     res.status(201).json({
//       message: "Product upload successfully",
//       error: false,
//       success: true,
//       data: saveTrader,
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: err.message || err,
//       error: true,
//       success: false,
//     });
//   }
// }

//  module.exports = UploadTradersController;
const traderModel = require("../../models/traderModel");
const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function UploadTradersController(req, res) {
  try {
    const { TraderName, TraderMobileNumber,Location, Email, Password } = req.body;

    // Check if a trader with the same email already exists in either database
    const existingTrader = await traderModel.findOne({ Email });
    const existingUser = await userModel.findOne({ email: Email });

    if (existingTrader || existingUser) {
      return res.status(400).json({
        message: "A trader with this email already exists in the system",
        error: true,
        success: false,
      });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(Password, salt);

    // Save the trader in the traders database
    const uploadTrader = new traderModel({
      TraderName,
      TraderMobileNumber,
      Location,
      Email,
      Password: hashedPassword,
      role: "TRADER",
    });
    const saveTrader = await uploadTrader.save();

    // Save the trader in the users database with role "TRADER"
    const uploadTraderInUser = new userModel({
      name: TraderName,
      mobileNumber: TraderMobileNumber,
      email: Email,
      location: Location,
      password: hashedPassword,
      role: "TRADER",
    });
    const saveTraderInUser = await uploadTraderInUser.save();

    res.status(201).json({
      message: "Trader uploaded successfully to both databases",
      error: false,
      success: true,
      data: {
        trader: saveTrader,
        user: saveTraderInUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadTradersController;
