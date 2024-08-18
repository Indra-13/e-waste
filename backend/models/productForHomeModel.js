// const mongoose = require("mongoose");

// const productForHomeSchema = mongoose.Schema(
//   {
//     productName: String,
//     brandName: String,
//     category: String,
//     productImage: [],
//     description: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const productForHomeModel = mongoose.model("productForHome", productForHomeSchema);

// module.exports = productForHomeModel;
const mongoose = require("mongoose");

const productForHomeSchema = mongoose.Schema(
  {
    userName:String,
    userEmail:String,
    productName: String,
    brandName: String,
    location: String,
    mobileNumber:String,
    productImage: [],
    description: String,
  },
  {
    timestamps: true,
  }
);

const productForHomeModel = mongoose.model(
  "productForHome",
  productForHomeSchema
);

module.exports = productForHomeModel;
