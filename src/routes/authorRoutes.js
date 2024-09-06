// src/routes/authorRoutes.js
const { Router } = require('express');
const authorController = require('../controllers/authorControllers');

const router = Router();

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.addAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;