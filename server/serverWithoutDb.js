const express = require("express");
const workoutRoutes = require("./routes/workoutsWithoutDb");
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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
