const book = require("C:/Users/manth/OneDrive/Desktop/internship/models/bookmodel.js");

const errorfunct = function (message, code, res) {
  res.status(code).json({
    status: "error",
    message: message,
  });
};

exports.GetAllBooks = async (req, res) => {
  try {
    const data = await book.find();
    if (!data || data.length === 0) {
      return errorfunct("No data found", 404, res);
    }
    res.status(200).json({
      status: "ok",
      data,
    });
  } catch (err) {
    return errorfunct(err.message, 500, res);
  }
};

exports.GetBookById = async (req, res) => {
  try {
    const data = await book.findById(req.params.id);
    if (!data) {
      return errorfunct(`No book found for id ${req.params.id}`, 404, res);
    }
    res.status(200).json({
      status: "ok",
      data,
    });
  } catch (err) {
    return errorfunct(err.message, 500, res);
  }
};

exports.DeleteBookById = async (req, res) => {
  try {
    const data = await book.findByIdAndDelete(req.params.id);
    if (!data) {
      return errorfunct(`No book found for id ${req.params.id}`, 404, res);
    }
    res.status(204).json({
      status: "ok",
      message: "Book deleted successfully",
    });
  } catch (err) {
    return errorfunct(err.message, 500, res);
  }
};

exports.PostBook = async (req, res) => {
  try {
    const data = await book.create(req.body);
    res.status(201).json({
      status: "ok",
      data,
    });
  } catch (err) {
    return errorfunct(err.message, 400, res);
  }
};

exports.UpdateBook = async (req, res) => {
  try {
    const data = await book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return errorfunct(`No book found for id ${req.params.id}`, 404, res);
    }
    res.status(200).json({
      status: "ok",
      data,
    });
  } catch (err) {
    return errorfunct(err.message, 400, res);
  }
};
