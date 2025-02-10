const express = require('express');
const path = require('path');
const TikTokLive = require('tiktok-live-connector');
const app = express();

// The TikTok username for the live status checker
const tiktokUsername = 'RararoTheRichest'; // Replace with the TikTok username

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API route to check live status
app.get('/check-live', async (req, res) => {
    try {
        const liveStatus = await TikTokLive.checkLive(tiktokUsername);
        if (liveStatus) {
            res.json({ live: true });
        } else {
            res.json({ live: false });
        }
    } catch (error) {
        res.status(500).json({ live: false, error: 'Failed to fetch live status' });
    }
});

// Handle requests to the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the index.html file
});

// Set the port to process.env.PORT (Render provides this) or fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;  // Use the environment port or 3000 for local
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});