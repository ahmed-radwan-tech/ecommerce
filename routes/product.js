const router = require('express').Router()
const { verifyTokenAndAdmin } = require('./verifyToken')
const productController = require('../controllers/productController');


router.post("/", verifyTokenAndAdmin, productController.newProduct);

router.put('/:id', verifyTokenAndAdmin, productController.updatedProduct);

router.delete('/:id', verifyTokenAndAdmin, productController.deleteProduct);

router.get('/find/:id', productController.getProduct);

router.get('/', productController.getAllProduct);



module.exports = router;