// src/routes/customerRoutes.js
const { Router } = require('express');
const controller = require('../controllers/customerControllers');

const router = Router();

router.get('/', controller.getAllCustomers);
router.get('/:customerId', controller.getCustomerById);
router.post('/', controller.addCustomer);
router.put('/:customerId', controller.updateCustomer);
router.delete('/:customerId', controller.deleteCustomer);

module.exports = router;
