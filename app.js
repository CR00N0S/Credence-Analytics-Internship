const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routers/book_router");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/book", bookRouter);

module.exports = app;
