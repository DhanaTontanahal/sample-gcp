const express = require("express");
const cors = require("cors"); // Import CORS middleware
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON body

// GET endpoint
app.get("/", (req, res) => {
  res.send("Hello, World! This is a sample API running on GCP!");
});

// POST endpoint
app.post("/data", (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: `Hello, ${name}. You are ${age} years old.`,
  });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
