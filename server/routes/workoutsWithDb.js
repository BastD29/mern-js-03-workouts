const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllerWithDb");

const router = express.Router();

// GET all workouts
// router.get("/", (req, res) => {
//   res.json({ mssg: "GET all workouts" });
// });
router.get("/", getWorkouts);

// GET a single workout
// router.get("/:id", (req, res) => {
//   res.json({ mssg: "GET a single workout" });
// });
router.get("/:id", getWorkout);

// POST a new workout
// router.post("/", async (req, res) => {
//   const { title, load, reps } = req.body;

//   try {
//     const workout = await Workout.create({ title, load, reps });
//     res.status(200).json(workout);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
router.post("/", createWorkout);

// DELETE a new workout
// router.delete("/:id", (req, res) => {
//   res.json({ mssg: "DELETE a single workout" });
// });
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
// router.patch("/:id", (req, res) => {
//   res.json({ mssg: "UPDATE a single workout" });
// });
router.patch("/:id", updateWorkout);

module.exports = router;
