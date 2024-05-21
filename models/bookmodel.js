const mongoose = require("mongoose");

const bookmodel = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "A book needs a name"],
    unique: true,
    trim: true,
  },
  Image: {
    type: String,
    required: [true, "A book needs a photo"],
  },
  Summary: {
    type: String,
    required: [true, "A book needs a summary"],
    trim: true,
  },
});

const Book = mongoose.model("Book", bookmodel);
module.exports = Book;
