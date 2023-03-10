const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getAllCategories,
  searchCategoryProducts
} = require('../controllers/productController');

const { getSingleProductReviews } = require('../controllers/reviewController');

router
  .route('/')
  .post([authenticateUser, authorizePermissions('admin')], createProduct)
  .get(getAllProducts);


router
  .route('/find/:id')
  .get(getSingleProduct)
  .put([authenticateUser, authorizePermissions('admin')], updateProduct)
  .delete([authenticateUser, authorizePermissions('admin')], deleteProduct);

router.route('/:id/reviews').get(getSingleProductReviews);
router.route('/search').get(searchProducts);
router.route('/category').get(searchCategoryProducts);
router.route('/categories').get(getAllCategories);

module.exports = router;
