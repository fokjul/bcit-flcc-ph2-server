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

//When we start the server check if tables from the model folder exist in db and if don't - create them
// Sync models with the database: ensure tables exist or create them if they don't
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });

// Export the app for Vercel
module.exports = app;
