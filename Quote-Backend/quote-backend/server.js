const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  {
    text: "Do what you can, with what you have.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
];

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
