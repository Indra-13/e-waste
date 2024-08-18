const taskModel = require("../../models/assignTask");
const productForHomeModel = require("../../models/productForHomeModel");


async function deleteTaskAndProductController(req, res) {
  try {
    const { taskId, userEmail } = req.params;

    // Delete the task by ID
    const deletedTask = await taskModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    // Log the deleted task for debugging
    console.log("Deleted task:", deletedTask);

    // Check if there's a matching product with the same userEmail
    const deletedProduct = await productForHomeModel.findOneAndDelete({
      userEmail: userEmail,
    });

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "No product found with the matching email.",
      });
    }

    // Log the deleted product for debugging
    console.log("Deleted product:", deletedProduct);

    // If both deletions are successful
    res.status(200).json({
      success: true,
      message: "Task and corresponding product deleted successfully.",
      data: {
        deletedTask,
        deletedProduct,
      },
    });
  } catch (err) {
    console.error("Error in deleteTaskAndProductController:", err);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
}

module.exports = deleteTaskAndProductController;
