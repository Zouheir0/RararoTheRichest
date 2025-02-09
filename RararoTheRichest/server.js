const express = require('express');
const { WebcastPushConnection } = require('tiktok-live-connector');

const app = express();
const port = 3000;

// Set up the TikTok live checker
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