const express = require('express');
const path = require('path');
const { WebcastPushConnection } = require('tiktok-live-connector');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like CSS, JavaScript, images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main website (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// TikTok Live Checker Setup
const username = 'rararotherichest'; // Replace with the TikTok username
const tiktokLiveConnection = new WebcastPushConnection(username);

// Create an API route to check live status
app.get('/check-live', async (req, res) => {
    try {
        const roomInfo = await tiktokLiveConnection.getRoomInfo();
        if (roomInfo && roomInfo.status === 4) {
            res.json({ live: true, message: `${username} is currently LIVE on TikTok!` });
        } else {
            res.json({ live: false, message: `${username} is not live.` });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error checking live status' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});