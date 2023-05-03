const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutsWithDb");
require("dotenv").config();

const app = express();

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
// });

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
