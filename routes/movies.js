import express from "express";
import Movie from "../models/movies.js";

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res, next) => {
  try {
    console.log(Movie);
    const movies = await Movie.find();

    if (movies) {
      res.status(200).send(movies);
    }
  } catch (error) {
    res.status(500).send({ data: "There was an error." });
  }
});

moviesRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const saveMovie = await new Movie({ ...req.body });
    if (saveMovie) {
      console.log(saveMovie);
      res.status(200).send(saveMovie);
    }
  } catch (error) {
    res.status(500).send("There was an error while creating the aaaaaa");
  }
});

export default moviesRouter;
