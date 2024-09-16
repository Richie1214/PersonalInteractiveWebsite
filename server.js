const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Define API routes
app.get('/api/data', (req, res) => {
  // This is just a mock endpoint to simulate getting data from the backend
  const data = {
    message: 'Hello from the backend!',
  };
  res.json(data);
});

// Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});