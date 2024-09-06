// src/controllers/publisherControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getAllPublishers = (req, res) => {
    pool.query(queries.getAllPublishers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getPublisherById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPublisherById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addPublisher = (req, res) => {
    const { userId, name, address } = req.body;
    pool.query(queries.addPublisher, [userId, name, address], (error, results) => {
        if (error) throw error;
        res.status(201).json(results.rows[0]);
    });
};

const updatePublisher = (req, res) => {
    const id = parseInt(req.params.id);
    const { userId, name, address } = req.body;
    pool.query(queries.updatePublisher, [userId, name, address, id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const deletePublisher = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deletePublisher, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send(`Publisher deleted with ID: ${id}`);
    });
};

module.exports = {
    getAllPublishers,
    getPublisherById,
    addPublisher,
    updatePublisher,
    deletePublisher,
};
