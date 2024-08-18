const uploadProductPermission = require("../../helpers/permission");
const productForHomeModel = require("../../models/productForHomeModel");

async function UploadProductForHomeController(req, res) {
  try {
    const sessionUserId = req.userId;

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const uploadProduct = new productForHomeModel(req.body);
    const saveProduct = await uploadProduct.save();

   
    
    res.status(201).json({
      message: "Product upload successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadProductForHomeController;
