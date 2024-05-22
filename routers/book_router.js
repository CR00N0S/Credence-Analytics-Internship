const express = require("express");
const bookcontroller = require("./../controller/bookcontroller.js");

const router = express.Router();

router.route("/").get(bookcontroller.GetAllBooks).post(bookcontroller.PostBook);

router
  .route("/:id")
  .get(bookcontroller.GetBookById)
  .delete(bookcontroller.DeleteBookById)
  .patch(bookcontroller.UpdateBook);

module.exports = router;
