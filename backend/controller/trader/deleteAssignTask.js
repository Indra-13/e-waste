// const taskModel = require("../../models/assignTask");


// const deleteTask = async (req, res) => {
//   try {
//     const taskId = req.params.id;

//     // Validate the ID length and format
//     if (taskId.length !== 24) {
//       return res.status(400).json({ success: false, message: "Invalid Task ID" });
//     }

//     const deletedTask = await taskModel.findByIdAndDelete(taskId);

//     if (!deletedTask) {
//       return res.status(404).json({
//         success: false,
//         message: "Task not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Task deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting task:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }

// };

// module.exports = deleteTask;
