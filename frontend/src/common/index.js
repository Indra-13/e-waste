
const backendDomin = "http://localhost:8080"

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },

  getTasks: {
    url: `${backendDomin}/api/get-trader-tasks`,
    method: "get",
  },

  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  getTaskByUserEmail: {
    url: `${backendDomin}/api/get-tasks-by-user-email`,
    method: "get",
  },
  getTraderByEmail: {
    url: `${backendDomin}/api/get-trader-by-email`,
    method: "get",
  },
  getUserRewardPoints: {
    url: `${backendDomin}/api/getUserRewardPoints`,
    method: "GET",
  },
  addRewardPoints: {
    url: `${backendDomin}/api/addRewardPoints`,
    method: "POST",
  },
  reduceRewardPoints: {
    url: `${backendDomin}/api/reduceRewardPoints`,
    method: "POST",
  },
  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomin}/api/upload-product`,
    method: "post",
  },
  uploadProductForHome: {
    url: `${backendDomin}/api/upload-productForHome`,
    method: "post",
  },
  deleteTaskAndProduct: {
    // Make sure this matches your router path
    url: `${backendDomin}/api/taskAndProduct`,
    method: "DELETE",
  },
  allProduct: {
    url: `${backendDomin}/api/get-product`,
    method: "get",
  },
  allTraders: {
    url: `${backendDomin}/api/all-traders`,
    method: "get",
  },
  uploadTraders: {
    url: `${backendDomin}/api/upload-traders`,
    method: "post",
  },
  assignTask: {
    url: `${backendDomin}/api/assign-task`,
    method: "post",
  },

  updateProduct: {
    url: `${backendDomin}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomin}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${backendDomin}/api/product-details`,
    method: "post",
  },
  allEWaste: {
    url: `${backendDomin}/api/allE-waste`,
    method: "get",
  },
  addToCartProduct: {
    url: `${backendDomin}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomin}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomin}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomin}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomin}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${backendDomin}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${backendDomin}/api/filter-product`,
    method: "post",
  },
};


export default SummaryApi