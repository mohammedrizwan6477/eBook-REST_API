import express from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
const app = express();

//Routes

//Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => {
  const error = createHttpError(400, 'something went wrong');
  throw error
  res.json({ message: "Welcome to elib apis" });
});

// Global error handler
app.use(globalErrorHandler)


export default app;
