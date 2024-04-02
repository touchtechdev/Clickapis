// Import required modules
//import express from "express";
//const apiRoutes = require('./src/routes');
//const express = require('express');
import express from "express";
//const { Pool } = require('pg');
import cors from "cors";
//const cors = require('cors');
//const router = express.Router()

// Configure PostgreSQL connection
/*const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432,
  });*/


// Create an Express application
const app = express();

// Parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

//app.use('/clickApp', apiRoutes);

// Define a route to handle GET clickCountColor requests to retrieve click count color data
//router.get('/', (req, res) => {

//  GET clickCountColor requests to retrieve click count of a color data
app.get("/clickApp/", (req, res) => {
  const color = req.query.color;
  // Construct the SQL query
  /* const query = `
    SELECT * FROM your_table_name WHERE click_counts ->> $1 = $2
  `;*/

  // Execute the query
  // const result = await pool.query(query, ['color', color]);

  // Send the retrieved data as response
  res.status(200).json({ success: true, color:color, count: 333,  message: 'Number of clicks global:'});
});




// POST requests to insert all colors Click data of user
app.post("/clickApp", (req, res) => {
// Extract data from the request body
  //const { time, date, username, clickCounts } = req.body;

  // Construct the SQL query
  /*const query = `
    INSERT INTO your_table_name (time, date, username, click_counts)
    VALUES ($1, $2, $3, $4)
  `;*/

  // Execute the query
  //await pool.query(query, [time, date, username, JSON.stringify(clickCounts)]);

  // Send a successful response
  res.status(200).json({ success: true, message: 'Data inserted successfully routes' });
});

// health check
app.get("/healthz", (_, res) => {
  return res.sendStatus(200);
});

app.use((err, _req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500);
  res.json({ error: err.message });
});

app.use("*", (_, res) => {
  return res
    .status(404)
    .json({ error: "the requested resource does not exist on this server" });
});

  //module.exports = router;

  export default app;