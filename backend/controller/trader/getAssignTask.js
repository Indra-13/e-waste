const taskModel = require("../../models/assignTask");

const getTasksByTraderEmail = async (req, res) => {
  try {
    const { email } = req.query; // Use req.query for query parameters

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email query parameter is required" });
    }

    
    const tasks = await taskModel.find({ traderEmail: email });

    if (!tasks.length) {
      return res
        .status(404)
        .json({ success: false, message: "No tasks found for this trader" });
    }

    res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


module.exports = { getTasksByTraderEmail };
