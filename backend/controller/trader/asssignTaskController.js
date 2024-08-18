const taskModel = require("../../models/assignTask");


const assignTaskController = async (req, res) => {
  try {
    const { traderId, taskDetails } = req.body;

    // Validate inputs
    if (!traderId || !taskDetails) {
      return res
        .status(400)
        .json({ success: false, message: "Missing traderId or task details" });
    }

    // Create a new task
    const newTask = new taskModel({
      traderId: traderId,
      traderEmail:taskDetails.traderEmail,
      username: taskDetails.username,
      userEmail: taskDetails.userEmail,
      userMobile: taskDetails.userMobile,
      location: taskDetails.location,
      dueDate: taskDetails.dueDate,
    });

    // Save the task in the database
    await newTask.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Task assigned successfully",
        task: newTask,
      });
  } catch (error) {
    console.error("Error assigning task:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = assignTaskController;
