const express = require('express');
const { addBookReview, getRecommendations } = require('../controllers/bookController');
const router = express.Router();

router.post('/add', addBookReview);
router.get('/recommendations', getRecommendations);

module.exports = router;
