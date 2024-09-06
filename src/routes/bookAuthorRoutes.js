// src/routes/bookAuthorRoutes.js
const { Router } = require('express');
const controller = require('../controllers/bookAuthorControllers');

const router = Router();

router.get('/author/:authorId', controller.getBooksByAuthorId);
router.get('/book/:bookId/authors', controller.getAuthorsByBookId);

module.exports = router;