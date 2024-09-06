const { Router } = require('express');
const controller = require('../controllers/reviewControllers');

const router = Router();

router.get('/', controller.getAllReviews);
router.get('/:reviewId', controller.getReviewById);
router.post('/', controller.addReview);
router.put('/:reviewId', controller.updateReview);
router.delete('/:reviewId', controller.deleteReview);

module.exports = router;