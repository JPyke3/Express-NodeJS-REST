import express from "express";
import cors from "cors";
import db from "../todo/db/db";

// Setup the Express App
const app = express();
app.use(cors());

// Fetch all of the tools
app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Todos Retrieved Successfully",
    todos: db
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Initialized on port ${PORT}");
});
