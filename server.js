const express = require("express");
const app = express();
const cors = require("cors");

// Load environment variables from .env file
//require("dotenv").config();

// Middleware to handle CORS and control which domains (origins) can send requests to your server.
app.use(cors({ origin: "*" }));

// Middleware to parse JSON bodies
app.use(express.json());

const db = require("./models");

// Import course routes
const courseRoutes = require("./routes/course-routes");

// Mount API routes under /
app.use("/courses", courseRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((error) => {
    console.error("Error syncing the database", error);
  });

module.exports = app;
