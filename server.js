const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like CSS, JS, images) from the "other-group/public" folder
app.use(express.static(path.join(__dirname, 'other-group', 'public')));

// Serve index.html when someone accesses the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'other-group', 'public', 'index.html'));
});

// Set the port to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});