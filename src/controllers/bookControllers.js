// src/controllers/bookControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getAllBooks = (req, res) => {
    pool.query(queries.getAllBooks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBookById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBookById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addBook = (req, res) => {
    const { title, authorId, publisherId, price, synopsis, isbn, publicationDate, language } = req.body;
    pool.query(queries.addBook, [title, authorId, publisherId, price, synopsis, isbn, publicationDate, language], (error, results) => {
        if (error) throw error;
        res.status(201).json(results.rows[0]);
    });
};

const updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, authorId, publisherId, price, synopsis, isbn, publicationDate, language } = req.body;
    pool.query(queries.updateBook, [title, authorId, publisherId, price, synopsis, isbn, publicationDate, language, id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteBook, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send(`Book deleted with ID: ${id}`);
    });
};


const searchBooks = async (req, res) => {
    const keyword = req.query.keyword;  // Retrieve the keyword from query parameters
    if (!keyword) {
        return res.status(400).send("Keyword is required");
    }
    try {
        const query = `
            SELECT Books.*, Authors.Name as AuthorName
            FROM Books
            JOIN Authors ON Books.AuthorID = Authors.AuthorID
            WHERE Books.Title ILIKE $1 OR Authors.Name ILIKE $1 OR Books.Synopsis ILIKE $1;
        `;
        const values = [`%${keyword}%`];  // Use ILIKE for case-insensitive matching and '%' wildcards for partial matching
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return res.status(404).send('No books found matching the search criteria');
        }
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
};
