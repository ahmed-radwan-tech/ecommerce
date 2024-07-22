const router = require('express').Router()
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken')
const orderController = require('../controllers/orderController');


router.post("/", verifyToken, orderController.newOrder);


router.put('/:id', verifyTokenAndAdmin, orderController.orderUpdate);

router.delete('/:id', verifyTokenAndAdmin, orderController.orderDelete);

router.get('/find/:userId', verifyTokenAndAuthorization, orderController.getUserOrder);

router.get('/', verifyTokenAndAdmin, orderController.getAllOrder);

router.get('/income', verifyTokenAndAdmin, orderController.getMonthlyIncome);


module.exports = router;