// src/controllers/authorControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getAllAuthors = (req, res) => {
    pool.query(queries.getAllAuthors, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAuthorById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAuthorById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addAuthor = (req, res) => {
    const { userId, name, bio } = req.body;
    pool.query(queries.addAuthor, [userId, name, bio], (error, results) => {
        if (error) throw error;
        res.status(201).json(results.rows[0]);
    });
};

const updateAuthor = (req, res) => {
    const id = parseInt(req.params.id);
    const { userId, name, bio } = req.body;
    pool.query(queries.updateAuthor, [userId, name, bio, id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const deleteAuthor = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteAuthor, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send(`Author deleted with ID: ${id}`);
    });
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor,
};
