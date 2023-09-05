import express from "express";
import dotenv from "dotenv";
import connect from "./config/connectDb.js";
import moviesRouter from "./routes/movies.js";
import cors from "cors";

dotenv.config();

const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello wwwwww");
});
app.use("/movies", moviesRouter);

app.listen(process.env.PORT, () => {
  console.log(`aaaaaa Server is running on port ${process.env.PORT}`);
});
