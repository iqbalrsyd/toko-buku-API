// src/controllers/bookGenreControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getBooksByGenreId = (req, res) => {
    const genreId = parseInt(req.params.genreId);
    pool.query(queries.getBooksByGenreId, [genreId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getGenresByBookId = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    pool.query(queries.getGenresByBookId, [bookId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getBooksByGenreId,
    getGenresByBookId,
};
