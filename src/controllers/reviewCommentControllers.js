// src/controllers/reviewCommentControllers.js
const pool = require('../../db.js');
const queries = require('../query/queries.js');

const getAllReviewComments = (req, res) => {
    pool.query(queries.getAllReviewComments, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getReviewCommentById = (req, res) => {
    const commentId = parseInt(req.params.commentId);
    pool.query(queries.getReviewCommentById, [commentId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addReviewComment = (req, res) => {
    const { reviewId, customerId, parentCommentId, comment, datePosted } = req.body;
    pool.query(queries.addReviewComment, [reviewId, customerId, parentCommentId, comment, datePosted], (error, results) => {
        if (error) throw error;
        res.status(201).json(results.rows[0]);
    });
};

const updateReviewComment = (req, res) => {
    const commentId = parseInt(req.params.commentId);
    const { reviewId, customerId, parentCommentId, comment, datePosted } = req.body;
    pool.query(queries.updateReviewComment, [reviewId, customerId, parentCommentId, comment, datePosted, commentId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

const deleteReviewComment = (req, res) => {
    const commentId = parseInt(req.params.commentId);
    pool.query(queries.deleteReviewComment, [commentId], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
};

module.exports = {
    getAllReviewComments,
    getReviewCommentById,
    addReviewComment,
    updateReviewComment,
    deleteReviewComment,
};
