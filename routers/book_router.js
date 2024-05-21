const express = require("express");
const bookcontroller = require("C:/Users/manth/OneDrive/Desktop/internship/controller/bookcontroller.js");

const router = express.Router();

router.route("/").get(bookcontroller.GetAllBooks).post(bookcontroller.PostBook);

router
  .route("/:id")
  .get(bookcontroller.GetBookById)
  .delete(bookcontroller.DeleteBookById)
  .patch(bookcontroller.UpdateBook);

module.exports = router;
