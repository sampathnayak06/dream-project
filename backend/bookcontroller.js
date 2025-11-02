const Book = require('../models/bookModel');

// Add new book or review

exports.addBookReview = async (req, res) => {
  try {
    const { title, author, category, user, comment, stars } = req.body;
    let book = await Book.findOne({ title });

    if (!book) {
      book = new Book({ title, author, category, rating: stars, reviews: [{ user, comment, stars }] });
    } else {
  //
      book.reviews.push({ user, comment, stars });
      const totalStars = book.reviews.reduce((sum, r) => sum + r.stars, 0);
      book.rating = totalStars / book.reviews.length;
    }

    await book.save();
    res.status(201).json(book);
    
  } catch (err) {
    res.status(500).json({ message: 'Error adding review', error: err });
  }
};

// Get recommended books for beginners
exports.getRecommendations = async (req, res) => {
  try {
    const books = await Book.find().sort({ rating: -1 }).limit(10);
    res.json(books);

  } catch (err) {
    res.status(500).json({ message: 'Error fetching recommendations', error: err });
  }
};
