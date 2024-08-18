const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
const UploadProductForHomeController = require('../controller/product/uploadProductForHome')
const UploadTradersController = require('../controller/trader/uploadTrader')
const allTradersController = require('../controller/trader/allTraders')
const allProductForHomeController = require('../controller/product/allProductForHome')
const assignTaskController = require('../controller/trader/asssignTaskController')
const  { getTasksByTraderEmail}  = require('../controller/trader/getAssignTask')
const deleteTaskAndProductController = require('../controller/product/deleteProductForHome')
const { getTasksByUserEmail } = require('../controller/trader/getTaskByUserEmail')
const { getTraderByEmail } = require('../controller/trader/getTraderByEmail')
const { addRewardPoints, getUserRewardPoints } = require('../controller/trader/rewardController')
const { reduceRewardPoints } = require('../controller/trader/reduceRewardController')









router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProductController)
router.post("/upload-productForHome", authToken, UploadProductForHomeController);
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)
router.get("/allE-waste",allProductForHomeController)
router.delete("/taskAndProduct/:taskId/:userEmail",deleteTaskAndProductController);

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


//traders
router.get("/all-traders",allTradersController)
router.post("/upload-traders", UploadTradersController);
router.post("/assign-task",assignTaskController);
router.get("/get-trader-tasks", getTasksByTraderEmail);
router.delete("/taskAndProduct/:taskId/:userEmail",deleteTaskAndProductController);
router.get("/get-tasks-by-user-email", getTasksByUserEmail);
router.get("/get-trader-by-email", getTraderByEmail);

//reward

router.post("/addRewardPoints", addRewardPoints);
router.get("/getUserRewardPoints", getUserRewardPoints);
router.post("/reduceRewardPoints", reduceRewardPoints);
module.exports = router