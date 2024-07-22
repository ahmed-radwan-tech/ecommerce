const router = require('express').Router()
const paymentController = require('../controllers/paymentController');

router.post('/payment', paymentController.payment);

module.exports = router;