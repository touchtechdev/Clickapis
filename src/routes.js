// Import required modules
const express = require('express');
//const { Pool } = require('pg');
//const cors = require('cors');
const router = express.Router()

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
//app.use(cors());

// Define a route to handle GET clickCountColor requests to retrieve click count color data
router.get('/', (req, res) => {
  const color = req.query.color;
  // Construct the SQL query
  /* const query = `
    SELECT * FROM your_table_name WHERE click_counts ->> $1 = $2
  `;*/

  // Execute the query
  // const result = await pool.query(query, ['color', color]);

  // Send the retrieved data as response
  res.status(200).json({ success: true, count: 333,  message: 'Number of clicks global:'});
});

// Define a route to handle POST requests to insert data
router.post('/', (req, res) => {
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


  module.exports = router;