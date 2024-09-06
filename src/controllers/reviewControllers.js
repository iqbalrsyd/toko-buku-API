// src/controllers/reviewControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getAllReviews = (req, res) => {
    pool.query(queries.getAllReviews, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getReviewById = (req, res) => {
    const reviewId = parseInt(req.params.reviewId);
    pool.query(queries.getReviewById, [reviewId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addReview = (req, res) => {
    const { bookId, customerId, rating, comment, datePosted } = req.body;
    pool.query(queries.addReview, [bookId, customerId, rating, comment, datePosted], (error, results) => {
        if (error) throw error;
        res.status(201).json(results.rows[0]);
    });
};

const updateReview = (req, res) => {
    const reviewId = parseInt(req.params.reviewId);
    const { bookId, customerId, rating, comment, datePosted } = req.body;
    pool.query(queries.updateReview, [bookId, customerId, rating, comment, datePosted, reviewId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const deleteReview = (req, res) => {
    const reviewId = parseInt(req.params.reviewId);
    pool.query(queries.deleteReview, [reviewId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

module.exports = {
    getAllReviews,
    getReviewById,
    addReview,
    updateReview,
    deleteReview,
};
