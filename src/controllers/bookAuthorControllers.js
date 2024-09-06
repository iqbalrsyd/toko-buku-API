// src/controllers/bookAuthorControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getBooksByAuthorId = (req, res) => {
    const authorId = parseInt(req.params.authorId);
    pool.query(queries.getBooksByAuthorId, [authorId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAuthorsByBookId = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    pool.query(queries.getAuthorsByBookId, [bookId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getBooksByAuthorId,
    getAuthorsByBookId,
};
