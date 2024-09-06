// src/routes/reviewCommentRoutes.js
const { Router } = require('express');
const controller = require('../controllers/reviewCommentControllers');

const router = Router();

router.get('/', controller.getAllReviewComments);
router.get('/:commentId', controller.getReviewCommentById);
router.post('/', controller.addReviewComment);
router.put('/:commentId', controller.updateReviewComment);
router.delete('/:commentId', controller.deleteReviewComment);

module.exports = router;
