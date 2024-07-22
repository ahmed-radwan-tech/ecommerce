const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const userController = require('../controllers/userController');

router.put('/:id', verifyTokenAndAuthorization, userController.updateUser);

router.delete('/:id', verifyTokenAndAuthorization, userController.deleteUser);

router.get('/find/:id', verifyTokenAndAdmin, userController.findUser);

router.get('/', verifyTokenAndAdmin, userController.getAllUsers);

router.get('/stats', verifyTokenAndAdmin, userController.getUserStats);

module.exports = router;
