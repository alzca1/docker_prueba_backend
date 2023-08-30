import mongoose from "mongoose";

const dbUrl = "mongodb://mongo:27017/alzca";


export function connect () {
    mongoose
      .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB:", err));
  }

  const close = () => mongoose.connection.close();


  export default connect