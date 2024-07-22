const router = require('express').Router()
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const cartController = require('../controllers/cartController');



router.post("/", verifyToken, cartController.cartCreat);


router.put('/:id', verifyTokenAndAuthorization, cartController.cartUpdate);

router.delete('/:id', verifyTokenAndAuthorization, cartController.cartDelete);

router.get('/find/:userId', verifyTokenAndAuthorization, cartController.getUserCart);

router.get('/', verifyTokenAndAdmin, cartController.getAllCart);



module.exports = router;