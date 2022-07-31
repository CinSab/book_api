const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const loginController = require("./controller/login");
const authorController = require("./controller/author");
const bookController = require("./controller/book");
const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.consoleData);
app.use(middleware.processToken);
app.use("/author", authorController);
app.use("/book", bookController);
app.use("/login", loginController);

app.use(middleware.unknownEndpoint);
module.exports = app;