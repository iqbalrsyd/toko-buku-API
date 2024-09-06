// src/controllers/storeControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getStores = async (req, res) => {
    try {
        const results = await pool.query(queries.getAllStores);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getStoreById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query(queries.getStoreById, [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Store not found');
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addStore = async (req, res) => {
    const { location, address, contactInfo, hoursOperational } = req.body;
    try {
        const result = await pool.query(queries.addStore, [location, address, contactInfo, hoursOperational]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateStore = async (req, res) => {
    const id = parseInt(req.params.id);
    const { location, address, contactInfo, hoursOperational } = req.body;
    try {
        const result = await pool.query(queries.updateStore, [location, address, contactInfo, hoursOperational, id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Store not found');
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteStore = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await pool.query(queries.deleteStore, [id]);
        res.status(200).send(`Store deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getStores,
    getStoreById,
    addStore,
    updateStore,
    deleteStore
};
