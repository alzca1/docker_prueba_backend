import mongoose from "mongoose";

export const dbUrl = "mongodb://127.0.0.1:27017/alzca";

export function connect() {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
}

// falta cerrar la conexión

export const close = () => mongoose.connection.close();
