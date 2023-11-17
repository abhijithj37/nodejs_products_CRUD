const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const products = require("./routes/product");
const CustomError = require("./Utils/customError");
const errorHandler = require("./Controllers/errorController");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/products", products);
app.all("*", (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});
app.use(errorHandler);


module.exports = app;
