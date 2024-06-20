import express from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
const app = express();



//Http methods: GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res, next) => {
  const error = createHttpError(400, 'something went wrong');
  throw error
  res.json({ message: "Welcome to elib apis" });
});

app.use(express.json())

//Routes
app.use('/api/users',userRouter)

// Global error handler
app.use(globalErrorHandler)


export default app;
