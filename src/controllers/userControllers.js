const pool = require('../../db.js'); 
const queries = require('../query/queries.js');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const checkEmailExists = async (req, res, next) => {
    const email = req.body.email;
    try {
        const results = await pool.query(queries.checkEmailExists, [email]);
        if (results.rows.length > 0) {
            res.status(400).send('Email already exists');
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const addUser = async (req, res) => {
    const { email, hashpassword, role } = req.body;
    try {
        const result = await pool.query(queries.addUser, [email, hashpassword, role]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { email, hashpassword, role } = req.body;
    try {
        const result = await pool.query(queries.updateUser, [email, hashpassword, role, id]);
        if (result.rowCount === 0) {
            res.status(404).send("User not found or no update made");
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query(queries.deleteUser, [id]);
        if (result.rowCount === 0) {
            res.status(404).send("User not found");
        } else {
            res.status(200).send(`User deleted with ID: ${id}`);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    updateUser,
    deleteUser
};