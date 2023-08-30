import mongoose from "mongoose";

const dbUrl = "mongodb://mongo:27017/alzca";

function connect () {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
}

// falta cerrar la conexión

const close = () => mongoose.connection.close();

module.exports = { dbUrl, connect, close };
