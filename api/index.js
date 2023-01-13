import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.set("strictQuery", false);

//  if in some case there is an error after the mongodb was connected
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Some error occured !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.get("/", (req, res) => {
  res.send("hii");
});
app.listen(7000, () => {
  connect();
  console.log("Connected To backend.");
});
