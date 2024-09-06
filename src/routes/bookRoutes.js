// src/routes/bookRoutes.js
const { Router } = require('express');
const bookController = require('../controllers/bookControllers');

const router = Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/search', bookController.searchBooks);

module.exports = router;