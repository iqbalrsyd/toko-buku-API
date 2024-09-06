// src/routes/publisherRoutes.js
const { Router } = require('express');
const publisherController = require('../controllers/publisherControllers');

const router = Router();

router.get('/', publisherController.getAllPublishers);
router.get('/:id', publisherController.getPublisherById);
router.post('/', publisherController.addPublisher);
router.put('/:id', publisherController.updatePublisher);
router.delete('/:id', publisherController.deletePublisher);

module.exports = router;
