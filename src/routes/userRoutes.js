const { Router } = require('express');
const controller = require('../controllers/userControllers');

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.checkEmailExists, controller.addUser);
router.put('/:id', controller.checkEmailExists, controller.updateUser); 
router.delete('/:id', controller.deleteUser);

module.exports = router;