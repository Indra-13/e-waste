const mongoose = require("mongoose");

const traderSchema = mongoose.Schema(
  {
    TraderName: { type: String, required: true },
    TraderMobileNumber: { type: String, required: true },
    Location: { type: String, required: true }, // Remove unique constraint if not needed
    Email: { type: String, required: true, unique: true }, // Ensure unique constraint is on Email
    Password: { type: String, required: true },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

const traderModel = mongoose.model("traders", traderSchema);

module.exports = traderModel;
