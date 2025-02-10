const username = 'rararotherichest'; // Replace with your TikTok username
const tiktokLiveConnection = new WebcastPushConnection(username);

// Create an API route to check live status
app.get('/check-live', async (req, res) => {
    try {
        const roomInfo = await tiktokLiveConnection.getRoomInfo();
        if (roomInfo && roomInfo.status === 4) {
            res.json({ live: true });
        } else {
            res.json({ live: false });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error checking live status' });
    }
});

// Serve static files (your website frontend)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when someone accesses the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Update to the correct path
});

// Set the port to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});