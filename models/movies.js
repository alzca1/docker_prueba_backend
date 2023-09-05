import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
