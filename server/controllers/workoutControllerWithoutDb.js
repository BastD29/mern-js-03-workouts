const express = require("express");

const router = express.Router();

const workouts = [];

// GET all workouts
// router.get("/", (req, res) => {
//   res.json({ mssg: "GET all workouts" });
// });
const getWorkouts = (req, res) => {
  res.status(200).json(workouts);
};

// GET a single workout
// router.get("/:id", (req, res) => {
//   res.json({ mssg: "GET a single workout" });
// });
const getWorkout = (req, res) => {
  const { id } = req.params;

  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// POST a new workout
// router.post("/", async (req, res) => {
//   //   res.json({ mssg: "POST a single workout" });
//   const { title, load, reps } = req.body;

//   try {
//     const workout = await Workout.create({ title, load, reps });
//     res.status(200).json(workout);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
const createWorkout = (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const workout = {
      id: Date.now().toString(),
      title: title,
      load: load,
      reps: reps,
    };
    workouts.push(workout);
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).send();
  }

  console.log(workouts);
};

// DELETE a new workout
// router.delete("/:id", (req, res) => {
//   res.json({ mssg: "DELETE a single workout" });
// });
const deleteWorkout = (req, res) => {
  const { id } = req.params;

  const index = workouts.findIndex((workout) => workout.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = workouts.splice(index, 1);

  res.status(200).json(workout);
};

// UPDATE a new workout
// router.patch("/:id", (req, res) => {
//   res.json({ mssg: "UPDATE a single workout" });
// });
const updateWorkout = (req, res) => {
  const { id } = req.params;

  const index = workouts.findIndex((workout) => workout.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = {
    ...workouts[index],
    ...req.body,
  };

  workouts[index] = workout;

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
