const express = require("express");
const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

// MIDDLEWARES
app.use(express.json());
app.use(cors());

require("dotenv/config");

// Import Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("we are on Homepage");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(4000);
