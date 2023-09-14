const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_video_walkthrough", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to the database:", error);
});

db.once("open", () => {
  console.log("Connected to the database successfully");
});
