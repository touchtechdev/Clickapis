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
router.get('/', async (req, res) => {
    try {
      //const color = req.query.color;
      // Construct the SQL query
     /* const query = `
        SELECT * FROM your_table_name WHERE click_counts ->> $1 = $2
      `;*/
  
      // Execute the query
     // const result = await pool.query(query, ['color', color]);
  
      // Send the retrieved data as response
      //res.status(200).json({ success: true, data: result.rows });
   res.status(200).json({ success: true, count: 333,  message: 'Number of clicks global:' });
    } catch (error) {
      // Send an error response if something goes wrong
      console.error('Error retrieving data:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

// Define a route to handle POST requests to insert data
router.post('/', async (req, res) => {
    
    try {
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
    } catch (error) {
      // Send an error response if something goes wrong
      console.error('Error inserting data:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });


  module.exports = router;