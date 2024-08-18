const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    traderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "traders",
      required: true,
    },
    traderEmail: { type: String, required: true },
    username: { type: String, required: true },
    userEmail: { type: String, required: true },
    userMobile: { type: String, required: true },
    location: { type: String, required: true },
    dueDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = taskModel;
