const Joke = require("../models/jokes.model");

// Get all jokes
const getAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      res.json(allJokes);
    })
    .catch((err) => {
      console.error("Error fetching jokes:", err);
      res.status(500).json({ error: "Error fetching jokes" });
    });
};

// Get a joke by ID
const getJokeById = (req, res) => {
  const { _id } = req.params;
  Joke.findOne({ _id })
    .then((joke) => {
      if (!joke) {
        return res.status(404).json({ error: "Joke not found" });
      }
      res.json(joke);
    })
    .catch((err) => {
      console.error("Error fetching joke:", err);
      res.status(500).json({ error: "Error fetching joke" });
    });
};

// Create a new joke
const createNewJoke = (req, res) => {
  const { body } = req;
  Joke.create(body)
    .then((newJoke) => {
      res.status(201).json(newJoke);
    })
    .catch((err) => {
      console.error("Error creating joke:", err);
      res.status(500).json({ error: "Error creating joke" });
    });
};

// Update a joke by ID
const updateJoke = (req, res) => {
  const { _id } = req.params;
  const { body } = req;
  Joke.findByIdAndUpdate(_id, body, { new: true, runValidators: true })
    .then((updatedJoke) => {
      if (!updatedJoke) {
        return res.status(404).json({ error: "Joke not found" });
      }
      res.json(updatedJoke);
    })
    .catch((err) => {
      console.error("Error updating joke:", err);
      res.status(500).json({ error: "Error updating joke" });
    });
};

// Delete a joke by ID
const deleteJoke = (req, res) => {
  const { _id } = req.params;
  Joke.findByIdAndDelete(_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "Joke not found" });
      }
      res.json({ message: "Joke deleted successfully" });
    })
    .catch((err) => {
      console.error("Error deleting joke:", err);
      res.status(500).json({ error: "Error deleting joke" });
    });
};

module.exports = {
  getAllJokes,
  getJokeById,
  createNewJoke,
  updateJoke,
  deleteJoke,
};
