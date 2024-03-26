// Import required modules
const express = require('express');
const apiRoutes = require('./src/routes');
//const cors = require('cors');

//test

// Create an Express application
const app = express();

// Enable CORS
//app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Refer to routes
app.use('/clickApp', apiRoutes);
//app.use('/insertData', apiRoutes);
 
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
