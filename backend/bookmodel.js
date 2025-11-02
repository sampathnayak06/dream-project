const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  category: String,
  rating: { type: Number, default: 0 },
  reviews: [
    {
      user: String,
      comment: String,
      stars: Number
    }
  ]
});

module.exports = mongoose.model('Book', bookSchema);
