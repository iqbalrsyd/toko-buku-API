// src/routes/bookGenreRoutes.js
const { Router } = require('express');
const controller = require('../controllers/bookGenreControllers');

const router = Router();

router.get('/genre/:genreId', controller.getBooksByGenreId);
router.get('/book/:bookId/genres', controller.getGenresByBookId);

module.exports = router;
