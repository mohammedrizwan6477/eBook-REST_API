import app from "./src/app";
import { config as conf } from "dotenv";
import connectDB from "./src/config/db";

conf();

const startServer = async () => {
  const port = process.env.PORT || 8080;
  await connectDB();

  app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
  });
};

startServer();
