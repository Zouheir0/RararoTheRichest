const express = require('express');
const TikTokLive = require('tiktok-live-connector');
const app = express();

const tiktokUsername = 'RararoTheRichest'; // Replace with the TikTok username

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

app.listen(3000, () => console.log('Server running on http://localhost:3000'));